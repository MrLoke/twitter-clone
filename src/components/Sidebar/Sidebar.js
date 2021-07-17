import UserInfo from 'components/UserInfo/UserInfo'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { showModal } from 'redux/actions/modalActions'
import { AiOutlineTwitter } from 'react-icons/ai'
import { BiHomeCircle } from 'react-icons/bi'
import { BiHash } from 'react-icons/bi'
import { IoNotificationsOutline } from 'react-icons/io5'
import { BiEnvelope } from 'react-icons/bi'
import { BsBookmarks } from 'react-icons/bs'
import { RiFileListLine } from 'react-icons/ri'
import { CgProfile } from 'react-icons/cg'
import { CgMoreO } from 'react-icons/cg'
import {
  Container,
  NavContainer,
  List,
  Item,
  ItemName,
  TweetBtn,
  MobileTweetBtn,
} from './SidebarStyled'

const Sidebar = () => {
  const currentUser = useSelector((state) => state.auth.userInfo)
  const dispatch = useDispatch()

  return (
    <Container>
      <NavContainer>
        <List>
          <Item>
            <AiOutlineTwitter size='4rem' color='rgb(29, 161, 242)' />
          </Item>
          <Link to='/'>
            <Item>
              <BiHomeCircle size='3rem' />
              <ItemName>Home</ItemName>
            </Item>
          </Link>
          <Item>
            <BiHash size='3rem' />
            <ItemName>Explore</ItemName>
          </Item>
          <Item>
            <IoNotificationsOutline size='3rem' />
            <ItemName>Notifications</ItemName>
          </Item>
          <Item>
            <BiEnvelope size='3rem' />
            <ItemName>Messages</ItemName>
          </Item>
          <Item>
            <BsBookmarks size='3rem' />
            <ItemName>Bookmarks</ItemName>
          </Item>
          <Item>
            <RiFileListLine size='3rem' />
            <ItemName>Lists</ItemName>
          </Item>
          <Link to={`/profile/${currentUser.userName}`}>
            <Item>
              <CgProfile size='3rem' />
              <ItemName>Profile</ItemName>
            </Item>
          </Link>
          <Item>
            <CgMoreO size='3rem' />
            <ItemName>More</ItemName>
          </Item>
          <TweetBtn onClick={() => dispatch(showModal())}>Tweet</TweetBtn>
        </List>
        <MobileTweetBtn onClick={() => dispatch(showModal())}>
          <svg viewBox='0 0 24 24' fill='#fff' width='3rem' height='3rem'>
            <g>
              <path d='M8.8 7.2H5.6V3.9c0-.4-.3-.8-.8-.8s-.7.4-.7.8v3.3H.8c-.4 0-.8.3-.8.8s.3.8.8.8h3.3v3.3c0 .4.3.8.8.8s.8-.3.8-.8V8.7H9c.4 0 .8-.3.8-.8s-.5-.7-1-.7zm15-4.9v-.1h-.1c-.1 0-9.2 1.2-14.4 11.7-3.8 7.6-3.6 9.9-3.3 9.9.3.1 3.4-6.5 6.7-9.2 5.2-1.1 6.6-3.6 6.6-3.6s-1.5.2-2.1.2c-.8 0-1.4-.2-1.7-.3 1.3-1.2 2.4-1.5 3.5-1.7.9-.2 1.8-.4 3-1.2 2.2-1.6 1.9-5.5 1.8-5.7z'></path>
            </g>
          </svg>
        </MobileTweetBtn>
        <UserInfo />
      </NavContainer>
    </Container>
  )
}

export default Sidebar
