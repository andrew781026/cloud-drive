<template>
  <el-collapse-transition>
    <div class="box-card" :style="cardStyle" v-if="contextMenu.show">
      <template v-for="item in items">
        <div :key="item.uuid" v-if="item.type === 'line'" class="line item"></div>
        <div :key="item.uuid" v-else class="flex item">
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
import {useWindowSize} from '@vueuse/core'

// 取得根目錄的相對位置 , 需要拆解路徑 , 然後顯示出來

export default {
  name: "ContextMenu",
  setup() {

    const {width, height} = useWindowSize();

    // we need to open context menu at clientX . clientY
    return {contextMenu, width, height}
  },
  computed: {

    cardStyle() {

      console.log('height=', this.height);
      console.log('this.contextMenu.clientY=', this.contextMenu.clientY);
      console.log('height=', this.height);

      // 目前 contextMenu.height = 500px

      const leftRight = (260 + this.contextMenu.clientX < this.width) ? {left: `${this.contextMenu.clientX+10}px`} : {right: `${this.width-this.contextMenu.clientX+10}px`};
      const topBottom = (500 + this.contextMenu.clientY < this.height) ? {top: `${this.contextMenu.clientY}px`} : {bottom: '20px'};

      return {
        ...leftRight,
        ...topBottom
      }
    }
  },
  data() {

    return {
      items: [
        {
          uuid: '81f20d6e-5236-4db9-aa66-bfbc41122467',
          icon_type: 'outlined',
          type: 'item',
          icon: 'remove_red_eye',
          text: '預覽',
        },
        {
          uuid: 'd2c504e0-6fa3-4063-a068-c260b9f6d778',
          type: 'line',
        },
        {
          uuid: '6bc5a189-9ea1-43d1-bb0a-7bb4d1eb0bc4',
          icon_type: 'outlined',
          icon: 'person_add_alt_1',
          text: '共用',
        },
        {
          uuid: '6d8ef647-07ee-43cc-b6ea-30d79392eee2',
          icon: 'insert_link',
          text: '取得連結',
        },
        {
          uuid: 'cc19648a-937c-49e2-a5ec-c611a3f8302a',
          icon: 'folder_open',
          text: '顯示檔案位置',
        },
        {
          uuid: '59282fb1-28a2-424e-884e-781403c7939f',
          icon: 'add_to_drive',
          text: '在雲端硬碟中新增捷徑',
        },
        {
          uuid: '33b9bae8-0fe4-458a-8daa-c4faeef3b7ec',
          icon: 'drive_file_move_outline',
          text: '移至',
        },
        {
          uuid: '075a639a-1c3d-4696-ac2d-4f122a2451f6',
          icon: 'star_border',
          text: '新增至 [已加星號] 專區',
        },
        {
          uuid: '4edae7ab-73d3-4374-80bd-9525eb2be2d9',
          icon: 'check_circle_outline',
          text: '可離線存取',
        },
        {
          uuid: '28b35d8a-6a3a-4a28-9e47-f8b5436cf34a',
          icon_type: 'outlined',
          icon: 'edit',
          text: '重新命名',
        },
        {
          uuid: '8f4c77c7-631e-40f3-95f4-88a26ad053cf',
          type: 'line',
        },
        {
          uuid: '82c9e2b9-82ea-4756-ac23-9d42ab6ee109',
          icon: 'content_copy',
          text: '建立副本',
        },
        {
          uuid: '9b85fd84-ee31-49e8-80cb-f25a4b8101f7',
          icon_type: 'outlined',
          icon: 'report',
          text: '檢舉濫用行為',
        },
        {
          uuid: 'b0202ce2-4437-4883-ad0a-ee21e78ac041',
          icon: 'save_alt',
          text: '下載',
        },
        {
          uuid: '9efebdb1-a88f-4f55-8af0-5e5f67ce780c',
          type: 'line',
        },
        {
          uuid: 'e847e40f-010e-447d-8ff9-7ef52785b09b',
          icon: 'delete_outline',
          text: '移除',
        },
        {
          uuid: '10bc0b2d-65ed-4f86-83c1-0f6f2e0f90f6',
          icon_type: 'outlined',
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
  width: 250px;

  .item {
    font-size: 16px;
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
      border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    }
  }
}

.menu-icon {
  color: #7c9192;
  margin: 0 5px 0 5px;
  line-height: 24px;
}

.text {
  line-height: 24px;
}
</style>