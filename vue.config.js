module.exports = {
  css: {
    loaderOptions: {
      stylus: {
        'resolve url': true,
        'import': [
          './src/theme'
        ]
      }
    }
  },
  pluginOptions: {
    'cube-ui': {
      postCompile: true,
      theme: true
    }
  },
  configureWebpack: {
    devServer: {
      // mock 接口数据编写
      before(app) {
        // 注册接口
        // 用户信息池
        const userpoor = [
          { username: 'lqd', password: 'lqd123456' },
          { username: 'cws', password: 'cws123456' },
          { username: 'admin', password: 'admin' }
        ]
        app.get('/api/register', (req, res) => {
          const { username, password } = req.query
          const userlength = userpoor.filter(user => user.username === username).length
          const passwordlength = userpoor.filter(user => user.password === password).length
          if (userlength > 0 && passwordlength > 0) {
            res.json({
              success: false,
              messge: '用户已经存在'
            })
          } else {
            res.json({
              success: true,
              messge: '注册成功'
            })
          }
        })

        // 登录接口
        const tokenkey = 'shop'
        app.get('/api/login', (req, res) => {
          const { username, password } = req.query
          if (username === 'admin' && password === 'admin' || username === 'lqd' && password === 'lqd123456') {
            res.json({
              code: 0,
              message: '登录成功',
              token: tokenkey + '-' + username + '-' + (new Date().getTime() + 60 * 60 * 1000)
            })
          } else {
            res.json({
              code: -1,
              success: 1,
              message: '账号或者密码错误'
            })
          }
        })

        // 轮播图接口
        app.get('/api/banner', (req, res) => {
          res.json({
            data: [{
              url: 'https://www.hao123.com',
              image: 'http://202.104.104.86:28099/image/product/ftp/img69/ZBB80516001_20180601084235413.jpg'
            },
            {
              url: 'https://www.baidu.com',
              image: 'http://202.104.104.86:28099/image/product/ftp/img69/ZBB80516001_20180601084235505.jpg'
            },
            {
              url: 'https://lol.qq.com',
              image: 'http://202.104.104.86:28099/image/product/ftp/img69/ZBB80516001_20180601084235505.jpg'
            }]
          })
        })

        // 滚动分类接口
        app.get('/api/rollinglist', (req, res) => {
          res.json({
            data: [
              [
                {
                  url: 'http://202.104.104.86:28099/image/product/ftp/img71/XUY80919803_20180919014758635.jpg',
                  image: 'http://202.104.104.86:28099/image/product/ftp/tupian3/XZQ50518381C_0301336049111789928.jpg',
                  label: '手机'
                },
                {
                  url: 'http://202.104.104.86:28099/image/product/ftp/img71/XUY80919803_20180919014758635.jpg',
                  image: 'http://202.104.104.86:28099/image/product/ftp/tupian3/XZQ50518381C_0301336049111789928.jpg',
                  label: '电脑'
                },
                {
                  url: 'http://202.104.104.86:28099/image/product/ftp/img71/XUY80919803_20180919014758635.jpg',
                  image: 'http://202.104.104.86:28099/image/product/ftp/tupian3/XZQ50518381C_0301336049111789928.jpg',
                  label: '电视'
                },
                {
                  url: 'http://202.104.104.86:28099/image/product/ftp/img71/XUY80919803_20180919014758635.jpg',
                  image: 'http://202.104.104.86:28099/image/product/ftp/tupian3/XZQ50518381C_0301336049111789928.jpg',
                  label: '显示器'
                },
                {
                  url: 'http://202.104.104.86:28099/image/product/ftp/img71/XUY80919803_20180919014758635.jpg',
                  image: 'http://202.104.104.86:28099/image/product/ftp/tupian3/XZQ50518381C_0301336049111789928.jpg',
                  label: '鞋子'
                },
                {
                  url: 'http://202.104.104.86:28099/image/product/ftp/img71/XUY80919803_20180919014758635.jpg',
                  image: 'http://202.104.104.86:28099/image/product/ftp/tupian3/XZQ50518381C_0301336049111789928.jpg',
                  label: '衣服'
                },
                {
                  url: 'http://202.104.104.86:28099/image/product/ftp/img71/XUY80919803_20180919014758635.jpg',
                  image: 'http://202.104.104.86:28099/image/product/ftp/tupian3/XZQ50518381C_0301336049111789928.jpg',
                  label: '裤子'
                },
                {
                  url: 'http://202.104.104.86:28099/image/product/ftp/img71/XUY80919803_20180919014758635.jpg',
                  image: 'http://202.104.104.86:28099/image/product/ftp/tupian3/XZQ50518381C_0301336049111789928.jpg',
                  label: '建材'
                },
                {
                  url: 'http://202.104.104.86:28099/image/product/ftp/img71/XUY80919803_20180919014758635.jpg',
                  image: 'http://202.104.104.86:28099/image/product/ftp/tupian3/XZQ50518381C_0301336049111789928.jpg',
                  label: '儿童'
                },
                {
                  url: 'http://202.104.104.86:28099/image/product/ftp/img71/XUY80919803_20180919014758635.jpg',
                  image: 'http://202.104.104.86:28099/image/product/ftp/tupian3/XZQ50518381C_0301336049111789928.jpg',
                  label: '书籍'
                }
              ],
              [
                {
                  url: 'http://202.104.104.86:28099/image/product/ftp/img71/XUY80919803_20180919014758635.jpg',
                  image: 'http://202.104.104.86:28099/image/product/ftp/tupian3/XZQ50518381C_0301336049111789928.jpg',
                  label: '手表'
                },
                {
                  url: 'http://202.104.104.86:28099/image/product/ftp/img71/XUY80919803_20180919014758635.jpg',
                  image: 'http://202.104.104.86:28099/image/product/ftp/tupian3/XZQ50518381C_0301336049111789928.jpg',
                  label: '珠宝'
                },
                {
                  url: 'http://202.104.104.86:28099/image/product/ftp/img71/XUY80919803_20180919014758635.jpg',
                  image: 'http://202.104.104.86:28099/image/product/ftp/tupian3/XZQ50518381C_0301336049111789928.jpg',
                  label: '零食'
                },
                {
                  url: 'http://202.104.104.86:28099/image/product/ftp/img71/XUY80919803_20180919014758635.jpg',
                  image: 'http://202.104.104.86:28099/image/product/ftp/tupian3/XZQ50518381C_0301336049111789928.jpg',
                  label: '用品'
                },
                {
                  url: 'http://202.104.104.86:28099/image/product/ftp/img71/XUY80919803_20180919014758635.jpg',
                  image: 'http://202.104.104.86:28099/image/product/ftp/tupian3/XZQ50518381C_0301336049111789928.jpg',
                  label: '护肤'
                },
                {
                  url: 'http://202.104.104.86:28099/image/product/ftp/img71/XUY80919803_20180919014758635.jpg',
                  image: 'http://202.104.104.86:28099/image/product/ftp/tupian3/XZQ50518381C_0301336049111789928.jpg',
                  label: '相机'
                },
                {
                  url: 'http://202.104.104.86:28099/image/product/ftp/img71/XUY80919803_20180919014758635.jpg',
                  image: 'http://202.104.104.86:28099/image/product/ftp/tupian3/XZQ50518381C_0301336049111789928.jpg',
                  label: '汽车'
                },
                {
                  url: 'http://202.104.104.86:28099/image/product/ftp/img71/XUY80919803_20180919014758635.jpg',
                  image: 'http://202.104.104.86:28099/image/product/ftp/tupian3/XZQ50518381C_0301336049111789928.jpg',
                  label: '包包'
                },
                {
                  url: 'http://202.104.104.86:28099/image/product/ftp/img71/XUY80919803_20180919014758635.jpg',
                  image: 'http://202.104.104.86:28099/image/product/ftp/tupian3/XZQ50518381C_0301336049111789928.jpg',
                  label: '鼠标'
                },
                {
                  url: 'http://202.104.104.86:28099/image/product/ftp/img71/XUY80919803_20180919014758635.jpg',
                  image: 'http://202.104.104.86:28099/image/product/ftp/tupian3/XZQ50518381C_0301336049111789928.jpg',
                  label: '键盘'
                }
              ]
            ]
          })
        })

        // 获取分类页的分类接口
        app.get('/api/classify', (req, res) => {
          console.log(req.query.type)
          switch (req.query.type) {
            case '0':
              res.json({
                data: [
                  {
                    image: '//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                    label: '小米'
                  },
                  {
                    image: '//img14.360buyimg.com/focus/s140x140_jfs/t11929/135/2372293765/1396/e103ec31/5a1692e2Nbea6e136.jpg',
                    label: '华为'
                  },
                  {
                    image: '//img10.360buyimg.com/focus/s140x140_jfs/t12178/348/911080073/4732/db0ad9c7/5a1692e2N6df7c609.jpg',
                    label: '荣耀'
                  },
                  {
                    image: '//img20.360buyimg.com/focus/s140x140_jfs/t13759/194/897734755/2493/1305d4c4/5a1692ebN8ae73077.jpg',
                    label: '雪梨手机'
                  },
                  {
                    image: '//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                    label: '小米'
                  },
                  {
                    image: '//img14.360buyimg.com/focus/s140x140_jfs/t11929/135/2372293765/1396/e103ec31/5a1692e2Nbea6e136.jpg',
                    label: '华为'
                  },
                  {
                    image: '//img10.360buyimg.com/focus/s140x140_jfs/t12178/348/911080073/4732/db0ad9c7/5a1692e2N6df7c609.jpg',
                    label: '荣耀'
                  },
                  {
                    image: '//img20.360buyimg.com/focus/s140x140_jfs/t13759/194/897734755/2493/1305d4c4/5a1692ebN8ae73077.jpg',
                    label: '雪梨手机'
                  },
                  {
                    image: '//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                    label: '小米'
                  },
                  {
                    image: '//img14.360buyimg.com/focus/s140x140_jfs/t11929/135/2372293765/1396/e103ec31/5a1692e2Nbea6e136.jpg',
                    label: '华为'
                  },
                  {
                    image: '//img10.360buyimg.com/focus/s140x140_jfs/t12178/348/911080073/4732/db0ad9c7/5a1692e2N6df7c609.jpg',
                    label: '荣耀'
                  },
                  {
                    image: '//img20.360buyimg.com/focus/s140x140_jfs/t13759/194/897734755/2493/1305d4c4/5a1692ebN8ae73077.jpg',
                    label: '雪梨手机'
                  },
                  {
                    image: '//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                    label: '小米'
                  },
                  {
                    image: '//img14.360buyimg.com/focus/s140x140_jfs/t11929/135/2372293765/1396/e103ec31/5a1692e2Nbea6e136.jpg',
                    label: '华为'
                  },
                  {
                    image: '//img10.360buyimg.com/focus/s140x140_jfs/t12178/348/911080073/4732/db0ad9c7/5a1692e2N6df7c609.jpg',
                    label: '荣耀'
                  },
                  {
                    image: '//img20.360buyimg.com/focus/s140x140_jfs/t13759/194/897734755/2493/1305d4c4/5a1692ebN8ae73077.jpg',
                    label: '雪梨手机'
                  },
                  {
                    image: '//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                    label: '小米'
                  },
                  {
                    image: '//img14.360buyimg.com/focus/s140x140_jfs/t11929/135/2372293765/1396/e103ec31/5a1692e2Nbea6e136.jpg',
                    label: '华为'
                  },
                  {
                    image: '//img10.360buyimg.com/focus/s140x140_jfs/t12178/348/911080073/4732/db0ad9c7/5a1692e2N6df7c609.jpg',
                    label: '荣耀'
                  },
                  {
                    image: '//img20.360buyimg.com/focus/s140x140_jfs/t13759/194/897734755/2493/1305d4c4/5a1692ebN8ae73077.jpg',
                    label: '雪梨手机'
                  }

                ]
              })
              break
            case '1':
              res.json({
                data: [
                  {
                    image: '//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                    label: '小米'
                  },
                  {
                    image: '//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                    label: '小米'
                  },
                  {
                    image: '//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                    label: '小米'
                  },
                  {
                    image: '//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                    label: '小米'
                  }
                ]
              })
              break
            case '2':
              res.json({
                data: [
                  {
                    image: '//img14.360buyimg.com/focus/s140x140_jfs/t11929/135/2372293765/1396/e103ec31/5a1692e2Nbea6e136.jpg',
                    label: '华为'
                  },
                  {
                    image: '//img14.360buyimg.com/focus/s140x140_jfs/t11929/135/2372293765/1396/e103ec31/5a1692e2Nbea6e136.jpg',
                    label: '华为'
                  },
                  {
                    image: '//img14.360buyimg.com/focus/s140x140_jfs/t11929/135/2372293765/1396/e103ec31/5a1692e2Nbea6e136.jpg',
                    label: '华为'
                  },
                  {
                    image: '//img14.360buyimg.com/focus/s140x140_jfs/t11929/135/2372293765/1396/e103ec31/5a1692e2Nbea6e136.jpg',
                    label: '华为'
                  }
                ]
              })
              break
            case '3':
              res.json({
                data: [
                  {
                    image: '//img10.360buyimg.com/focus/s140x140_jfs/t12178/348/911080073/4732/db0ad9c7/5a1692e2N6df7c609.jpg',
                    label: '荣耀'
                  },
                  {
                    image: '//img10.360buyimg.com/focus/s140x140_jfs/t12178/348/911080073/4732/db0ad9c7/5a1692e2N6df7c609.jpg',
                    label: '荣耀'
                  },
                  {
                    image: '//img10.360buyimg.com/focus/s140x140_jfs/t12178/348/911080073/4732/db0ad9c7/5a1692e2N6df7c609.jpg',
                    label: '荣耀'
                  },
                  {
                    image: '//img10.360buyimg.com/focus/s140x140_jfs/t12178/348/911080073/4732/db0ad9c7/5a1692e2N6df7c609.jpg',
                    label: '荣耀'
                  }
                ]
              })
              break
            case '4':
              res.json({
                data: [
                  {
                    image: '//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                    label: '小米'
                  },
                  {
                    image: '//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                    label: '小米'
                  },
                  {
                    image: '//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                    label: '小米'
                  },
                  {
                    image: '//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                    label: '小米'
                  }
                ]
              })
              break
            case '5':
              res.json({
                data: [
                  {
                    image: '//img20.360buyimg.com/focus/s140x140_jfs/t13759/194/897734755/2493/1305d4c4/5a1692ebN8ae73077.jpg',
                    label: '雪梨手机'
                  },
                  {
                    image: '//img20.360buyimg.com/focus/s140x140_jfs/t13759/194/897734755/2493/1305d4c4/5a1692ebN8ae73077.jpg',
                    label: '雪梨手机'
                  },
                  {
                    image: '//img20.360buyimg.com/focus/s140x140_jfs/t13759/194/897734755/2493/1305d4c4/5a1692ebN8ae73077.jpg',
                    label: '雪梨手机'
                  },
                  {
                    image: '//img20.360buyimg.com/focus/s140x140_jfs/t13759/194/897734755/2493/1305d4c4/5a1692ebN8ae73077.jpg',
                    label: '雪梨手机'
                  }
                ]
              })
              break
            case '6':
              res.json({
                data: [
                  {
                    image: '//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                    label: '小米'
                  },
                  {
                    image: '//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                    label: '小米'
                  },
                  {
                    image: '//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                    label: '小米'
                  },
                  {
                    image: '//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                    label: '小米'
                  }
                ]
              })
              break
          }
        })
      }
    }
  }
}
