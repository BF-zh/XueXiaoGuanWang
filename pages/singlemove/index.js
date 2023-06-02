// pages/singlemove/index.js
import Dialog from '@vant/weapp/dialog/dialog';
Page({

  /**
   * 页面的初始数据
   */
  data: {

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
  handleShowMessage(){
    Dialog.confirm({
      title: '提示说明',
      confirmButtonText:"去反馈",
      cancelButtonText:"确定",
      messageAlign:"left",
      message: '1.请确认你已经报考我校\n\n2.请在我校指定时间内登录系统\n\n3.请确认注册太难写的姓名和身份证号码和报考时的相同，不同可以通过【个人中心】-【退出登录】后重新注册\n\n4.其他问题可和我校招生处或各地招生老师联系',
    })
      .then(this.handleToAdmission)
      .catch(() => {
      });
  },
  handleToAdmission(){{
    wx.navigateTo({
      url: '/pages/admission/index',
      fail(){
        Dialog.alert({
          message: '目标页面维护中，请稍后再试',
        }).then(() => {
          // on close
        });
      }
    })
  }}
})