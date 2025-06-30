<template>
  <div>
    <h1>
      根组件
    </h1>
    <el-button type="primary" size="default" :icon="Plus">
      Main Button
    </el-button>
  </div>
</template>

<script setup>
import {Plus} from '@element-plus/icons-vue'
const str ="This is a start"
</script>

<style lang="scss" scoped>
.box {
  width: 600px;
  height: 400px;
  background-color: rgb(119, 96, 96);
}
h1 {
  color: blue;
}
</style>