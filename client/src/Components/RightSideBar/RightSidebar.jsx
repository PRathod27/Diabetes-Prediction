import React from 'react'
import  './RightSidebar.css' 
import Widget from '../RightSideBar/Widget.jsx'
import WidgetTags from '../RightSideBar/WidgetTags.jsx'

const RightSidebar = () => {
  return (
    <aside className='right-sidebar'>
        <Widget/>
        <WidgetTags/>         
    </aside>
  )
}

export default RightSidebar