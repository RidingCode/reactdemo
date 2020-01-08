import React from 'react'
import { List, InputItem, WhiteSpace } from 'antd-mobile';
import { createForm } from 'rc-form';

export default class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {}
  }

  render(){
    const { getFieldProps } = this.props.form;
    return (
      <div>
        <List renderHeader={() => 'Format'}>
          <InputItem
            {...getFieldProps('bankCard', {
              initialValue: '8888 8888 8888 8888',
            })}
            type="bankCard"
          >银行卡</InputItem>
            <InputItem
            {...getFieldProps('phone')}
            type="phone"
            placeholder="186 1234 1234"
          >手机号码</InputItem>
          <InputItem
            {...getFieldProps('password')}
            type="password"
            placeholder="****"
          >密码</InputItem>
          <InputItem
            {...getFieldProps('number')}
            type="number"
            placeholder="click to show number keyboard"
          >数字键盘</InputItem>
          <InputItem
            {...getFieldProps('digit')}
            type="digit"
            placeholder="click to show native number keyboard"
          >数字键盘</InputItem>
        </List>

      </div>
    )
  }
}