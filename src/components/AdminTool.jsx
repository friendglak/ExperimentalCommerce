import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { ContainerToolBar } from '../style/AdminStyles';
import { checkUserIsAdmin } from '../utils/index';


const mapState = ({ user }) => ({
    currentUser: user.currentUser
})

const AdminToolbar = props => {
    const { currentUser } = useSelector(mapState);

    const isAdmin = checkUserIsAdmin(currentUser);
    if (!isAdmin) return null;

    return (
        <>
            <ContainerToolBar>
                <Link to="/admin">
                    <h1 style={{ textAlign: 'center' }}>ADMIN</h1>
                </Link>
            </ContainerToolBar>
        </>
    );
}

export default AdminToolbar;