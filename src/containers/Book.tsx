/// <reference path="../typings/form.d.ts" />
import React from 'react'
import styled from 'styled-components'
import { Flex } from 'rebass'
import { Form, Input, Select, Button, Table } from 'antd'

const { Option } = Select
// import { size } from 'polished'
// import { connect } from 'react-redux'

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

class Book extends React.Component<any, any> {
  columns = [
    {
      title: '书名',
      dataIndex: 'bookname',
      key: 'bookname',
    },
    {
      title: '分类',
      dataIndex: 'major',
      key: 'major'
    },
    {
      title: '更新时间',
      dataIndex: 'update',
      key: 'update'
    },
    {
      title: '最新章节',
      dataIndex: 'latest_chapter',
      key: 'latest_chapter',
      render: (text: string) => (
          <a>{text}</a>
      )
    },
    {
      title: 'Action',
      key: 'action',
      render: (text: string, record: any) => (
        <span>
          <a>立即阅读</a>
        </span>
      )
    }
  ]

  data = [
    {
      key: '1',
      bookname: '帝霸',
      major: '玄幻',
      update: '2019-10-01 12:00:00',
      latest_chapter: '第3784章 我种一棵树'
    },
    {
      key: '2',
      bookname: '凡人修仙传',
      major: '修真',
      update: '2019-10-01 12:00:00',
      latest_chapter: '第3784章 我种一棵树'
    },
    {
      key: '3',
      bookname: '小李飞刀',
      major: '武侠',
      update: '2019-10-01 12:00:00',
      latest_chapter: '第3784章 我种一棵树'
    }
  ]
  handleSubmit() {}
  handleChange() {}
  render() {
    return (
      <Root>
        <Header>
          <Form layout='inline' onSubmit={this.handleSubmit}>
            <Form.Item label='书名'>
              <Input placeholder='请输入书名' />
            </Form.Item>
            <Form.Item label='分类'>
              <Select
                defaultValue='0'
                style={{ width: 120 }}
                onChange={this.handleChange}
              >
                <Option value='0'>全部</Option>
                <Option value='1'>玄幻</Option>
                <Option value='2'>武侠</Option>
                <Option value='3'>修真</Option>
                <Option value='4'>都市</Option>
                <Option value='5'>穿越</Option>
                <Option value='6'>网游</Option>
                <Option value='7'>科幻</Option>
              </Select>
            </Form.Item>
            <Form.Item>
              <Button type='primary' htmlType='submit'>
                搜索
              </Button>
            </Form.Item>
          </Form>
        </Header>
        <Content>
          <Table
            style={{ width: '100%' }}
            columns={this.columns}
            dataSource={this.data}
          />
        </Content>
      </Root>
    )
  }
}
export default Book
