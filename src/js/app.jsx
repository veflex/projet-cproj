import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import api from './utils/api'

import Home from './pages/home/home'

export default props => {
  return (
    <div className="app-wrapper">
      <h1>App wrapper</h1>
      <Home />
    </div>
  )
}
