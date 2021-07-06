import styled from 'styled-components/macro'

export const Form = styled.form`
  padding: 2rem;
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.primary200};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0 5px 15px rgb(0 0 0 / 25%);
  z-index: 2;
  position: relative;
  ${({ theme }) => theme.media.sm} {
    border-radius: ${({ theme }) => theme.smallRadius};
    width: 400px;
    max-height: 60vh;
  }
`

export const Heading = styled.h2`
  font-weight: ${({ secondary }) => (secondary ? '400' : '700')};
  margin: 1rem 0 4rem 0;
`

export const Input = styled.input`
  color: ${({ theme }) => theme.darkText};
  margin: 0.7rem 0;
  padding: 1rem;
  width: 100%;
  border: none;
  border-radius: ${({ theme }) => theme.utils.smallRadius};
  font-size: ${({ theme }) => theme.size.s};
  outline: none;
  transition: all 0.2s linear;
`

export const ForgotPassword = styled.span`
  margin-bottom: 1.5rem;
  font-size: ${({ theme }) => theme.size.xs};
  a {
    color: ${({ theme }) => theme.white};
    text-decoration: none;
  }
`

export const SubmitBtn = styled.button`
  margin: 1.5rem 0;
  cursor: pointer;
  padding: 1rem 0;
  height: 5rem;
  width: 80%;
  text-align: center;
  border-radius: ${({ theme }) => theme.utils.bigRadius};
  outline: none;
  border: none;
  background-color: ${({ theme }) => theme.primary500};
  color: ${({ theme }) => theme.white};
  font-size: ${({ theme }) => theme.size.s};
  transition: all 0.2s linear;
`

export const ErrorMessage = styled.span`
  font-size: ${({ theme }) => theme.size.xs};
  color: ${({ theme }) => theme.warning};
  text-align: center;
  padding: 1rem 0;
`

export const LinkTo = styled.span`
  display: flex;
  justify-content: center;
  font-size: ${({ theme }) => theme.size.xs};
  a {
    color: ${({ theme }) => theme.white};
    text-decoration: none;
    font-weight: 500;
  }
`
