<template>
  <div class="home">
    <!-- 顶部工具栏 -->
    <ToolBar />
    <main>
      <!-- 左侧组件列表 -->
      <section class="left"></section>
      <!-- 中间画布 -->
      <section class="center"></section>
      <!-- 右侧属性列表 -->
      <section class="right"></section>
    </main>
  </div>
</template>

<script setup lang="ts">
import ToolBar from '@/components/ToolBar.vue'
</script>

<style scoped></style>
