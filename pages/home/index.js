// pages/hoem/index.js
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
            color:"#187ef9"
          },
          {
            text:"学费",
            prefix:false,
            icon:"refund-o",
            color:"#ff5e5e"
          },
          {
            text:"继教",
            prefix:false,
            icon:"paid",
            color:"#ff9a4c"
          },
          {
            text:"我的录取",
            prefix:true,
            icon:"xueshengluqu",
            color:"#57bf7f"
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
            color:"#ff5e5e"
          },
          {
            text:"完善资料",
            prefix:true,
            icon:"ziliaoku",
            color:"#1ebab5"
          },
          {
            text:"勤工俭学",
            prefix:false,
            icon:"gem-o",
            color:"#ff4fc1"
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

  }
})