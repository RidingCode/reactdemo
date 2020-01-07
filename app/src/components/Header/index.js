import React from 'react'
import { Popover, NavBar } from 'antd-mobile';
// import ColorBox from '../ColorBox'
// import 'antd-mobile/dist/antd-mobile.css'
import './index.scss'


const Item = Popover.Item;

export default class Header extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      visible: false,
      selected: 'blue',
      theme:'dark'
    }

  }
  onSelect = (opt) => {
    this.setState({
      visible: false,
      selected: opt.props.value,
      theme:opt.props.value,
    });
  }
  handleVisibleChange = (visible) => {
    console.log(visible)
    this.setState({
      visible,
    });
  }
  render(){
    const colorBtnSty = {height:'40px',width:'40px',fontSize:'30px',textAlign:'center',lineHeight:'40px'}
    return (
      <NavBar
        mode={this.state.theme}
        icon={<span className='logoSpan'>Logo Name</span>}
        onLeftClick={() => console.log('onLeftClick')}
        rightContent={[
          <p key='0' className='username' style={{padding:'0 20px'}}>姓名</p>,
          <Popover  key='1' mask
              overlayClassName="fortest"
              overlayStyle={{ color: 'currentColor' }}
              visible={this.state.visible}
              overlay={[
                (<Item key="1" value="dark" icon={<div style={{height:'20px',backgroundColor:'#108ee9'}}></div>}>默认(深色)</Item>),
                (<Item key="2" value="light" icon={<div style={{height:'20px',backgroundColor:'#fff',border:'1px solid #000'}}></div>}>白</Item>),
                // (<Item key="3" value="black" icon={<div style={{height:'20px',backgroundColor:'#000'}}></div>}>黑</Item>),
                // (<Item key="4" value="red" icon={<div style={{height:'20px',backgroundColor:'#720b0b'}}></div>}>红</Item>),
              ]}
              align={{
                overflow: { adjustY: 0, adjustX: 0 },
                offset: [-10, 0],
              }}
              onVisibleChange={this.handleVisibleChange}
              onSelect={this.onSelect}
            >
              <div style={{
                    height: '100%',
                    padding: '0',
                    marginRight: '-15px',
                    display: 'flex',
                    alignItems: 'center',
                  }}
              >
                <span className='iconfont icon-yanse' style={colorBtnSty} />
              </div>
            </Popover>
        ]}
      />
    )
  }
}