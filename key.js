const book = "吾輩は猫である。"

let keyword = prompt('検索したい文字は？');

let pos = book.indexOf(keyword);

document.write(`<p>${book}</p>`)
document.write(`<p>${keyword}は、${pos}文字目に見つかりました。</p>`)