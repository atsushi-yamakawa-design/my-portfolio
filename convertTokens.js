const fs = require('fs');
const path = require('path');

// JSONファイルのパスを指定
const jsonFilePath = path.join(__dirname, './src/styles/designTokens.json');

// SCSSファイルの出力先を指定
const scssFilePath = path.join(__dirname, './src/styles/tokenVariables.scss');

const designTokens = JSON.parse(fs.readFileSync(jsonFilePath, 'utf8'));
// SCSS変数に変換する関数
function convertTokensToScss(tokens) {
  let scss = '';

  // 'global' キーの中のトークンを処理
  for (const [key, token] of Object.entries(tokens.global)) {
    // フォントファミリーの値にシングルクォートを追加
    let value =
      token.type === 'fontFamilies' ? `'${token.value}'` : token.value;

    // 参照をSCSS変数に変換（例："{d-1}" を "$d-1" に変換）
    value = value.replace(/{(.*?)}/g, (_, match) => `$${match}`);

    scss += `$${key}: ${value};\n`;
  }
  return scss;
}

// 変換実行
const scssContent = convertTokensToScss(designTokens);

// 結果をファイルに書き出し
fs.writeFileSync(scssFilePath, scssContent);

console.log(`SCSS file has been generated at ${scssFilePath}`);
