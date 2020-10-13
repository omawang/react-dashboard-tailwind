import React from 'react'
import {
  LocalAtmOutlined,
  LocalMallOutlined,
  LocalMallRounded,
  PersonRounded,
} from '@material-ui/icons'
// import { Link } from 'react-router-dom'
import MainTemplate from 'src/views/templates/Main'
import CardWidget from './components/CardWidget'

const DashboardPage = () => {
  return (
    <MainTemplate>
      <div className="flex flex-wrap mt-8 mx-8">
        <CardWidget
          title="Total Users"
          subtitle="5000"
          icon={() => <PersonRounded style={{ color: '#fff', fontSize: 40 }} />}
          bgIcon="bg-red-400"
        />
        <CardWidget
          title="New Sales"
          subtitle="365"
          icon={() => (
            <LocalMallRounded style={{ color: '#fff', fontSize: 40 }} />
          )}
          bgIcon="bg-orange-400"
        />
        <CardWidget
          title="Total Profit"
          subtitle="Rp 4.500.000"
          icon={() => (
            <LocalAtmOutlined style={{ color: '#fff', fontSize: 40 }} />
          )}
          bgIcon="bg-teal-400"
        />
      </div>
    </MainTemplate>
  )
}

export default DashboardPage
