import Image from 'next/image'

export default function Home() {
  return (
    <div className='  bg-gray-950 h-screen flex flex-col justify-center  m-auto'>
      <img className=' h-auto w-auto m-auto  ' src="logo-white.png" alt="" />
      <h1 className=' text-6xl font-serif font-black text-white m-auto  '>WE'RE TAKING OVER SOON</h1>\
      <img className=' h-auto w-auto m-auto pb-32' src="logo.png" alt="" />
    </div>
    
    
  )
}
