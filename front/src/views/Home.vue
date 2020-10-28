<template>
    <div class="root flex">
        <button_styling/>
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
    import ButtonStyling from "../components/ButtonStyling";

    export default {
        name: 'Home',
        components: {
            'right_header': RightHeader,
            'left_nav_bar': LeftNavBar,
            'breadcrumb': Breadcrumb,
            'pin_block': PinnedBlock,
            'folder_block': FolderBlock,
            'file_block': FileBlock,
            'button_styling': ButtonStyling,
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
