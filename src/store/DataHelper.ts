//1,类 class -----

// class City {
//     cName:string='';
//     cLevel:number=0;
//     constructor(name: string, level: number) {
//         this.cName = name;
//         this.cLevel = level;
//     }
//     //成员的方法
//     about(){
//         console.log(`欢迎来到${this.cName},此地危险系数为:${this.cLevel}`)
//     }
// }
// let city = new City('北京',0)
// console.log(city.cName);
// console.log(city.about());

// localStorage.setItem('key','value');


//DataHelper类 - 负责 localStorage 操作
class DataHelper {
    dataKey: string   //localstorage的名称
    primaryKey: string  //数据每一项对应的id
    //let dh = new DataHelper('plData','id') 第一个参数是localstorage的存储的名字，
    //第二个是每个数据的ID，用于方便删除
    constructor(dataKey: string, primaryKey: string) {
        this.dataKey = dataKey;
        this.primaryKey = primaryKey;
    }
    //读取数据
    readData():any{
        //1,读取本地的数据(根据dataKey读取)
        let strData:string | null = localStorage.getItem(this.dataKey);
        //2,将读取的字符串转成一个数组，返回
        let arrData:any =[]
        if(strData!==null){
            arrData = JSON.parse(strData);
        }
        return arrData;
    }
    //存数据
    savaData(arrData:Array<Object>):void{
        //先把数据转成字符串
        let str: string = JSON.stringify(arrData);
        //再把数据存在localStorage中
        localStorage.setItem(this.dataKey,str);
    }
    //新增数据并且获取最后一项的ID+1生成新的id
    addData(conStr:any):number {
        //1读取本地的数据
        let arr:any = this.readData();
        //2创建一个评论对象，并且设置评论内容属性
        let obj: Object = {
            content: conStr
        };
        //obj.id=1
        //obj[this.primaryKey] =1
        //3.1自动生成主键值（id值）{content:'讨厌'}
        let newId = arr.length>0?arr[arr.length-1][this.primaryKey]+1:1
        //3.2 将id通过 中括号访问法 添加到对象{content:'讨厌' ，id:1}
        obj[this.primaryKey] = newId;
        //4将添加了 主键值的对象添加到数组中
        arr.push(obj);
        //5将数组保存在localStorage中
        this.savaData(arr);
        //返回id
        return newId
    }
    //删除数据
    removeDataByID(id: string | number):boolean{
        //读取本地的数据
        let arr = this.readData();
        //查找要删除 评论对象的下标，并保存到本地findIndex返回
        //遇到的第一个相同id的数组的索引，没有找到返回-1
        let index = arr.findIndex((ele:any)=>{
            return ele[this.primaryKey] ==id
        })
        //如果下标大于-1，则删除数组中该下标元素的对象，并返回true
        if(index>1){
            arr.splice(index,1);
            //保存到本地
            this.savaData(arr);
            return true
        }
        return false
    }
}
export default DataHelper
