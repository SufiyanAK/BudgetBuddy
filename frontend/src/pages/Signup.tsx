import { FC, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { gsap } from "gsap";

const Signup: FC = () => {
    const navigate = useNavigate();

    useEffect(() => {
        gsap.fromTo(
            ".signup-form",
            { opacity: 0, scale: 0.9 },
            { opacity: 1, scale: 1, duration: 1, ease: "back.out(1.5)" }
        );
    }, []);

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-500 to-teal-500">
            <div className="bg-white rounded-lg shadow-lg p-8 signup-form w-full max-w-md">
                <h1 className="text-2xl font-bold text-center mb-6">Create Account</h1>
                <form className="space-y-4">
                    <input
                        type="text"
                        placeholder="Full Name"
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                    />
                    <button
                        type="button"
                        onClick={() => navigate("/login")}
                        className="w-full py-2 bg-green-500 text-white font-bold rounded-lg hover:bg-green-600"
                    >
                        Sign Up
                    </button>
                </form>
                <p className="text-center text-gray-500 mt-4">
                    Already have an account?{" "}
                    <span
                        onClick={() => navigate("/login")}
                        className="text-green-500 cursor-pointer hover:underline"
                    >
                        Login
                    </span>
                </p>
            </div>
        </div>
    );
};

export default Signup;
