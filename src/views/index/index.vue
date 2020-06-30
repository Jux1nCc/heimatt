<template>
  <div class="index">
    <van-nav-bar :fixed="true" title="首页" />
    <van-tabs v-model="active">
      <van-tab :title='"标签" + item' v-for="item in 8" :key="item">
        <van-list
          v-model="loading"
          :finished="finished"
          finished-text="没有更多了"
          @load="onLoad"
        >
          <van-cell v-for="item in 20" :key="item" :title="item" />
        </van-list>
      </van-tab>
    </van-tabs>
    <div class="channelBtn">
      <van-icon name="bars" />
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // 默认选中的 tab
      active: 0,
      // list组件中加载状态
      loading: false,
      // list组件中的数据源是否加载完毕
      finished: false,
      // 文章数据源
      list: []
    }
  },
  methods: {
    // 上拉加载更多时 执行的事件
    onLoad () {
      console.log('onLoad')
    }
  }
}
</script>

<style lang='less' scoped >
.index {
  margin-top: 90px;
  .van-nav-bar.van-hairline--bottom {
    background: #3296fa;
  }
  /deep/.van-nav-bar__title.van-ellipsis {
    color: #fff;
  }
  /deep/.van-tabs__wrap.van-tabs__wrap--scrollable.van-hairline--top-bottom {
    position: fixed;
    top: 46px;
    left: 0px;
    z-index: 999;
    width: 90%;
  }
  .channelBtn {
    position: fixed;
    right: 0;
    top: 45px;
    width: 10%;
    height: 44px;
    line-height: 44px;
    text-align: center;
    color: #fff;
    z-index: 1000;
    background-color: #3296fa;
  }
}
</style>
