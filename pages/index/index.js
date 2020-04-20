Page({

  /**
   * 页面的初始数据
   */
  data: {

    currentIndexNav:0,
    navList:[],
    swiperList:[],
    videoList:[],
  },
  // navList指定当前选中
  activeNav(e){
    // console.log(111);
    this.setData({
      currentIndexNav:e.target.dataset.index
    })
  },

  getNavList(){

    let that = this;
    let request = wx.request({
      url: 'http://mock-api.com/mnEe4VnJ.mock/navList',
      data: {},
      header: {'content-type':'application/json'},
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: (result)=>{
        // console.log(result);
        if(result.data.code===0) {
          that.setData({
            navList:result.data.data.navList
          })
        }
      },
      fail: ()=>{},
      complete: ()=>{}
    });
  },
  // 获取轮播图
  getSwiperList(){

    let request = wx.request({
      url: 'http://mock-api.com/mnEe4VnJ.mock/swiperList',
      data: {},
      header: {'content-type':'application/json'},
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: (result)=>{
        // console.log(result);
        if(result.data.code===0) {
          this.setData({
            swiperList:result.data.data.swiperList
          })
        }
      },
      fail: ()=>{},
      complete: ()=>{}
    });
  },

  getVideoList(){

    let request = wx.request({
      url: 'http://mock-api.com/mnEe4VnJ.mock/videoList',
      data: {},
      header: {'content-type':'application/json'},
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: (result)=>{
        console.log(result)
        if(result.data.code===0) {
          this.setData({
            videoList:result.data.data.videoList
          })
        }
      },
      fail: ()=>{},
      complete: ()=>{}
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
    this.getNavList();
    this.getSwiperList();
    this.getVideoList();
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