<template>
  <el-collapse-transition>
    <div class="box-card" :style="{left:contextMenu.clientX,top:contextMenu.clientY}" v-show="contextMenu.show">
      <template v-for="item in items">
        <div :key="item" v-if="item.type === 'line'" class="line item"></div>
        <div :key="item" v-else class="flex item">
          <i class="menu-icon" :class="`material-icons${item.icon_type ?`-${item.icon_type}` :''}`">
            {{ item.icon }}
          </i>
          <span class="text">{{ item.text }}</span>
        </div>
      </template>
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
  data() {

    return {
      items: [
        {
          icon_type:'outlined',
          type: 'item',
          icon: 'remove_red_eye',
          text: '預覽',
        },
        {
          type: 'line',
        },
        {
          icon_type:'outlined',
          icon: 'person_add_alt_1',
          text: '共用',
        },
        {
          icon: 'insert_link',
          text: '取得連結',
        },
        {
          icon: 'folder_open',
          text: '顯示檔案位置',
        },
        {
          icon: 'add_to_drive',
          text: '在雲端硬碟中新增捷徑',
        },
        {
          icon: 'drive_file_move_outline',
          text: '移至',
        },
        {
          icon: 'star_border',
          text: '新增至 [已加星號] 專區',
        },
        {
          icon: 'check_circle_outline',
          text: '可離線存取',
        },
        {
          icon: 'edit',
          text: '重新命名',
        },
        {
          type: 'line',
        },
        {
          icon: 'content_copy',
          text: '建立副本',
        },
        {
          icon_type:'outlined',
          icon: 'report',
          text: '檢舉濫用行為',
        },
        {
          icon: 'save_alt',
          text: '下載',
        },
        {
          type: 'line',
        },
        {
          icon: 'delete_outline',
          text: '移除',
        },
        {
          icon: 'thumb_down',
          text: '這項建議不實用',
        },
      ]
    }
  }
}
</script>

<style scoped lang="scss">

.box-card {
  cursor: pointer;
  background-color: white;
  position: fixed;
  border-radius: 8px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .3);
  z-index: 20;
  padding: 10px 0 10px 0;
  width: 280px;

  .item {
    font-size: 1.25rem;
    padding: 5px 12px 5px 12px;

    &:hover {
      background-color: #cad3d3;
    }

    &:active {
      background-color: #b0bdbd;
    }

    &.line {
      padding: 0;
      width: 100%;
      background-color: #7c9192;
      height: 1px;
    }
  }
}

.menu-icon {
  color: #7c9192;
  margin: 0 5px 0 5px;
  line-height: 32px;
}

.text{
  line-height: 32px;
}
</style>