import { Outlet } from 'react-router-dom'

import Nav from './Nav.tsx'

export default function AppLayout() {
  return (
    <div className="m-5 font-sans">
      <Nav />
      <main>
        <Outlet />
      </main>
    </div>
  )
}
