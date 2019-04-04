import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Menu, Icon, Button } from "antd";
import "./index.scss";
const SubMenu = Menu.SubMenu;
class Navbar extends Component {
  state = {
    collapsed: false
  };
  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };
  render() {
    return (
      <div className="navbar fx">
        <div className="aside" >
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
            <Menu.Item key="1">
              <Icon type="pie-chart" />
              <span>Option 1</span>
            </Menu.Item>
            <Menu.Item key="2">
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
        </div>
        <div className="header">
          <ul className="fx fx-around">
            <li onClick={this.toggleCollapsed} style={{ marginBottom: 16 }}>
              <Icon type={this.state.collapsed ? "menu-unfold" : "menu-fold"}/>
            </li>
            <li>
              <span>全屏</span>
              <span>消息</span>
              <span>头像</span>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
Navbar.defaultProps = {
  navs: [
    { id: 1, title: "首页", icon: "home", path: "/home", exact: true },
    { id: 2, title: "列表", icon: "th", path: "/list" },
    { id: 3, title: "购物", icon: "shopping-cart", path: "/cars" },
    { id: 4, title: "我的", icon: "globe", path: "/mine" }
  ]
};
export default Navbar;
