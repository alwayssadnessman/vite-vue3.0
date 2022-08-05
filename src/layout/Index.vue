<script setup lang="ts">
  import {
    reactive,
    provide,
    readonly
  } from 'vue';
  import Menu from './Menu/Index.vue'
  import Header from './Header/Index.vue';
  import Content from './Content/Index.vue';
  import {
    Item
  } from './Interface'
  const menuItems = reactive < [] | Item[] > ([{
    name: '菜单1',
    id: '1',
    children: [{
      name: '菜单1-1',
      id: '1-1'
    }]
  }, {
    name: '菜单2',
    id: '2',
    children: [{
      name: '菜单2-1',
      id: '2-1'
    }]
  }]);
  const getClickItem = (val:Item) => {
    console.log(val);
  };
  provide('getClickItem',getClickItem)
</script>

<template>
  <el-row class="all-height">
    <el-col :span="24" class="all-height">
      <div class="all-content all-height">
        <Menu ref="menus" :menuItems="menuItems"></Menu>
        <div class="right-part">
          <Header></Header>
          <Content></Content>
        </div>
      </div>
    </el-col>
  </el-row>
</template>

<style scoped lang="scss">
  .all-content {
    display: flex;
  }

  .right-part {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
</style>