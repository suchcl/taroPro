import { Component } from 'react'
import './app.less'

class App extends Component {

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // this.props.children 是将要会渲染的页面
  render () {
    console.log(1111);
    console.log(this.props);
    console.log(222);
    return this.props.children
  }
}

export default App
