<template>
  <div class="panelsbox">
    <div class="scroll-list-wrap">
      <cube-scroll class="leftpanels">
        <ul>
          <li v-for="(list,index) in tabslabel" :key="index" :class="list.active ? 'active' : ''" @click="selectlist(index)">
            {{ list.label }}
          </li>
        </ul>
      </cube-scroll>
      <cube-scroll class="rightpanels">
        <ul>
          <li v-for="(tag,index) in tags" :key="index" :class="list.active ? 'active' : ''" @click="selectlist(index)">
            <img src="tag.image" alt="">
            <p>{{ tag.lab }}</p>
          </li>
        </ul>
      </cube-scroll>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      tags: [],
      tabslabel: [
        {
          label: '热门推荐',
          active: true
        },
        {
          label: '手机数码',
          active: true
        },
        {
          label: '家用电器',
          active: true
        },
        {
          label: '电脑产品',
          active: true
        },
        {
          label: '美妆',
          active: true
        },
        {
          label: '护肤',
          active: true
        },
        {
          label: '口红',
          active: true
        },
        {
          label: '珠宝',
          active: true
        },
        {
          label: '男装',
          active: true
        },
        {
          label: '女装',
          active: true
        }
      ]
    }
  },
  created() {
    this.getclassify(0)
  },
  methods: {
    // 获取分类详情
    async getclassify(index) {
      const result = await this.$http.get('/api/classify', { params: { type: index }})
      this.tags = result.data
    },
    // 点击左侧分类事件
    selectlist(index) {
      this.tabslabel.forEach((val, loop) => {
        if (index === loop) {
          val.active = true
        } else {
          val.active = false
        }
      })
      this.getclassify(index)
    },
    mounted() {
      // 设置滚动盒子的高度
      const leftpanels = document.querySelector('.leftpanels')
      const rightpanels = document.querySelector('.rightpanels')
      const bodyheight = document.documentElement.clientHeight
      leftpanels.style.height = bodyheight - 57 + 'px'
      rightpanels.style.height = bodyheight - 57 + 'px'
    }
  }
}
</script>

<style lang="stylus" scoped>
    .panelsbox
        display flex
        .leftpanels
            width 30%
            li
                height 50px
                line-height 50px
                border-bottom 1px solid #fff
                color #333
                background #f8f8f8
                font-size  14px
            .active
                background #fff
                color #e93b3d
        .rightpanels
            width 70%
            ul
                display flex
                flex-wrap  wrap
                li
                    width 50%
                    justify-content center
                    align-items center
                    font-size 15px
                    img
                        width 80px
                        height  80px
                    .cubeic-add
                        font-size  18px
</style>
