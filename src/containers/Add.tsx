import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { Flex } from 'rebass'
import { Row, Input, Button } from 'antd'

import styles from '../style/layout.module.scss'

import * as actions from '../actionTypes/index'

const Root = styled(Flex)`
  flex-direction: column;
  height: 100%;
  padding: 12px 20px;
`

const Content = styled(Flex)`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  margin-top: 20px !important;
  padding: 12px;
  background-color: #fff;
`

const Container = styled(Flex)`
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

class Add extends React.Component<any, any> {
  handleSubmit = () => {
    const { dispatch } = this.props
    dispatch({
      type: actions.SET_LOADING,
      payload: {
        visible: true,
        tip: '加载中...'
      }
    })
  }
  render() {
    return (
      <Root>
        <Content>
          <Container>
            <Row>
              <Input
                size='large'
                addonBefore='书名'
                placeholder='请输入检索书名'
              />
            </Row>
            <Row className={styles.mt20}>
              <Button
                type='danger'
                icon='search'
                htmlType='submit'
                onClick={this.handleSubmit}
              >
                搜索
              </Button>
            </Row>
          </Container>
        </Content>
      </Root>
    )
  }
}

export default connect((state: any) => ({
  loading: state.common.loading
}))(Add)
