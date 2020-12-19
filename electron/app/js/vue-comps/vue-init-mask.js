Vue.component('loader', {
    template:
        `<div class="loadingio-spinner-blocks-jlupefub33n">
            <div class="ldio-qesn34d8azp">
                <div style='left:10px;top:38px;animation-delay:0s'></div>
                <div style='left:62px;top:38px;animation-delay:0.15625s'></div>
                <div style='left:114px;top:38px;animation-delay:0.3125s'></div>
                <div style='left:10px;top:90px;animation-delay:1.09375s'></div>
                <div style='left:114px;top:90px;animation-delay:0.46875s'></div>
                <div style='left:10px;top:142px;animation-delay:0.9375s'></div>
                <div style='left:62px;top:142px;animation-delay:0.78125s'></div>
                <div style='left:114px;top:142px;animation-delay:0.625s'></div>
            </div>
        </div>`,
})

Vue.component('init-mask', {
    template:
        `<div class="flex flex-col flex-center mask bg-gray">
            <loader/>
            <h1>初始資料載入中.......</h1>
         </div>`,
})
