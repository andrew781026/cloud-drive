<template>
  <div class="root flex">
    <left_nav_bar/>
    <div class="flex flex-col w-full max-h-screen">
      <right_header/>
      <breadcrumb/>
      <div class="w-full" :class="[(mode === 'grid') ? 'overflow-y-auto':'overflow-y-hidden']">
        <pin_block/>
        <div class="my-3 w-full" style="height: 1px;background-color:rgba(0, 0, 0, 0.2);"/>
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
import {mode} from '@/compositions/useMode';

export default {
  name: 'Home',
  setup() {
    return {mode}
  },
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
      files: '',
      currentPath: '/',
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
