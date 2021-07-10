import { BiHomeCircle } from 'react-icons/bi'
import { BiEnvelope } from 'react-icons/bi'
import { FiSearch } from 'react-icons/fi'
import { IoNotificationsOutline } from 'react-icons/io5'
import { Container, List, Item } from './MobileNavStyled'

const MobileNav = () => {
  return (
    <Container>
      <List>
        <Item>
          <BiHomeCircle size='2.5rem' color='rgb(29, 161, 242)' />
        </Item>
        <Item>
          <FiSearch size='2.5rem' color='rgb(29, 161, 242)' />
        </Item>
        <Item>
          <IoNotificationsOutline size='2.5rem' color='rgb(29, 161, 242)' />
        </Item>
        <Item>
          <BiEnvelope size='2.5rem' color='rgb(29, 161, 242)' />
        </Item>
      </List>
    </Container>
  )
}

export default MobileNav
