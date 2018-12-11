// pages/admin/adminclassroom/adminclassroom.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    active:true,
    array:["一号楼","二号楼","三号楼"],
    toast1Hidden: true,
    modalHidden: true,
    modalHidden2: true,
    notice_str: '',
    index: 0,
    array1:[
      {"floor":"一号楼","classroomId":"3302"},
      { "floor": "一号楼", "classroomId": "3302" },
      { "floor": "一号楼", "classroomId": "3302" }
    ]
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
    this.data.active=true
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
   * 添加教室选项
   */
  addClassroom:function(e){  
      this.setData({
        active: true
      });
  },
  toast1Change: function (e) {
    this.setData({ toast1Hidden: true });
  },
  //弹出确认框
  modalTap: function (e) {
    this.setData({
      modalHidden: false
    })
  },
  confirm_one: function (e) {
    console.log(e);
    this.setData({
      modalHidden: true,
      toast1Hidden: false,
      notice_str: '提交成功'
    });
  },
  cancel_one: function (e) {
    console.log(e);
    this.setData({
      modalHidden: true,
      toast1Hidden: false,
      notice_str: '取消成功'
    });
  },
  //弹出提示框
  modalTap2: function (e) {
    this.setData({
      modalHidden2: false
    })
  },
  modalChange2: function (e) {
    this.setData({
      modalHidden2: true
    })
  },
  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },
  formSubmit: function (e) {
    var that = this;
    var formData = e.detail.value;
    console.log(formData);
    wx.request({
      url: 'http://test.com:8080/test/socket.php?msg=2',
      data: formData,
      header: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        console.log(res.data);
        that.modalTap();
      }
    })
  },
  formReset: function () {
    console.log('form发生了reset事件');
    this.modalTap2();
  },
  /**
   * 删除教室选项
   */
  deleteClassroom:function(e){
    // var requestClassroom="{'userId':'李国才'}";
    // var arr="";
    // wx.request({
    //   url: 'http://test.com:8080/test/socket.php?msg=2',
    //   data: requestClassroom,
    //   header: {
    //     'Content-Type': 'application/json'
    //   },
    //   success: function (res) {
    //     console.log(res.data);
    //     arr=res.data;
    //   }
    // });   
    this.setData({
        // array1:arr,
        active: false
      });
  },
  removeClassroom:function(e){
    var a = e.currentTarget.dataset.text;
    console.log(this.data.array1[a]);
    var data2 = this.data.array1[a];
    var arr="";
    wx.request({
      url: 'http://test.com:8080/test/socket.php?msg=2',
      data: data2,
      header: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        console.log(res.data);
        arr=res.data;
      }
    });  
    this.setData({
      // array1:arr,
    });
  }

})