<template>
  <div class="toolbar-container">
    <div class="toolbar">
      <el-button @click="null">JSON</el-button>
      <el-button @click="null">撤销</el-button>
      <el-button @click="null">重做</el-button>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="less">
.toolbar {
  padding: 15px 10px;
  white-space: nowrap;
  overflow-x: auto;
  border-bottom: 1px solid #ddd;
  background-color: #fff;
}
</style>
