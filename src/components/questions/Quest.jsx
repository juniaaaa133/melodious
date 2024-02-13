"use client"

import { forms } from '@/data'
import ButtonX from '@/elements/button/ButtonX'
import ButtonY from '@/elements/button/ButtonY'
import { redirect } from 'next/navigation'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const Quest = () => {
let quests_from_storage = forms[parseInt(localStorage.getItem('quest_to_show'))] //Getting data from api by using localstorage conditional
let initial_data = forms[0]

    let [quests,setQuests] = useState(null); //Push LS data to usestate . INITIALLY EMPTY ARRAY ;QUEST MUST NOT BE UNDEFINED!
    let router = useRouter();

    useEffect(()=>{
    if(localStorage.getItem('quest_to_show') == null || parseInt(localStorage.getItem('quest_to_show') == NaN)){
        localStorage.setItem('quest_to_show',0); //Initial state or the time when user finish and restart quests.
        console.log('is null')

        setQuests(initial_data) //Everytime window refresh , data from LS will be stored in usestate;
    }else {
       setQuests(quests_from_storage) //Everytime window refresh , data from LS will be stored in usestate;
       console.log('is not null') //Continuous state, remembering the quests in LS.
    }
},[quests_from_storage]) //Everytime the client loads , window refresh , it works;

useEffect(()=>{
    if(parseInt(localStorage.getItem('quest_to_show')) +1  == forms.length){ //Whenever data in usestate change, this will activate .
    router.push('/playlist')  
    }else{
        return;
  }
},[])


let ChoiceFunction = (chosen_data) => { //When a user click one answer;
    localStorage.setItem(`${parseInt(localStorage.getItem('quest_to_show') ) + 1 }`,chosen_data) //Storing chosen data in LS to filter the reslut
    if(parseInt(localStorage.getItem('quest_to_show'))+1 == forms.length){
    localStorage.setItem(`${parseInt(localStorage.getItem('quest_to_show') ) + 1 }`,chosen_data) //Storing chosen data in LS to filter the reslut
    localStorage.setItem('toast_control','create');
    router.push('/playlist')  
}else{
    let new_index = localStorage.setItem('quest_to_show',parseInt(localStorage.getItem('quest_to_show')) +1)
    let next_quest_from_storage = forms[parseInt(localStorage.getItem('quest_to_show'))]; //Update LS length as ready made array for next question to push to usestate.
    setQuests(next_quest_from_storage); //Set updated data to usestate;
}
    }

let PreviousFunction = () => {
    if(localStorage.getItem('quest_to_show') !== '0'){
        localStorage.setItem('quest_to_show',parseInt(localStorage.getItem('quest_to_show') -1));
        let next_quest_from_storage = forms[parseInt(localStorage.getItem('quest_to_show'))]; //Update LS length as ready made array for next question to push to usestate.
        setQuests(next_quest_from_storage);
    }else {
        return;
        
    }
}

         return (
        quests == null ?
        <div></div>
                                            :
        <div className='qctn mt-[100px] '>
        <div className="flex gap-[10px] main-f main-c">
            <div className="qtxt">{parseInt(localStorage.getItem('quest_to_show')) +1}. </div>
        <div className="qtxt">
            {quests.question}
        </div>
        </div>
<div className="ans-main">
{
    quests.answers.map((data,index) => (
        <div key={index} onClick={()=>ChoiceFunction(data.data)} className="ansctn trans bcu flex items-center gap-[10px] w-[100%] ">
<div className="flex items-center fjfj">
<div className="trans circ"></div>
    <div className="line"></div>
</div>
    <div className="qan main-f trans text-[14px] ">{data.c}</div>
</div>
    ))
}
</div>
<div className="navigate-ctn">
    <div onClick={PreviousFunction} className="nav-back">
        <ButtonX  txt={'preview'} add_style={'main-f font-[300] bcu trans text-[13px] main-c'} />
    </div>
 
</div>
    </div>  
         )  

}

export default Quest