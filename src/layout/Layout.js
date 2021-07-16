import Sidebar from 'components/Sidebar/Sidebar'
import AddTweet from 'components/AddTweet/AddTweet'
import FollowsRecommends from 'components/FollowsRecommends/FollowsRecommends'
import MobileNav from 'components/MobileNav/MobileNav'
import Modal from 'components/Modal/Modal'
import { Container } from './LayoutStyled'

const Layout = ({ children }) => {
  return (
    <Container>
      <Sidebar />
      {children}
      <FollowsRecommends />
      <Modal>
        <AddTweet secondaryStyles />
      </Modal>
      <MobileNav />
    </Container>
  )
}

export default Layout
