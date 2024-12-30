import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { AiOutlineDashboard, AiOutlineProfile, AiOutlineDollarCircle, AiOutlineLogout } from "react-icons/ai";

const SideNav: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const navLinks = [
        { name: "Dashboard", path: "/dashboard", icon: <AiOutlineDashboard /> },
        { name: "Expenses", path: "/expenses", icon: <AiOutlineDollarCircle /> },
        { name: "Profile", path: "/profile", icon: <AiOutlineProfile /> },
        { name: "Logout", path: "/login", icon: <AiOutlineLogout /> },
    ];

    return (
        <div className="relative h-full">
            {/* Desktop Sidebar */}
            <div className="hidden md:flex flex-col w-64 h-screen bg-blue-600 text-white shadow-lg">
                <div className="text-center py-4 text-2xl font-bold">Expense Tracker</div>
                <ul className="flex flex-col">
                    {navLinks.map((link) => (
                        <li
                            key={link.name}
                            className={`p-4 hover:bg-blue-700 ${location.pathname === link.path ? "bg-blue-800" : ""
                                }`}
                        >
                            <Link to={link.path} className="flex items-center gap-3">
                                {link.icon}
                                <span>{link.name}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Mobile Sidebar */}
            <div className="md:hidden">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="p-4 text-blue-600"
                >
                    {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                </button>
                {isOpen && (
                    <div className="fixed inset-0 z-50 bg-blue-600 text-white flex flex-col w-64 shadow-lg">
                        <div className="text-center py-4 text-2xl font-bold">
                            Expense Tracker
                        </div>
                        <ul className="flex flex-col">
                            {navLinks.map((link) => (
                                <li
                                    key={link.name}
                                    className={`p-4 hover:bg-blue-700 ${location.pathname === link.path ? "bg-blue-800" : ""
                                        }`}
                                >
                                    <Link
                                        to={link.path}
                                        className="flex items-center gap-3"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {link.icon}
                                        <span>{link.name}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
};

export default SideNav;
