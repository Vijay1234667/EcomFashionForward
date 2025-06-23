import React from 'react';
import { Container } from 'react-bootstrap-v5';
import { Link } from 'react-router-dom';

import AddCircleIcon from '@mui/icons-material/AddCircle';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import BusinessIcon from '@mui/icons-material/Business';
import LanguageIcon from '@mui/icons-material/Language';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import LogoutIcon from '@mui/icons-material/Logout';
import EditIcon from '@mui/icons-material/Edit';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AboutPerson from './assets/AboutPerson.jpg';
import BreadcrumbFixedTop from './BreadcrumbFixedTop';

const ProfilePage = () => {
    return (
        <>
            <BreadcrumbFixedTop Title="Profile" Subtitle="Account Overview" />

            <section className="main-profile-wrapper-body">
                <Container>
                    <div className="profile-area">
                        <div className="main-profile d-flex justify-content-between align-items-center mb-4">
                            <div className="d-flex align-items-center">
                                <div className="main-owner">
                                    <img className="rounded-circle" src={AboutPerson} width="120px" alt="profile-image" />
                                </div>
                                <div className="profile-detail ms-3">
                                    <h5 className="name text-dark">Hello, Vijaykumar Yadav</h5>
                                    <span className="profile-detail-id text-muted">Member since Sep 2023</span>
                                    <p className="profile-bio text-muted">"Customer-focused software engineer passionate about product development."</p>
                                </div>
                            </div>
                            <div className="text-end">
                                <Link to="/crud" className="btn btn-outline-primary">Manage Products</Link>
                            </div>
                        </div>

                        <hr className="my-4" />

                        <div className="title-bar mb-3">
                            <h4 className="font-weight-bold">Account Settings</h4>
                        </div>

                        <div className="account-setting-body">
                            <ul className="list-unstyled">

                                <li className="d-flex justify-content-between align-items-center mb-3">
                                    <div className="dz-inner d-flex align-items-center">
                                        <AccountCircleIcon className="text-primary" />
                                        <span className="title ms-3">Edit Profile</span>
                                    </div>
                                    <Link to="/edit-profile" className="text-muted">
                                        <EditIcon />
                                    </Link>
                                </li>

                                <li className="d-flex justify-content-between align-items-center mb-3">
                                    <div className="dz-inner d-flex align-items-center">
                                        <BusinessIcon className="text-primary" />
                                        <span className="title ms-3">Saved Addresses</span>
                                    </div>
                                    <Link to="/addresses" className="text-muted">
                                        <AddCircleIcon />
                                    </Link>
                                </li>

                                <li className="d-flex justify-content-between align-items-center mb-3">
                                    <div className="dz-inner d-flex align-items-center">
                                        <ShoppingCartIcon className="text-primary" />
                                        <span className="title ms-3">Order History</span>
                                    </div>
                                    <Link to="/orders" className="text-muted">
                                        <AddCircleIcon />
                                    </Link>
                                </li>

                                <li className="d-flex justify-content-between align-items-center mb-3">
                                    <div className="dz-inner d-flex align-items-center">
                                        <LanguageIcon className="text-primary" />
                                        <span className="title ms-3">Select Language</span>
                                    </div>
                                    <Link to="/language-settings" className="text-muted">
                                        <AddCircleIcon />
                                    </Link>
                                </li>

                                <li className="d-flex justify-content-between align-items-center mb-3">
                                    <div className="dz-inner d-flex align-items-center">
                                        <NotificationsActiveIcon className="text-primary" />
                                        <span className="title ms-3">Notification Settings</span>
                                    </div>
                                    <Link to="/notifications" className="text-muted">
                                        <AddCircleIcon />
                                    </Link>
                                </li>

                                <hr />

                                <li className="d-flex justify-content-between align-items-center mb-3">
                                    <div className="dz-inner d-flex align-items-center">
                                        <LogoutIcon className="text-danger" />
                                        <span className="title ms-3">Log Out</span>
                                    </div>
                                    <Link to="/logout" className="text-muted">
                                        <AddCircleIcon />
                                    </Link>
                                </li>

                            </ul>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    );
};

export default ProfilePage;
