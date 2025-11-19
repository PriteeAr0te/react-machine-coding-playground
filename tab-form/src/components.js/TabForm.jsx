import Profile from './Profile';
import Interests from './Interests';
import Settings from './Settings';
import { useState } from 'react';

const TabForm = () => {
    const [activeTab, setActiveTab] = useState("Profile");
    const [errors, setErrors] = useState({})

    const [data, setData] = useState({
        user: "",
        age: 0,
        email: "",
        interests: [],
        theme: "light"
    })

    const tabs = [
        {
            name: "Profile",
            component: Profile,
            validate: (formData) => {
                const errors = {};
                const isEmpty = (value) => !value || value.trim() === "";
                const isTooShort = (value, len = 2) => value.trim().length < len;

                if (isEmpty(formData.user) || isTooShort(formData.user)) {
                    errors.user = "Please enter a valid name (at least 2 characters).";
                }

                if (!formData.age || formData.age < 18) {
                    errors.age = "Age must be at least 18.";
                }

                if (
                    isEmpty(formData.email) ||
                    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
                ) {
                    errors.email = "Please enter a valid email address.";
                }

                return errors;
            }
        },
        {
            name: "Interests",
            component: Interests,
            validate: (formData) => {
                const errors = {};

                if (formData.interests.length < 1) {
                    errors.interests = "Select atleast one interest."
                }

                return errors;
            }
        },
        {
            name: "Settings",
            component: Settings,
            validate: () => {
                return true;
            }
        }
    ];

    const activeIndex = tabs.findIndex(tab => tab.name === activeTab);
    const ActiveTabComponent = tabs[activeIndex].component;

    const validateAndSetTab = (nextTab) => {
        const errors = tabs[activeIndex].validate(data);
        setErrors(errors);
        if (Object.keys(errors).length === 0) setActiveTab(nextTab);
    };

    const handleNext = () => {
        const currentTab = tabs[activeIndex];
        const validationErrors = currentTab.validate(data)

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        setErrors({});
        setActiveTab(tabs[activeIndex + 1].name);
    };

    const handlePrev = () => {
        if (activeIndex > 0) {
            setActiveTab(tabs[activeIndex - 1].name);
        }
    };

    const handleSubmit = () => {
        console.log(data)
    }

    return (
        <div className='h-full min-h-screen overflow-x-hidden w-full'>
            <div className='w-full flex justify-center items-center mt-5 gap-6 bg-white p-4'>
                {tabs.map((tab) => (
                    <button
                        key={tab.name}
                        onClick={() => validateAndSetTab(tab.name)}
                        className={`py-2 px-4 rounded-lg border text-gray-950 focus:border-blue-500 focus:bg-blue-100 hover:bg-blue-100 hover:border-blue-500 transition-all duration-300 ease-in-out delay-75 cursor-pointer ${activeTab === tab.name ? 'bg-blue-100 border-blue-500' : 'bg-gray-50 border-[#D0D5DD]'}`}
                    >
                        {tab.name}

                    </button>
                ))}
            </div>

            <div className='mt-5 border border-[#D0D5DD] bg-gray-50 h-full min-h-[60vh]'>
                <ActiveTabComponent data={data} setData={setData} errors={errors} />

                <div className='w-full mt-5 flex justify-center gap-5 items-center'>
                    {activeIndex > 0 &&
                        (
                            <button
                                onClick={handlePrev}
                                className='px-4 py-2 rounded-lg text-white bg-blue-500 hover:bg-blue-600 focus:bg-blue-600 active:bg-blue-600 transition-all duration-300 ease-in-out delay-100 cursor-pointer'
                            >
                                Prev
                            </button>
                        )
                    }
                    {activeIndex < tabs.length - 1 ?
                        (
                            <button
                                onClick={handleNext}
                                className='px-4 py-2 rounded-lg text-white bg-blue-500 hover:bg-blue-600 focus:bg-blue-600 active:bg-blue-600 transition-all duration-300 ease-in-out delay-100 cursor-pointer'
                            >
                                Next
                            </button>
                        ) :
                        (
                            <button
                                type='submit'
                                onClick={handleSubmit}
                                className='px-4 py-2 rounded-lg text-white bg-blue-500 hover:bg-blue-600 focus:bg-blue-600 active:bg-blue-600 transition-all duration-300 ease-in-out delay-100 cursor-pointer'
                            >
                                Submit
                            </button>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default TabForm