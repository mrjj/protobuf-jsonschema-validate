/* eslint-disable */
const cases = fs.readFileSync(path.join(__dirname, `/protos/protoc-gen-validate-${PROTOC_GEN_VALIDATE_VERSION}/tests/harness/executor/cases.go`))
  .toString();

const re = new RegExp(' *{ *"([^"]+)" *, *(.+) *, *(true|false) *},? *', 'g');
const suites = {};
let resArr;
while ((resArr = re.exec(cases)) !== null) {
  const [suiteName, checkName] = resArr[1].split(/ +- +/g);
  suites[suiteName] = suites[suiteName] || {};
  suites[suiteName][checkName] = suites[suiteName][checkName] || [];

  suites[suiteName][checkName].push(
    `  test('${resArr[1]}',\n    async () => expect(await validateData(${
      resArr[2].replace(/(&[a-zA-Z_.]+|cases\)\.([a-zA-Z0-9_]+)/g, 'Root.lookupType(\'$2\')')
        .replace(/\[]byte/g, 'ArrayBuffer.from')
        .replace(/([A-Za-z_]+:)/ig, v => v.toLowerCase())
        .replace(/{/g, '({')
        .replace(/}/g, '})')
        .replace(' ({})', ' {}')
      }).toBe(${resArr[3]}));`);
}

Object.keys(suites).forEach(suite => fs.writeFileSync(
  `${TEST_DATA_DIR}/${suite}.js`,
  `${
    Object.keys(suites[suite]).sort().map(
      check => `describe('${check}', () => {\n${suites[suite][check].join('\n')}\n  done();\n});`,
    ).join('\n\n')
    }`,
));
