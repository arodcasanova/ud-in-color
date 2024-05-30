import 'App.css'
import { useEffect, useState } from 'react'
import { BoundedCenteringContainer } from 'Utils'
import { styled } from 'styled-components'

const HeaderWithShadow = styled.header`
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
`
const SectionWithGreyBackground = styled.section`
  background-color: lightGrey;
`

const ButtonWithStyle = styled.button`
  background-color: lightGrey;
  border-radius: 4px;
  padding: 0.5rem 1.5rem;
  margin-right: 2px;
`

const NavigationWithModalitySetter = ({
  mediaType,
  readingLevel,
  feedbackPhase,
  setMediaType,
  setReadingLevel,
  setFeedbackPhase,
}) => (
  <nav>
    <h1>UD Project</h1>
    <p>Media Type: {mediaType || 'not set'} </p>
    <p style={{ marginBottom: '2rem' }}>
      Reading Level: {readingLevel || 'not set'}
    </p>
    <p style={{ marginBottom: '1rem' }}>
      Set reading level
    </p>
    {feedbackPhase === 'MEDIA_TYPE' && (
      <>
        <ButtonWithStyle
          onClick={() => setMediaType('text')}
        >
          {' '}
          text{' '}
        </ButtonWithStyle>
        <ButtonWithStyle
          onClick={() => setMediaType('audio')}
        >
          {' '}
          audio{' '}
        </ButtonWithStyle>
      </>
    )}
  </nav>
)

const SectionOneGradeSixContent = () => (
  <>
    <h1>Grade 6 section</h1>
    <p>Grade six copy</p>
  </>
)

const SectionOneGradeTwoContent = () => (
  <>
    <h1>Grade 2 section</h1>
    <p>Grade two copy</p>
  </>
)

const SectionOneContent = ({ readingLevel }) => (
  <div id="section1" aria-label="section one">
    {readingLevel === 'six-grade' ? (
      <SectionOneGradeSixContent />
    ) : (
      <SectionOneGradeTwoContent />
    )}
  </div>
)

const App = () => {
  useEffect(() => {
    document.title = 'Universal Design'
  }, [])

  const [mediaType, setMediaType] = useState('')
  const [readingLevel, setReadingLevel] = useState('')
  const [feedbackPhase, setFeedbackPhase] =
    useState('MEDIA_TYPE')

  return (
    <BoundedCenteringContainer>
      <HeaderWithShadow>
        <NavigationWithModalitySetter
          mediaType={mediaType}
          readingLevel={readingLevel}
          feedbackPhase={feedbackPhase}
          setMediaType={setMediaType}
          setReadingLevel={setReadingLevel}
          setFeedbackPhase={setFeedbackPhase}
        />
      </HeaderWithShadow>
      <section>
        <SectionOneContent />
      </section>
      <SectionWithGreyBackground>
        <SectionOneContent />
      </SectionWithGreyBackground>
      <section>
        <SectionOneContent />
      </section>
    </BoundedCenteringContainer>
  )
}

export default App
