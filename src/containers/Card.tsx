import React from 'react'
import styled from 'styled-components'
import { Card } from 'antd'
import { Flex, Image } from 'rebass'

const Container = styled(Flex)``
const Book = styled(Flex)`
  flex-direction: column;
`

export default (props: any) => {
  const { title, author, bookImg, bookIntro, update, update_time } = props.data
  return (
    <Container>
      <Image
        src={bookImg}
        sx={{
          width: '144px',
          height: '192px',
          borderRadius: 8
        }}
      />
      <Book>
        <p>{title}</p>
        <p>
          <span>作者</span>
          <span>{author}</span>
        </p>
        <p>{bookIntro}</p>
        <p>
          <span>最新章节</span>
          <span>{update}</span>
          <span>{update_time}</span>
        </p>
      </Book>
    </Container>
  )
}
