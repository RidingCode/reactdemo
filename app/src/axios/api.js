import { Component } from 'react'

const Api = {
  /************************  公共URL *****************************/
  COMMON_API: '/Ajax/Anonymous.ashx?rand=DFdg8',//local

  /*************************  私有URL ************/
  LOGIN_API: 'TecLogin/Login',//登录
  GETINFO_API: 'TecMy/GetTeacherInfo',//获取用户信息
}

Component.prototype.Api = Api