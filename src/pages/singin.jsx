import React, { useState } from 'react'
import { MdVisibility } from 'react-icons/md'



const ForgetPassword = () => {
    const [isEmail, setIsEmail] = useState(false)


    const handleforgotpassword = (event) => {
        event.preventDefault()
        if (event.target.email.value) {
            setIsEmail(true)
        }
    }
    const handleResetpassword = (event) => {
        event.preventDefault()
        const password = event.target.password.value;
        const confirmPassword = event.target.confirmPassword.value
        if (password !== confirmPassword) {
            alert("Passwords are not matched")
        }
        else {
            alert("password saved")
        }
    }
    return (
        <>
            <div className="flex min-h-full flex-1 flex-col justify-center px-5 py-12 lg:px-8 ">
                {
                    isEmail ? (
                        <>


                            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm ">
                                <form className="space-y-6 shadow-md shadow-indigo-500  shadow-sm hover:bg-whait-500  px-5 py-5" onSubmit={handleResetpassword}>
                                    <div >
                                        <div className="sm:mx-auto sm:w-full sm:max-w-sm ">


                                            <img
                                                className="mx-auto h-20 w-20 color=indigo&shade=600 py-2"
                                                src="https://e7.pngegg.com/pngimages/1024/909/png-clipart-computer-icons-lock-padlock-technic-computer-icons.png"
                                                alt="Your Company"
                                            />
                                            <h2 className="mt-5  text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                                                Reset Password
                                            </h2>
                                        </div>



                                        <div className="mt-2 bg-white flex py-2 px-4 shadow-md shadow-wheat-500 w-full rounded-full justify-between items-center">

                                            <input
                                                placeholder='password'
                                                id="password"
                                                name="password"
                                                type="password"
                                                required
                                                className="bg-tranprent outline-none"
                                            />
                                            <MdVisibility> </MdVisibility>
                                        </div>
                                    </div>
                                    <div>

                                        <div className="mt-2 bg-white flex py-2 px-4 shadow-md shadow-wheat-500 w-full rounded-full justify-between items-center">
                                            <input
                                                placeholder='confrom password'
                                                id="confirmPassword"
                                                name="confirmPassword"
                                                type="password"
                                                required
                                                className="bg-tranprent outline-none"
                                            />
                                            <MdVisibility></MdVisibility>
                                        </div>
                                    </div>
                                    <div>
                                        <button
                                            type="submit"
                                            className="flex w-full justify-center rounded-full bg-indigo-600 px-2 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                        >
                                            Reset Password
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </>

                    ) : (
                        <>
                            

                            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                                <form className="space-y-6 shadow-md shadow-indigo-500 shadow-sm hover:bg-whait-500  px-5 py-5" onSubmit={handleforgotpassword}>
                                   <div className="sm:mx-auto sm:w-full sm:max-w-sm ">

                                <h2 className="mt-10 text-center text-2xl font-bold leading-3 tracking-tight text-gray-900">
                                    Forgot Password
                                </h2>
                            </div>

                                    <div >
                                        <label htmlFor="email" className="  block text-sm font-bold  leading-6 text-gray-900 ">
                                            Email Address
                                        </label>
                                        <div className="mt-2 ">
                                            <input
                                                id="email"
                                                name="email"
                                                type="email"
                                                autoComplete="email"

                                                required
                                                className="block w-full rounded-full border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <button
                                            type="submit"
                                            className="flex w-full justify-center rounded-full bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                        >
                                            Forgot Password
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </>
                    )
                }
            </div>

        </>
    )

}

export default ForgetPassword;