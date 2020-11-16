import Vue from 'vue'
import App from './App.vue'
import ActionHelper from './store/ActionHelper'
import store from './store'
Vue.config.productionTip = false
import Category from './model/CateEnum'
import ItemData from './model/ItemData'
import CateEnum from './model/CateEnum'

new Vue({
    render: (h) => h(App),
    store,
}).$mount('#app')

// let item1 = new ItemData(1,Category.Study,'来黑马培训前端的学科','大家开始欢乐的学习吧！');
// console.log(item1);
if (!localStorage.getItem('memoData')){
  let mock = [
      { id: 0, categoryId: 1, title: '我是一只猫咪', content: '我的名字叫麻团' },
      { id: 1, categoryId: 2, title: '我是一只狗', content: '我的名字叫大黄' },
      { id: 2, categoryId: 0, title: '我是一只袋鼠', content: '我的名字叫灰灰' },
  ]
localStorage.setItem('memoData', JSON.stringify(mock));
}

let actionhelper: ActionHelper = new ActionHelper();
let res = actionhelper.memoList
console.log(res);

//测试新增
// let newItem = new ItemData(-1,CateEnum.Life,'我是曹源','我是个帅哥！')
// newItem.id = actionhelper.add(newItem);
// let newItem2 = new ItemData(-1, CateEnum.Life, '我是雪雪', '我是个美女！')
// newItem2.id = actionhelper.add(newItem2)

//测试修改
// let newItem1 = new ItemData(3,CateEnum.Life,'我是曹源欧巴','我是个帅哥呢讷讷呢！')
// actionhelper.edite(newItem1)
// console.log(newItem1, actionhelper.memoList,'1111e');

//测试删除
// let newItem = new ItemData();
// actionhelper.remove(3);
// console.log(newItem, actionhelper.memoList, '1111e')