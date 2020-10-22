<template>
    <div class="root">
        <left_nav_bar/>
    </div>
</template>

<script>
    import LeftNavBar from "./layout/LeftNavBar";

    export default {
        name: 'Home',
        components:{
            'left_nav_bar': LeftNavBar
        }
    }
</script>

<style scoped lang="scss">

    .root{

        min-height: 100vh;
    }

</style>
