// pages/mine/index.js
import Toast from '@vant/weapp/toast/toast';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[
      {
        icon:"comment-o",
        title:"消息订阅",
        url:"",
        message:""
      },
      {
        icon:"shield-o",
        title:"系统应用",
        url:"",
        message:""
      },
      {
        icon:"edit",
        title:"投诉建议",
        url:"",
        message:""
      },
      {
        icon:"delete-o",
        title:"清除缓存",
        url:"",
        message:"清除失败"
      },
      {
        icon:"upgrade",
        title:"版本更新",
        url:"",
        message:"暂时没有可用更新"
      },
      {
        icon:"warn-o",
        title:"退出登陆",
        url:"",
        message:"一个演示小程序，不能退出登录"
      },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    this.getTabBar().init();
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  },
  handleClickItem({currentTarget}){
    const {url,message} = currentTarget.dataset.item
    if(url){
      wx.navigateTo({
        url
      })
    }
    if(message){
      Toast(message)
    }
  }
})