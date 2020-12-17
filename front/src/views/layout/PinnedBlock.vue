<template>
    <div class="pb-root">
        <div class="flex items-center pl-8">
            <i class="material-icons pr-2 pin">push_pin</i>
            <span>已固定</span>
        </div>
        <div class="flex pl-10 flex-wrap">
            <template v-for="(pinF,index) in pinnedFolders">
                <div class="folder-wrapper"
                     :title="pinF.name"
                     @click="toggleFolder(index)"
                     :key="`pinnedFolder-${index}`"
                >
                    <i class="material-icons folder" :class="[ index === activeFolderIndex && 'active' ]">folder</i>
                    <div class="folder-name" style="width: 140px">
                        <span>{{pinF.name}}</span>
                    </div>
                </div>
            </template>
        </div>
    </div>
</template>

<script>
    export default {
        name: "PinnedBlock",
        methods: {
            toggleFolder(index) {

                this.activeFolderIndex = index;
            }
        },
        data() {

            return {
                activeFolderIndex: -1,
                pinnedFolders: [
                    {name: '2020 年鐵人賽文章'},
                    {name: '2020 年鐵人賽文章 - 主題：Electron.JS'},
                    {name: '2020 年鐵人賽文章'},
                    {name: '2020 年鐵人賽文章'},
                    {name: '2020 年鐵人賽文章'},
                    {name: '2020 年鐵人賽文章'},
                    {name: '2020 年鐵人賽文章'},
                    {name: '2020 年鐵人賽文章'},
                    {name: '2020 年鐵人賽文章'},
                    {name: '2020 年鐵人賽文章'},
                    {name: '2020 年鐵人賽文章'},
                    {name: '2020 年鐵人賽文章'},
                    {name: '2020 年鐵人賽文章'},
                    {name: '2020 年鐵人賽文章'},
                    {name: '2020 年鐵人賽文章'},
                    {name: '2020 年鐵人賽文章'},
                ]
            }
        }
    }
</script>

<style scoped>

    .folder-wrapper {
        padding: 0 8px 0 8px;
        cursor: pointer;
        margin: 20px 0 20px 0;
        border-radius: 6px;
        border: 1px solid transparent;
    }

    .folder-wrapper:hover {
        border: 1px solid black;
    }

    .folder-wrapper:active {
        /* offset-x | offset-y | blur-radius | spread-radius | color */
        box-shadow: 0 4px 10px 2px rgba(0, 0, 0, 0.2);
        transform: translate(0, -2px);
    }

    .folder-name {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        transform: translate(15px, -20px);
    }

    .pb-root {
        margin-top: 20px;
        max-width: calc(100vw - 400px);
        max-height: 250px;
        overflow-y: hidden;
    }

    .folder {
        font-size: 160px;
        color: #9DAEC0;
    }

    .folder.active {
        color: #4694FD;
    }

    .pin {
        transform: rotate(-45deg) translate(10%, -10%);
    }
</style>