<script setup lang="ts">

</script>

<template>
    <div class="header-style">
        <h1>
            <slot name="header" :data="'头部'"></slot>
        </h1>
    </div>
</template>

<style scoped lang="scss">
    .header-style {
        height: 100px;
    }
</style>