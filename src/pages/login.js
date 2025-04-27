// /pages/login.js

"use client";

import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { auth, RecaptchaVerifier, signInWithPhoneNumber } from "../../firebaseConfig";
import { useRouter } from "next/navigation";
import options from "../utilities/contact-us-options";
import Image from "next/image";

export default function LoginPage() {
    const { loginWithGoogle, loginWithFacebook, loginWithTwitter, user } = useAuth();
    const [phone, setPhone] = useState("");
    const [otp, setOtp] = useState("");
    const [confirmationResult, setConfirmationResult] = useState(null);
    const [error, setError] = useState("");
    const router = useRouter();

    const setupRecaptcha = () => {
        if (!window.recaptchaVerifier) {
            window.recaptchaVerifier = new RecaptchaVerifier(auth, "recaptcha-container", {
                size: "invisible",
                callback: (response) => {
                    console.log("Recaptcha verified");
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
            alert("OTP Sent to your mobile number!");
        } catch (err) {
            console.error(err);
            setError("Failed to send OTP. Please try again.");
        }
    };

    const verifyOtp = async () => {
        setError("");
        try {
            await confirmationResult.confirm(otp);
            router.push("/profile");
        } catch (err) {
            console.error(err);
            setError("Invalid OTP. Please try again.");
        }
    };

    if (user) {
        router.push("/");
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-green-100 via-lime-300 to-green-400 flex flex-col items-center justify-center p-6">

            {/* Logo and Site Name */}
            <a href="/" className="flex items-end space-x-2 mb-8">
                <Image src="/favicon-32x32.png" alt="Neelam Enterprises Logo" width={70} height={100} />
                <span className="text-xl font-bold text-green-800">Neelam <br /> Enterprises</span>
            </a>

            <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full space-y-6">
                <h1 className="text-2xl font-bold text-center text-green-700">Welcome to Neelam Enterprises</h1>
                <p className="text-gray-500 text-center">Login with your preferred method</p>

                <div className="flex flex-col gap-3">
                    {/* Phone login */}
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

                    {/* Divider */}
                    <div className="flex items-center justify-center my-4 overflow-hidden">
                        <div className="h-[0.25px] bg-gray-400 w-full"></div>
                        <span className="text-gray-400 px-2">or</span>
                        <div className="h-[0.25px] bg-gray-400 w-full"></div>
                    </div>

                    {/* Social logins */}
                    <button onClick={loginWithGoogle} className="w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded-md transition" >Login with Google</button>
                    <button onClick={loginWithFacebook} className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md transition" >Login with Facebook</button>
                    <button onClick={loginWithTwitter} className="w-full bg-sky-400 hover:bg-sky-500 text-white py-2 rounded-md transition" >Login with Twitter</button>

                    {/* Back to Home */}
                    <div className="flex justify-center mt-6">
                        <a href="/" className="flex items-center text-orangee hover:underline text-sm font-medium">
                            {/* Left Arrow Icon */}
                            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"></path>
                            </svg>
                            Back to Home
                        </a>
                    </div>

                    {/* Recaptcha container */}
                    <div id="recaptcha-container"></div>

                    {/* Error message */}
                    {error && <p className="text-red-500 text-center">{error}</p>}

                    {/* Help email */}
                    <div className="text-center text-sm text-gray-500 mt-6">
                        In case you are facing difficulty logging in, please reach out at <br />
                        <a className="text-orangee hover:underline" href={`mailto:${options.company_email_domain}`}>
                            {options.company_email_domain}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}