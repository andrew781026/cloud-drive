<template>
    <div class="root flex">
        <left_nav_bar/>
        <div class="flex flex-col w-full max-h-screen">
            <right_header/>
            <breadcrumb/>
            <div class="w-full overflow-y-auto">
                <pin_block/>
                <folder_block/>
                <file_block/>
            </div>
        </div>
    </div>
</template>

<script>
    import LeftNavBar from "./layout/LeftNavBar";
    import Breadcrumb from "./layout/Breadcrumb";
    import RightHeader from "./layout/RightHeader";
    import PinnedBlock from "./layout/PinnedBlock";
    import FolderBlock from "./layout/FolderBlock";
    import FileBlock from "./layout/FileBlock";
    import FileService from "../graphql/service/file";

    export default {
        name: 'Home',
        components: {
            'right_header': RightHeader,
            'left_nav_bar': LeftNavBar,
            'breadcrumb': Breadcrumb,
            'pin_block': PinnedBlock,
            'folder_block': FolderBlock,
            'file_block': FileBlock,
        },
        mounted() {

            FileService.listFiles('D:/ezoom/thaitown-call-system/front/src')
                .then(console.log)
                .catch(console.error)
        }
    }
</script>

<style scoped lang="scss">

    .root {
        user-select: none;
        min-height: 100vh;
        overflow-x: hidden;
    }

</style>
