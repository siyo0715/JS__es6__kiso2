const price = parseInt(prompt('商品の金額を入力してください'))
const tax = 10;

if (Number.isFinite(price)) {
    let tax_price = Math.round(price * (tax / 100));
    document.write(`${price}円の消費税は${tax_price}円です`);   
} else {
    document.write('計算できません');
}