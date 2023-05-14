"use client";

import React from "react";

const Links = () => {
	return (
		<>
			<div className='container mx-auto text-center tracking-wider text-lg pt-12 bg-gray-800 text-gray-200'>
				<p className="pt-12 pb-4">LINKS:</p>
				<div className="mb-3">					< a
						href='https://www.europae-archaeologiae-consilium.org/'
						target='_blank'
						rel='noopener noreferrer'>
						Europae Archaeologiae Consilium
					</a>
				</div>
				<div className="mb-3">					
					
					<a
						href='http://e-archaeology.org'
						target='_blank'
						rel='noopener noreferrer'>
						e-archeology
					</a>
				</div>
				<div className="mb-3">					
					<a className="line-clamp-2"
						href='https://www.coe.int/en/web/culture-and-heritage/valletta-convention'
						target='_blank'
						rel='noopener noreferrer'>
						Convention for the Protection of the Archaeological Heritage of
						Europe
					</a>
				</div>
			</div>
		</>
	);
};

export default Links;
