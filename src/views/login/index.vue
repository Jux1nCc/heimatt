<template>
  <div class="login">
    <van-nav-bar title="登录" />
    <van-cell-group>
      <van-field left-icon="smile-o" required :error-message="result.phone" v-model="obj.phone" placeholder="请输入手机号">
        <template #left-icon>
          <i class="iconfont icon-shouji"></i>
        </template>
      </van-field>
      <van-field left-icon="smile-o" required :error-message="result.code" v-model="obj.code" placeholder="请输入验证码">
        <template #button>
          <van-button size="small" color="#ededed" round class="codeBtn" >发送验证码</van-button>
        </template>
        <template #left-icon>
          <i class="iconfont icon-Lock" style="color:#626262"></i>
        </template>
      </van-field>
    </van-cell-group>
    <div class="loginBtn">
      <van-button type="info" size="large" @click="login">登录</van-button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      obj: {
        phone: '18888888888',
        code: '246810'
      },
      result: {
        phone: '',
        code: ''
      }
    }
  },
  methods: {
    // 登录点击事件
    login () {
      if (this.checkData() === false) {
        return
      }
      console.log('验证成功')
    },
    // 验证方法
    checkData () {
      // 是否通过验证
      var isPass = []
      if (this.obj.phone.trim().length === 11) {
        isPass.push(true)
        this.result.phone = ''
      } else {
        isPass.push(false)
        this.result.phone = '输入正确的手机号'
      }
      if (this.obj.code.trim().length === 6) {
        isPass.push(true)
        this.result.code = ''
      } else {
        isPass.push(false)
        this.result.code = '请输入正确的验证码'
      }
      if (isPass.includes(false)) {
        return false
      } else {
        return true
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
