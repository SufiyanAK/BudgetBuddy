import { FC } from "react";
import { Link, Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Body from "../components/Body/Body";
const ProtectedRoutes: FC = () => {

    const sections = [
        {
            name: 'Dashboard',
            path: '/dashboard',
            // component: <Dashboard />
        },
        {
            name: 'Expenses',
            path: '/expenses',
            // component: <Expenses />
        },
        {
            name: 'Profile',
            path: '/profile',
            // component: <Profile />
        }
    ]

    const { isAuthenticated } = useAuth();

    if (!isAuthenticated) {
        return <Navigate to="/login" />;
    }

    return (
        <div className="min-h-screen bg-gradient-to-r from-[#4E65FF] to-[#92EFFD]">
            <header className="w-full bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40 bg-primary text-secondary flex items-center justify-between p-3">
                <Link to="/dashboard">
                    <h2 className="text-xl">
                        <strong className="uppercase">Expensify</strong>
                    </h2>
                </Link>
                <div>
                    <Link to="/login">
                        <button className="py-2 px-4 bg-secondary text-primary rounded-md hover:bg-secondary-hover duration-150">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed">
                                <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h280v80H200Zm440-160-55-58 102-102H360v-80h327L585-622l55-58 200 200-200 200Z" />
                            </svg>
                        </button>
                    </Link>
                </div>
            </header>
            {/* <SideNav /> */}
            {/* <div className="flex-grow p-4"> */}
            <Body sections={sections} >
                <Outlet />
            </Body>
            {/* </div> */}
        </div>
    );
};

export default ProtectedRoutes;
