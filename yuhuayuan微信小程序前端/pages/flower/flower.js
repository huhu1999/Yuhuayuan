var a=null;
Page({
  
   onReady: function () {
     var app=getApp()
     if(app.globalData.kind_flower==1)
     {
       this.setData
        ({
        src:'../images/drkt.png'
        })
     }
     else if (app.globalData.kind_flower == 2) 
     {
       this.setData
        ({
          src: '../images/lhkt.png'
        })
     }
    else if (app.globalData.kind_flower == 3) {
      this.setData
        ({
          src: '../images/xrqkt.png'
        })
    }
    else if (app.globalData.kind_flower == 4) {
      this.setData
        ({
          src: '../images/htkt.png'
        })
    }
    else if (app.globalData.kind_flower == '5') {
      this.setData
        ({
          src: '../images/hydtkt.jpg'
        })
    }
    else if (app.globalData.kind_flower == '6') {
      this.setData
        ({
          src: '../images/hzkt.png'
        })
    }
    else{
      this.setData
      ({
     src:null
      })
    }
     //从oneNET请求我们的Wi-Fi气象站的数据
    const requestTask = wx.request({
      url: 'https://api.heclouds.com/devices/20389397/datapoints?datastream_id=Light,Temperature,Humidity&limit=1',
      header: {
        'content-type': 'application/json',
        'api-key': 'uHUjfYC2gRO8cEO8xZJpsltng08='
        },
      success: function (res) {
        console.log(res.data)
        var app = getApp()
        app.globalData.temperature = res.data.data.datastreams[0]
        app.globalData.light = res.data.data.datastreams[1]
        app.globalData.humidity = res.data.data.datastreams[2]
      }
    })
  },

  //跳转到饲养详情页面
  detail:function(){
    wx.navigateTo({
      url:'../details/details'
    })
  },
  //点击图片了解植物情况
click:function()
{
  var app = getApp()
  var current_tem = app.globalData.temperature.datapoints[0].value
  var current_hum = app.globalData.humidity.datapoints[0].value
  var current_light = app.globalData.light.datapoints[0].value
  var warnh_tem=app.globalData.upper_tem
  var warnl_tem=app.globalData.low_tem
  var warnh_hum=app.globalData.upper_hum
  var warnl_hum=app.globalData.low_hum
  var warnh_light=app.globalData.upper_light
  var warnl_light=app.globalData.low_light
  console.log(warnh_tem)
  console.log(warnl_tem)
  console.log(warnh_hum)
  console.log(warnl_hum)
  console.log(warnh_light)
  console.log(warnl_light)

  if(current_tem<=warnh_tem&&current_tem>=warnl_tem&&current_hum<=warnh_hum&&current_hum>=warnl_hum&&current_light<=warnh_light&&current_light>=warnl_light)
  {
    this.setData({
      a:1
    })
  }
 else if (current_tem > warnh_tem && current_hum <= warnh_hum && current_hum >= warnl_hum && current_light <= warnh_light && current_light >= warnl_light) {
    this.setData({
      a: 2
    })
  }
  if ( current_tem <warnl_tem && current_hum <= warnh_hum && current_hum >= warnl_hum && current_light <= warnh_light && current_light >= warnl_light) {
    this.setData({
      a:3
    })
  }
 else if (current_tem <= warnh_tem && current_tem >= warnl_tem && current_hum >warnh_hum && current_light <= warnh_light && current_light >= warnl_light) {
    this.setData({
      a: 4
    })
  }
 else if (current_tem <= warnh_tem && current_tem >= warnl_tem && current_hum < warnl_hum && current_light <= warnh_light && current_light >= warnl_light) {
    this.setData({
      a:5
    })
 }
    else if(current_tem <= warnh_tem && current_tem >= warnl_tem && current_hum <= warnh_hum && current_hum >= warnl_hum && current_light > warnh_light ) {
      this.setData({
        a:6
      })
    }
  
 else if (current_tem <= warnh_tem && current_tem >= warnl_tem && current_hum <= warnh_hum && current_hum >= warnl_hum  && current_light < warnl_light) 
 {
    this.setData({
      a: 7
    })
  }
  else if (current_tem >warnh_tem  && current_hum > warnh_hum && current_light <= warnh_light && current_light >= warnl_light) {
    this.setData({
      a:8
    })
  }
  else if (current_tem >warnh_tem  && current_hum < warnl_hum && current_light <= warnh_light && current_light >= warnl_light) {
    this.setData({
      a: 9
    })
  }
  else if (current_tem > warnh_tem && current_hum <= warnh_hum && current_hum >= warnl_hum && current_light >warnh_light) {
    this.setData({
      a: 10
    })
  }
  else if (current_tem > warnh_tem && current_tem >= warnl_tem && current_hum <= warnh_hum && current_hum >= warnl_hum && current_light < warnl_light) {
    this.setData({
      a: 11
    })
  }
  else if (current_tem < warnl_tem && current_hum >warnh_hum  && current_light <= warnh_light && current_light >= warnl_light) {
    this.setData({
      a: 12
    })
  }
  else if ( current_tem < warnl_tem && current_hum < warnl_hum && current_light <= warnh_light && current_light >= warnl_light) {
    this.setData({
      a: 13
    })
  }
  else if (current_tem < warnl_tem && current_hum <= warnh_hum && current_hum >= warnl_hum && current_light > warnh_light ) {
    this.setData({
      a: 14
    })
  }
  else if ( current_tem < warnl_tem && current_hum <= warnh_hum && current_hum >= warnl_hum &&  current_light < warnl_light) {
    this.setData({
      a: 15
    })
  }
  else if (current_tem <= warnh_tem && current_tem >= warnl_tem && current_hum > warnh_hum  && current_light >warnh_light ) {
    this.setData({
      a: 16
    })
  }
  else if (current_tem <= warnh_tem && current_tem >= warnl_tem && current_hum > warnh_hum  &&  current_light < warnl_light) {
    this.setData({
      a: 17
    })
  }
  else if (current_tem <= warnh_tem && current_tem >= warnl_tem &&current_hum < warnl_hum && current_light > warnh_light ) {
    this.setData({
      a: 18
    })
  }
  else if (current_tem <= warnh_tem && current_tem >= warnl_tem &&  current_hum <warnl_hum && current_light < warnl_light) {
    this.setData({
      a: 19
    })
  }
  else 
  {
  
    this.setData({
      a: 20
    })
  }
},
details:function(){
  wx:navigateTo({
    url: '../details/details'
  })
}
})
