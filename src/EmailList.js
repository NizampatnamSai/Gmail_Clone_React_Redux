import { Checkbox, IconButton } from '@material-ui/core'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'
import React, { useEffect, useState } from 'react'
import './EmailList.css'
import RedoIcon from '@material-ui/icons/Redo'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import KeyboardHideIcon from '@material-ui/icons/KeyboardHide'
import SettingsIcon from '@material-ui/icons/Settings'
import Section from './Section'
import InboxIcon from '@material-ui/icons/Inbox'
import PeopleIcon from '@material-ui/icons/People'
import LocalOfferIcon from '@material-ui/icons/LocalOffer'
import EmailRow from './EmailRow'
import { db } from './Firebase'



function EmailList() {

  const [email,setEmail]=useState([])

  useEffect(()=>{
        
    db.collection('emails').orderBy('timestamp').onSnapshot(snapshot=>{
        setEmail(snapshot.docs.map(doc=>({
            id:doc.id,
            data:doc.data()
        })))
    })
  },[])



  return (
    <div className='emailList'>
        <div className='emaiList_settings'>
            <div className='emaiList_settingsLeft'>
                <Checkbox/>
                <IconButton>
                    <ArrowDropDownIcon/>
                </IconButton>
                <IconButton>
                    <RedoIcon/>
                </IconButton>
                <IconButton>
                    <MoreVertIcon/>
                </IconButton>
            </div>
            <div className='emaiList_settingsRight'>
                <IconButton>
                    <ChevronLeftIcon/>
                </IconButton>
                <IconButton>
               < ChevronRightIcon/>
                </IconButton>
                <IconButton>
                    <KeyboardHideIcon/>

                </IconButton>
                <IconButton>
                    <SettingsIcon/>
                </IconButton>

            </div>


        </div>

     <div className='emailList_sections'>

     <Section Icon={InboxIcon} title='Primary' color='red' selected={true}/>
     <Section Icon={PeopleIcon} title='Social' color='#1A73E8' />
         <Section Icon={LocalOfferIcon} title='Promotions' color='green' />
     </div>

     <div className='emailList_list'>


         {email.map(({id,data:{to,subject, message, timestamp} })=>{
             return(
             <EmailRow
             
             id={id}
             key={id}
             title={to}
             subject={subject}
             description={message}
             time={new Date(timestamp?.seconds*1000).toUTCString() }
             />)
         })}

     <EmailRow title='Twitch' subject='Hey Bro!' description='Test!' time='4:45'/>
     <EmailRow title='Twitch' subject='Hey Bro!' description='Test!' time='4:45'/>
     <EmailRow title='Twitch' subject='Hey Bro!' description='Test!' time='4:45'/>
     <EmailRow title='Twitch' subject='Hey Bro!' description='Test!' time='4:45'/>
     <EmailRow title='Twitch' subject='Hey Bro!' description='Test!' time='4:45'/>
     <EmailRow title='Twitch' subject='Hey Bro!' description='Test!' time='4:45'/>
     <EmailRow title='Twitch' subject='Hey Bro!' description='Test!' time='4:45'/>
     <EmailRow title='Twitch' subject='Hey Bro!' description='Test!' time='4:45'/>
     <EmailRow title='Twitch' subject='Hey Bro!' description='Test!' time='4:45'/>
      <EmailRow title='Twitch' subject='Hey Bro!' description='Test!' time='4:45'/>
     </div>

    </div>
  )
}

export default EmailList
