import DataHelper from "./DataHelper"
import ItemData from '../model/ItemData'
import Category from '@/model/CateEnum';
class ActionHelper {
    //1负责数据处理
    dataHelper: DataHelper = new DataHelper('memoData', 'id');
    //1.1 笔记数组
    memoList!:Array<ItemData>;    //表示一定有值不是undefined
    //2负责业务处理
    constructor(){
        //读取本地数据，将笔记数组保存到this.memoList变量中
        this.memoList = this.readData();
    }
    //读取笔记
    readData():Array<ItemData>{
        //1.读取本地的Object数组-dataHalper
        let arrObj = this.dataHelper.readData();
        //2.将Object数组转成ItemData数组
        let arrItem = arrObj.map((ele:any)=>{
            let item: ItemData = new ItemData();
            // ele.id,ele.categoryId,title,conent,createTime
            //item.id = ele.id
            //item.categoryId  = ele.categoryId
            //item.title = ele.title;
            //item.content = ele.content;
            //item.createTime = ele.createTime;
            item = {...ele};
            return item;
        })
        return arrItem;
    }
    //获取枚举数据对应的值
    getCategoryName(cateId:Category):string{
        const arrName = ['工作','生活','学习']
        return arrName[cateId]
    }
    //2负责业务处理-------
    //2.1 新增笔记
    add(item: ItemData):number{
        //a. 保存到本地 dataHelper.addData,会返回生成的id
        item.id = this.dataHelper.addData(item);
        //b. 将笔记添加到笔记数组中
        this.memoList.push(item);
        //将笔记数组重新的保存到本地
        this.dataHelper.savaData(this.memoList);
        return item.id 
    }
    //2.2 修改笔记
    edite(item:ItemData):void{
        //a 找到id相同的对象
        //find() 方法返回数组中满足提供的测试函数的第一个元素的值。否则返回 undefined。
        let editItem: ItemData | undefined = this.memoList.find((ele) => {
            return ele.id == item.id
        })
        //b 修改对象的值，将传入对象item各个属性的值 覆盖设置给数组中找到对象的属性
        if(editItem){
            editItem.categoryId = item.categoryId;
            editItem.title = item.title;
            editItem.content = item.content;
            //c将更改后的数组重新的保存到本地的localStorage中
            this.dataHelper.savaData(this.memoList);
        }
    }
    //2.3 删除笔记
    remove(id:number):void{
        //a 根据id找到数组中的下标
        let index:number =this.memoList.findIndex(ele=>{
            return ele.id ==id;
        })
        //b 根据下标利用splice方法删除对象
        if (index>-1) {
            this.memoList.splice(index, 1)
        }
        //c 将删除对象后的数组重新保存到localstorage中
        this.dataHelper.savaData(this.memoList)
    }

}
export default ActionHelper;