<template>
  <div>
    <van-nav-bar />
    <router-view></router-view>
    <van-tabbar route>
      <van-tabbar-item to="/index" icon="home-o">主页</van-tabbar-item>
      <van-tabbar-item icon="search">问答</van-tabbar-item>
      <van-tabbar-item icon="friends-o">视频</van-tabbar-item>
      <van-tabbar-item to="/my" icon="setting-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {

}
</script>

<style lang='less' scoped>
.van-nav-bar.van-hairline--bottom {
  background: #3296fa;
}
/deep/.van-nav-bar__title.van-ellipsis {
  color: #fff;
}

</style>
