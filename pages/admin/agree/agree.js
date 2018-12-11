// pages/admin/agree/agree.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    active: true,
    array1: [{ "activityId":"123456789","theme": "未名四苑读书会", "floor": "一号楼","classroomId":"1208", "time": "2018-15-21","mae":"上午","apppyname":"李国才","applypart":"学工部","number":"250","introduce":"xxxxxxxxxxxxxxxxxxx" },
      { "theme": "未名四苑读书会", "floor": "一号楼", "classroomId": "1208", "time": "2018-15-21", "mae": "上午", "apppyname": "李国才", "applypart": "学工部", "number": "250", "introduce": "xxxxxxxxxxxxxxxxxxx" },
      { "theme": "未名四苑读书会", "floor": "一号楼", "classroomId": "1208", "time": "2018-15-21", "mae": "上午", "apppyname": "李国才", "applypart": "学工部", "number": "250", "introduce": "xxxxxxxxxxxxxxxxxxx" },
      { "theme": "未名四苑读书会", "floor": "一号楼", "classroomId": "1208", "time": "2018-15-21", "mae": "上午", "apppyname": "李国才", "applypart": "学工部", "number": "250", "introduce": "xxxxxxxxxxxxxxxxxxx" }, 
      { "theme": "未名四苑读书会", "floor": "一号楼", "classroomId": "1208", "time": "2018-15-21", "mae": "上午", "apppyname": "李国才", "applypart": "学工部", "number": "250", "introduce": "xxxxxxxxxxxxxxxxxxx" }
       ],
    array2: [{ "activityId": "123456789", "theme": "未名四苑读书会", "floor": "一号楼", "classroomId": "1208", "time": "2018-15-21", "mae": "上午", "apppyname": "李国才", "applypart": "学工部", "number": "250", "introduce": "xxxxxxxxxxxxxxxxxxx" },
    { "theme": "未名四苑读书会", "floor": "一号楼", "classroomId": "1208", "time": "2018-15-21", "mae": "上午", "apppyname": "李国才", "applypart": "学工部", "number": "250", "introduce": "xxxxxxxxxxxxxxxxxxx" },
    { "theme": "未名四苑读书会", "floor": "一号楼", "classroomId": "1208", "time": "2018-15-21", "mae": "上午", "apppyname": "李国才", "applypart": "学工部", "number": "250", "introduce": "xxxxxxxxxxxxxxxxxxx" },
    { "theme": "未名四苑读书会", "floor": "一号楼", "classroomId": "1208", "time": "2018-15-21", "mae": "上午", "apppyname": "李国才", "applypart": "学工部", "number": "250", "introduce": "xxxxxxxxxxxxxxxxxxx" },
    { "theme": "未名四苑读书会", "floor": "一号楼", "classroomId": "1208", "time": "2018-15-21", "mae": "上午", "apppyname": "李国才", "applypart": "学工部", "number": "250", "introduce": "xxxxxxxxxxxxxxxxxxx" }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // var a = "{'userId':'李国才','type':'check'}";
    // wx.request({
    //   url: 'http://test.com:8080/test/socket.php?msg=2',
    //   data: a,
    //   header: {
    //     'Content-Type': 'application/json'
    //   },
    //   success: function (res) {
    //     console.log(res.data);
    //     this.data.array1=res.data;
    //   }
    // });  

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
  /**
   * 待审核处理事件
   */
  waitCheck: function (e) {
    this.setData({
      active: true
    });
  },
  goCheck:function(e){
    // 把要传递的json对象转换成字符串
    var checkImg = JSON.stringify(this.data.array1[e.currentTarget.dataset.text]);
    console.log(checkImg);
    wx.navigateTo({
      url: "../../../../activityDetail/activityDetail?checkImg="+checkImg
    })
  },


  /**
   * 审核历史事件
   */
  historyCheck:function(e){
    // var a = "{'userId':'李国才','type':'history'}";
    // var b=[];
    // wx.request({
    //   url: 'http://test.com:8080/test/socket.php?msg=2',
    //   data: a,
    //   header: {
    //     'Content-Type': 'application/json'
    //   },
    //   success: function (res) {
    //     console.log(res.data);
    //     b=res.data;
    //   }
    // }); 
    this.setData({
      active: false,
      // array2 :b
    });
  },
  gohistory:function(e){
    // 把要传递的json对象转换成字符串
    var checkImg = JSON.stringify(this.data.array2[e.currentTarget.dataset.text]);
    console.log(checkImg);
    wx.navigateTo({
      url: "../../../../history/history?checkImg=" + checkImg
    })
  }
})