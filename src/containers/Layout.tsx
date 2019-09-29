import React from 'react'
import { connect } from 'react-redux'
import { Route, Redirect, NavLink } from 'react-router-dom'
import { Switch } from 'react-router'
import { Layout, Menu, Icon, Row, Col } from 'antd'

import Book from './Book'

import styles from '../style/layout.module.scss'

const { Header, Sider, Content } = Layout

class LayoutPage extends React.Component {
  render() {
    return (
      <>
        <Layout className={styles.layout}>
          <Header style={{ backgroundColor: '#fff' }}>
            <Row type='flex' justify='space-between' align='middle'>
              <Col span={4}>
                <Icon type='book' style={{marginRight: '10px'}}/>
                爱读
              </Col>
              <Col span={4} style={{ textAlign: 'right' }}>
                <Icon type='setting' style={{ cursor: 'pointer' }} />
              </Col>
            </Row>
          </Header>
          <Layout>
            <Sider>
              <Menu
                mode='inline'
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                style={{ height: '100%', borderRight: 0 }}
              >
                <Menu.Item key='1'>
                  <NavLink to='/book'>
                    <Icon type='unordered-list' />
                    书籍总览
                  </NavLink>
                </Menu.Item>
                <Menu.Item key='2'>
                  <NavLink to='/setting'>
                    <Icon type='setting' />
                    书籍管理
                  </NavLink>
                </Menu.Item>
              </Menu>
            </Sider>
            <Content>
              <Switch>
                <Route exact path='/' render={() => <Redirect to='/book' />} />
                <Switch>
                  <Route path='/book' component={Book} />
                </Switch>
              </Switch>
            </Content>
          </Layout>
        </Layout>
      </>
    )
  }
}

export default connect(state => ({}))(LayoutPage)
