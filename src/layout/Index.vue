<script setup lang="ts">
    import {
        ref
    } from 'vue';
    import Header from './Header/Index.vue';
    import Content from './Content/Index.vue';
    import Menu from './Menu/Index.vue';
    import {
        Item
    } from './Interface'
    const menuItems:[] | Item[] = [{
        name: '菜单1',
        id: 1,
        children: null
    }]
    
</script>

<template>
    <el-row class="all-height">
        <el-col :span="24">
            <div class="all-content">
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