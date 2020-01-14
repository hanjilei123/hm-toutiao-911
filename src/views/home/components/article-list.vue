<template>
  <!-- 这里注意 这个div设置了滚动条 目的是 给后面做 阅读记忆 留下伏笔 -->
  <!-- 阅读记忆 => 看文章看到一半 滑到中部 去了别的页面 当你回来时 文章还在你看的位置 -->
  <div class="scroll-wrapper">
    <van-list v-model="upLoading" :finished="finished" @load="onLoad"></van-list>
    <van-cell v-for="article in articles" :key="article" :title="article"></van-cell>
  </div>
</template>

<script>
export default {
  name: 'article-list',
  data () {
    return {
      upLoading: false, // 是否加载数据
      finished: false, // 加载是否完成
      articles: [] // 定义一个数组
    }
  },
  methods: {
    onLoad () {
    // 加载方法
      setTimeout(() => {
        if (this.articles.length === 50) {
          // 停止追加
          this.finished = true
        } else {
          let arr = Array.from(Array(10), (value, index) => index + this.articles.length + 1)
          this.articles.push(...arr) // 把生成的数据追加到末尾
          this.upLoading = false // 关闭状态
        }
      }, 1000)
    }
  }
}
</script>

<style>
</style>
