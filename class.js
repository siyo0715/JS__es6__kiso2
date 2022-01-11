//Itemクラスを定義
class Item {
    //コンストラクターを定義
    constructor(price) {
        //プロパティを定義
        this.price = price;
    }

    //消費税を取得するメソッド
    getTax() {
        return this.price  * (10 / 100);
    }
}

let item = new Item(500);
document.write(item.getTax());
console.log(item);