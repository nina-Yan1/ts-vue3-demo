import category from './CateEnum'
class ItemData {
    id!: number
    categoryId!: category
    title!: string
    content!: string
    createTime!: string
    constructor(id: number = -1, categoryId: category = -1, title: string = '', content: string = '') {
        this.id = id
        //在此需要使用枚举类型代表笔记的分类
        this.categoryId = categoryId
        this.title = title
        this.content = content
        this.createTime = this.toSelfDateStr(Date.now())
    }
    toSelfDateStr(timeSpan: number): string {
        let date = new Date(timeSpan)
        let str = `${date.getFullYear()}-${date.getMonth() +
            1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}`
        return str
    }
}

export default ItemData;