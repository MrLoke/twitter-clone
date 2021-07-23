import Sidebar from 'components/Sidebar/Sidebar'
import AddTweet from 'components/AddTweet/AddTweet'
import FollowsRecommends from 'components/FollowsRecommends/FollowsRecommends'
import MobileNav from 'components/MobileNav/MobileNav'
import Modal from 'components/Modal/Modal'
import SearchBar from 'components/SearchBar/SearchBar'
import {
  showModal,
  hideModal,
  hideSearchModal,
} from 'redux/actions/modalActions'
import { useDispatch, useSelector } from 'react-redux'
import { Container, AddTweetMobileBtn } from './LayoutStyled'

const Layout = ({ children }) => {
  const modalIsOpen = useSelector((state) => state.modal.modalIsOpen)
  const searchIsOpen = useSelector((state) => state.modal.searchIsOpen)
  const dispatch = useDispatch()

  return (
    <Container>
      <Sidebar />
      {children}
      <FollowsRecommends />
      <Modal modalIsOpen={modalIsOpen} hideModal={hideModal}>
        <AddTweet secondaryStyles />
      </Modal>
      <Modal modalIsOpen={searchIsOpen} hideModal={hideSearchModal}>
        <SearchBar />
      </Modal>
      <MobileNav />
      <AddTweetMobileBtn onClick={() => dispatch(showModal())}>
        <svg viewBox='0 0 24 24' fill='#fff' width='3rem' height='3rem'>
          <g>
            <path d='M8.8 7.2H5.6V3.9c0-.4-.3-.8-.8-.8s-.7.4-.7.8v3.3H.8c-.4 0-.8.3-.8.8s.3.8.8.8h3.3v3.3c0 .4.3.8.8.8s.8-.3.8-.8V8.7H9c.4 0 .8-.3.8-.8s-.5-.7-1-.7zm15-4.9v-.1h-.1c-.1 0-9.2 1.2-14.4 11.7-3.8 7.6-3.6 9.9-3.3 9.9.3.1 3.4-6.5 6.7-9.2 5.2-1.1 6.6-3.6 6.6-3.6s-1.5.2-2.1.2c-.8 0-1.4-.2-1.7-.3 1.3-1.2 2.4-1.5 3.5-1.7.9-.2 1.8-.4 3-1.2 2.2-1.6 1.9-5.5 1.8-5.7z'></path>
          </g>
        </svg>
      </AddTweetMobileBtn>
    </Container>
  )
}

export default Layout
