import styled from 'styled-components'
import { VerbosityToggle } from 'VerbosityToggle'

const ContentTitle = styled.h1`
  font-size: 2rem;
  margin-bottom: 1rem;
`

const ContentHeader = styled.h2`
  margin-bottom: 1rem;
  font-weight: bold;
`

const ContentText = styled.p`
  line-height: 1.5;
`

const ContentContainer = styled.div`
  display: flex;
`

const ContentSection = styled.section`
  margin-bottom: 2rem;
  width: 20rem;
`

const ContentImage = styled.img`
  height: 18rem;
  margin-left: 3rem;
  background-color: lightGrey;
`

const ContentControlsContainer = styled.div`
  display: flex;
  margin-bottom: 3rem;
`

export const MainContentWithArticle = ({
  contentIndex,
  contentData,
  setContentIndex,
}) => {
  const { voice: contentVoice, verbosity: contentVerbosity } = contentIndex
  const contentTitle = contentData.title
  const contentText = contentData.voices[contentVoice][contentVerbosity]
  const { path: contentImagePath, altText: contentImageAltText } =
    contentData.image

  const togglePlainLanguage = () =>
    setContentIndex((prev) => ({
      ...prev,
      verbosity: prev.verbosity === 'full' ? 'plainLanguage' : 'full',
    }))

  return (
    <main>
      <article>
        <ContentTitle>{contentTitle}</ContentTitle>
        <ContentControlsContainer>
          <VerbosityToggle togglePlainLanguage={togglePlainLanguage} />
        </ContentControlsContainer>
        <ContentContainer>
          <div>
            {contentText.map(({ subsectionTitle, subsectionText }) => (
              <ContentSection key={subsectionTitle}>
                <ContentHeader>{subsectionTitle}</ContentHeader>
                <ContentText>{subsectionText}</ContentText>
              </ContentSection>
            ))}
          </div>
          <ContentImage src={contentImagePath} alt={contentImageAltText} />
        </ContentContainer>
      </article>
    </main>
  )
}
