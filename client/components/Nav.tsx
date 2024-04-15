import { IfAuthenticated, IfNotAuthenticated } from './Authenticated.tsx'
import { NavGroup, NavButton } from './Styled.tsx'

function Nav() {
  // TODO: call the useAuth0 hook and destructure user, logout, and loginWithRedirect
  // TODO: replace placeholder user object with the one from auth0
  const user = {
    nickname: 'john.doe',
  }

  const handleSignOut = () => {
    console.log('sign out')
  }

  const handleSignIn = () => {
    console.log('sign in')
  }

  return (
    <>
      <NavGroup>
        <IfAuthenticated>
          <NavButton
            className="bg-ultra-blue text-white py-2 px-4 rounded transition-colors duration-300 ease-in-out hover:bg-ultra-blue-dark active:bg-ultra-blue-darker"
            onClick={handleSignOut}
          >
            Sign out
          </NavButton>
          {user && <p>Signed in as: {user?.nickname}</p>}
        </IfAuthenticated>
        <IfNotAuthenticated>
          <NavButton onClick={handleSignIn}>Sign in</NavButton>
        </IfNotAuthenticated>
      </NavGroup>
      <div className="text-2xl">Plchldr FTW!</div>
    </>
  )
}

export default Nav
