import { FC, useState } from "react";
import { gsap } from "gsap";

interface Expense {
    id: number;
    date: string;
    category: string;
    amount: number;
    description: string;
}

const Expenses: FC = () => {
    const [expenses, setExpenses] = useState<Expense[]>([]);
    const [form, setForm] = useState({
        date: "",
        category: "",
        amount: "",
        description: "",
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const addExpense = () => {
        const newExpense = {
            id: Date.now(),
            date: form.date,
            category: form.category,
            amount: parseFloat(form.amount),
            description: form.description,
        };
        setExpenses([...expenses, newExpense]);
        setForm({ date: "", category: "", amount: "", description: "" });
        gsap.fromTo(
            `.expense-row-${newExpense.id}`,
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
        );
    };

    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold mb-6 text-center">Manage Expenses</h1>

            {/* Add Expense Form */}
            <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-lg mb-8">
                <h2 className="text-xl font-bold mb-4">Add New Expense</h2>
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        addExpense();
                    }}
                    className="space-y-4"
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input
                            type="date"
                            name="date"
                            value={form.date}
                            onChange={handleInputChange}
                            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                            required
                        />
                        <input
                            type="text"
                            name="category"
                            placeholder="Category (e.g., Food, Rent)"
                            value={form.category}
                            onChange={handleInputChange}
                            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                            required
                        />
                        <input
                            type="number"
                            name="amount"
                            placeholder="Amount"
                            value={form.amount}
                            onChange={handleInputChange}
                            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                            required
                        />
                        <input
                            type="text"
                            name="description"
                            placeholder="Description"
                            value={form.description}
                            onChange={handleInputChange}
                            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full py-2 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600"
                    >
                        Add Expense
                    </button>
                </form>
            </div>

            {/* Expenses Table */}
            <div className="max-w-5xl mx-auto bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-xl font-bold mb-4">Expense List</h2>
                {expenses.length > 0 ? (
                    <table className="w-full table-auto border-collapse">
                        <thead>
                            <tr className="bg-gray-200">
                                <th className="border px-4 py-2">Date</th>
                                <th className="border px-4 py-2">Category</th>
                                <th className="border px-4 py-2">Amount</th>
                                <th className="border px-4 py-2">Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            {expenses.map((expense) => (
                                <tr
                                    key={expense.id}
                                    className={`expense-row-${expense.id} hover:bg-gray-100`}
                                >
                                    <td className="border px-4 py-2">{expense.date}</td>
                                    <td className="border px-4 py-2">{expense.category}</td>
                                    <td className="border px-4 py-2">${expense.amount.toFixed(2)}</td>
                                    <td className="border px-4 py-2">{expense.description}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <p className="text-gray-500 text-center">No expenses added yet.</p>
                )}
            </div>
        </div>
    );
};

export default Expenses;
