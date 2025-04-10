import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import options from '../../utilities/contact-us-options';

const ContactUsForm = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [formStatus, setFormStatus] = useState('idle'); // 'idle', 'loading', 'success', 'error'
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        setFormStatus('loading'); // Show loading state
        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });
            debugger

            if (response.ok) {
                setFormStatus('success'); // Form submission successful
            } else {
                setFormStatus('error'); // Form submission failed
            }
        } catch (error) {
            setFormStatus('error'); // Network error or any other issue
        }
    };

    const updateTheme = () => {
        const storedTheme = localStorage.getItem('theme');
        const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const isDark = storedTheme === 'dark' || (!storedTheme && prefersDarkMode);
        setIsDarkMode(isDark);
    };

    useEffect(() => {
        updateTheme(); // Initial theme check

        const handleThemeChange = () => {
            updateTheme();
        };

        window.addEventListener('themeChange', handleThemeChange);
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', handleThemeChange);

        return () => {
            window.removeEventListener('themeChange', handleThemeChange);
            window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', handleThemeChange);
        };
    }, []);

    return (
        <div className={`flex justify-center items-center py-16 max-sm:py-8 max-lg:py-12 ${!isDarkMode ? 'contact-us-banner' : ''}`}>
            <div className="w-full flex justify-center items-center flex-col md:flex-row xl:mx-20 lg:mx-10 px-8 xl:px-20 lg:px-10 max-w-[1310px]">
                <div className="w-full md:basis-1/3">
                    <h2 className="text-2xl md:text-3xl font-bold my-2">Join Us</h2>
                    <p className="py-2">{options.name} is actively seeking new opportunities. We’d love to hear from you.</p>

                    <h2 className="text-2xl md:text-3xl font-bold my-2">Address</h2>
                    <p className="py-2">
                        {options.address} <br />
                        Landmark: {options.landmark} <br />
                        {options.city} - {options.zip} <br />
                        {options.state} <br />
                        <a className="text-orange flex items-center max-w-fit" href="https://maps.app.goo.gl/ikBaD3Txtt8i1vcG6?g_st=aw" target="blank">
                            Directions
                            <svg className="inline ml-1" xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#f26621">
                                <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h560v-280h80v280q0 33-23.5 56.5T760-120H200Zm188-212-56-56 372-372H560v-80h280v280h-80v-144L388-332Z" />
                            </svg>
                        </a>
                    </p>

                    <h2 className="text-2xl md:text-3xl font-bold my-2">Phone</h2>
                    <p className="pb-2">Phone No: <a className="text-orange" href={`tel:${options.phone}`}>{options.phone}</a></p>

                    <h2 className="text-2xl md:text-3xl font-bold my-2">Email</h2>
                    <p className="pt-2">
                        <a className="text-orange" href={`mailto:${options.company_email_domain}`}>{options.company_email_domain}</a>
                    </p>
                    <p className="py-2">
                        <a className="text-orange" href={`mailto:${options.company_email_gmail}`}>{options.company_email_gmail}</a>
                    </p>
                </div>

                <div className="flex w-full flex-col md:ml-5 md:basis-2/3">
                    {formStatus === 'loading' ? (
                        <div className="flex flex-col items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" height="100px" viewBox="0 -960 960 960" width="100px" fill="#01bfa0">
                                <path d="m421-298 283-283-46-45-237 237-120-120-45 45 165 166Zm59 218q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-83 31.5-156t86-127Q252-817 325-848.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 82-31.5 155T763-197.5q-54 54.5-127 86T480-80Zm0-60q142 0 241-99.5T820-480q0-142-99-241t-241-99q-141 0-240.5 99T140-480q0 141 99.5 240.5T480-140Zm0-340Z" />
                            </svg>
                            <h1 className="text-3xl md:text-4xl font-bold my-2">Submitting your enquiry...</h1>
                        </div>
                    ) : formStatus === 'success' ? (
                        <div className="flex flex-col items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" height="100px" viewBox="0 -960 960 960" width="100px" fill="#01bfa0">
                                <path d="m421-298 283-283-46-45-237 237-120-120-45 45 165 166Zm59 218q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-83 31.5-156t86-127Q252-817 325-848.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 82-31.5 155T763-197.5q-54 54.5-127 86T480-80Zm0-60q142 0 241-99.5T820-480q0-142-99-241t-241-99q-141 0-240.5 99T140-480q0 141 99.5 240.5T480-140Zm0-340Z" />
                            </svg>
                            <h1 className="text-3xl md:text-4xl font-bold my-2">Your enquiry has been sent.</h1>
                            <h3 className="text-1xl md:text-2xl font-bold my-2">Thank you for your time. We will revert back soon.</h3>
                        </div>
                    ) : formStatus === 'error' ? (
                        <div className="flex flex-col items-center">
                            <h1 className="text-3xl md:text-4xl font-bold my-2">Oops! Something went wrong.</h1>
                            <h3 className="text-1xl md:text-2xl font-bold my-2">Please try again later.</h3>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                            <div>
                                <input
                                    type="text"
                                    {...register('name', { required: 'Name is required' })}
                                    className="mt-1 p-2 border border-gray-300 rounded w-full dark:text-gray-700"
                                    placeholder="Name*"
                                />
                                {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
                            </div>
                            <div>
                                <input
                                    type="tel"
                                    // {...register('phone', { required: 'Phone number is required' })}
                                    {...register('phone', {
                                        required: 'Phone number is required',
                                        pattern: {
                                            value: /^[0-9]{10}$/, // Example pattern for a 10-digit phone number
                                            message: 'Please enter a valid 10-digit phone number',
                                        },
                                    })}
                                    className="mt-1 p-2 border border-gray-300 rounded w-full dark:text-gray-700"
                                    placeholder="Phone Number*"
                                />
                                {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
                            </div>
                            <div>
                                <input
                                    type="email"
                                    // {...register('email', { required: 'Email is required' })}
                                    {...register('email', {
                                        required: 'Email is required',
                                        pattern: {
                                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, // Basic email validation pattern
                                            message: 'Please enter a valid email address',
                                        },
                                    })}
                                    className="mt-1 p-2 border border-gray-300 rounded w-full dark:text-gray-700"
                                    placeholder="Email*"
                                />
                                {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                            </div>
                            <div>
                                <textarea
                                    // {...register('message', { required: 'Message is required' })}
                                    className="mt-1 p-2 border border-gray-300 rounded w-full dark:text-gray-700 resize-none"
                                    placeholder="Your Message"
                                    rows={5}
                                ></textarea>
                                {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
                            </div>
                            <button type="submit" className="bg-orange text-white p-2 rounded">
                                Submit
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ContactUsForm;
