<template>
    <div class="progress">
        <div class="progress-inner" :style="{'width': `${percent}%`}"></div>
    </div>
</template>

<script>
    export default {
        name: "Progress",
        props: {
            percent: Number,
        }
    }
</script>

<style scoped>

    .progress {
        position: relative;
        border-radius: 5px;
        height: 10px;
        width: 100%;
        overflow: hidden;
        border: 1px solid black;
        margin-bottom: 20px;
    }

    .progress-inner {
        position: absolute;
        left: 0;
        top: 0;
        height: 10px;
        width: 70%;
        background-color: #1fe3e3;
        transition: all 0.3s;
    }
</style>