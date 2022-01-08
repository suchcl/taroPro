import { Component } from "react";
import { View, Text, Button } from "@tarojs/components";
import "./index.less";

export default class List extends Component {
  render() {
    return (
      <View>
        <Text>我是列表页面</Text>
        <Button>点击跳转</Button>
      </View>
    );
  }
}
