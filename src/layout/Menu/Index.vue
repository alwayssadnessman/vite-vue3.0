<script setup lang="ts">
    import {
        Document,
        Menu as IconMenu,
        Location,
        Setting,
    } from '@element-plus/icons-vue'
    import {
        ElMenu
    } from 'element-plus';
    import {
        reactive
    } from 'vue';
    import * as Item from '../Interface'
    type Props = {
        menuItems: Item.Item[]
    }
    withDefaults(defineProps<Props>(), {
        menuItems: () => []
    })
</script>

<template>
    <div class="menu-width">
        <el-menu default-active="2" class="el-menu-vertical-demo menu-height">
            <template v-for="(item,index) in menuItems" :key="item.id">
                <el-sub-menu :index="`${item.id}`" v-if="Array.isArray(item.children)">
                    <template #title>
                        <el-icon>
                            <location />
                        </el-icon>
                        <span>{{item.name}}</span>
                    </template>
                    <el-menu-item :index="`${item.id}`">{{item.name}}</el-menu-item>
                    <Menu :menuItems="item.children"></Menu>
                </el-sub-menu>
                <el-menu-item :key="item.id" :index="`${item.id}`" v-else></el-menu-item>
            </template>
        </el-menu>
    </div>
</template>

<style scoped lang="scss">
    .menu-width {
        width: 300px;
        border-right: 1px solid $border-default;
    }

    .menu-height {
        height: 100vh;
    }
</style>