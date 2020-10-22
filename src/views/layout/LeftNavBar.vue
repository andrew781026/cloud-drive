<template>
    <div class="root">
        <div class="title">
            <img class="avatar" :src="require('@/assets/rufe.png')" alt="rufe">
            <span class="name">魯夫</span>
            <div role="button" class="drive-btn mt-8 cursor-pointer">
                <i class="material-icons pr-4">cloud</i>
                <span>我的雲端硬碟</span>
            </div>
            <div role="button" class="upload-btn mt-8 cursor-pointer">
                <i class="material-icons pr-4">cloud_upload</i>
                <span>上傳檔案</span>
            </div>
            <div class="menu-item-wrapper">
                <ul>
                    <li v-for="(menu,index) in menus" class="menu-item" :key="`menu-${index}`">
                        <i class="material-icons pr-8">{{menu.icon}}</i>
                        <span>{{menu.name}}</span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "LeftNavBar",
        data() {

            return {
                menus: [
                    {
                        icon: 'group',
                        name: '與我共用',
                    },
                    {
                        icon: 'schedule',
                        name: '近期存取',
                    },
                    {
                        icon: 'star',
                        name: '重要',
                    },
                    {
                        icon: 'backspace',
                        name: '封存檔',
                    },
                    {
                        icon: 'file_copy',
                        name: '備份',
                    },
                    {
                        icon: 'delete',
                        name: '垃圾桶',
                    },
                ]
            }
        },
    }
</script>

<style scoped>

    .root {
        width: 300px;
        min-height: 100vh;

        border-radius: 0 70px 0 0;

        /* offset-x | offset-y | blur-radius | spread-radius | color */
        box-shadow: 0 2px 20px 3px rgba(0, 0, 0, 0.2);
    }

    .title {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .menu-item-wrapper {
        display: flex;
        flex-direction: column;
        width: 100%;
        margin-top: 30px;
        padding-left: 50px;
        color: #443f3f;
    }

    .menu-item {
        display: flex;
        align-items: center;
        padding-top: 15px;
        padding-bottom: 15px;
    }

    .avatar {
        margin-top: 40px;
        margin-bottom: 10px;

        object-fit: cover;
        height: 100px;
        width: 100px;
        border-radius: 50%;

        /* offset-x | offset-y | blur-radius | spread-radius | color */
        box-shadow: 0 0 20px 4px rgba(0, 0, 0, 0.4);
    }

    .name {
        font-size: 26px;
        font-weight: 900;
    }

    .drive-btn {
        display: flex;
        justify-content: center;
        align-items: center;
        min-width: 70%;
        padding: 10px;
        border-radius: 10px;
        color: #2424ef;
        font-weight: 700;

        /* offset-x | offset-y | blur-radius | spread-radius | color */
        box-shadow: 0 4px 7px 1px rgba(0, 0, 0, 0.4);
    }

    .upload-btn {
        display: flex;
        justify-content: center;
        align-items: center;
        min-width: 70%;
        padding: 10px;
        border-radius: 10px;
        color: #fff;
        font-weight: 700;
        background-color: #128d3f;

        /* offset-x | offset-y | blur-radius | spread-radius | color */
        box-shadow: 0 4px 7px 1px rgba(0, 0, 0, 0.4);
    }
</style>