import LoggedIn from './LoggedIn';
import LoggedOut from './LoggedOut';

function NavProfile() {
  const isLoggedIn = false;

  if (isLoggedIn) {
    return <LoggedIn />
  } else {
    return <LoggedOut />
  }
}

export default NavProfile;