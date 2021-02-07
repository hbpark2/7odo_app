import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  position: absolute; /* 추후 박스 하단에 추가 버튼을 위치시키기 위한 설정 */
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  width: 50vw;
  height: 85vh;
  background: #555;
  border-radius: 16px;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);
`

const TodoPresenter = ({children}) => {
  return <Container>{children}</Container>
}

export default TodoPresenter
