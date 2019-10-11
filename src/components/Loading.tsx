import React from 'react'
import styled from 'styled-components'
import { Flex } from 'rebass'
import { Spin } from 'antd'

const Container = styled(Flex)`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 160px;
  height: 160px;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
  .ant-spin-text {
    color: #fff;
  }
  i {
    background-color: #fff;
  }
`

export default ({ tip }: any) => (
  <Container>
    <Spin tip={tip} />
  </Container>
)
