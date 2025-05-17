import React, { Children } from 'react'

function Container({children}) {
    console.log(children)
  return (
    <div>
      <div>container component worked</div>
      {children}
    </div>
  )
}

export default Container
