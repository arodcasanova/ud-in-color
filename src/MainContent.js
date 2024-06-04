import { useCallback } from 'react'
import styled from 'styled-components'
import { VoiceSelector } from 'VoiceSelector'
import { VerbosityToggle } from 'VerbosityToggle'
import { COLOR } from 'Utils'

const ContentTitle = styled.h1`
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: ${COLOR.neutral700};
`

const ContentHeader = styled.h2`
  margin-bottom: 1rem;
  font-size: 1.2rem;
  font-weight: 500;
  color: ${COLOR.primary700};
`

const ContentText = styled.p`
  line-height: 1.5;
`

const ContentContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 100%;
  overflow: hidden;
`

const ContentSection = styled.section`
  margin-bottom: 2rem;
  width: 100%;
  height: auto;
`

const ContentTextContainer = styled.div`
  min-width: 0;
  width: 34rem;
  margin-right: 3rem;
`

const ContentImage = styled.img`
  min-width: 0;
  width: 100%;
  object-fit: contain;
  object-position: left top;
`

const ContentControlsContainer = styled.div`
  display: flex;
  margin-bottom: 4rem;
`

export const MainContentWithArticle = ({
  contentIndex,
  contentData,
  setContentIndex,
}) => {
  const {
    voice: contentVoice,
    verbosity: contentVerbosity,
  } = contentIndex
  const contentTitle = contentData.title
  const contentText =
    contentData.voices[contentVoice][contentVerbosity]
  const {
    path: contentImagePath,
    altText: contentImageAltText,
  } = contentData.image

  const togglePlainLanguage = useCallback(
    () =>
      setContentIndex((prev) => ({
        ...prev,
        verbosity:
          prev.verbosity === 'full'
            ? 'plainLanguage'
            : 'full',
      })),
    [setContentIndex]
  )

  const chooseVoice = useCallback(
    (voice) =>
      setContentIndex((prev) => ({
        ...prev,
        voice: voice,
      })),
    [setContentIndex]
  )

  return (
    <main>
      <article>
        <ContentTitle aria-live="polite">
          {contentTitle}
        </ContentTitle>
        <ContentControlsContainer
          role="region"
          aria-label="Content Toolbar"
        >
          <VoiceSelector
            chosenVoice={contentVoice}
            chooseVoice={chooseVoice}
          />
          <VerbosityToggle
            contentVerbosity={contentVerbosity}
            togglePlainLanguage={togglePlainLanguage}
          />
        </ContentControlsContainer>
        <ContentContainer>
          <ContentTextContainer>
            {contentText.map(
              ({ subsectionTitle, subsectionText }) => (
                <ContentSection key={subsectionTitle}>
                  <ContentHeader>
                    {subsectionTitle}
                  </ContentHeader>
                  <ContentText>
                    {subsectionText}
                  </ContentText>
                </ContentSection>
              )
            )}
          </ContentTextContainer>
          <ContentImage
            src={contentImagePath}
            alt={contentImageAltText}
          />
        </ContentContainer>
      </article>
    </main>
  )
}
