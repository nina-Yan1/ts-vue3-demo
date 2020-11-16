//1,导入vuex和vue
import Vue from 'vue'
import Vuex from 'vuex'
import ActionHelper from './ActionHelper'
//2, 注册vuex到Vue里面
Vue.use(Vuex)
//3, 创建vuex的仓库对象
let store = new Vuex.Store({
    state: {
        title: '你好呀，我是登录admin',
        aHelper: new ActionHelper(), //已入ActionHelper实例
        isShow: false,   //是否显示修改新增的编辑框
        transMemo: null,  //修改的时候传递的中间值item-editor
        filterCateId: -1, //筛选分类id,全部学习工作生活选择
    },
    mutations: {
        showEditMemo(state: any, editMemo: any) {  //编辑的时候改变选中修改的数据
            state.transMemo = editMemo
            state.isShow = true
        },
        // changeMemo(state: any){

        // }
    },
})
//4,导入仓库对象
export default store