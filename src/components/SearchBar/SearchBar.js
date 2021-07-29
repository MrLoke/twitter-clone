import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Autosuggest from 'react-autosuggest'
import { Container, UserInitials, Avatar } from './SearchBarStyled'
import './SearchBar.css'

const SearchBar = () => {
  const [value, setValue] = useState('')
  const [suggestions, setSuggestions] = useState([])
  const users = useSelector((state) => state.app.users)
  const history = useHistory()

  const getSuggestionValue = (suggestion) => suggestion.name

  const renderSuggestion = (suggestion) => {
    return (
      <Container
        onClick={() => history.push(`/profile/${suggestion.userName}`)}>
        <Avatar src={suggestion.photoURL} alt={`${suggestion.displayName}`} />
        <UserInitials>
          <p>{suggestion.displayName}</p>
          <p>@{suggestion.userName}</p>
        </UserInitials>
      </Container>
    )
  }

  const getSuggestions = (value) => {
    const inputValue = value.trim().toLowerCase()
    const inputLength = inputValue.length

    return inputLength === 0
      ? []
      : users.filter(
          (user) =>
            user.displayName.toLowerCase().slice(0, inputLength) ===
              inputValue ||
            user.userName.toLowerCase().slice(0, inputLength) === inputValue
          // search by display name or user name
        )
  }

  const handleOnChange = (e, { newValue }) => {
    setValue(typeof newValue !== 'undefined' ? newValue : '')
  }

  const onSuggestionsFetchRequested = async ({ value }) => {
    setSuggestions(getSuggestions(value))
  }

  const onSuggestionsClearRequested = () => {
    setSuggestions([])
  }

  const inputProps = {
    placeholder: 'Search twitter',
    value,
    onChange: handleOnChange,
  }

  return (
    <>
      <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={onSuggestionsFetchRequested}
        onSuggestionsClearRequested={onSuggestionsClearRequested}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        inputProps={inputProps}
      />
    </>
  )
}

export default SearchBar
