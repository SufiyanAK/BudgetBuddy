import { FC, useEffect } from "react";
import { gsap } from "gsap";

const Dashboard: FC = () => {

    useEffect(() => {
        gsap.fromTo(
            ".dashboard",
            { opacity: 0, x: 100 },
            { opacity: 1, x: 0, duration: 1, ease: "power3.out" }
        );
    }, []);

    return (
        <div className="dashboard mt-8">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold">Dashboard</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg">
                    <h2 className="text-xl font-bold">Expense Summary</h2>
                    <p className="mt-2 text-gray-600">Total Expenses: $1,000</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg">
                    <h2 className="text-xl font-bold">Recent Transactions</h2>
                    <ul className="mt-2 text-gray-600">
                        <li>Grocery: $100</li>
                        <li>Rent: $500</li>
                        <li>Transport: $50</li>
                    </ul>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg">
                    <h2 className="text-xl font-bold">Budget Analysis</h2>
                    <p className="mt-2 text-gray-600">75% of the budget used.</p>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
