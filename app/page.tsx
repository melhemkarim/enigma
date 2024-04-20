import Image from 'next/image'

export default function Home() {
  return (
    <div className='  bg-gray-800 h-screen flex flex-col justify-center '>
      <h1 className=' text-6xl font-serif font-black text-white m-auto pt-52 '>WE'RE TAKING OVER SOON</h1>\
      <img className=' h-auto w-auto m-auto pb-32' src="logo.png" alt="" />
    </div>
    
    
  )
}
