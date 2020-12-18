<template>
    <div class="bc-root flex">
        <div class="pick" @click="switchCurrPath(-1)">
            <span>我的雲端硬碟</span>
        </div>
        <i class="material-icons arrow">keyboard_arrow_right</i>
        <template v-for="(paths,index) in pathArr">
            <div class="pick" :key="`pick=${index}`" @click="switchCurrPath(index)">
                <span>{{paths}}</span>
            </div>
            <i class="material-icons arrow" :key="`icon=${index}`">keyboard_arrow_right</i>
        </template>
        <div class="flex-1"></div>
        <div class="icon-btn mr-4" v-if="mode === 'grid'"
             title="清單檢視"
             @click="$emit('change-mode','list')">
            <i class="material-icons">list</i>
        </div>
        <div class="icon-btn mr-4" v-else
             title="格狀檢視"
             @click="$emit('change-mode','grid')">
            <i class="material-icons">grid_on</i>
        </div>
    </div>
</template>

<script>
    import {currPath, pathArr, getTableData} from '@/compositions/useFile';
    // 取得根目錄的相對位置 , 需要拆解路徑 , 然後顯示出來

    export default {
        name: "Breadcrumb",
        props: {
            mode: String
        },
        setup() {

            return {currPath, pathArr}
        },
        methods: {
            switchCurrPath(index) {

                if (index < 0) getTableData()
                else {

                    const newCurrPath = this.pathArr.slice(0, index + 1).join('\\');
                    getTableData(newCurrPath)
                }
            }
        }
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

    .icon-btn {
        cursor: pointer;
        color: #8e9199;
        border-radius: 50%;
        width: 40px;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .icon-btn:hover {
        color: #333333;
        background-color: #dedfe1;
    }

    .icon-btn:active {
        color: #3a8ee6;
    }
</style>