<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<style lang="scss">
    @import "./assets/styles/button-theme.scss";

    #app {
        font-family: '微軟正黑體', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    * {
        box-sizing: border-box;
    }

    body {
        margin: 0;
        scroll-behavior: smooth;
    }
</style>
