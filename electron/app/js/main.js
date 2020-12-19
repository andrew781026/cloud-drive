// 參考資料 : https://king39461.pixnet.net/blog/post/356644488
requirejs.config({
    paths: {
        "vue-app": "vue-comps/vue-app",
        "vue-init-mask": "vue-comps/vue-init-mask",
    }
});

// requirejs 會按照 "由左至右" 的順序載入
requirejs(['vue-init-mask','vue-app']);
