<template>
  <el-collapse-transition>
    <el-card class="box-card fixed" :style="{left:clientX,top:clientY}" v-show="show">
      <div slot="header" class="clearfix">
        <span>卡片名称</span>
        <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
      </div>
      <div v-for="o in 4" :key="o" class="text item">
        {{ '列表内容 ' + o }}
      </div>
    </el-card>
  </el-collapse-transition>
</template>

<script>
import useContextMenu from '@/compositions/useContextMenu';
// 取得根目錄的相對位置 , 需要拆解路徑 , 然後顯示出來

export default {
  name: "ContextMenu",
  setup() {

    const {clientX, clientY, show} = useContextMenu()

    // we need to open context menu at clientX . clientY
    return {clientX, clientY, show}
  },
  updated() {

    console.log('this.clientX=', this.clientX);
    console.log('this.clientY=', this.clientY);
  }
}
</script>

<style scoped>
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both
}

.box-card {
  width: 480px;
}
</style>