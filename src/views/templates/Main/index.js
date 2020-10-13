import React, { useState } from 'react'
import PropTypes from 'prop-types'

import Sidebar from './components/Sidebar'
import Header from './components/Header'

const MainTemplate = (props) => {
  const [isOpenSidebar, setIsOpenSidebar] = useState(false)

  const toggleSidebar = () => {
    setIsOpenSidebar(!isOpenSidebar)
  }
  return (
    <div className="flex h-screen bg-gray-200">
      <Sidebar isOpen={isOpenSidebar} />

      <div className="flex flex-col flex-1 w-full">
        <Header isOpenSidebar={isOpenSidebar} toggleSidebar={toggleSidebar} />

        <main className="flex flex-col h-full overflow-y-auto">
          {props.children}
        </main>
      </div>
    </div>
  )
}

export default MainTemplate

MainTemplate.propTypes = {
  children: PropTypes.any,
}
