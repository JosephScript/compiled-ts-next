import { ErrorFallback } from '../components/ErrorFallback'
import { styled } from '@compiled/react'
import { NextPage } from 'next'
import { ErrorBoundary } from 'react-error-boundary'

const Wrapper = styled.div`
  background-color: rebeccapurple;
  display: flex;
  flex: 100%;
  overflow: auto;
  justify-content: center;
  align-items: center;
`

export const Main: NextPage = ({ children }) => {
  return (
    <ErrorBoundary
      fallbackRender={({ error, resetErrorBoundary }): React.ReactElement => (
        <ErrorFallback error={error} resetErrorBoundary={resetErrorBoundary} />
      )}
    >
      <Wrapper>{children}</Wrapper>
    </ErrorBoundary>
  )
}
