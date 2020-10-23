<template>
    <div class="flex items-center pl-8">
        <i class="material-icons pr-2">push_pin</i>
        <span>已固定</span>
    </div>
    <div class="circle"></div>
</template>

<script>
    export default {
        name: "PinnedBlock"
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

    .pin{
        transform: rotate(45deg);
    }
</style>