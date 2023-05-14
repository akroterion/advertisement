import React from "react";
import Link from "next/link";

const navbar = () => {
	
	return (
		<ul className='pt-2 pb-2 text-lg text-gray-200 tracking-wide flex flex-row p-3 order-3 justify-end space-x-3 bg-gray-800 ' >
			<li><Link href="/"className='basis-1/8  p-3 space-x-6 cursor-pointer'>HOME</Link></li>
			<li><Link href="/advertisement" className='basis-1/8  p-3 space-x-6 cursor-pointer'>ADVERTISEMENT</Link></li>
<li><Link href="/links" className='basis-1/8  p-3 space-x-6 cursor-pointer'>LINKS</Link></li>
		</ul>
	);
};

export default navbar;
