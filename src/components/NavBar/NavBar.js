import { BiLeftArrowAlt } from 'react-icons/bi'
import ReactTooltip from 'react-tooltip'
import { Container, Header, BackBtn } from './NavBarStyled'

const NavBar = ({ text, backIcon }) => {
  return (
    <Container>
      {backIcon ? (
        <BackBtn data-tip='Back' data-delay-show='500'>
          <BiLeftArrowAlt size='3rem' color='rgba(29, 161, 242)' />
        </BackBtn>
      ) : null}
      <Header>{text}</Header>

      <ReactTooltip
        place='bottom'
        type='dark'
        effect='solid'
        delayShow={500}
        backgroundColor='rgba(101, 119, 134)'
      />
    </Container>
  )
}

export default NavBar
