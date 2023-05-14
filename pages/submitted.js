import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function Submitted() {
	const router = useRouter();
	return (
		<main
			className='flex items-center justify-center bg-gray-800'>
			<div className=' bg-gray-800 rounded-lg w-3/4 font-latoRegular text-center text-gray-200 p-16'>
				<h1 className='text-3x1 pb-4 font-latoBold'>
					Thank you {router.query.name}{" "} for you offer.
				</h1>
				<p className='text-lg text-gray-200'>
					After publishing We will send confirmation to: {router.query.email} 
				</p>
			</div>
		</main>
	);
}
