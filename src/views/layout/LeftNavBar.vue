<template>
    <div class="root">
        <div class="title">
            <img class="avatar" :src="require('@/assets/rufe.png')" alt="rufe">
            <span class="name">魯夫</span>
            <div role="button" class="drive-btn mt-8 cursor-pointer">
                <i class="material-icons pr-4">cloud</i>
                <span>我的雲端硬碟</span>
            </div>
            <div role="button" class="upload-btn py-3 mt-4 cursor-pointer">
                <i class="material-icons pr-4">cloud_upload</i>
                <span>上傳檔案</span>
            </div>
        </div>
        <div class="content">
            <ul>
                <li v-for="(menu,index) in menus" class="menu-item" :key="`menu-${index}`">
                    <i class="material-icons pr-8">{{menu.icon}}</i>
                    <span>{{menu.name}}</span>
                </li>
            </ul>
        </div>
        <div class="footer">
            <div class="flex h-12">
                <i class="material-icons pr-2">cloud</i>
                <span>空間使用</span>
            </div>
            <custom-progress :percent="percent"/>
            <div class="flex justify-between">
                <span>30 GB</span>
                <span>總共可用 300 GB</span>
            </div>
            <div role="button" class="upload-btn mt-4 p-3 cursor-pointer" style="width: 50%">
                <i class="material-icons pr-2">storage</i>
                <span>Upgrade !</span>
            </div>
        </div>
    </div>
</template>

<script>
    import Progress from '../../components/Progress'

    export default {
        name: "LeftNavBar",
        components: {
            'custom-progress': Progress
        },
        mounted() {

            this.interval = setInterval(() => {

                if (this.percent > 100) clearInterval(this.interval);
                else this.percent += 1;

            }, 100);
        },
        data() {

            return {
                percent: 0,
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
        width: 350px;
        min-height: 100vh;

        border-radius: 0 70px 0 0;

        /* offset-x | offset-y | blur-radius | spread-radius | color */
        box-shadow: 0 2px 20px 3px rgba(0, 0, 0, 0.2);

        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .title {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .content {
        display: flex;
        flex: 1;
        flex-direction: column;
        width: 100%;
        margin-top: 30px;
        padding-left: 50px;
        color: #443f3f;
    }

    .footer {
        width: 100%;
        padding: 20px 40px 20px 40px;
        border-top: 2px solid rgba(0, 0, 0, 0.1);
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
        border-radius: 10px;
        color: #fff;
        font-weight: 700;
        background-color: #128d3f;

        /* offset-x | offset-y | blur-radius | spread-radius | color */
        box-shadow: 0 4px 7px 1px rgba(0, 0, 0, 0.4);
    }
</style>