<template>
  <!-- 这里注意 这个div设置了滚动条 目的是 给后面做 阅读记忆 留下伏笔 -->
  <!-- 阅读记忆 => 看文章看到一半 滑到中部 去了别的页面 当你回来时 文章还在你看的位置 -->
  <div class="scroll-wrapper">
    <van-list v-model="upLoading" :finished="finished" @load="onLoad"></van-list>
  </div>
</template>

<script>
export default {
  name: 'article-list',
  data () {
    return {
      upLoading: false, // 是否加载数据
      finished: false // 加载是否完成
    }
  },
  methods: {
    onLoad () {
    // 加载方法
      console.log('开始加载数据')
    }
  }

}
</script>

<style>

</style>
