const fs = require('fs');
const path = require('path');

const designTokens = require('./src/styles/designTokens.json');

function convertTokensToScss(tokens) {
  let scss = '';
  for (const key in tokens) {
    const token = tokens[key];
    scss += `$${key}: ${token.value};\n`;
  }
  return scss;
}

const scssContent = convertTokensToScss(designTokens);
fs.writeFileSync(
  path.join(__dirname, 'src/styles/tokenVariables.scss'),
  scssContent
);
