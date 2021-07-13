import { StyledSpinnerContainer, StyledSpinner } from './LoadingSpinnerStyled'
import { AiOutlineTwitter } from 'react-icons/ai'

const LoadingSpinner = ({ fullScreen }) => {
  return (
    <StyledSpinnerContainer fullScreen={fullScreen}>
      {fullScreen ? (
        <AiOutlineTwitter size='7rem' color='rgb(29, 161, 242)' />
      ) : (
        <StyledSpinner viewBox='0 0 50 50'>
          <circle
            className='path'
            cx='25'
            cy='25'
            r='20'
            fill='none'
            strokeWidth='4'
          />
        </StyledSpinner>
      )}
    </StyledSpinnerContainer>
  )
}

export default LoadingSpinner
