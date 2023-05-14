import Navbar from './navbar'
import Footer from './footer'


export default function Layout({ children }) {
  return (
    <>
    <div div className='bg-gray-800 '>
      <Navbar />
      </div>
      <main>{children}</main>
    
    </>
  )
}