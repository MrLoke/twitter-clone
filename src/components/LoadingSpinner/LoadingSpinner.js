import {
  StyledSpinnerContainer,
  StyledSpinner,
  Heading,
} from './LoadingSpinnerStyled'

const LoadingSpinner = ({ fullScreen }) => {
  return (
    <StyledSpinnerContainer fullScreen={fullScreen}>
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
      <Heading>Loading data</Heading>
    </StyledSpinnerContainer>
  )
}

export default LoadingSpinner
