// src/pages/contact-us.js
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';

const ContactUsForm = () => {
    const [formSubmit, setForSubmit] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm();

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

        // Listen for the custom themeChange event
        window.addEventListener('themeChange', handleThemeChange);
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', handleThemeChange);

        return () => {
            window.removeEventListener('themeChange', handleThemeChange);
            window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', handleThemeChange);
        };
    }, []);

    const onSubmit = data => {
        console.log(data);
    };

    // const states = ["Andaman and Nicobar Islands", "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chandigarh", "Chhattisgarh", "Dadra and Nagar Haveli and Daman and Diu", "Delhi", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jammu and Kashmir", "Jharkhand", "Karnataka", "Kerala", "Ladakh", "Lakshadweep", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Puducherry", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal"];
    // const cities = {
    //     "Select State": ["Select City"],
    //     "Delhi": ["New Delhi"],
    //     "Maharashtra": ["Mumbai", "Pune", "Nagpur"],
    //     "Karnataka": ["Bangalore", "Mysore"],
    //     "Andaman and Nicobar Islands": ["Chennai", "Coimbatore"]
    // };

    const handleContactUsSubmit = () => {
        // const { name, email, phone, message, city, state } = formData;
        // if (name && email && phone && message && city && state) {
        //     // Submit form to API
        // } else {
        //     // Display error message
        // }
        setForSubmit(true);
    }

    return (
        <div className={`flex justify-center items-center py-16 max-sm:py-8 max-lg:py-12 ${!isDarkMode ? 'contact-us-banner' : ''}`}>
            {console.log(isDarkMode, 'isDarkMode')}
            <div className="w-full flex justify-center items-center flex-col md:flex-row xl:mx-20 lg:mx-10 px-8 xl:px-20 lg:px-10 max-w-[1310px]">
                <div className="w-full md:basis-1/3">
                    <h2 className="text-2xl md:text-3xl font-bold my-2">Join Us</h2>
                    <p className='py-2'>ABC is actively seeking new opportunities. We’d love to hear from you.</p>
                    <h2 className="text-2xl md:text-3xl font-bold my-2">Address</h2>
                    <p className='py-2'>133 Pearl Street, Suite 300 <br />Boston, MA 02110 <br />
                        <a className='text-orange flex items-center' href="https://maps.app.goo.gl/R3NK78yeTTReqcAF9" target="blank">
                            Directions
                            <svg className='inline ml-1' xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#f26621"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h560v-280h80v280q0 33-23.5 56.5T760-120H200Zm188-212-56-56 372-372H560v-80h280v280h-80v-144L388-332Z" /></svg>
                        </a>
                    </p>
                    <h2 className="text-2xl md:text-3xl font-bold my-2">Phone</h2>
                    <p className='pt-2'>Phone No: <a className='text-orange' href="tel:+917415939251">+91-8435272170</a></p>
                    <p className='pb-2'>Phone No: <a className='text-orange' href="tel:+917415939251">+91-6268100277</a></p>
                    <h2 className="text-2xl md:text-3xl font-bold my-2">Email</h2>
                    <p className='py-2'><a className='text-orange' href="mailto:puneetdwevedi2@gmail.com">puneetdwevedi2@gmail.com</a></p>
                </div>
                <div className="flex w-full flex-col md:ml-5 md:basis-2/3">
                    {/* <h1 className="text-2xl font-bold mb-4">Contact Us</h1> */}
                    {!formSubmit ?
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                            <div>
                                {/* <label className="block text-sm font-medium text-gray-700 dark:text-white">Name</label> */}
                                <input
                                    type="text"
                                    {...register("name", { required: true })}
                                    className="mt-1 p-2 border border-gray-300 rounded w-full dark:text-gray-700"
                                    placeholder='Name*'
                                />
                                {errors.name && <p className="text-red-500 text-sm">Name is required</p>}
                            </div>
                            <div>
                                {/* <label className="block text-sm font-medium text-gray-700 dark:text-white">Number</label> */}
                                <input
                                    type="tel"
                                    {...register("number", { required: true })}
                                    className="mt-1 p-2 border border-gray-300 rounded w-full dark:text-gray-700"
                                    placeholder='Phone Number*'
                                />
                                {errors.number && <p className="text-red-500 text-sm">Number is required</p>}
                            </div>
                            <div>
                                {/* <label className="block text-sm font-medium text-gray-700 dark:text-white">Email</label> */}
                                <input
                                    type="email"
                                    // {...register("email", { required: true })}
                                    className="mt-1 p-2 border border-gray-300 rounded w-full dark:text-gray-700"
                                    placeholder='Email'
                                />
                                {/* {errors.email && <p className="text-red-500 text-sm">Email is required</p>} */}
                            </div>
                            {/* <div>
                                <label className="block text-sm font-medium text-gray-700">State</label>
                                <select
                                    {...register("state", { required: true })}
                                    className="mt-1 p-2 border border-gray-300 rounded w-full"
                                    placeholder="Please enter your state"
                                >
                                    {states.map((state, index) => (
                                        <option key={index} value={state}>{state}</option>
                                    ))}
                                </select>
                                {errors.state && <p className="text-red-500 text-sm">State is required</p>}
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">City</label>
                                <select
                                    {...register("city", { required: true })}
                                    className="mt-1 p-2 border border-gray-300 rounded w-full"
                                >
                                    {cities[register.state]?.map((city, index) => (
                                        <option key={index} value={city}>{city}</option>
                                    ))}
                                </select>
                                {errors.city && <p className="text-red-500 text-sm">City is required</p>}
                            </div> */}
                            <div>
                                {/* <label className="block text-sm font-medium text-gray-700 dark:text-white">Your Message</label> */}
                                <textarea
                                    {...register("message", { required: true })}
                                    className="mt-1 p-2 border border-gray-300 rounded w-full dark:text-gray-700 resize-none"
                                    placeholder='Your Message*'
                                    rows={5}
                                ></textarea>
                                {errors.message && <p className="text-red-500 text-sm">Message is required</p>}
                            </div>
                            <button onClick={handleContactUsSubmit} type="submit" className="bg-orange text-white p-2 rounded">Submit</button>
                        </form> :
                        <div className='flex flex-col items-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" height="100px" viewBox="0 -960 960 960" width="100px" fill="#01bfa0"><path d="m421-298 283-283-46-45-237 237-120-120-45 45 165 166Zm59 218q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-83 31.5-156t86-127Q252-817 325-848.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 82-31.5 155T763-197.5q-54 54.5-127 86T480-80Zm0-60q142 0 241-99.5T820-480q0-142-99-241t-241-99q-141 0-240.5 99T140-480q0 141 99.5 240.5T480-140Zm0-340Z" /></svg>
                            <h1 className='text-3xl md:text-4xl font-bold my-2'>Your enquiry has been sent.</h1>
                            <h3 className='text-1xl md:text-2xl font-bold my-2'>Thank you for your time. We will revert back soon.</h3>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default ContactUsForm;