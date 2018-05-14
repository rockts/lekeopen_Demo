// pages/api/api.js
Page({
  data: {
  },

  tapHandler(event) {
    // wx.setStorage({
    //   key: 'name',
    //   data: 'lekee.cc',
    //   success: this.hello
    // })

    // wx.removeStorage({
    //   key: 'name',
    //   success() {
    //     wx.getStorageInfo({
    //       seccess(response) {
    //         console.log(response)
    //       }
    //     })
    //   }
    // })

    wx.clearStorageSync()
    wx.getStorageInfo({
          seccess(response) {
            console.log(response)
          }
        })
  },

  hello() {
    wx.getStorage({
      key: 'name',
      success(response) {
        console.log('hell ~', response.data)
      }
    })
  }
})
