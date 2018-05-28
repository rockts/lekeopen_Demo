Page({
  pay () {
  /**
   * 请求登录凭证。
   */
   wx.login({
     success: (loginResponse) => {
       /**
        * 请求支付参数。
        */
        wx.request({
          url: 'https://sandbox.lekee.cc/checkout/pay',
          method: 'POST',
          data: {
            code: loginResponse.code
          },
          success: (paramResponse) => {
            console.log(paramResponse)
          }
        })
     }
   })
 }
})
