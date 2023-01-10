

import React from 'react'

function Helmet(props) {
    document.title = "Better Buy - " + props.title
  return (
    <div className='w_100'>{props.children}</div>
  )
}

export default Helmet