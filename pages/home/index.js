// pages/hoem/index.js
import Dialog from '@vant/weapp/dialog/dialog';
import Toast from '@vant/weapp/toast/toast';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[
      {
        title:"",
        inset:true,
        gutter:0,
        item:[
          {
            text:"新生报道",
            prefix:true,
            icon:"check-in",
            color:"#187ef9",
            message:{
              content:"该功能只向新生开放"
            }
          },
          {
            text:"学费",
            prefix:false,
            icon:"refund-o",
            color:"#ff5e5e",
            url:"/pages/fee/index"
          },
          {
            text:"继教",
            prefix:false,
            icon:"paid",
            color:"#ff9a4c",
            url:"/pages/educate/index"
          },
          {
            text:"我的录取",
            prefix:true,
            icon:"xueshengluqu",
            color:"#57bf7f",
            url:"/pages/admission/index"
          },
        ]
      },
      {
        title:"常用推荐",
        inset:true,
        gutter:10,
        item:[
          {
            text:"我的单招",
            prefix:true,
            icon:"gangbi",
            color:"#ff5e5e",
            url:'/pages/singlemove/index'
          },
          {
            text:"完善资料",
            prefix:true,
            icon:"ziliaoku",
            color:"#1ebab5",
            url:'/pages/perfect/index'
          },
          {
            text:"勤工俭学",
            prefix:false,
            icon:"gem-o",
            color:"#ff4fc1",
            url:'/pages/assistantship/index'
          },
          {
            text:"杂费",
            prefix:false,
            icon:"more-o",
            color:"#187ef9"
          },
        ]
      }
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
    const {message,url} =currentTarget.dataset.item
    if(message){
      Dialog.alert({
        message: message.content,
      }).then(() => {
        // on close
      });
    }
    if(url){
      wx.navigateTo({
        url,
        fail(){
          Toast(`当前页面维护中`)
        }
      })
    }
    console.log(url,message);
  }
})