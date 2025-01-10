import React from 'react'
import Item from './item'
//import Search from './search'

const Mainnav = ({onclick,search_button}) => {
  
  
  return (
    <>
    <nav>

      <Item onclick={onclick} search_button={search_button}/>
    </nav>

    </>
    
  )
}

export default Mainnav
