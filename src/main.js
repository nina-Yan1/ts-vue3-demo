import Vue from 'vue';
import App from './App.vue';
import store from './store'
Vue.config.productionTip = false;
import Category from './model/CateEnum';
import ItemData from './model/ItemData';
new Vue({
    render: h => h(App),
    store
}).$mount('#app');
let item1 = new ItemData(1, Category.Study, '来黑马培训前端的学科', '大家开始欢乐的学习吧！');
console.log(item1);
//# sourceMappingURL=main.js.map
