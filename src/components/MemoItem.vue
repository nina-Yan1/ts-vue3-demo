<template>
<div>
  <div>title:{{memo.title}}</div>
  <div>content:{{memo.content}}</div>
  <div>categoryId:{{$store.state.aHelper.getCategoryName(memo.categoryId)}}</div>
  <button @click='del'>删除</button>
  <button @click='showEdite'>编辑</button>
  <br>
</div>
</template>

<script lang='ts'>
    import { Component, Prop, Vue} from 'vue-property-decorator'
    import ItemData from "../model/ItemData"

    @Component
    export default class MemoItem extends Vue{
        @Prop() memo!: ItemData;  //父组件向子组件传值
        //删除方法
        del():void{
            //是否确认删除
            if(!window.confirm(`确认要删除${this.memo.title}?`)) return ;
            this.$store.state.aHelper.remove(this.memo.id)
        }
        //编辑方法
        showEdite():void{
            //创建一个副本
            let newMemo = JSON.parse(JSON.stringify(this.memo));
            //传递给Vuex的transMemo,newMemo参数就是当前要编辑的数据
            this.$store.commit('showEditMemo', newMemo);
        }
    }
</script>

<style>

</style>