import React from 'react'
import { useFormik, yupToFormErrors } from "formik";
import * as Yup from "yup";
import { Router, useRouter } from "next/router";
import {useEffect, useState} from 'react'



export default function Form() {
	const router = useRouter();

	//Formik logics
	const formik = useFormik({
		initialValues: {
			name: "",
			email: "",
			position: "Technician",
			flexible: "yes",
			salary: "",
			type: "permanent",
			hours:"",
			description:"",
			terms: "",
		},

		//Validate form

		validationSchema: Yup.object({
			name: Yup.string()
				.max(20, "Name must be 20 characters or less.")
				.required("Name is required"),
			email: Yup.string()
				.email("Invalid email adress")
				.required("Email is required"),
			salary:  Yup.number()
				.min(18, "are you sure that someone will want work for this money?")
				.max(300, "are you sure your salary is in €?")
				.required("Salary is required"),
			hours:  Yup.number()
			.max(200, "Are you will want work this number of hours in month?"),
			description: Yup.string().min(50, "description must be 50 characters or more")
			.max(500, "Description must be 500 characters or less")
			.required("Description is required"),
			terms: Yup.array().required("Terms of service must be checked "),
		}),

		//Submit form
		onSubmit: (values) => {
			console.log(values);
			router.push({ pathname: "/submitted", query: values });
		},
	});

	return (
		<div>
			<main className='flex items-center justify-center bg-gray-800'>
				<form
					onSubmit={formik.handleSubmit}
					className='bg- flex rounded-lgw-1/2 font-latoRegular'>
					<div>
						<div className='flex-1 text-gray-200 p-20 text-center'>
							<h1 className='text-xl pb-2 font-latoBold'>
						Please fill this form:
							</h1>
							<p className='text-lg text-gray-200'>Please remember - offered salary must be reliable to your expectations - don't offer pizza driver salary to the people with University degree.</p>
							{/* company name input field */}
							<div className='mt-6'>
								<div className='pb-4'>
									<label
										className={`block font-latoBold text-lg pb-2 ${
											formik.touched.name && formik.errors.name
												? "text-red-400"
												: ""
										}`}
										htmlFor='name'>
										{formik.touched.name && formik.errors.name
											? formik.errors.name
											: "Company name:"}
									</label>
									<h1></h1>
									<input
										className='border-2 p-2 rounded-md w-4/5 text-gray-800 border-teal-500 focus: ring-teal-500'
										type='text'
										name='name'
										placeholder='Please enter your company name'
										value={formik.values.name}
										onChange={formik.handleChange}
										onBlur={formik.handleBlur}
									/>
								</div>
								<div className='pb-4'>
									{/* email input field */}
									<label
										className={`block font-latoBold text-lg pb-2 ${
											formik.touched.email && formik.errors.email
												? "text-red-400"
												: ""
										}`}
										htmlFor='email'>
										{formik.touched.email && formik.errors.email
											? formik.errors.email
											: "Email:"}
									</label>
									<input
										className='border-2 p-2 rounded-md w-4/5 border-teal-500 focus: ring-teal-500 text-gray-800'
										type='email'
										name='email'
										placeholder='Enter your email'
										value={formik.values.email}
										onChange={formik.handleChange}
										onBlur={formik.handleBlur}
									/>
								</div>
								<div className='pb-4'>
									{/* postiton input field */}
									<label
										className='block font-latoBold text-lg pb-2'
										htmlFor='position'>
										Offered position:{" "}
									</label>
									<select
										value={formik.values.position}
										onChange={formik.handleChange}
										name='position'
										className='border-2 p-2 rounded-md w-4/5 focus: border-teal-500 focus: ring-teal-500 text-gray-800'>
										<option>Site assistant</option>
										<option>Technician</option>
										<option>Supervisor</option>
										<option>Site director</option>
									</select>
								</div>
								<div className='pb-4'>
									{/* flexible input field */}
									<label
										className='block font-latoBold text-lg pb-2'
										htmlFor='flexible'>
										Flexible:{" "}
									</label>
									<select
										value={formik.values.flexible}
										onChange={formik.handleChange}
										name='Flexible time of work'
										className=' text-gray-800 border-2 p-2 rounded-md w-4/5 focus: border-teal-500 focus: ring-teal-500'>
										<option>yes</option>
										<option>no</option>
									</select>
								</div>
                <div className='pb-4'>
									{/* salary input field */}
									<label
										className={`block font-latoBold text-lg pb-2 ${
											formik.touched.salary && formik.errors.salary
												? "text-red-400"
												: ""
										}`}
										htmlFor='salary'>
										{formik.touched.salary && formik.errors.salary
											? formik.errors.salary
											: "Salary in € per hour:"}
									</label>
									<input
										className='text-gray-800 border-2 boder-gray-500 p-2 rounded-md w-4/5'
										type='salary'
										name='salary'
										placeholder='Enter offered salary'
										value={formik.values.salary}
										onChange={formik.handleChange}
										onBlur={formik.handleBlur}
									/>
								</div>
								<div className='pb-4'>
									{/* type of contract input field */}
									<label
										className='block font-latoBold text-lg pb-2'
										htmlFor='type'>
										Type of Contract:{" "}
									</label>
									<select
										value={formik.values.type}
										onChange={formik.handleChange}
										name='type'
										className='text-gray-800 border-2 boder-gray-500 p-2 rounded-md w-4/5 focus: border-teal-500 focus: ring-teal-500'>
										<option>short therm</option>
										<option>permanent</option>
										<option>other</option>
									</select>
								</div>
								<div className='pb-4'>
									{/*  hours input field */}
									<label
										className={`block font-latoBold text-lg pb-2 ${
											formik.touched.hours && formik.errors.hours
												? "text-red-400"
												: ""
										}`}
										htmlFor='hours'>
										{formik.touched.hours && formik.errors.hours
											? formik.errors.hours
											: "Amount of working hours in month:"}
									</label>
									<input
										className='text-gray-800 border-2 boder-gray-500 p-2 rounded-md w-4/5'
										type='hours'
										name='hours'
										placeholder='Enter amount of working hours in month'
										value={formik.values.hours}
										onChange={formik.handleChange}
										onBlur={formik.handleBlur}
									/>
								</div>
								<div className='pb-4'>
									{/*  description input field */}
									<label
										className={`block font-latoBold text-lg pb-2 ${
											formik.touched.description && formik.errors.description
												? "text-red-400"
												: ""
										}`}
										htmlFor='description'>
										{formik.touched.description && formik.errors.description
											? formik.errors.description
											: "Description of your offer:"}
									</label>
									<textarea
										className='text-gray-800 border-2 boder-gray-500 p-2 rounded-md w-4/5 h-32 '
										type='description'
										name='description'
										placeholder='Enter description of you offer'
										value={formik.values.description}
										onChange={formik.handleChange}
										onBlur={formik.handleBlur}
									/>
								</div>
								<div className='pb-4'>
									{/* terms of service*/}
									<label
										className={`block font-latoBold text-lg pb-2 ${
											formik.touched.terms && formik.errors.terms
												? "text-red-400"
												: ""
										}`}
										htmlFor='terms'>
										{formik.touched.terms && formik.errors.terms
											? formik.errors.terms
											: "Terms of service"}
										Terms of servicce
									</label>
									<input
										type='checkbox'
										name='terms'
										value='checked'
										onChange={formik.handleChange}
										className='h-5 w-5 text-teal-500 border-2 focus:border-teal-500 focus:ring-teal-500'
									/>
									<p className='tex-sm font-latoBold text-gray-500'>
										I agree to the Terms and Service that my data will be taken
										and sold.
									</p>
								</div>
							</div>
							<button
								type='submit'
								className='bg-teal-500 font-latoBold text-lg text-white py-3 mt-6 rounded-lg w-3/5'>
								send
							</button>
						</div>
					</div>
				</form>
			</main>
		</div>
	);
}
