<template>
<div>
    <h4>编辑/新增</h4>
    <h5>title</h5>
    <!-- 双向数据绑定v-model -->
    <input type="text" ref='title' v-model="memo.title"> 
    <div>
    <h5>select</h5>
    <select v-model="memo.categoryId">
        <option value="0">工作</option>
        <option value="1">生活</option>
        <option value="2">学习</option>
    </select>
    </div>
    <h5>content</h5>
    <textarea name="area" id="area" cols="30" rows="10" v-model="memo.content">

    </textarea>
    <button @click='saveNew'>保存</button>

</div>
  
</template>

<script lang='ts'>
import {Component, Vue, Watch} from 'vue-property-decorator'
import ItemData from '../model/ItemData'
import Category from '../model/CateEnum'
@Component
export default class MemoEditor extends Vue{
    memo:ItemData = new ItemData(-1,0); //两个参数，第一个随机生成id，默认为-1，categoryId
    // tansform:any=this.$store.state.transMemo;
    //当组件每次创建显示是都会执行
    created():void{
        this.memo = this.$store.state.transMemo;
    }
    //相当于computed
    get tansform() {
        return this.$store.state.transMemo;
    }
    //监听修改的参数的变化
    @Watch ('tansform')
    onChangeedite(val:any,oldVal:any){
        console.log(val);
        this.memo = val;
    }

    //保存文章
    saveNew(){
        //验证memo数据是否合格
        //添加到memoList数组，并保存到本地localStorage中
        if(this.memo && this.memo.categoryId>-1 && this.memo.title.trim().length >0 && this.memo.content.trim().length >0){
            //操作业务判断
            if(this.memo.id<=-1){ //等于-1是新建
              this.$store.state.aHelper.add(this.memo);
            }else{//大于-1是编辑
                this.$store.state.aHelper.edite(this.memo);
            }
            this.$store.state.isShow=false
    
        }else{
            window.alert('对不起，输入错误~~！');
        }
      
    }
}

</script>

<style>

</style>