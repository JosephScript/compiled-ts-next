import { FC } from 'react'
import { styled } from '@compiled/react'
import { FallbackProps } from 'react-error-boundary'

const ErrorWrapper = styled.div`
  background-color: #ffcccc;
  border-radius: 3px;
`

const ErrorMessage = styled.div`
  color: red;
  font-weight: bold;
  margin-bottom: 16px;
`

const isPROD = process.env.NODE_ENV === 'production'

export const ErrorFallback: FC<FallbackProps> = ({
  error,
  resetErrorBoundary,
}) => {
  return (
    <ErrorWrapper>
      <section>
        <h1>Something went wrong:</h1>
        <p>Error Message:</p>
        <ErrorMessage>{error?.message ?? 'Error'}</ErrorMessage>
        {!isPROD && <pre>{error.stack}</pre>}
        <button type="button" onClick={resetErrorBoundary}>
          Try again
        </button>
      </section>
    </ErrorWrapper>
  )
}
