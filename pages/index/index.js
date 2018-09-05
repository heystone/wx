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
    sel:-1,
    a:0,
    reward:""
  },
  reverseCard:function(event){
    this.setData({
      sel:event.currentTarget.dataset.index
    });
    this.getReward();
  },
  onLoad: function () {
  },
  getReward:function(){
    var a = Math.ceil((Math.random() * 10))-1;
    var reward="很遗憾没中奖";
    if(a%3!=0){
      reward="啪"+a+"次"
    }
    var self=this;
    var index = this.data.sel;
    this.data.cards[index].back = reward;
    this.setData({
       cards:self.data.cards
    });
  }
})
