import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div
                className={`sidebar-item`}
            >
                <div>

                    <img src='/images/icon.png' />
                </div>
                <p>Dashboard</p>
            </div>
            <div
                className={`sidebar-item active`}
            >

                <div>
                    <img src='/images/award.png' />
                </div>
                <p>Skill Test</p>
            </div>
            <div
                className={`sidebar-item`}
            >
                <div>

                    <img src='/images/internship.png' />
                </div>
                <p>Internship</p>
            </div>
        </div>
    );
};

export default Sidebar;
