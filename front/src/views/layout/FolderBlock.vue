<template>
    <div>
        <div class="flex items-center pl-8">
            <i class="material-icons pr-2">folder</i>
            <span>檔案</span>
        </div>
        <div class="flex pl-10 py-8 flex-wrap">
            <template v-for="(folder,index) in folders">
                <div class="folder-wrapper"
                     :class="[ index === activeFolderIndex && 'active' ]"
                     :key="`folder-${index}`"
                     :title="folder.name"
                     @click="toggleFolder(index)"
                >
                    <i class="material-icons pr-2">{{folder.icon}}</i>
                    <div class="folder-name" style="width: 120px">
                        <span>{{folder.name}}</span>
                    </div>
                </div>
            </template>
        </div>
    </div>
</template>

<script>
    export default {
        name: "FolderBlock",
        methods: {
            toggleFolder(index) {

                this.activeFolderIndex = index;
            },
        },
        data() {

            return {
                activeFolderIndex: -1,
                folders: [
                    {
                        icon: 'folder',
                        name: '設計參考素材'
                    },
                    {
                        icon: 'volume_up',
                        name: 'sound-track_01.mp3'
                    },
                    {
                        icon: 'volume_up',
                        name: 'sound-track_02.mp3'
                    },
                    {
                        icon: 'folder',
                        name: '107 年度業務總整理'
                    },
                    {
                        icon: 'folder',
                        name: '104 年度銷售資料'
                    },
                    {
                        icon: 'phonelink',
                        name: 'node.exe'
                    },
                    {
                        icon: 'storage',
                        name: '105年度圖片素材合集.zip'
                    },
                    {
                        icon: 'apartment',
                        name: '108年會議紀錄.xlsx'
                    },
                ]
            }
        }
    }
</script>

<style scoped>

    .folder-wrapper {
        display: flex;
        align-items: center;
        padding: 10px 12px 10px 12px;
        cursor: pointer;
        margin: 10px;
        border-radius: 6px;
        border: 1px solid rgba(0, 0, 0, 0.4);
    }

    .folder-wrapper:hover {
        /* offset-x | offset-y | blur-radius | spread-radius | color */
        box-shadow: 0 4px 7px 1px rgba(0, 0, 0, 0.4);
    }

    .folder-wrapper:active {
        /* offset-x | offset-y | blur-radius | spread-radius | color */
        box-shadow: 0 4px 14px 3px rgba(0, 0, 0, 0.4);
        transform: translate(0, -2px);
    }

    .folder-wrapper.active {
        background-color: #E8F0FE;
        color: #2E75D6;
    }

    .folder-name {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }

</style>