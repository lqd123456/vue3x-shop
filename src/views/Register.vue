<template>
  <div>
    <img class="headerimg" src="../assets/logo.png">
    <cube-form
      :model="model"
      :schema="schema"
      @submit="submitHandler"
      @reset="resetHandler"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      model: {
        username: '',
        password: ''
      },
      schema: {
        fields: [
          {
            type: 'input',
            modelKey: 'username',
            label: '用户名',
            props: {
              placeholder: '请输入用户名'
            },
            rules: {
              // 校验规则
              required: true,
              type: 'string',
              min: 3,
              max: 15
            },
            trigger: 'blur',
            messages: {
              required: '用户名不能为空',
              min: '用户名不能少于3个字符',
              max: '用户名不能大于15个字符'
            }
          },
          {
            type: 'input',
            modelKey: 'password',
            label: '密码',
            props: {
              placeholder: '请输入密码',
              type: 'password',
              eye: {
                open: false
              }
            },
            rules: {
              // 校验规则
              required: true
            },
            trigger: 'blur'
          },
          {
            type: 'submit',
            label: '注册'
          },
          {
            type: 'reset',
            label: '重置'
          }
        ]
      }
    }
  },
  methods: {
    submitHandler(e) {
      e.preventDefault()
      this.$http.get('api/register', {
        params: this.model
      }).then(res => {
        console.log(res)
      }).catch(err => {
        console.log(err)
      })
    },
    resetHandler() {
      console.log('表单重置了！')
    }
  }

}
</script>

<style lang="stylus" scoped>
    .headerimg
        height 150px
        width 100px
</style>
