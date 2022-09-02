<script setup lang="ts">
import { reactive, ref } from 'vue';
import { ElButton } from 'element-plus';
import _ from 'lodash'
type ListArr={
  id:number,
  item:number
}
let arr:ListArr[] = new Array(81).fill(undefined).map((item,index)=>{
  return {
    id:index,
    item:index%9+1
  }
})

let list = ref(arr);
const changeStyle=()=>{
  list.value = _.shuffle(list.value)
}
</script>

<template>
  <div class="content-style">
    <el-button @click="changeStyle">
      改变样式
    </el-button>
    <transition-group class="wraps" tag="div" move-class="trans-ani">
      <div v-for="item in list" :key="item.id" class="items">
        {{item.item}}
      </div>
    </transition-group>
  </div>
</template>

<style scoped lang="scss">
.content-style {
  flex: 1;
  padding: 20px;
  overflow: auto;
  height: 100%;
  overflow: auto;
}
.wraps{
  display: flex;
  flex-wrap: wrap;
  width: calc(25px*10 + 10px);
  .items{
    width: 25px;
    height: 25px;
    border: 1px solid gray;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
.trans-ani{
  transition: all 1s;
}
</style>