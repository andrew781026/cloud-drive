<template>
    <div class="flex items-center pl-8">
        <i class="material-icons pr-2">library_books</i>
        <span>文件</span>
    </div>
    <div class="circle"></div>
</template>

<script>
    export default {
        name: "FolderBlock.vue"
    }
</script>

<style scoped>
    .circle {
        margin: 20px;
        border-radius: 50%;
        background-color: #99D3FF;
        height: 50px;
        width: 50px;
    }
</style>