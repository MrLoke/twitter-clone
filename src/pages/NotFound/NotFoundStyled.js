import { Link } from 'react-router-dom'
import styled from 'styled-components/macro'

export const NotFoundWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.primaryBg};
  color: ${({ theme }) => theme.primaryText};
`

export const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.primaryText};
  margin-top: 10px;
`
