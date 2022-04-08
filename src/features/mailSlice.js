import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';



export const mailSlice = createSlice({
  name: 'mail',
  initialState:{
  sendMessageIsOpen:false,
  selectedMail:null
  },

  reducers: {
    openSendMesssage: (state) => {
state.sendMessageIsOpen=true    },
    closeSendMessage: (state) => {
      state.sendMessageIsOpen=false
    },
    selectMail:(state, action)=>{
      state.selectedMail=action.payload
    }

   
    },
  })
 

export const { openSendMesssage, closeSendMessage, selectMail } = mailSlice.actions;

export const selectSendMessageIsOpen = (state) => state.mail.sendMessageIsOpen;
export const selectOpenMail= (state) => state.mail.selectedMail;


export default mailSlice.reducer;
