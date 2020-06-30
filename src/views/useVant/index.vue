<template>
    <div>
        <h2>我是vant</h2>
        <h3>01 按钮</h3>
        <van-button type="default" @click="btn1">默认按钮</van-button>
        <van-button type="primary">主要按钮</van-button>
        <van-button type="info">信息按钮</van-button>
        <van-button type="warning">警告按钮</van-button>
        <van-button type="danger">危险按钮</van-button>
        <h3>02 单元格</h3>
        <van-cell-group>
            <van-cell title="单元格" value="内容" />
            <van-cell title="单元格" value="内容" label="描述信息" />
        </van-cell-group>
        <h3>03 字体图标</h3>
        <van-icon name="chat-o" dot />
        <van-icon name="star-o" />
        <van-icon name="chat-o" badge="99+" />
        <h3>04 单元格里使用icon : 使用插槽</h3>
        <van-cell>
            <template #title>
                <van-icon name="star-o" />
            </template>
            <template #default>
                <van-icon name="chat-o" />
            </template>
        </van-cell>
    </div>
</template>

<script>
export default {
  methods: {
    btn1 () {
      window.console.log('默认按钮')
    }
  }
}
</script>

<style>
</style>
