<script setup lang="ts">
  import {
    ElMenu
  } from "element-plus";
  import {
    Item
  } from "../Interface";
  import ChildrenList from '@/layout/Menu/ChildrenList.vue';

  type Props = {
    menuItems:Item[]
  }

  const props = defineProps<Props>()
</script>

<template>
  <div class="menu-width all-height">
    <el-menu default-active="2" class="menu-list-height">
      <children-list :menuItems="props.menuItems"></children-list>
    </el-menu>
  </div>
</template>

<style scoped lang="scss">
  .menu-width {
    width: $menu-width;
  }

  .menu-list-height {
    height: 100%;
  }
</style>