<template>
  <div id='memos' class='container'>
    <memo-item v-for='item in filterMemo()' :key="item.id" :memo="item"></memo-item>
  </div>
</template>

<script lang='ts'>
//1、导入vue
import {Component,Vue } from 'vue-property-decorator'
import ItemData from '../model/ItemData'
import MemoItem from '../components/MemoItem.vue'

@Component({
  components:{
    MemoItem
  }
})
//2.编写组件类
export default class ComList extends Vue{
  //声明笔记数组（方便当前组建中调用）获取到数据aHelper中的memoList数组中,创建ActionHelper实例
  //就会执行constructor中的函数，所以可以直接读取数据
  memoArr:Array<ItemData> = this.$store.state.aHelper.memoList;
   
   //根据点击全部-1，工作0，生活1，学习2筛选数据
   filterMemo(){
     if(this.$store.state.filterCateId == -1){
       return this.memoArr
     }else{
       //直接过滤出需要的数组
       return this.memoArr.filter((item:any)=>{
         return item.categoryId == this.$store.state.filterCateId
       })
     }
   }
}
</script>

<style>

</style>