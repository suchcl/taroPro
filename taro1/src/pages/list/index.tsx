import Taro from "@tarojs/taro";
import { Component } from "react";
import { View, Text, Button } from "@tarojs/components";
import "./index.less";

export default class List extends Component {
  toHome = () => {
    Taro.navigateTo({
      url: "/pages/index/index",
    });
  };
  render() {
    return (
      <View>
        <Text>我是列表页面</Text>
        <Button className="btn" onClick={this.toHome}>点击去首页</Button>
      </View>
    );
  }
}
