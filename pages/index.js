import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@advertisment/styles/Home.module.css";
import Form from "./form";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	return (
		<>
			<main div className='bg-gray-800'>
				<div className=' align-middle bg-gray-800  '>
					<p className='font-sans px-2 text-2xl text-center text-gray-200 '>
						Add your advertisement here:
						</p>
						<Form />
				</div>
			</main>
		</>
	);
}
