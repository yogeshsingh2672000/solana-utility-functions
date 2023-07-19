import React, {useContext} from 'react';
import Homepage from './Homepage';
import Playground from './Playground';
import UserContext from '../context/userContext/UserContext';

function Layout() {
  const context = useContext(UserContext)

  return (
    <div className='playground-bg-gradient'>
      { !context.user ? 
        <Homepage/>
      :
        <Playground/>
      }
    </div>
  )
}

export default Layout