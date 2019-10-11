import React from 'react'
import { connect } from 'react-redux'
import { Route, Redirect, NavLink, withRouter } from 'react-router-dom'
import { Switch } from 'react-router'
import { Layout, Menu, Icon, Row, Col } from 'antd'

import Loading from '../components/Loading'
import Book from './Book'
import Add from './Add'
import Update from './Update'

import styles from '../style/layout.module.scss'

const { Header, Sider, Content } = Layout
const { SubMenu } = Menu

class LayoutPage extends React.Component<any, any> {
  toggleRouter() {
    var pathname = this.props.location.pathname
    return pathname === '/add' ? ['2'] : pathname === '/update' ? ['3'] : ['1']
  }
  render() {
    const { loading } = this.props
    return (
      <>
        {loading.visible && <Loading tip={loading.tip} />}
        <Layout className={styles.layout}>
          <Header style={{ backgroundColor: '#fff' }}>
            <Row type='flex' justify='space-between' align='middle'>
              <Col span={4}>
                <Icon type='book' style={{ marginRight: '10px' }} />
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
                defaultSelectedKeys={this.toggleRouter()}
                defaultOpenKeys={['setting']}
                style={{ height: '100%', borderRight: 0 }}
              >
                <Menu.Item key='1'>
                  <NavLink to='/book'>
                    <Icon type='unordered-list' />
                    书籍总览
                  </NavLink>
                </Menu.Item>
                <SubMenu
                  key='setting'
                  title={
                    <span>
                      <Icon type='setting' />
                      <span>书籍管理</span>
                    </span>
                  }
                >
                  <Menu.Item key='2'>
                    <NavLink to='/add'>
                      <Icon type='plus' />
                      书籍新增
                    </NavLink>
                  </Menu.Item>
                  <Menu.Item key='3'>
                    <NavLink to='/update'>
                      <Icon type='redo' />
                      书籍更新
                    </NavLink>
                  </Menu.Item>
                </SubMenu>
                {/* <Menu.Item key='2'>
                  <NavLink to='/setting'>
                    <Icon type='setting' />
                    书籍管理
                  </NavLink>
                </Menu.Item> */}
              </Menu>
            </Sider>
            <Content>
              <Switch>
                <Route exact path='/' render={() => <Redirect to='/book' />} />
                <Switch>
                  <Route path='/book' component={Book} />
                  <Route path='/add' component={Add} />
                  <Route path='/update' component={Update} />
                </Switch>
              </Switch>
            </Content>
          </Layout>
        </Layout>
      </>
    )
  }
}

export default withRouter(connect((state: any) => ({
  loading: state.common.loading,
}))(LayoutPage) as any)
