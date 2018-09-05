var cards=[
     { "name": "请翻牌","back": "" },
     { "name": "请翻牌","back": "" },
     { "name": "请翻牌","back": "" },
     { "name": "请翻牌","back": "" },
     { "name": "请翻牌","back": "" },
     { "name": "请翻牌","back": "" },
     { "name": "请翻牌","back": "" },
     { "name": "请翻牌","back": "" },
     { "name": "请翻牌","back": "" }
   ]
const app = getApp()
Page({
  data: {
    cards:cards,
    sel:0
  },
  reverseCard:function(event){
    this.setData({
      sel:event.currentTarget.dataset.index
    })
  },
  onLoad: function () {
  },
  initMyLocation:function(){
  }
})
