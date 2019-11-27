<template>
  <div id="index">
    <!-- 轮播图 -->
    <cube-slide ref="slide" :data="items" @change="changePage">
      <cube-slide-item v-for="(item, index) in items" :key="index" @click.native="clickHandler(item, index)">
        <a :href="item.url">
          <img :src="item.image" class="banner">
        </a>
      </cube-slide-item>
    </cube-slide>
    <!-- 滚动分类 -->
    <cube-slide ref="slidelists" :data="lists" :auto-play="false">
      <cube-slide-item v-for="(list, index) in lists" :key="index">
        <ul class="listul">
          <li v-for="(item,loop) in list" :key="loop" class="listli">
            <a :href="item.url">
              <img :src="item.image" alt="">
              <p>{{ item.label }}</p>
            </a>
          </li>
        </ul>
      </cube-slide-item>
    </cube-slide>
  </div>
</template>
<script>
export default {
  data() {
    return {
      items: [],
      lists: []
    }
  },
  async created() {
    try {
      // 获取轮播图数据
      const items = await this.$http.get('/api/banner')
      this.items = items.data
      // 获取滚动数据
      const lists = await this.$http.get('/api/rollinglist')
      this.lists = lists.data
    } catch (err) {
      console.log(err)
    }
  },
  methods: {
    changePage(current) {
      console.log('当前轮播图序号为:' + current)
    },
    clickHandler(item, index) {
      console.log(item, index)
    }
  }
}
</script>
<style lang="stylus" scoped>
    #index
        a
            .banner
                display block
                width 100%
                height 175px
        .listul
            display flex
            flex-wrap wrap
        .listli
            width 20%
            justify-content center
            img
                width 35px
                height 35px
                border-radius 50%
                padding 5px 0
            p
                font-size 14px
                padding-bottom 10px
</style>
