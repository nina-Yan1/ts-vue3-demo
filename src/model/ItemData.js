class ItemData {
    constructor(id = -1, categoryId = -1, title = '', content = '') {
        this.id = id;
        //在此需要使用枚举类型代表笔记的分类
        this.categoryId = categoryId;
        this.title = title;
        this.content = content;
        this.createTime = this.toSelfDateStr(Date.now());
    }
    toSelfDateStr(timeSpan) {
        let date = new Date(timeSpan);
        let str = `${date.getFullYear()}-${date.getMonth() +
            1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}`;
        return str;
    }
}
export default ItemData;
//# sourceMappingURL=ItemData.js.map