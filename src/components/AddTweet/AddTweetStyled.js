import styled from 'styled-components/macro'

export const Container = styled.div`
  padding: 2rem 0 1rem 0;
  border-bottom: 1px solid ${({ theme }) => theme.borderColor};
  margin-bottom: 3rem;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.primaryBg};
`

export const FormContainer = styled.div`
  display: flex;
`

export const Textarea = styled.textarea`
  width: 85%;
  padding: 1rem 0;
  font-family: 'Roboto', sans-serif;
  background-color: ${({ theme }) => theme.primaryBg};
  color: ${({ theme }) => theme.primaryText};
  font-size: ${({ theme }) => theme.size.s};
  resize: none;
  border: none;
  outline: none;
  border-bottom: 1px solid ${({ theme }) => theme.borderColor};
`

export const UserAvatar = styled.img`
  width: 5rem;
  height: 5rem;
  margin: 0 1.5rem;
  border-radius: ${({ theme }) => theme.utils.bigRadius};
`

export const TweetMultimedia = styled.div`
  display: flex;
  justify-content: space-between;
  width: 85%;
  margin-top: 1rem;
  margin-left: 13%; // rest % from TweetMultimedia width
`

export const ActionTweet = styled.span`
  margin-right: 1rem;
`

export const FileInput = styled.input`
  display: none;
`

export const CustomFileUpload = styled.label`
  cursor: pointer;
`

export const TweetBtn = styled.button`
  border: none;
  outline: none;
  background-color: ${({ text, theme }) =>
    text !== '' ? theme.primary500 : theme.primary200};
  padding: 1rem 2rem;
  border-radius: ${({ theme }) => theme.utils.bigRadius};
  font-weight: 600;
  color: ${({ theme }) => theme.white};
  font-size: ${({ theme }) => theme.size.s};
  cursor: pointer;
`
