/* eslint-disable no-unused-vars */
import React from "react";
import { FaTachometerAlt, FaUser, FaUniversity } from "react-icons/fa"; // Importing icons

function Sider() {
    return (
        <aside className="w-64 bg-amber-800 text-white flex flex-col min-h-screen shadow-lg">
            {/* Fixed header at the top */}
            <div className="flex-shrink-0 p-6 bg-amber-900">
                <h1 className="text-2xl font-extrabold text-white">Menu</h1>
            </div>
            
            {/* Scrollable navigation */}
            <nav className="flex-1 mt-6 px-2 space-y-2 overflow-y-auto">
                <ul>
                    {/* Dashboard Link */}
                    <li className="group">
                        <a 
                            href="/dashboard" 
                            className="flex items-center px-4 py-3 rounded-lg hover:bg-amber-900 group-hover:bg-amber-900 transition duration-300"
                        >
                            <FaTachometerAlt className="mr-3 text-xl" /> {/* Icon for Dashboard */}
                            <span className="text-lg font-medium">Dashboard</span>
                        </a>
                    </li>

                    {/* Mahasiswa Link */}
                    <li className="group">
                        <a 
                            href="/admin/mahasiswa" 
                            className="flex items-center px-4 py-3 rounded-lg hover:bg-amber-900 group-hover:bg-amber-900 transition duration-300"
                        >
                            <FaUser className="mr-3 text-xl" /> {/* Icon for Mahasiswa */}
                            <span className="text-lg font-medium">List Korban</span>
                        </a>
                    </li>

                    {/* Courses or Other Links */}
                    <li className="group">
                        <a 
                            href="#" 
                            className="flex items-center px-4 py-3 rounded-lg hover:bg-amber-900 group-hover:bg-amber-900 transition duration-300"
                        >
                            <FaUniversity className="mr-3 text-xl" /> {/* Icon for Courses */}
                            <span className="text-lg font-medium">Settings</span>
                        </a>
                    </li>

                    {/* Additional Links (if any) */}
                    {/* You can add more list items here if needed */}
                </ul>
            </nav>
        </aside>
    );
}

export default Sider;
