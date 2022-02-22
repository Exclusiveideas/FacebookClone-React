import { Avatar } from '@mui/material'
import React from 'react'
import './SidebarRow.css'

const SidebarRow = ({src, title, Icon}) => {
  return (
    <div className='sidebarRow'>
        {src && <Avatar src={src} />}
        {Icon && <Icon />}
        <h4>{title}</h4>
    </div>
  )
}

export default SidebarRow