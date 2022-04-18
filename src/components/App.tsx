import React from 'react';
import { Route, Routes } from 'react-router-dom';
import SidebarContainer from './SidebarContainer';
import ListUsersPage from '../pages/ListUsersPage';
import ProfileUserPage from '../pages/ProfileUserPage';

const App = () => {
    return <div className='container'>
        <div className='row'>
            <SidebarContainer />
            <Routes>
                <Route path="/" element={<ListUsersPage />} />
                <Route path="profile" element={<ProfileUserPage />} />
            </Routes>
        </div>
    </div>
};

export default App;
