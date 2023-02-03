import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const Users = React.lazy(() => import('./views/users/Users'))
const Reports = React.lazy(() => import('./views/reports/Reports'))
const ReportListing = React.lazy(() => import('./views/reportListing/Reports'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/Users', name: 'Users', element: Users },
  { path: '/reports', name: 'Reports', element: Reports },
  { path: '/report-listing', name: 'ReportListing', element: ReportListing },
]

export default routes
