// /pages/profile.js

"use client";

import { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext"; // Assuming tumhara context hai
import { db, storage } from "../../firebaseConfig"; // Firestore aur Storage import
import { doc, setDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { useRouter } from "next/navigation";

export default function ProfilePage() {
    const { user, logout } = useAuth();
    const router = useRouter();
    const [formData, setFormData] = useState({
        firstName: "",
        middleName: "",
        lastName: "",
        profession: "",
        email: user?.email || "",
        phone: user?.phoneNumber || "",
    });
    const [profilePic, setProfilePic] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    // useEffect(() => {
    //     if (!user) {
    //         router.push("/login"); // Agar user login nahi hai to login page pe bhej dena
    //     }
    // }, [user, router]);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleFileChange = (e) => {
        setProfilePic(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        try {
            let profilePicUrl = "";

            // Agar profile pic upload hui hai to upload karo
            if (profilePic) {
                const storageRef = ref(storage, `profilePictures/${user.uid}`);
                await uploadBytes(storageRef, profilePic);
                profilePicUrl = await getDownloadURL(storageRef);
            }

            // Firestore me user data save karo
            await setDoc(doc(db, "users", user.uid), {
                ...formData,
                profilePic: profilePicUrl,
                createdAt: new Date(),
            });

            alert("Profile saved successfully!");
            router.push("/");
        } catch (err) {
            console.error(err);
            setError("Failed to save profile. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-green-100 via-lime-300 to-green-400 flex items-center justify-center p-6">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full space-y-6">
                <h1 className="text-2xl font-bold text-center text-green-700">Complete Your Profile</h1>

                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <input
                        type="text"
                        name="firstName"
                        placeholder="First Name"
                        value={formData.firstName}
                        onChange={handleChange}
                        className="border px-4 py-2 rounded focus:outline-none focus:border-green-500"
                        required
                    />
                    <input
                        type="text"
                        name="middleName"
                        placeholder="Middle Name (Optional)"
                        value={formData.middleName}
                        onChange={handleChange}
                        className="border px-4 py-2 rounded focus:outline-none focus:border-green-500"
                    />
                    <input
                        type="text"
                        name="lastName"
                        placeholder="Last Name"
                        value={formData.lastName}
                        onChange={handleChange}
                        className="border px-4 py-2 rounded focus:outline-none focus:border-green-500"
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        className="border px-4 py-2 rounded focus:outline-none focus:border-green-500"
                    />
                    <input
                        type="text"
                        name="phone"
                        placeholder="Phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="border px-4 py-2 rounded focus:outline-none focus:border-green-500"
                    />
                    <input
                        type="text"
                        name="profession"
                        placeholder="Profession"
                        value={formData.profession}
                        onChange={handleChange}
                        className="border px-4 py-2 rounded focus:outline-none focus:border-green-500"
                        required
                    />

                    {/* Profile Picture Upload */}
                    {/* <div>
                        <label className="block mb-1 text-gray-600">Profile Picture (optional)</label>
                        <input type="file" accept="image/*" onChange={handleFileChange} className="border w-full px-4 py-2 rounded" />
                    </div> */}

                    <button type="submit" disabled={loading} className="bg-green-600 hover:bg-green-700 font-medium text-white py-2 rounded transition">
                        {loading ? "Saving..." : "Save Profile"}
                    </button>

                    {/* Back to Home */}
                    <div className="flex justify-center mt-2 w-full">
                    <button onClick={logout} className="flex justify-center bg-red-500 hover:bg-red-600 text-white py-2 rounded transition w-full">
                    <a href="/" className="flex items-center hover:underline font-medium">
                            {/* Left Arrow Icon */}
                            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"></path>
                            </svg>
                            Back to Home (Logout)
                        </a>                    </button>
                    </div>
                    {error && <p className="text-red-500 text-center">{error}</p>}
                </form>
            </div>
        </div>
    );
}