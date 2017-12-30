Page({
  //设置适宜温度，湿度，光照
  choose_dr: function () 
  {
    var app = getApp()
    app.globalData.upper_tem=30
    app.globalData.low_tem=10
    app.globalData.low_hum=60
    app.globalData.upper_hum=80
    app.globalData.upper_light=50000
    app.globalData.low_light=100
    app.globalData.kind_flower =1
    wx.navigateTo({
      url: '../flower/flower'
    })
  },
  luhui: function () {
    var app = getApp()
    app.globalData.upper_tem = 35
    app.globalData.low_tem = 15
    app.globalData.low_hum = 40
    app.globalData.upper_hum = 85
    app.globalData.upper_light = 50000
    app.globalData.low_light = 100
    app.globalData.kind_flower = 2
    wx.navigateTo({
      url: '../flower/flower'
    })
  },
  xrq: function () {
    var app = getApp()
    app.globalData.upper_tem = 35
    app.globalData.low_tem = 10
    app.globalData.low_hum = 30
    app.globalData.upper_hum = 85
    app.globalData.upper_light = 40000
    app.globalData.low_light = 100
    app.globalData.kind_flower = 3
    wx.navigateTo({
      url: '../flower/flower'
    })
  },
  haitang: function () {
    var app = getApp()
    app.globalData.upper_tem = 30
    app.globalData.low_tem = 10
    app.globalData.low_hum = 60
    app.globalData.upper_hum = 80
    app.globalData.upper_light = 20000
    app.globalData.low_light = 100
    app.globalData.kind_flower = 4
    wx.navigateTo({
      url: '../flower/flower'
    })
  },
  hydt: function () {
    var app = getApp()
    app.globalData.upper_tem =28
    app.globalData.low_tem = 21
    app.globalData.low_hum = 75
    app.globalData.upper_hum = 85
    app.globalData.upper_light = 28000
    app.globalData.low_light = 10000
    app.globalData.kind_flower = 5
    wx.navigateTo({
      url: '../flower/flower'
    })
  },
  hz: function () {
    var app = getApp()
    app.globalData.upper_tem = 29
    app.globalData.low_tem = 18
    app.globalData.low_hum = 70
    app.globalData.upper_hum = 80
    app.globalData.upper_light = 22000
    app.globalData.low_light = 100
    app.globalData.kind_flower = 6
    wx.navigateTo({
      url: '../flower/flower'
    })
  },
  
})
