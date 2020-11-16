<template>
  <nav>
    <ul>
      <li @click="clickFilterCategory(-1)">
        全部:{{doFilter(-1)}}
      </li>
      <li @click="clickFilterCategory(0)"> 工作:{{doFilter(0)}}</li>
      <li @click="clickFilterCategory(1)">生活:{{doFilter(1)}}</li>
      <li @click="clickFilterCategory(2)"> 学习:{{doFilter(2)}}</li>
    </ul>
      <button @click= 'showAdd'>新建</button>
  </nav>
</template>

<script lang='ts'>
import {Component, Vue} from 'vue-property-decorator'
import ItemData from '../model/ItemData';
@Component
export default class MenuBar extends Vue{
  //新建一个数据
  showAdd(){
    this.$store.state.transMemo= new ItemData(-1,0);
    this.$store.state.isShow = true
  }
  //统计当前的数据的个数，和从全部、学习、工作、生活三维读统计数据的个数
  doFilter(cid: number):number{
    if(cid === -1){
      return this.$store.state.aHelper.memoList.length;
    }else{
      return this.$store.state.aHelper.memoList.filter((ele:any)=>{
        return ele.categoryId == cid;
      }).length;
    }
  }
  clickFilterCategory(cid: number){
    this.$store.state.filterCateId = cid;
  }
}
</script>

<style>

</style>