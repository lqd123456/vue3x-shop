import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: '',
    cartarry: [] // 存储购物车商品的数组
  },
  mutations: {
    settoken(state, token) {
      state.token = token
    },
    // 添加商品到购物车
    tocart(state, tag) {
      const goods = state.cartarry.find(v => v.title == tag.label)
      if (goods) {
        goods.cartCount += 1
      } else {
        goods.cartCount = 1
        state.cartarry.push(goods)
      }
    },
    // 购物车商品数量加一
    cartadd(state, index) {
      state.cartarry[index].cartCount++
    },
    // 购物车商品数量减一
    cartremove(state, index) {
      if (state.cartarry[index].cartCount > 1) {
        state.cartarry[index].cartCount--
      } else {
        if (window.confirm('确定从购物车移除商品吗？')) {
          state.cartarry.splice(index, 1)
        }
      }
    },
    // 清空购物车
    clearcart(state) {
      state.cartarry = []
    }
  },
  actions: {
  },
  // 相当于 vue 中的计算属性
  getters: {
    countsum: state => {
      let count = 0
      state.cartarry.forEach(v => {
        count += v.cartCount
      })
      return count
    }
  },
  modules: {
  }
})
