<template>
  <div id="search">
    <div class="container">
      <input v-model="searchvalue" type="text" class="search" placeholder="Search...">
      <i class="cubeic-search" @click="search" />
    </div>
    <div class="list">
      <ul class="listul">
        <li v-for="(tag,index) in tags" :key="index" class="listli">
          <a :href="tag.image">
            <img :src="tag.image" alt="">
            <p>{{ tag.label }}</p>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      tags: [],
      searchvalue: ''
    }
  },
  methods: {
    search() {
      if (this.searchvalue) {
        switch (this.searchvalue) {
          case '热门推荐':
            this.getclassify(0)
            break
          case '手机数码':
            this.getclassify(1)
            break
          case '家用电器':
            this.getclassify(2)
            break
          case '家用空调':
            this.getclassify(3)
            break
          case '电脑产品':
            this.getclassify(4)
            break
          case '计生情趣':
            this.getclassify(5)
            break
          case '美妆护肤':
            this.getclassify(6)
            break
          case '口红':
            this.getclassify(7)
            break
          case '手袋':
            this.getclassify(8)
            break
          case '金银财宝':
            this.getclassify(9)
            break
        }
      }
    },
    async getclassify(index) {
      const result = await this.$http.get('/api/classify', { params: { type: index }})
      this.tags = result.data
    }
  }
}
</script>

<style lang="stylus" scoped>
  .container
    margin: 50px auto
    input
      width 250px
      border-radius: 18px
      outline: none
      border: 1px solid #ccc
    i
      height: 45px
      width: 45px
      position: absolute
      border: none
      outline: none
      cursor: pointer
      text-align center
  .listul
      display flex
      flex-wrap wrap
      padding 0px 45px 0px 50px
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
