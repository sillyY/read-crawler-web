import React from 'react'
import { connect } from 'react-redux'
import { Button } from 'antd';

class Layout extends React.Component {
  render() {
    return <>
    {/* {this.props.children} */}
    <Button type="primary">Primary</Button>
    <Button>Default</Button>
    <Button type="dashed">Dashed</Button>
    <Button type="danger">Danger</Button>
    <Button type="link">Link</Button>
    </>
  }
}

export default connect(state => ({}))(Layout)
