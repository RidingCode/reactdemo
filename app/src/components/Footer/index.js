import React from 'react'
import Home from '../../pages/Home'
import List from '../../pages/List'
import My from '../../pages/My'
import { TabBar } from 'antd-mobile'
import 'antd-mobile/dist/antd-mobile.css'
import './index.scss'


export default class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'HomeTab',
      hidden: false,
      fullScreen: true,
    };
  }

  render() {
    const homeSpan = <span className="iconfont icon-zhiboguanli" style={{width: '22px',height: '22px',fontSize: '22px'}}/>
    const courseSpan = <span className="iconfont icon-book" style={{width: '22px',height: '22px',fontSize: '22px'}}/>
    const listSpan = <span className="iconfont icon-bofang" style={{width: '22px',height: '22px',fontSize: '22px'}}/>
    const mySpan = <span className="iconfont  icon-gerenyonghutouxiang2" style={{width: '22px', height: '22px',fontSize: '22px'}} /> 
    return (
      <div style={this.state.fullScreen ? { position: 'fixed', height: 'calc(100% - 45px)', width: '100%', top: '45px' } : { height: 400 }}>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
          hidden={this.state.hidden}
        >
          <TabBar.Item
            title="直播大厅"
            key="Home"
            icon={homeSpan}
            selectedIcon={homeSpan}
            selected={this.state.selectedTab === 'HomeTab'}
            badge={''}
            onPress={() => {
              this.setState({
                selectedTab: 'HomeTab',
              });
            }}
            data-seed="logId"
          >
            <Home />
          </TabBar.Item>
          <TabBar.Item
            icon={courseSpan}
            selectedIcon={courseSpan}
            title="我的课程"
            key="Course"
            badge={''}
            selected={this.state.selectedTab === 'CourseTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'CourseTab',
              });
            }}
            data-seed="logId1"
          >
            <List />
          </TabBar.Item>
          <TabBar.Item
            icon={listSpan}
            selectedIcon={listSpan}
            title="播放列表"
            key="List"
            badge={''}
            selected={this.state.selectedTab === 'ListTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'ListTab',
              });
            }}
          >
            {/* {this.renderContent('List')} */}播放列表
          </TabBar.Item>
          <TabBar.Item
            icon={mySpan}
            selectedIcon={ mySpan}
            title="个人中心"
            key="My"
            selected={this.state.selectedTab === 'MyTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'MyTab',
              });
            }}
          >
            <My />
          </TabBar.Item>
        </TabBar>
      </div>
    );
  }
}