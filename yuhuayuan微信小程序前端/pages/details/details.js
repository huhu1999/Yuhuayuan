Page({

  onReady: function () {
    var app = getApp()
    if (app.globalData.kind_flower == 1) {
      this.setData
        ({
          infor:1
        })
    }
    else if (app.globalData.kind_flower == 2) {
      this.setData
        ({
          infor:2
        })
    }
    else if (app.globalData.kind_flower == 3) {
      this.setData
        ({
          infor:3
        })
    }
    else if (app.globalData.kind_flower == 4) {
      this.setData
        ({
          infor:4
        })
    }
    else if (app.globalData.kind_flower == '5') {
      this.setData
        ({
        infor:5
        })
    }
    else if (app.globalData.kind_flower == '6') 
     {
       this.setData
        ({
          infor:6
        })
     }
    else
     {
       this.setData
        ({
          infor: null
        })
     }
  }
})
