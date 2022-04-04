import { Button, IconButton, StepIcon } from '@material-ui/core'
import React from 'react'
import './Sidebar.css'
import AddIcon from '@material-ui/icons/Add';
import SidebarOption from './SidebarOption';
import InboxIcon from '@material-ui/icons/Inbox';
import StarIcon from '@material-ui/icons/Star';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import NearMeIcon from '@material-ui/icons/NearMe';
import NoteIcon from '@material-ui/icons/Note';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PersonIcon from '@material-ui/icons/Person';
import DuoIcon from '@material-ui/icons/Duo';
import PhoneIcon from '@material-ui/icons/Phone';






function Sidebar() {
  return (
    <div className='sidebar'>
      <Button startIcon={<AddIcon fontSize='large'  />} className='sidebar_compose'>
          Compose
      </Button>
      <SidebarOption Icon={InboxIcon} title='Inbox' number={54} selected={true}/>
      <SidebarOption Icon={StarIcon} title='Stared' number={21} />
      <SidebarOption Icon={AccessTimeIcon} title='Snoozed' number={11} />
      <SidebarOption Icon={LabelImportantIcon} title='Important' number={9} />
      <SidebarOption Icon={NearMeIcon} title='Sent' number={5} />
      <SidebarOption Icon={NoteIcon} title='Draft' number={7} />
      <SidebarOption Icon={ExpandMoreIcon} title='More' number={15} />

      <div className='sidebar_footer'>
          <div className='sidebar_footerIcons'>
              <IconButton>
                  <PersonIcon/>
              </IconButton>
              <IconButton>
                  <DuoIcon/>
              </IconButton>
              <IconButton>
                  <PhoneIcon/>
              </IconButton>
               
          </div>

      </div>


      




    </div>
  )
}

export default Sidebar
