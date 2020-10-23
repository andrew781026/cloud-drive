<template>
    <div class="root flex">
        <left_nav_bar/>
        <div class="flex flex-col w-full">
            <right_header/>
            <pin_block/>
            <folder_block/>
            <file_block/>
        </div>
    </div>
</template>

<script>
    import LeftNavBar from "./layout/LeftNavBar";
    import RightHeader from "./layout/RightHeader";
    import PinnedBlock from "./layout/PinnedBlock";
    import FolderBlock from "./layout/FolderBlock";
    import FileBlock from "./layout/FileBlock";

    export default {
        name: 'Home',
        components: {
            'right_header': RightHeader,
            'left_nav_bar': LeftNavBar,
            'pin_block': PinnedBlock,
            'folder_block': FolderBlock,
            'file_block': FileBlock,
        }
    }
</script>

<style scoped lang="scss">

    .root {

        min-height: 100vh;
    }

</style>
