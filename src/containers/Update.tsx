import React from 'react'
import styled from 'styled-components'
import { Flex } from 'rebass'
import { size } from 'polished'
import { connect } from 'react-redux'
import { Form, Input, Button, Modal } from 'antd'

import Card from './Card'

const Root = styled(Flex)`
  flex-direction: column;
  height: 100%;
  padding: 12px 20px;
`

const Header = styled(Flex)`
  float: left;
  width: 100%;
  padding: 12px;
  background-color: #fff;
`

const Content = styled(Flex)`
  width: 100%;
  height: 100%;
  margin-top: 20px !important;
  padding: 12px;
  background-color: #fff;
`

const List = styled.ul`
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;
`

class Update extends React.Component<any, any> {
  state = {
    visible: true,
    data: {
      title: '帝霸',
      author: '厌笔萧生',
      bookImg: 'https://bookcover.yuewen.com/qdbimg/349573/3258971/180',
      bookIntro:
        '千万年前，李七夜栽下一株翠竹。八百万年前，李七夜养了一条鲤鱼。五百万年前，李七夜收养一个小女孩。今天，李七夜一觉醒来，翠竹修练成神灵，鲤鱼化作金龙，小女孩成为九界女帝。这是一个养成的故事，一个不死的人族小子养成了妖神、养成了仙兽、养成了女帝的故事。',
      update: '第3799章七耀夺天矛',
      update_time: '11小时前'
    }
  }

  showModal = () => {
    this.setState({
      visible: true
    })
  }
  handleCancel = (e: any) => {
    console.log(e)
    this.setState({
      visible: false
    })
  }

  handleSubmit() {}
  render() {
    return (
      <Root>
        <Header>
          <Form layout='inline' onSubmit={this.handleSubmit}>
            <Form.Item label='书名'>
              <Input placeholder='请输入书名' />
            </Form.Item>
            <Form.Item>
              <Button type='primary' htmlType='submit'>
                搜索
              </Button>
            </Form.Item>
          </Form>
        </Header>
        <Content></Content>
        <Modal
          title='书籍'
          visible={this.state.visible}
          footer={null}
          width='60%'
        >
          <List>
            <li>
              <Card data={this.state.data} />
            </li>
            <li>
              <Card data={this.state.data} />
            </li>
            <li>
              <Card data={this.state.data} />
            </li>
            <li>
              <Card data={this.state.data} />
            </li>
          </List>
        </Modal>
      </Root>
    )
  }
}

export default Update
