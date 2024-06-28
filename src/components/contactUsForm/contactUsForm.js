// src/pages/contact-us.js
import { useForm } from 'react-hook-form';

const ContactUsForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
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

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Contact Us</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700">Name</label>
                    <input
                        type="text"
                        {...register("name", { required: true })}
                        className="mt-1 p-2 border border-gray-300 rounded w-full"
                        placeholder='Please enter your name'
                    />
                    {errors.name && <p className="text-red-500 text-sm">Name is required</p>}
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Number</label>
                    <input
                        type="tel"
                        {...register("number", { required: true })}
                        className="mt-1 p-2 border border-gray-300 rounded w-full"
                        placeholder='Please enter your mobile number'
                    />
                    {errors.number && <p className="text-red-500 text-sm">Number is required</p>}
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Email</label>
                    <input
                        type="email"
                        {...register("email", { required: true })}
                        className="mt-1 p-2 border border-gray-300 rounded w-full"
                        placeholder='Please enter your email address'
                    />
                    {errors.email && <p className="text-red-500 text-sm">Email is required</p>}
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
                    <label className="block text-sm font-medium text-gray-700">Your Message</label>
                    <textarea
                        {...register("message", { required: true })}
                        className="mt-1 p-2 border border-gray-300 rounded w-full"
                        placeholder='Please enter your quiery message here.'
                        rows={5}
                    ></textarea>
                    {errors.message && <p className="text-red-500 text-sm">Message is required</p>}
                </div>
                <button type="submit" className="bg-blue-500 text-white p-2 rounded">Submit</button>
                <div>Thank you for your message. It has been sent.</div>
            </form>
        </div>
    );
};

export default ContactUsForm;