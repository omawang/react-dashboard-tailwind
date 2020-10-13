import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { HomeRounded, AssignmentOutlined } from '@material-ui/icons'
import { CSSTransition } from 'react-transition-group'
import { colorsClass } from 'src/views/uiHelper'

const Sidebar = ({ isOpen }) => {
  return (
    <>
      <aside className="z-20 hidden md:block w-64 bg-white overflow-y-auto flex-shrink-0">
        <div className="py-4 text-gray-500">
          <Link to="/" className="ml-6 text-lg font-bold text-gray-800">
            RDT
          </Link>
          <ul className="mt-6 text-gray-800">
            <li
              className={`relative px-6 py-3 hover:bg-${colorsClass.primary} hover:text-white transition-colors duration-500`}
            >
              <span
                className={`absolute inset-y-0 left-0 w-1 bg-${colorsClass.primary} rounded-tr-lg rounded-br-lg`}
              />
              <Link
                to="/"
                className="inline-flex items-center w-full text-sm font-semibold"
              >
                <HomeRounded />
                <span className="ml-4">Dashboard</span>
              </Link>
            </li>
            <li
              className={`relative px-6 py-3 hover:bg-${colorsClass.primary} hover:text-white transition-colors duration-500`}
            >
              <Link
                to="/"
                className="inline-flex items-center w-full text-sm font-semibold"
              >
                <AssignmentOutlined />
                <span className="ml-4">Forms</span>
              </Link>
            </li>
          </ul>
        </div>
      </aside>

      {/* mobile */}
      <CSSTransition in={isOpen} timeout={200} unmountOnExit classNames="mob-sidebar">
        <aside className="mob-sidebar fixed inset-y-0 z-20 w-64 mt-16 bg-white overflow-y-auto flex-shrink-0">
          <div className="py-4 text-gray-500">
            <ul className="mt-6 text-gray-800">
              <li
                className={`relative px-6 py-3 hover:bg-${colorsClass.primary} hover:text-white transition-colors duration-500`}
              >
                <span
                  className={`absolute inset-y-0 left-0 w-1 bg-${colorsClass.primary} rounded-tr-lg rounded-br-lg`}
                />
                <Link
                  to="/"
                  className="inline-flex items-center w-full text-sm font-semibold"
                >
                  <HomeRounded />
                  <span className="ml-4">Dashboard</span>
                </Link>
              </li>
              <li
                className={`relative px-6 py-3 hover:bg-${colorsClass.primary} hover:text-white transition-colors duration-500`}
              >
                <Link
                  to="/"
                  className="inline-flex items-center w-full text-sm font-semibold"
                >
                  <AssignmentOutlined />
                  <span className="ml-4">Forms</span>
                </Link>
              </li>
            </ul>
          </div>
        </aside>
      </CSSTransition>
    </>
  )
}

export default Sidebar

Sidebar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
}
