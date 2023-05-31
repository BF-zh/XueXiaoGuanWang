// pages/manage/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [{
        title: "收费",
        inset: true,
        item: [{
            text: "学费",
            prefix: false,
            icon: "refund-o",
            color: "#ff5e5e"
          },
          {
            text: "继教",
            prefix: false,
            icon: "paid",
            color: "#ff9a4c"
          },
          {
            text: "杂费",
            prefix: false,
            icon: "more-o",
            color: "#187ef9"
          },
          {
            text: "证书",
            prefix: true,
            icon: "zhengshu",
            color: "#e341ff"
          },
        ]
      },
      {
        title: "招生",
        inset: true,
        item: [{
            text: "我的录取",
            prefix: true,
            icon: "xueshengluqu",
            color: "#57bf7f"
          },
          {
            text: "我的单招",
            prefix: true,
            icon: "gangbi",
            color: "#ff5e5e"
          },
          {
            text: "我要报名",
            prefix: true,
            icon: "xueshengbaoming",
            color: "#1ebab5"
          },
          {
            text: "我的扩招",
            prefix: false,
            icon: "cluster-o",
            color: "#70cf08"
          },
          {
            text: "中职注册",
            prefix: true,
            icon: "zhuce",
            color: "#8c53f7"
          },
          {
            text: "我的继教",
            prefix: false,
            icon: "records",
            color: "#429bff"
          },
        ]
      },
      {
        title: "学籍",
        inset: true,
        item: [{
            text: "毕业证书",
            prefix: true,
            icon: "xuewei",
            color: "#ff4fc1"
          },
          {
            text: "证书领取",
            prefix: false,
            icon: "records",
            color: "#429bff"
          },
        ]
      },
      {
        title: "迎新",
        inset: true,
        item: [{
            text: "新生报道",
            prefix: true,
            icon: "check-in",
            color: "#187ef9"
          },

        ]
      },

      {
        title: "学工",
        inset: true,
        item: [{
            text: "完善资料",
            prefix: true,
            icon: "ziliaoku",
            color: "#1ebab5"
          },
          {
            text: "勤工俭学",
            prefix: false,
            icon: "gem-o",
            color: "#ff4fc1"
          },
          {
            text: "我的班级",
            prefix: true,
            icon: "banji",
            color: "#ff5e5e"
          },
          {
            text: "我的宿舍",
            prefix: true,
            icon: "sushe",
            color: "#187ef9"
          },
          {
            text: "教材领取",
            prefix: false,
            icon: "card",
            color: "#57bf7f"
          },
          {
            text: "我的银行卡  ",
            prefix: true,
            icon: "shu",
            color: "#ff5e5e"
          },
        ]
      },
      {
        title: "生活",
        inset: true,
        item: [{
          text: "新生报道",
          prefix: false,
          icon: "printer",
          color: "#187ef9"
        }, ]
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

  }
})