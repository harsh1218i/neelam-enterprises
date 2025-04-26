// /components/LoginModal.js

"use client";

import { useState } from "react";
import { auth, RecaptchaVerifier, signInWithPhoneNumber } from "../../firebaseConfig";
import { useAuth } from "../context/AuthContext";

export default function LoginModal({ onClose }) {
    const { user } = useAuth();
    const [phone, setPhone] = useState("");
    const [otp, setOtp] = useState("");
    const [confirmationResult, setConfirmationResult] = useState(null);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const setupRecaptcha = () => {
        if (!window.recaptchaVerifier) {
            window.recaptchaVerifier = new RecaptchaVerifier(auth, "recaptcha-container-popup", {
                size: "invisible",
                callback: (response) => {
                    console.log("Recaptcha verified (Popup)");
                },
                "expired-callback": () => {
                    console.log("Recaptcha expired");
                },
            });
        }
    };

    const sendOtp = async () => {
        setError("");
        try {
            setupRecaptcha();
            const confirmation = await signInWithPhoneNumber(auth, "+91" + phone, window.recaptchaVerifier);
            setConfirmationResult(confirmation);
            setSuccess("OTP sent successfully!");
        } catch (err) {
            console.error(err);
            setError("Failed to send OTP. Please check number.");
        }
    };

    const verifyOtp = async () => {
        setError("");
        try {
            await confirmationResult.confirm(otp);
            setSuccess("Logged in successfully!");
            onClose(); // close modal after successful login
        } catch (err) {
            console.error(err);
            setError("Invalid OTP. Try again.");
        }
    };

    if (user) {
        onClose(); // agar pehle se login hai toh modal band
    }

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-lg w-full max-w-sm space-y-4 relative">
                <button onClick={onClose} className="absolute top-2 right-2 text-gray-500 hover:text-red-500 text-xl">&times;</button>
                <h2 className="text-xl font-bold text-center text-green-700">Login to Continue</h2>

                {!confirmationResult ? (
                    <>
                        <input
                            type="text"
                            placeholder="Enter Mobile Number"
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-green-500"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                        <button
                            onClick={sendOtp}
                            className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-md transition"
                        >
                            Send OTP
                        </button>
                    </>
                ) : (
                    <>
                        <input
                            type="text"
                            placeholder="Enter OTP"
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-green-500"
                            value={otp}
                            onChange={(e) => setOtp(e.target.value)}
                        />
                        <button
                            onClick={verifyOtp}
                            className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-md transition"
                        >
                            Verify OTP
                        </button>
                    </>
                )}

                {error && <p className="text-red-500 text-center">{error}</p>}
                {success && <p className="text-green-600 text-center">{success}</p>}

                {/* Invisible recaptcha */}
                <div id="recaptcha-container-popup"></div>
            </div>
        </div>
    );
}
