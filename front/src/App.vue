<template>
    <div id="app">
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
              rel="stylesheet">
        <router-view/>
    </div>
</template>

<style>
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
