import { Link } from 'react-router-dom'
import styled from 'styled-components/macro'

export const NotFoundWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.bg};
  color: ${({ theme }) => theme.colors.primaryText};
`

export const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.colors.primaryText};
  margin-top: 10px;
`
