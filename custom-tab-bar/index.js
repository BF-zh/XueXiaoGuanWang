Component({
	data: {
		active: 0,
		list: [
			{
				icon: 'goods-collect-o',
				text: '首页',
				url: '/pages/home/index'
			},
			{
				icon: 'logistics',
				text: "应用管理",
				url: '/pages/manage/index'
			},
			{
				icon: 'user-circle-o',
				text: "个人中心",
				url: '/pages/mine/index'
			},
		]
	},

	methods: {
		onChange(event) {
      this.setData({ active: event.detail });
			wx.switchTab({
        url: this.data.list[event.detail].url
			});
		},

		init() {
      const page = getCurrentPages().pop();
			this.setData({
				active: this.data.list.findIndex(item => item.url === `/${page.route}`)
			});
		}
	}
});
