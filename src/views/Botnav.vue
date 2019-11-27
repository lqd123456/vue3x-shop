<template>
  <div id="botnav">
    <transition :name="transition">
      <router-view class="Router" />
    </transition>
    <cube-tab-bar
      v-model="selectedLabelDefault"
      class="botnav"
      :data="tabs"
      @click="clickHandler"
      @change="changeHandler"
    />
  </div>
</template>
<script>
export default {
  data() {
    return {
      transition: 'slide-right',
      selectedLabelDefault: '首页',
      tabs: [{
        label: '首页',
        icon: 'cubeic-home'
      }, {
        label: '分类',
        icon: 'cubeic-like'
      }, {
        label: '搜索',
        icon: 'cubeic-search'
      }, {
        label: '购物',
        icon: 'cubeic-mall'
      }, {
        label: '我的',
        icon: 'cubeic-person'
      }
      ]
    }
  },
  methods: {
    clickHandler(label) {
      // if you clicked home tab, then print 'Home'
      console.log(label)
    },
    // 点击其他的时候触发
    changeHandler(label) {
      switch (label) {
        case '首页':
          this.$router.push('/botnav/index')
          break
        case '分类':
          this.$router.push({ path: '/botnav/list' })
          break
        case '搜索':
          this.$router.push({ path: '/botnav/search' })
          break
        case '购物':
          this.$router.push({ path: '/botnav/cart' })
          break
        case '我的':
          this.$router.push({ path: '/botnav/mine' })
          break
      }
    }
  }
}
</script>
<style lang="stylus" scoped>
    .cube-tab-bar.botnav
        position  fixed
        bottom  0
        left 0
        z-index 1000
        width 100%
        background #fff
        .cube-tab div
            font-size  16px
            padding-top  3px
        i
            font-size 20px
    .Router
        position absolute
        width  100%
        transition all 0.8s ease
    .silde-left-enter,.slide-right-leave-active
        opacity 0
        -webkit-transform  translate(100%,0)
        transform  translate(100%,0)
    .slide-left-leave-active,.slide-right-enter
        opacity 0
        -webkit-transform  translate(-100%,0)
        transform  translate(-100%,0)
</style>
