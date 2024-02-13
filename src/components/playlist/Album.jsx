"use client"

import React, { useEffect, useState } from 'react'
import PlayList from './PlayList'
import Link from 'next/link'
import ButtonY from '@/elements/button/ButtonY'
import ButtonX from '@/elements/button/ButtonX'
import { forms, musics } from '@/data'
import Skeleton from '@/elements/skeleton/Skeleton'
import ToastX from '@/elements/toastalert/ToastX'
import axios from 'axios'

const Album = () => {

  let [style,setStyle] = useState('close_toast')
  let [videos,setVideos] = useState([]);

  useEffect(()=>{
if(localStorage.getItem('toast_control') !== null){
setStyle('open_toast trans')
setTimeout(() => {
  setStyle('close_toast trans')
  localStorage.removeItem('toast_control')
}, 3000);
}else {
  return;
}
  },[])

  let FilterVideoFacade = (RESPONSE) => {
   let filtered_infos = forms.map((data,index) => { //LOCALSTORAGE DATA LOOP
     return localStorage.getItem(`${index + 1}`) //GOT ARRAY 
    })

let FILTERED_VIDEOS_ARRAY = RESPONSE.filter((data,index) => {
    if( 
      data.infos.mood.includes(filtered_infos[0])  == true //
    && data.infos.timezone.includes(filtered_infos[1]) == true
    && data.infos.weather.includes(filtered_infos[2]) == true
    && data.infos.work.includes(filtered_infos[3]) == true
    && !data.infos.song_limit.includes(filtered_infos[4]) == true
    ) {
      if( JSON.parse(filtered_infos[6]) == false){
        if(filtered_infos[5] !== 'Both' && data.infos.is_slowed == JSON.parse(filtered_infos[6])){
          if( data.infos.song_language.includes(filtered_infos[5]) == true) {
              return data;
          }
        }else {
            return data; //BOth lANGUAGE
        }
      }else {
        if(filtered_infos[5] !== 'Both'){
          if( data.infos.song_language.includes(filtered_infos[5]) == true) {
              return data;
          }
        }else {
            return data; //BOTH LANGUAGWE
        }
  
      }


      if(filtered_infos[5] !== 'Both'){
        if( data.infos.song_language.includes(filtered_infos[5]) == true) {
            return data;
        }
      }else {
          return data;
      }
  
        
    }
  
  })
  setVideos(FILTERED_VIDEOS_ARRAY)
  } 

  let FetchVideos = async () => {
    await axios.get('/api/videos')
    .then((res) => {
FilterVideoFacade(res.data);
    })
  }

  useEffect(()=>{
// FetchVideos();
FetchVideos();
  },[])

let EndPlaylist = (arr) => {
  if(localStorage.getItem('quest_to_show') !== null){
    localStorage.removeItem('quest_to_show');
    arr.map((data,index) => {
      localStorage.removeItem(`${index +1}`);
    })
    localStorage.setItem('toast_control','remove')
  }else {
    return
  }
}

let ShuffleMusic = (arr) => {
return arr.sort(()=> Math.random() - 0.5);
}

  return (
    <div className='pl-main'>
        <div className="pl-title sec-c text-[32px] main-f">Melodious Playlist</div>
        <div className="pl-desc redo-c text-[14px] main-f">{`Here's your playlist.When you finish listening,you can end playlist by clicking 'END PLAYLIST'.`}</div>
        {
          videos.length == 0 ?
          <div className="pl-ctn">
           <div className="play-ske">
            <Skeleton />
           </div>
           <div className="play-ske">
            <Skeleton />
           </div>
           <div className="play-ske">
            <Skeleton />
           </div>
           <div className="play-ske">
            <Skeleton />
           </div>
           <div className="play-ske">
            <Skeleton />
           </div>
           <div className="play-ske">
            <Skeleton />
           </div>
           <div className="play-ske">
            <Skeleton />
           </div>
        </div>
                                  :
        <div className="pl-ctn">
       {
       
        ShuffleMusic(videos).map((video,index) => {
          if(index + 1 < 8){
            return (
              <div key={index} className="play-ske">
            <PlayList name={video.name} artist={video.artist} video_url={video.url}/>
           </div>
            )
          }
        })
       }
     </div>
        }
        <Link href='/' onClick={()=>EndPlaylist(forms)} className='plbtn'>
          <ButtonX txt={'end playlist'} add_style={'trans text-[13px] main-f text-slate-100'} />
        </Link>
        <div className={`${style}`}>
          <ToastX add_style={'text-[13px] main-c main-f'} txt={'Your playlist has been created successfully.'} />
        </div>
    </div>
  )
}

export default Album