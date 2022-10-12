import { Navbar } from 'flowbite-react';
import React from 'react';
import { NavLink } from 'react-router-dom';

const Navmenu = () => {
    return (

        <div className='md:mt-4'>
            <Navbar fluid={true} rounded={true}>
                <Navbar.Brand>
                    <NavLink to="/">
                        <span className="text-5xl font-bold text-blue-700">
                            Web Quiz
                        </span>
                    </NavLink>
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse>
                    <div className='text-center md:flex md:gap-7'>
                        <Navbar.Link>
                            <NavLink className={({ isActive }) => isActive ? 'md:text-white-700 md:bg-inherit md:p-3 bg-blue-700 text-white py-2 px-20 rounded' : undefined} to="/home">Home</NavLink>
                        </Navbar.Link>
                        <Navbar.Link>
                            <NavLink className={({ isActive }) => isActive ? 'md:text-white-700 md:bg-inherit md:p-3 bg-blue-700 text-white py-2 px-20 rounded' : undefined} to="/statistics">Statistics</NavLink>
                        </Navbar.Link>
                        <Navbar.Link>
                            <NavLink className={({ isActive }) => isActive ? 'md:text-white-700 md:bg-inherit md:p-3 bg-blue-700 text-white py-2 px-20 rounded' : undefined} to="/blog">Blog</NavLink>
                        </Navbar.Link>
                    </div>
                </Navbar.Collapse>
            </Navbar>

        </div>
    );
};

export default Navmenu;