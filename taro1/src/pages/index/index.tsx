import Taro from "@tarojs/taro";
import { Component } from "react";
import { View, Text, Button } from "@tarojs/components";
import "./index.less";

export default class Index extends Component {
  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}
  toList = () => {
    Taro.navigateTo({
      url: "/pages/list/index",
    });
  };
  render() {
    return (
      <View className="index">
        <Text>Hello world!</Text>
        <Button className="btn" onClick={this.toList}>点击按钮去列表页</Button>
      </View>
    );
  }
}
