/**
 * @file main.js
 * @author xuguixin0624@gmail.com
 * @description 主页面
 */
import API from "../../api/api.js";
var app = getApp();
Page({
  data:{
    isAdmin: false
  },
  onLoad (){
    this.data.isAdmin = app.globalData.isAdmin;
    console.log(this.data.isAdmin);
    // 生命周期函数--监听页面加载
    var meetingroomsTemp = [{ id: 'one', name: '第一会议室', initial: '北京' }, { id: 'two', name: '第二会议室', initial: '北京' }, { id: 'two', name: '深圳会议室', initial: '深圳' }, { id: 'two', name: '广州会议室', initial: '广州' }];
    app.updateMeetingrooms(meetingroomsTemp);
    this.setData({
      isAdmin: app.globalData.isAdmin
    });
  },
  scan() {
    //扫码事件
    wx.scanCode({
      success: function(res) {
        wx.navigateTo({
          url: "../scan/scan"
        })
      },
      fail: function(res) {
        wx.showToast({
          title: '扫码失败',
          image: '../../images/failmsg.png',
          duration: 2000
        })
      }
    })
  }, 
  local() {
    wx.navigateTo({
      url: "../booking/booking"
    })
  },
  remote() {
    wx.navigateTo({
      url: "../activity/activity"
    })
  },
  schedule() {
    wx.navigateTo({
      url: "../mybooking/mybooking"
    })
  },
  addClassroom:function(e){
    wx.navigateTo({
      url: '../admin/adminclassroom/adminclassroom',
    })
  },
  waitAgree:function(e){
    wx.navigateTo({
      url: '../admin/agree/agree',
    })
  }
})
