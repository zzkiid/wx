// schedule/schedule/schedule.js
const util = require('../../utils/util.js')
var time1,time2,time3
Page({

  /**
   * 页面的初始数据
   */
  data: {
    day: 3,
    hour: 5,
    ahour: 1,
    days: [{day: "周日" },{ day:"周一"} ,{day: "周二"},{day:"周三"},{day:"周四"},{day:"周五"},{day:"周六"}
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //var time = util.ChangeTimeToText(new Date());
    var time = util.formatTime(new Date()).substring(0,10);
    var date = new Date();
    console.log(date.getDay())
    console.log(this.data.days[date.getDay()].day)
    this.setData({
      time:time,
      time1: this.data.days[date.getDay()].day,
      time2: this.data.days[(date.getDay()-1)%7].day,
      time3: this.data.days[(date.getDay()-2)%7].day
    })
    
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

  },


})