<template>
    <div class="flex justify-end m-6">
        <span>搜尋檔案</span>
        <div class="relative" title="搜尋檔案">
            <i class="material-icons search-bar-icon">search</i>
            <input type="text" class="search-bar">
        </div>
        <i class="material-icons pr-4">info</i>
        <el-popover
                placement="bottom-end"
                width="200"
                trigger="manual"
                v-model="visible">
            <i slot="reference" class="material-icons pr-4 cursor-pointer"
               @click="visible = !visible" title="設定">settings</i>
            <template slot="default">
                <h1>根目錄位置</h1>
                <template v-if="mode === 'view'">
                    <span>{{rootPath}}</span>
                    <el-button type="warning" @click="mode = 'edit'">變更</el-button>
                </template>
                <template v-else>
                    <el-input v-model="rootPath" placeholder="請設定根目錄位置"></el-input>
                    <el-button type="primary" @click="save">儲存</el-button>
                </template>
            </template>
        </el-popover>
        <i class="material-icons pr-4">menu</i>
    </div>
</template>

<script>
    export default {
        name: "Header",
        data() {

            return {
                rootPath: 'D:\\test\\cloud-drive',
                visible: false,
                mode: 'view'  // mode = view . edit
            }
        },
        methods: {
            save() {

                this.visible = false;
                this.mode = 'view';
            }
        }
    }
</script>

<style scoped>

    @media (max-width: 767px) {

        span {
            display: none;
        }
    }

    .search-bar-icon {
        position: absolute;
        z-index: 2;
        left: 15px;
        top: 0;
        height: 100%;
        display: flex;
        align-items: center;
    }

    .search-bar {
        border-radius: 20px;
        border: 1px solid black;
        margin: 0 10px 0 10px;
        position: relative;
        padding: 0 10px 0 30px;
        width: 150px;
    }

    .search-bar:focus {
        /*outline: 1px auto #2424ef;*/
        outline: none;

        /* offset-x | offset-y | blur-radius | spread-radius | color */
        box-shadow: 0 0 0 4px rgba(0, 0, 0, 0.4);
    }

</style>