import React, { useLayoutEffect, useState, useEffect, useRef } from 'react'
import { useHistory } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faMicrophone,
  faMicrophoneSlash
} from '@fortawesome/free-solid-svg-icons'

import ButtonComponent from '../components/Button'

import firstDraft from '../assets/videos/first_draft.mp4'
import firstDraftMob from '../assets/videos/first_draft_mobile.mp4'

import { Button } from 'react-bootstrap'

const NewHome = () => {
  const [windowSize, setWindowSize] = useState(window.innerWidth)
  const [isMuted, setIsMuted] = useState(true)
  const history = useHistory()

  let videoRef = useRef(null)

  useEffect(() => {
    videoRef &&
      videoRef?.current.addEventListener('ended', () => {
        let btnCont = document.getElementById('btn-cont')
        btnCont.style.bottom = '24vh'
        btnCont.style.opacity = '1'
      })
  }, [videoRef])

  useLayoutEffect(() => {
    setWindowSize(window.innerWidth)
  }, [])

  const handleVideoSound = () => {
    setIsMuted(!isMuted)
    if (videoRef.current.muted) {
      videoRef.current.muted = false
    } else {
      videoRef.current.muted = true
    }
  }

  return (
    <>
      <div className='video-container'>
        <Button onClick={handleVideoSound} className='mute-btn'>
          <FontAwesomeIcon icon={isMuted ? faMicrophoneSlash : faMicrophone} />
        </Button>
        <video
          className='news-video'
          id='vid'
          autoPlay
          muted={true}
          src={windowSize < 552 ? firstDraftMob : firstDraft}
          ref={videoRef}
          type='video/mp4'
        />

        <div className='slide-btn-container' id='btn-cont'>
          <ButtonComponent
            variant='purple home-play-btn'
            text='Play'
            onClick={() => history.push('/categories')}
          />
        </div>
      </div>
    </>
  )
}

export default NewHome
