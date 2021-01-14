<template>
  <el-collapse-transition>
    <div class="box-card" :style="{left:contextMenu.clientX,top:contextMenu.clientY}" v-show="contextMenu.show">
      <div v-for="o in 4" :key="o" class="text item">
        {{ '列表内容 ' + o }}
      </div>
    </div>
  </el-collapse-transition>
</template>

<script>
import {contextMenu} from '@/compositions/useContextMenu';
// 取得根目錄的相對位置 , 需要拆解路徑 , 然後顯示出來

export default {
  name: "ContextMenu",
  setup() {

    // we need to open context menu at clientX . clientY
    return {contextMenu}
  },
}
</script>

<style scoped lang="scss">

.box-card {
  cursor: pointer;
  background-color: white;
  position: fixed;
  border-radius: 4px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .3);
  z-index: 20;
  padding: 10px 0 10px 0;

  .item {
    font-size: 1.25rem;
    padding: 5px 12px 5px 12px;

    &:hover {
      background-color: #cad3d3;
    }
  }
}
</style>