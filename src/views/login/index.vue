<template>
  <div class="login">
    <van-nav-bar title="登录" />
    <van-cell-group>
      <van-field left-icon="smile-o" required :error-message="result.mobile" v-model="obj.mobile" placeholder="请输入手机号">
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
      <van-button type="info" size="large" @click="login" :loading="istrue">登录</van-button>
    </div>
  </div>
</template>

<script>
// 导入登录请求
import { getLogin } from '@/api/user'
// 导入操作localStorage方法
import { localSet } from '../../utils/myLocal'
export default {
  data () {
    return {
      istrue: false,
      obj: {
        mobile: '18888888888',
        code: '246810'
      },
      result: {
        mobile: '',
        code: ''
      }
    }
  },
  methods: {
    // 登录点击事件 - 利用async和await将异步代码顺序换成同步顺序
    async login () {
      if (this.checkData() === false) {
        return
      }
      this.istrue = true
      try {
        var res = await getLogin({
          mobile: this.obj.mobile,
          code: this.obj.code
        })
        // commit 专门用来调用mutations中的方法
        this.$store.commit('setUserInfo', res.data.data)
        // window.localStorage.setItem('userInfo', JSON.stringify(res.data.data))
        localSet('userInfo', res.data.data)
        this.$router.push('/home')
      } catch {
        this.$toast.fail('登录失败')
      }
      this.istrue = false
    },
    // 验证方法
    checkData () {
      // 是否通过验证
      var isPass = []
      if (this.obj.mobile.trim().length === 11) {
        isPass.push(true)
        this.result.mobile = ''
      } else {
        isPass.push(false)
        this.result.mobile = '输入正确的手机号'
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
