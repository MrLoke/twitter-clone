import { BiHomeCircle } from 'react-icons/bi'
import { BiEnvelope } from 'react-icons/bi'
import { FiSearch } from 'react-icons/fi'
import { IoNotificationsOutline } from 'react-icons/io5'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { showSearchModal } from 'redux/actions/modalActions'
import { Container, List, Item } from './MobileNavStyled'

const MobileNav = () => {
  const dispatch = useDispatch()

  return (
    <Container>
      <List>
        <Link to='/'>
          <Item>
            <BiHomeCircle size='2.5rem' color='rgb(29, 161, 242)' />
          </Item>
        </Link>
        <Item onClick={() => dispatch(showSearchModal())}>
          <FiSearch size='2.5rem' color='rgb(29, 161, 242)' />
        </Item>
        <Link to='#'>
          <Item>
            <IoNotificationsOutline size='2.5rem' color='rgb(29, 161, 242)' />
          </Item>
        </Link>
        <Link to='#'>
          <Item>
            <BiEnvelope size='2.5rem' color='rgb(29, 161, 242)' />
          </Item>
        </Link>
      </List>
    </Container>
  )
}

export default MobileNav
