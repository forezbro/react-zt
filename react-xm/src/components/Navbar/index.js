import { withRouter } from "react-router-dom";
import React, { Component } from "react";
import { Menu, Icon, } from "antd";
import "./index.scss";
const SubMenu = Menu.SubMenu;
class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  // 路由跳转
  option1 = () => {
    this.props.history.push("/home")
  };
  option2 = () => {
    this.props.history.push("/list")
  };
  render() {
    return (
      <div className="navbar">
        {/* <Button type="primary" onClick={this.toggleCollapsed} style={{ marginBottom: 16 }}>
            <Icon type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} />
          </Button> */}
        <Menu
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          mode="inline"
          theme="dark"
          inlineCollapsed={this.state.collapsed}
        >
          <Menu.Item key="1" onClick={this.option1}>
            <Icon type="pie-chart" />
            <span>Option 1</span>
          </Menu.Item>
          <Menu.Item key="2" onClick={this.option2}>
            <Icon type="desktop" />
            <span>Option 2</span>
          </Menu.Item>
          <Menu.Item key="3">
            <Icon type="inbox" />
            <span>Option 3</span>
          </Menu.Item>
          <SubMenu
            key="sub1"
            title={
              <span>
                <Icon type="mail" />
                <span>Navigation One</span>
              </span>
            }
          >
            <Menu.Item key="5">Option 5</Menu.Item>
            <Menu.Item key="6">Option 6</Menu.Item>
            <Menu.Item key="7">Option 7</Menu.Item>
            <Menu.Item key="8">Option 8</Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub2"
            title={
              <span>
                <Icon type="appstore" />
                <span>Navigation Two</span>
              </span>
            }
          >
            <Menu.Item key="9">Option 9</Menu.Item>
            <Menu.Item key="10">Option 10</Menu.Item>
            <SubMenu key="sub3" title="Submenu">
              <Menu.Item key="11">Option 11</Menu.Item>
              <Menu.Item key="12">Option 12</Menu.Item>
            </SubMenu>
          </SubMenu>
        </Menu>
      </div >
    );
  }
}
Navbar.defaultProps = {
  navs: [{ id: 1, path: "/home" }, { id: 2, path: "/list" }]

};
export default withRouter(Navbar);
