<template>
  <div>
    <div v-for="(item,index) in cartarr" :key="index" class="goods">
      {{ item.title }}
      <div class="goodsright">
        <i class="cubeic-remove" @click="removeCart(index)" />
        <span>{{ item.cartCount }}</span>
        <i class="cubeic-add" @click="addCart(index)" />
      </div>
    </div>
    <cube-button style="margin:10px 0">下单</cube-button>
    <cube-button @click="clearcart()">清空购物车</cube-button>
  </div>
</template>

<script>
// vuex 里面封装好的，可以获取state里面的数据
import { mapState } from 'vuex'
export default {
  data() {
    return {
      // cartarr: [
      //   {
      //     title: '小米手机',
      //     cartCount: 5
      //   },
      //   {
      //     title: '华为手机',
      //     cartCount: 6
      //   }
      // ]
    }
  },
  computed: {
    // mapState返回的是一个对象，通过...对其进行解构
    ...mapState({
      // cartarr: 'cartarry'
      cartarr: state => state.cartarry
    })
  },
  methods: {
    // 减少商品
    removeCart(index) {
      this.$store.commit('cartremove', index)
    },
    // 增加商品
    addCart(index) {
      this.$store.commit('cartadd', index)
    },
    // 清空购物车
    clearcart() {
      this.$store.commit('clearcart')
    }
  }
}
</script>

<style lang="stylus" scoped>
    .goods
        padding 10px
        text-align  left
        .goodsright
            float right
            span 20px
        i
            font-size 18px
</style>
