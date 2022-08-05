 <script setup lang="ts">
     import {
         Document,
         Menu as IconMenu,
         Location,
         Setting,
     } from "@element-plus/icons-vue";
     import {
         Item
     } from "../Interface";
     import TreeMenu from './ChildrenList.vue';
     import {
         inject
     } from "vue";
     const toAddress = (val: Item) => {
         console.log(val);
     }
     type Props = {
         menuItems: Item[]
     }
     const props = defineProps < Props > ()
     const {
         menuItems
     } = props
     const getClickItem : any = inject('getClickItem')
     const sendItem = (item: Item) => {
         getClickItem(item)
     }
 </script>

 <template>
     <div>
         <template v-for="item in menuItems" :key="item.id">
             <el-sub-menu :index="item.id" v-if="Array.isArray(item.children)">
                 <template #title>
                     <el-icon>
                         <location />
                     </el-icon>
                     <span>{{ item.name }}</span>
                 </template>
                 <tree-menu v-if="item.children && item.children.length > 0" :menu-items="item.children"></tree-menu>
             </el-sub-menu>
             <el-menu-item :key="item.id" :index="item.id" v-else @click="sendItem(item)">{{ item.name }}
             </el-menu-item>
         </template>
     </div>
 </template>

 <style scoped lang="scss">
     .menu-width {
         width: $menu-width;
     }
 </style>