<template>
  <div>
    <img class="headerimg" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1575115919146&di=810cf98ca07526ee567b425deadac4e0&imgtype=0&src=http%3A%2F%2Fwww.ghost64.com%2Fqqtupian%2FzixunImg%2Flocal%2F2017%2F10%2F12%2F15077919627810.jpg" alt="">
    <ul>
      <li v-for="item in minearry" :key="item.label" class="mineitem" @click="itemclick(item)">
        <span class="minetitle">{{ item.label }}</span>
        <i class="cubeic-arrow" />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      minearry: [
        { label: '商品收藏' },
        { label: '我的足迹' },
        { label: '店铺收藏' },
        { label: '我的订单' },
        { label: '退出', type: 'exit' }
      ]
    }
  },
  methods: {
    itemclick(item) {
      if (item.type == 'exit') {
        this.$store.commit('settoken', '')
        localStorage.removeItem('token')
        this.$router.push({ path: '/login' })
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
    .mineitem
        font-size  14px
        text-align left
        height  50px
        line-height 50px
        padding-left 5%
        border-bottom 1px solid #eee
        .minetitle
            display inline-block
            width 90%
    .headerimg
        height  200px
        width  200
        border-radius 50%
        margin 10px auto
</style>
