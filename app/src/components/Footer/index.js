import React from 'react'
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

  // renderContent(pageText) {
  //   return (
  //     <div style={{ backgroundColor: 'white', height: '100%', textAlign: 'center' }}>
  //       <div style={{ paddingTop: 60 }}>Clicked “{pageText}” tab， show “{pageText}” information</div>
  //       <a style={{ display: 'block', marginTop: 40, marginBottom: 20, color: '#108ee9' }}
  //         onClick={(e) => {
  //           e.preventDefault();
  //           this.setState({
  //             hidden: !this.state.hidden,
  //           });
  //         }}
  //       >
  //         Click to show/hide tab-bar
  //       </a>
  //       <a style={{ display: 'block', marginBottom: 600, color: '#108ee9' }}
  //         onClick={(e) => {
  //           e.preventDefault();
  //           this.setState({
  //             fullScreen: !this.state.fullScreen,
  //           });
  //         }}
  //       >
  //         Click to switch fullscreen
  //       </a>
  //     </div>
  //   );
  // }

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
            {/* {this.renderContent('Home')} */}
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
            {/* {this.renderContent('Course')} */}
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
            {/* {this.renderContent('List')} */}
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
            {/* {this.renderContent('my')} */}
          </TabBar.Item>
        </TabBar>
      </div>
    );
  }
}