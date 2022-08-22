import React from 'react'
import Video1 from '../assets/MotionGraphic/smp.mp4'

const Video = () => {
  return (
    <div>Video
        <video src={Video1} autoPlay loop muted/>
    </div>
  )
}

export default Video