import React, { Children } from 'react'
import { NavLink } from 'react-router-dom'

function Btn({style , path , children , value}) {
  return (
    <div>
        <NavLink className={`${style}`} to={`${path}`}>{children || value}</NavLink>
    </div>
  )
}

export default Btn