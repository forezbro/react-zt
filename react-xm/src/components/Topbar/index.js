import React, { Component } from "react";
import { Icon } from "antd";
import { withRouter } from "react-router-dom";
import "./index.scss";

class Topbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
      isFullScreen: false,
      Fullscreen: "全屏"
    };
  }
  componentDidMount = () => {
    this.watchFullScreen();
  };

  fullScreen = () => {
    console.log("fullscreen:", this.state.isFullScreen);
    if (!this.state.isFullScreen) {
      this.requestFullScreen();
    } else {
      this.exitFullscreen();
    }
  };

  //进入全屏
  requestFullScreen = () => {
    console.log(1);
    this.setState({
      Fullscreen: "网页"
    });
    console.log("requestFullScreen");
    var de = document.documentElement;
    if (de.requestFullscreen) {
      de.requestFullscreen();
    } else if (de.mozRequestFullScreen) {
      de.mozRequestFullScreen();
    } else if (de.webkitRequestFullScreen) {
      de.webkitRequestFullScreen();
    }
  };

  //退出全屏
  exitFullscreen = () => {
    console.log("exitFullscreen");
    var de = document;
    if (de.exitFullscreen) {
      de.exitFullscreen();
    } else if (de.mozCancelFullScreen) {
      de.mozCancelFullScreen();
    } else if (de.webkitCancelFullScreen) {
      de.webkitCancelFullScreen();
    }
  };

  //监听fullscreenchange事件
  watchFullScreen = () => {
    const _self = this;
    document.addEventListener(
      "webkitfullscreenchange",
      function () {
        _self.setState({
          isFullScreen: document.webkitIsFullScreen
        });
      },
      false
    );
  };

  //收起导航菜单
  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };

  render() {
    return (
      <div className="Topbar">
        <ul className="fx fx-x-between fx-y-center">
          <li onClick={this.toggleCollapsed}>
            <Icon type={this.state.collapsed ? "menu-unfold" : "menu-fold"} />
          </li>
          <li>
            <span onClick={this.fullScreen}>{this.state.Fullscreen}</span>
            {!this.state.collapsed && <span>消息{this.props.name}</span>}
            <span>头像{this.props.name1}</span>
          </li>
        </ul>
      </div>
    );
  }
}

export default withRouter(Topbar);
