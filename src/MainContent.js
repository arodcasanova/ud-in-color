import styled from 'styled-components'

const ContentTitle = styled.h1`
  font-size: 2rem;
  margin-bottom: 2rem;
`

const ContentText = styled.p`
  max-width: rem;
  line-height: 1.5;
`

const ContentContainer = styled.div`
  display: flex;
`

const ContentImage = styled.img`
  height: 12rem;
  margin-left: 2rem;
  background-color: lightGrey;
`

export const MainContentWithArticle = ({ contentIndex, contentData }) => {
  const { voice: contentVoice, verbosity: contentVerbosity } = contentIndex
  const contentTitle = contentData.title
  const contentText = contentData[contentVoice][contentVerbosity]
  const { path: contentImagePath, altText: contentImageAltText } =
    contentData.image

  return (
    <main>
      <article>
        <ContentTitle>{contentTitle}</ContentTitle>
        <ContentContainer>
          <ContentText>{contentText}</ContentText>
          <ContentImage src={contentImagePath} alt={contentImageAltText} />
        </ContentContainer>
      </article>
    </main>
  )
}
