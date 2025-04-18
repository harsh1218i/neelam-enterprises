import { useState, useEffect, useCallback, useMemo } from 'react';
import { useForm } from 'react-hook-form';
import options from '../../utilities/contact-us-options';

const ContactUsForm = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [formStatus, setFormStatus] = useState('idle'); // idle, loading, success, error

    const {
        register,
        handleSubmit,
        formState: { errors, isValid }
    } = useForm();

    const onSubmit = useCallback(async (data) => {
        setFormStatus('loading');
        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            });
            setFormStatus(response.ok ? 'success' : 'error');
        } catch (error) {
            setFormStatus('error');
        }
    }, []);

    const updateTheme = useCallback(() => {
        const storedTheme = localStorage.getItem('theme');
        const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const isDark = storedTheme === 'dark' || (!storedTheme && prefersDarkMode);
        setIsDarkMode(isDark);
    }, []);

    useEffect(() => {
        updateTheme();
        const handleThemeChange = () => updateTheme();
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        window.addEventListener('themeChange', handleThemeChange);
        mediaQuery.addEventListener('change', handleThemeChange);
        return () => {
            window.removeEventListener('themeChange', handleThemeChange);
            mediaQuery.removeEventListener('change', handleThemeChange);
        };
    }, [updateTheme]);

    const contactDetails = useMemo(() => (
        <>
            <h2 className="text-2xl md:text-3xl font-bold my-2">Join Us</h2>
            <p className="py-2">{options.name} is actively seeking new opportunities. We’d love to hear from you.</p>

            <h2 className="text-2xl md:text-3xl font-bold my-2">Address</h2>
            <p className="py-2">
                {options.address} <br />
                {!!options.landmark && <span>Landmark: {options.landmark}<br /></span>}
                {options.city} - {options.zip}<br />
                {options.state}<br />
                <a className="text-orangee flex items-center max-w-fit" href="https://maps.app.goo.gl/ikBaD3Txtt8i1vcG6?g_st=aw" target="blank">
                    Directions
                    <svg className="inline ml-1" xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#f26621">
                        <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h560v-280h80v280q0 33-23.5 56.5T760-120H200Zm188-212-56-56 372-372H560v-80h280v280h-80v-144L388-332Z" />
                    </svg>
                </a>
            </p>

            {!!options.phone && (
                <>
                    <h2 className="text-2xl md:text-3xl font-bold my-2">Phone</h2>
                    <p className="pb-2">Phone No: <a className='text-orangee' href={`tel:${options.phone}`}>{options.phone}</a></p>
                </>
            )}

            <h2 className="text-2xl md:text-3xl font-bold my-2">Email</h2>
            <p className="pt-2">
                <a className="text-orangee" href={`mailto:${options.company_email_domain}`}>{options.company_email_domain}</a>
            </p>
            <p className="py-2">
                <a className="text-orangee" href={`mailto:${options.company_email_gmail}`}>{options.company_email_gmail}</a>
            </p>
        </>
    ), []);

    const renderForm = () => (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
                <input type="text" {...register('name', { required: 'Name is required' })} className="mt-1 p-2 border border-gray-300 rounded w-full dark:text-gray-700" placeholder="Name*" />
                {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
            </div>
            <div>
                <input type="tel" className="mt-1 p-2 border border-gray-300 rounded w-full dark:text-gray-700"
                    {...register('phone', {
                        required: 'Phone number is required',
                        pattern: {
                            value: /^[0-9]{10}$/,
                            message: 'Please enter a valid 10-digit phone number',
                        },
                    })}
                    placeholder="Phone Number*"
                />
                {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
            </div>
            <div>
                <input type="email" className="mt-1 p-2 border border-gray-300 rounded w-full dark:text-gray-700"
                    {...register('email', {
                        required: 'Email is required',
                        pattern: {
                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                            message: 'Please enter a valid email address',
                        },
                    })}
                    placeholder="Email*"
                />
                {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
            </div>
            <div>
                <textarea {...register('message', { required: 'Message is required' })} className="mt-1 p-2 border border-gray-300 rounded w-full dark:text-gray-700 resize-none" placeholder="Your Message*" rows={5} />
                {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
            </div>
            <button type="submit" className={`bg-orangee text-white p-2 rounded transition-all duration-200 ${isValid ? 'cursor-pointer' : 'cursor-not-allowed opacity-50'}`}>Submit</button>
        </form>
    );

    const renderStatus = () => {
        const statusContent = {
            loading: {
                iconColor: "#01bfa0",
                heading: "Submitting your enquiry...",
            },
            success: {
                iconColor: "#01bfa0",
                heading: "Your enquiry has been sent.",
                subheading: "Thank you for your time. We will revert back soon.",
            },
            error: {
                iconColor: "#f87171",
                heading: "Oops! Something went wrong.",
                subheading: "Please try again later.",
            }
        }[formStatus];
        if (!statusContent) return renderForm();
        return (
            <div className="flex flex-col items-center">
                <svg xmlns="http://www.w3.org/2000/svg" height="100px" viewBox="0 -960 960 960" width="100px" fill={statusContent.iconColor}>
                    <path d="m421-298 283-283-46-45-237 237-120-120-45 45 165 166Zm59 218q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-83 31.5-156t86-127Q252-817 325-848.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 82-31.5 155T763-197.5q-54 54.5-127 86T480-80Zm0-60q142 0 241-99.5T820-480q0-142-99-241t-241-99q-141 0-240.5 99T140-480q0 141 99.5 240.5T480-140Zm0-340Z" />
                </svg>
                <h1 className="text-3xl md:text-4xl font-bold my-2">{statusContent.heading}</h1>
                {statusContent.subheading && <h3 className="text-1xl md:text-2xl font-bold my-2">{statusContent.subheading}</h3>}
            </div>
        );
    };
    return (
        <div className={`flex justify-center items-center py-16 max-sm:py-8 max-lg:py-12 ${!isDarkMode ? 'contact-us-banner' : ''}`}>
            <div className="w-full flex justify-center items-center flex-col md:flex-row xl:mx-20 lg:mx-10 px-4 xl:px-20 lg:px-10 max-w-[1310px]">
                <div className="w-full md:basis-1/3">{contactDetails}</div>
                <div className="flex w-full flex-col md:ml-5 md:basis-2/3">{renderStatus()}</div>
            </div>
        </div>
    );
};

export default ContactUsForm;