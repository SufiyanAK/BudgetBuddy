import React from "react";

const Profile: React.FC = () => {
    return (
        <div className="p-8">
            < div className="max-w-3xl bg-white mx-auto p-6 rounded-lg shadow-lg" >
                <h1 className="text-2xl font-bold mb-4">Profile</h1>
                <form className="space-y-4">
                    <input
                        type="text"
                        placeholder="Full Name"
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                    <button
                        type="submit"
                        className="w-full font-semibold py-2 bg-secondary text-white rounded-lg hover:bg-secondary-hover duration-150"
                    >
                        Update Profile
                    </button>
                </form>
            </ div>
        </div >
    );
};

export default Profile;
