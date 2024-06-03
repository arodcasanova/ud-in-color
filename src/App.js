import 'App.css'
import { useEffect, useState } from 'react'
import { BoundedCenteringContainer } from 'Utils'
import { HeaderWithContentControls } from 'HeaderWithContentPositionControls'
import { MainContentWithArticle } from 'MainContent'
import CONTENT_REPO from 'data.json'

const MAX_CONTENT_POSITION = CONTENT_REPO.length

const App = () => {
  useEffect(() => {
    document.title = 'Universal Design'
  }, [])

  const [contentIndex, setContentIndex] = useState({
    position: 0,
    verbosity: 'full',
    voice: 'suzanne',
  })

  const contentData = CONTENT_REPO[contentIndex.position]

  return (
    <BoundedCenteringContainer>
      <HeaderWithContentControls
        maxContentPosition={MAX_CONTENT_POSITION}
        setContentIndex={setContentIndex}
      />
      <MainContentWithArticle
        contentIndex={contentIndex}
        contentData={contentData}
        setContentIndex={setContentIndex}
      />
    </BoundedCenteringContainer>
  )
}

export default App
