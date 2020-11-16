<template>
  <div id="app">
    <menu-bar></menu-bar>
    <com-list></com-list>
     <div>
      <Memo-editor v-if='this.$store.state.isShow'></Memo-editor>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import MenuBar from './components/MenuBar.vue'
import ComList from './components/ComList.vue'
import MemoEditor from './components/MemoEditor.vue'
@Component({
  components: {
    MenuBar,
    ComList,
    MemoEditor
  },
})
export default class App extends Vue {}
</script>

<style>

</style>
