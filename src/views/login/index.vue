<template>
  <div class="login">
    <van-nav-bar title="登录" />
    <van-cell-group>
      <van-field left-icon="smile-o" v-model="obj.phone" placeholder="请输入手机号" />
      <van-field left-icon="smile-o" v-model="obj.code" placeholder="请输入验证码">
        <template #button>
          <van-button size="small" color="#ededed" round class="codeBtn" >发送验证码</van-button>
        </template>
      </van-field>
    </van-cell-group>
    <div class="loginBtn">
      <van-button type="info" size="large">登录</van-button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      obj: {
        phone: '',
        code: ''
      }
    }
  }
}
</script>

<style lang='less' scoped>

.van-nav-bar.van-hairline--bottom {
  background: #3296fa;
}
/deep/.van-nav-bar__title.van-ellipsis {
  color: #fff;
}
.codeBtn {
    .van-button__text {
        color: #646464
    }
}
.loginBtn {
  margin: 30px 20px;
}
</style>
