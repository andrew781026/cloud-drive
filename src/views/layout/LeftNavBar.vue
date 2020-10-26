<template>
    <div class="root">
        <div class="title">
            <img class="avatar" :src="require('@/assets/rufe.png')" alt="rufe">
            <span class="name">魯夫</span>
            <div role="button" class="action-btn text-blue mt-8 cursor-pointer">
                <i class="material-icons pr-4">cloud</i>
                <span>我的雲端硬碟</span>
            </div>
            <div role="button" class="action-btn text-white bg-green mt-4 cursor-pointer">
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
                <span>/</span>
                <span>總共可用 300 GB</span>
            </div>
            <div role="button" class="upload-btn mt-4 p-3 cursor-pointer w-1/2">
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

<style scoped lang="scss">

    .root {
        min-height: 100vh;

        display: flex;
        flex-direction: column;
        align-items: center;
        transition: all 0.3s;

        min-width: 300px;
        width: 300px;

        border-radius: 0 70px 0 0;

        /* offset-x | offset-y | blur-radius | spread-radius | color */
        box-shadow: 0 2px 20px 3px rgba(0, 0, 0, 0.2);

        //電腦版
        @media (min-width: 960px) {

        }
        //平板
        @media (max-width: 959px) {

        }
        //小平板
        @media (max-width: 759px) {

            border-radius: 0;
            min-width: 80px;
            width: 80px;

            position: absolute;
            left: 0;
            top: 0;
            max-height: 100vh;
            overflow-y: auto;
            z-index: 10;
            background-color: #fff;
        }
        //手機
        @media (max-width: 480px) {

        }

    }

    .title {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;

        //小平板
        @media (max-width: 759px) {

            border-bottom: 1px solid #9DAEC0;
        }
    }

    .content {
        display: flex;
        flex: 1;
        flex-direction: column;
        width: 100%;
        margin-top: 30px;
        padding-left: 50px;
        color: #443f3f;

        //小平板
        @media (max-width: 759px) {

            padding-left: 30px;

            span {
                display: none;
            }
        }
    }

    .footer {
        width: 100%;
        padding: 20px 40px 20px 40px;
        border-top: 2px solid rgba(0, 0, 0, 0.1);


        //小平板
        @media (max-width: 759px) {

            display: none;
        }
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

        transition: all 0.3s;

        //小平板
        @media (max-width: 759px) {

            margin-top: 20px;
            height: 60px;
            width: 60px;
        }
    }

    .name {
        font-size: 26px;
        font-weight: 900;

        //小平板
        @media (max-width: 759px) {

            display: none;
        }
    }

    .action-btn {

        display: flex;
        justify-content: center;
        align-items: center;
        min-width: 70%;
        padding: 0.8rem;
        border-radius: 10px;
        font-weight: 700;
        color: #2424ef;

        /* offset-x | offset-y | blur-radius | spread-radius | color */
        box-shadow: 0 4px 7px 1px rgba(0, 0, 0, 0.4);

        //小平板
        @media (max-width: 759px) {

            display: none;
        }
    }

    .text-blue {
        color: #2424ef;
    }

    .text-white {
        color: #fff;
    }

    .bg-green {
        background-color: #128d3f;
    }

</style>