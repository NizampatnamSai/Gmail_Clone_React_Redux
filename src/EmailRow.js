import { Checkbox, IconButton } from '@material-ui/core'
import LabelImportant from '@material-ui/icons/LabelImportant'
import React from 'react'
import './EmailRow.css'
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined'
import LabelImportantOutlinedIcon from '@material-ui/icons/LabelImportantOutlined'
import {useNavigate} from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { selectMail } from './features/mailSlice'


function EmailRow({title, subject, description,time,id}) {
  
  const history=useNavigate()
  const dispatch=useDispatch()

  const openMail=()=>{
     dispatch(selectMail(
        {title, subject, description,time,id

        }
     ))

     history("/mail")
  }
  
   
  
  return (
    <div onClick={openMail}
     className='emailRow'>

        <div className='emailRow_options'>
         <Checkbox/>
         <IconButton>
             <StarBorderOutlinedIcon/>
         </IconButton>
         <IconButton>
             <LabelImportantOutlinedIcon/>
         </IconButton>

        </div>
        <h3 className='emailRow_title'>
           {title}
        </h3>
        <div className='emailRow_message'>
     <h4>
        {subject} {" "}
         <span className='emailRow_description'>
        --{description}

        </span>
     </h4>
        </div>

        <p className='emailRow_time'>


        {time}
        </p>
        
      
    </div>
  )
}

export default EmailRow
