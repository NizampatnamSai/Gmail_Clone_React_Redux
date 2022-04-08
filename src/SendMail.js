import React from 'react'
import './SendMail.css'
import CloseIcon from '@material-ui/icons/Close'
import { Button } from '@material-ui/core'
import {useForm} from 'react-hook-form'
import { useDispatch } from 'react-redux'
import {closeSendMessage} from './features/mailSlice'
import { db } from './Firebase'
import firebase from 'firebase/compat/app';




function SendMail() {
  const {register,handleSubmit,watch,errors}=useForm();

   const onSubmit=(data)=>{
       console.log(data)
       db.collection('emails').add({
           to:data.To,
           subject:data.subject,
           message:data.message,
           timestamp:firebase.firestore.FieldValue.serverTimestamp()
       });

       dispatch(closeSendMessage())

   }

   const dispatch=useDispatch()

  return (
    <div className='sendmail'>

        <div className='sendmail_header'>
            <h3>
                New message
            </h3>

        <CloseIcon onClick={()=>{
    
        dispatch(closeSendMessage())

        }} className='sendmail_close'/>

        </div>



        <form onSubmit={handleSubmit(onSubmit)}>
            <input name='to' placeholder='To' type='email' {...register('To', { required: true })}/>
              {errors && <p className='sendmail_error'>`To is required `</p>}
           
           
            <input name='subject' placeholder='subject' type='text' {...register('subject', { required: true })} />
            {errors && <p className='sendmail_error'>`Subject is required `</p>}
           
            <input name='message' placeholder='message...' type='text' className='sendmail_message' {...register('message', { required: true })}/>
            {errors && <p className='sendmail_error'>`messgae is required `</p>}
             
            <div className='sendmail_options'>
                <Button className='sendmail_send'
                variant='contained'
                color='primary'
                type='submit'

                >
                    Send
                </Button>

            </div>
        </form>
    </div>
  )
}

export default SendMail
