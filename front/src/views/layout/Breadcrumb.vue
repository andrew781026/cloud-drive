<template>
    <div class="bc-root flex">
        <div class="pick">
            <span>我的雲端硬碟</span>
        </div>
        <i class="material-icons arrow">keyboard_arrow_right</i>
    </div>
</template>

<script>
    export default {
        name: "Breadcrumb"
    }
</script>

<style scoped>

    .bc-root {
        border-top: 1px solid rgba(0, 0, 0, 0.2);
        border-bottom: 1px solid rgba(0, 0, 0, 0.2);
        padding: 7px 7px 7px 20px;
    }

    .pick {
        cursor: pointer;
        padding: 8px;
        border-radius: 10px;
    }

    .pick:hover {
        background-color: rgba(209, 221, 224, 0.4);
    }

    .pick:active {
        background-color: rgba(209, 221, 224, 1);
    }

    .arrow {
        color: #a0aec0;
        margin-top: 7px;
    }
</style>