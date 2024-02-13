import React from 'react'

const Doc = () => {
  return (
    <div className='dc-main'>
      <div className="dc-title text-[32px] font-[500] main-c main-f">
        <div className="">Documentation</div>
        <div className="dc-line bg-sec-c"></div>
      </div>
    <div className="dc-ctn mt-[50px]">
    <div className="dc-title-mini text-[18px] font-[700] main-c main-f ">
        What is Melodious ?
      </div>
      <div className="dc-desc text-[14px] main-f redo-c text-justify">
        {`Music, sometimes is such a magical things.And that we hope that magical thing can be turned into something else, called moments.What if we can find our moments by easily tracking our surrounding? Our surrounding is full with memories , miracles and nostalgic.Actually everything is melodious when we seriously push our moods.Melodious is developed to help us find the random playlist relating to our current moods , surrounding and time.Sometimes it's wonderful to listen a playlist with random songs,especially when it's in our moods!`} 
      </div>
      <div className="dc-title-mini text-[18px] font-[700] main-c main-f ">
        Guideline usage
      </div>
      <div className="dc-desc text-[14px] main-f redo-c text-justify">
        {`There are fews questions for 75 + Built-in songs and finally a playlist with  (MAXIMUM) seven random songs for you.As soon as start by 'Explore More',the very first question will be appeared.All we have to do is choose the right answer that is relating to us.After answering few questions,a playlist is finally created for us.After listening to all songs, click 'End Playlist' to remove playlist and restart with our questions.And if you have occured with issue or have an idea , contact us reinnn.og@gmail.com.Hope you all enjoy it!`} 
      </div>
    </div>
    </div>
  )
}

export default Doc