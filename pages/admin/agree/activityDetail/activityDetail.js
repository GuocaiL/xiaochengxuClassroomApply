// pages/admin/agree/activityDetail/activityDetail.js
Page({

  

  /**
   * 页面的初始数据
   */
  data: {
    activityId:"123456",
    theme: "未名四苑读书会", 
    floor: "一号楼",
    classroomId: "1208",
    time: "2018-15-21", 
    mae: "上午",
    apppyname: "李国才",
    applypart: "学工部",
    number: "250",
    introduce: "xxxxxxxxxxxxxxxxxxx"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 把接收到的字符串转换成json对象
    var userInfo = JSON.parse(options.checkImg);
    this.data.activityId=userInfo["activityId"];
    this.data.theme = userInfo["theme"];
    this.data.floor = userInfo["floor"];
    this.data.classroomId = userInfo["classroomId"];
    this.data.time = userInfo["time"];
    this.data.mae = userInfo["mae"];
    this.data.apppyname = userInfo["apppyname"];
    this.data.number = userInfo["number"];
    this.data.introduce = userInfo["introduce"];

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

  agree: function(){

    var a = '';
    wx.request({
      url: 'http://test.com:8080/test/socket.php?activityId=' + this.data.activityId +'&type=1',
      data: a,
      header: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        console.log(res.data);
      }
    });
    wx.navigateBack();   
  },
  reject: function () {
    wx.request({
      url: 'http://test.com:8080/test/socket.php?activityId='+this.data.activityId+"&type=-1",
      data: a,
      header: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        console.log(res.data);
      }
    });
    wx.navigateBack();
  }
})