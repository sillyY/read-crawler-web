import React from 'react'
import styled from 'styled-components'
import { Flex } from 'rebass'
import { Spin, Icon } from 'antd'

const Container = styled(Flex)`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  /* width: 160px;
  height: 160px; */
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
  .ant-spin-text {
    color: #fff;
  }
  i {
    background-color: #fff;
  }
`
const Close = styled(Icon)`
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
`

export default ({ tip, closed }: any) => (
  <Container>
    <Close type="close" style={{ backgroundColor: 'transparent', fontSize: '24px', color: '#fff' }} onClick={closed}/>
    <Spin tip={tip} />
  </Container>
)
