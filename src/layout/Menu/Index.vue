<script setup lang="ts">
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from "@element-plus/icons-vue";
import { ElMenu } from "element-plus";
import { reactive } from "vue";
import * as Item from "../Interface";
type Props = {
  menuItems: Item.Item[];
};
withDefaults(defineProps<Props>(), {
  menuItems: () => [],
});
</script>

<template>
  <div class="menu-width all-height">
    <el-menu default-active="2" class="menu-list-height">
      <template v-for="item in menuItems" :key="item.id">
        <el-sub-menu :index="item.id" v-if="Array.isArray(item.children)">
          <template #title>
            <el-icon>
              <location />
            </el-icon>
            <span>{{ item.name }}</span>
          </template>
          <Menu :menuItems="item.children" v-if="item.children&&item.children.length>0"></Menu>
        </el-sub-menu>
        <el-menu-item
          :key="item.id"
          :index="item.id"
          v-else
        >{{ item.name }}</el-menu-item>
      </template>
    </el-menu>
  </div>
</template>

<style scoped lang="scss">
.menu-width {
  width:$menu-width;
}
.menu-list-height{
  height: 100%;
}
</style>