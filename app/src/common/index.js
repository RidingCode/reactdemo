import { Component } from 'react'

(function (owner) {
  owner.URL = '/Ajax/Anonymous.ashx?rand=DFdg8' //local
  owner.requestData = (url, param) => {
    return {
      ApiUrl: url,
      RequestData: JSON.stringify(param),
      Echostr: '2RSDHZ83'
    };
  }
  owner.setCookie = (name, value) => {
    var Days = 30;
    var exp = new Date();
    exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
    document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString() + ';path=/';
  }
  owner.getCookie = name => {
    var reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
    var arr = document.cookie.match(reg)
    if (arr)
      return unescape(arr[2]);
    else
      return null;
  }
  owner.delCookie = name => {
    var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    var cval = owner.getCookie(name);
    if (cval != null)
      document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
  }
  owner.sayhello = () => {
    console.log('hhhhhh')
  }

}(Component.prototype.common = {}))//公共方法挂载到Component上
