<template>
    <div class="root">
        <div class="title">
            <img class="avatar" :src="require('@/assets/rufe.png')" alt="rufe">
            <span class="name">魯夫</span>
              <button class="btn btn-blue font-700 mt-2 w-3/4 text-lg sm-hidden">
                <i class="material-icons pr-2">cloud</i>
                <span>我的雲端硬碟</span>
              </button>
              <button class="btn btn-green font-700 mt-4 w-3/4 text-lg sm-hidden">
                <i class="material-icons pr-2">cloud_upload</i>
                <span>上傳檔案</span>
              </button>
        </div>
        <div class="content py-4">
            <ul>
                <li v-for="(menu,index) in menus" class="menu-item" :key="`menu-${index}`">
                    <i class="material-icons pr-8">{{menu.icon}}</i>
                    <span>{{menu.name}}</span>
                </li>
            </ul>
        </div>
        <div class="footer">
            <div class="flex h-10">
                <i class="material-icons pr-2">cloud</i>
                <span>空間使用</span>
            </div>
            <custom-progress :percent="percent"/>
            <div class="flex justify-between">
                <span>30 GB</span>
                <span>/</span>
                <span>總共可用 300 GB</span>
            </div>
            <button class="btn btn-green font-700 text-lg w-3/4 mt-4">
                <i class="material-icons pr-2">storage</i>
                <span>Upgrade !</span>
            </button>
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
    $titleHeight: 300px;
    $footerHeight: 180px;

    .font-700{
        font-weight: 700;
    }

    .root {
        min-height: 100vh;
        max-height: 100vh;

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

            max-height: 100vh;
            overflow-y: auto;
            z-index: 10;
            background-color: #fff;
        }
        //手機
        @media (max-width: 480px) {

        }

    }

    .sm-hidden{

      //小平板
      @media (max-width: 759px) {

        display: none;
      }
    }

    .title {

        height: $titleHeight;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;

        border-bottom: 2px solid rgba(0, 0, 0, 0.1);

        //小平板
        @media (max-width: 759px) {

          height:100px;
            border-bottom: 1px solid #9DAEC0;
        }
    }

    .content {
        display: flex;
        flex: 1;
        flex-direction: column;
        width: 100%;
        color: #443f3f;

        min-height: calc(100vh - #{$titleHeight+$footerHeight});
        max-height: calc(100vh - #{$titleHeight+$footerHeight});

        overflow-y: auto;

        //小平板
        @media (max-width: 759px) {

          overflow-x: hidden;
          min-height: calc(100vh - 100px);
          max-height: calc(100vh - 100px);

            span {
                display: none;
            }
        }
    }

    .footer {

        height: $footerHeight;
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
        padding-left: 50px;
        cursor: pointer;

        //小平板
        @media (max-width: 759px) {

            padding-left: 25px;
        }

        &:hover {

            color: white;
            background-color: #2424ef;
            border-radius: 0 40px 40px 0;
            margin-right: 30px;

            //小平板
            @media (max-width: 759px) {
                border-radius: 0;
                margin-right: 0;
            }
        }
    }

    .avatar {
        margin-top: 1.2rem;
        margin-bottom: 0.2rem;

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