import React from 'react'
import { List, ListItem, ListItemButton, ListItemText } from '@mui/material'
import { Navbar } from '../components'

const Settings = () => {
  return (
    <div>
      <Navbar/>
      <List>
        <ListItem>
          <ListItemButton>
            <ListItemText primary="Info"/>
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton>
            <ListItemText primary="Followers"/>
          </ListItemButton>
        </ListItem>
      </List>
    </div>
    
  )
}
export default Settings