import React from 'react';
import UsersContainer from './UsersContainer';
import SidebarContainer from './SidebarContainer';

const App = () => {
    return <div className='container'>
        <div className='row'>
            <SidebarContainer />
            <UsersContainer />
        </div>
    </div>
};

export default App;
