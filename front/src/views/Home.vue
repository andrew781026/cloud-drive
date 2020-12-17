<template>
    <div class="root flex">
        <left_nav_bar/>
        <div class="flex flex-col w-full max-h-screen">
            <right_header/>
            <breadcrumb :mode="mode" @change-mode="mode = $event"/>
            <div class="w-full overflow-y-auto">
                <pin_block/>
                <template v-if="mode === 'grid'">
                    <folder_block/>
                    <file_block/>
                </template>
                <list_block v-else/>
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
    import ListBlock from "./layout/ListBlock";

    export default {
        name: 'Home',
        components: {
            'right_header': RightHeader,
            'left_nav_bar': LeftNavBar,
            'breadcrumb': Breadcrumb,
            'pin_block': PinnedBlock,
            'folder_block': FolderBlock,
            'file_block': FileBlock,
            'list_block': ListBlock,
        },
        data() {

            return {
                directory: 'D:/ezoom/thaitown-call-system/front/src',
                hello: '',
                files: '',
                currentPath: '/',
                mode: 'list' // mode = 'grid' . 'list'
            }
        },
        methods: {}
    }
</script>

<style scoped lang="scss">

    .root {
        user-select: none;
        min-height: 100vh;
        overflow-x: hidden;
    }

</style>
