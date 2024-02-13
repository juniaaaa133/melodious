import React from 'react'

const PlayList = ({name,artist,video_url}) => {
  return (
    <div className='play'>
        <div className="play-vd">
        <iframe className='w-full h-full ' src={video_url} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen='allowfullscreen'></iframe>
        </div>
        <div className="play-info">
            <div className="pl-name main-f text-[13px] ">
                {artist}
            </div>
            <div className="pl-song main-f text-[18px] main-c">
                {name}
            </div>
        </div>
    </div>
  )
}

export default PlayList