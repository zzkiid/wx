// time/time.js

var s=0
var m=0
var h=0
var t
var flag

function countdown(that) {
  var second = that.data.second
  
  
    t = setTimeout(function () {
    that.setData({
      second: second + 1
    });
    countdown(that);
  }
    , 1000)
};
function count(that){
  that.setData({
    second:h+":"+m+":"+s
  });
  s=s+1
  if(s==60){
    s=0
    m=m+1
    if(m==60){
      m=0
      h=h+1
    }
  }
  t = setTimeout(function () {
    
    count(that);
  }
    , 1000)
}
function stop(){
  clearTimeout(t)
}
Page({

  /**
   * 页面的初始数据
   */
  data: {
    second:0,
    msg:"开始计时",
    msgg:"结束计时"
  },
  
 
  //var:flag=0,
  var:flag=false,
  startClock:function(){
    if(flag){
      this.setData({ msg: "开始计时" })
      stop()
      flag=false;
    }
    else{
      count(this);
      this.setData({msg:"停止计时"})
      flag=true;
    }
    
    
    
  },
  
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})