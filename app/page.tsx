'use client';
import Link from 'next/link'

import Image from 'next/image'
import Modal from './modal'
export default function Home() {
  return (
    <div className=' bg-white '>


{/* announcement  */}

<div className="flex space-x-1 text-center justify-center  bg-black mb-10 ">
<h4 className='max-w-none text-white text-xl mr-16   '>HIGH QUALITY! 100% COTTON!</h4> 
            <h4 className='max-w-none text-white text-xl   '>WE DELIVER ALL OVER LEBANON!</h4> 
            
</div>


{/* announcement  */}

{/* navbar */}

      <div>
        <nav className="bg-white border-gray-200 ">
    <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4 ">
        <a href="https://enigmalb.netlify.app/" className="flex items-center space-x-3 rtl:space-x-reverse ">
            <img src="enigma text black.png" className=" h-20  " alt="Logo" />
        </a>
        <div className="flex items-center space-x-6 rtl:space-x-reverse">
            <a href="https://www.instagram.com/enigmaleb/" className="text-sm mr-4  text-gray-500 "><img className='w-8 hover:w-10' src="ig.webp" alt="" /></a>
            <a href="https://www.tiktok.com/@enigmaleb" className="text-sm  text-gray-500 "><img className='w-8 hover:w-10' src="tiktok.svg" alt="" /></a>
        </div>
    </div>
</nav>

      </div>

<div>


<div className='flex justify-center items-center '>
<Modal></Modal>
</div>


{/* navbar2 */}

{/* <div className="flex  items-center justify-center  w-full md:flex md:w-auto md:order-1 mt-10 mb-10" id="navbar-cta">
    <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white ">
      <li>
        <a href="#" className="block py-2 px-3 md:p-0 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 " aria-current="page">Home</a>
      </li>
      <li>
        <a href="#" className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700">About</a>
      </li>
      <li>
        <a href="#" className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700">Services</a>
      </li>
      <li>
        <a href="#" className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700">Contact</a>
      </li>
    </ul>
  </div>
</div> */}


{/* navbar2 */}



{/* summer */}

    <div className='pt-12 flex justify-center' >
        <img  className=' mb-10   lg:w-[1550px]' src="summer.png" alt="" />
    </div>



{/* summer */}


{/* 1st */}

    <div className='container mx-auto pt-8 overflow-x-auto'>
      <div className="grid grid-cols-1  md:grid-cols-1 lg:grid-cols-3 gap-4 ">
    <div>
        <div className=" group  w-full max-w-[800px] max-h-[600px] bg-white border border-gray-200 rounded-lg shadow ">
    
    <div className="group-hover:hidden"><img className=" w-[700px] h-[440px] " src="shirtf.png" alt="product image" /></div>
    <div className="hidden group-hover:flex"><img className=" w-[700px] h-[440px] " src="shirt.png" alt="product image" /></div>
    <div className="px-5 pb-5 mt-6">
        
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 text-center">STRAWBERRY LEMONADE SHIRT</h5>
        
        <div className="flex-row items-center justify-between text-center mt-6">
            <span className="text-2xl font-bold text-gray-900  ">15$</span>

        </div>
        <span className="text-sm text-center flex justify-center mt-2  text-gray-900  ">tap/hover to see the back design</span>
    </div>
</div>
    </div>
    
    <div>
        <div className=" group  w-full max-w-[800px] max-h-[600px] bg-white border border-gray-200 rounded-lg shadow ">
    
    <div className="group-hover:hidden"><img className=" w-[700px] h-[440px] " src="vibesf.png" alt="product image" /></div>
    <div className="hidden group-hover:flex"><img className=" w-[700px] h-[440px] " src="vibesb.png" alt="product image" /></div>
    <div className="px-5 pb-5 mt-6">
        
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 text-center">GOOD VIBES</h5>
        
        <div className="flex-row items-center justify-between text-center mt-6">
            <span className="text-2xl font-bold text-gray-900  ">15$</span>
            
        </div>
        <span className="text-sm text-center flex justify-center mt-2  text-gray-900  ">tap/hover to see the back design</span>
    </div>
</div>
    </div>

    <div>
        <div className=" group  w-full max-w-[800px] max-h-[600px] bg-white border border-gray-200 rounded-lg shadow ">
    
    <div className="group-hover:hidden"><img className=" w-[700px] h-[440px] " src="floatingf.png" alt="product image" /></div>
    <div className="hidden group-hover:flex"><img className=" w-[700px] h-[440px] " src="floatingb.png" alt="product image" /></div>
    <div className="px-5 pb-5 mt-6">
        
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 text-center">FLOATING</h5>
        
        <div className="flex-row items-center justify-between text-center mt-6">
            <span className="text-2xl font-bold text-gray-900 ">15$</span>
        </div>
        <span className="text-sm text-center flex justify-center mt-2  text-gray-900  ">tap/hover to see the back design</span>
    </div>
</div>
    </div>

  

    </div>
    </div>
  
{/* 1st */}


{/* 2nd */}

<div className='container mx-auto pt-8 overflow-x-auto'>
      <div className="grid grid-cols-1  md:grid-cols-1 lg:grid-cols-3 gap-4 ">
    <div>
        <div className=" group  w-full max-w-[800px] max-h-[600px] bg-white border border-gray-200 rounded-lg shadow ">
    
    <div className="group-hover:hidden"><img className=" w-[700px] h-[440px] " src="sunshinef.png" alt="product image" /></div>
    <div className="hidden group-hover:flex"><img className=" w-[700px] h-[440px] " src="sunshineb.png" alt="product image" /></div>
    <div className="px-5 pb-5 mt-6">
        
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 text-center">SUNSHINE</h5>
        
        <div className="flex-row items-center justify-between text-center mt-6">
            <span className="text-2xl font-bold text-gray-900  ">15$</span>
        </div>
        <span className="text-sm text-center flex justify-center mt-2  text-gray-900  ">tap/hover to see the back design</span>
    </div>
</div>
    </div>
    
    <div>
        <div className=" group  w-full max-w-[800px] max-h-[600px] bg-white border border-gray-200 rounded-lg shadow ">
    
    <div className="group-hover:hidden"><img className=" w-[700px] h-[440px] " src="skatef.png" alt="product image" /></div>
    <div className="hidden group-hover:flex"><img className=" w-[700px] h-[440px] " src="skateb.png" alt="product image" /></div>
    <div className="px-5 pb-5 mt-6">
        
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 text-center">SKATER</h5>
        
        <div className="flex-row items-center justify-between text-center mt-6">
            <span className="text-2xl font-bold text-gray-900  ">15$</span>
        </div>
        <span className="text-sm text-center flex justify-center mt-2  text-gray-900  ">tap/hover to see the back design</span>
    </div>
</div>
    </div>

    <div>
        <div className=" group  w-full max-w-[800px] max-h-[600px] bg-white border border-gray-200 rounded-lg shadow ">
    
    <div className="group-hover:hidden"><img className=" w-[700px] h-[440px] " src="richf.png" alt="product image" /></div>
    <div className="hidden group-hover:flex"><img className=" w-[700px] h-[440px] " src="richb.png" alt="product image" /></div>
    
    <div className="px-5 pb-5 mt-6">
        
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 text-center">RICH</h5>
        
        
        <div className="flex-row items-center justify-between text-center mt-6">
            <span className="text-2xl font-bold text-gray-900 ">15$</span>
        </div>
        <span className="text-sm text-center flex justify-center mt-2  text-gray-900  ">tap/hover to see the back design</span>
    </div>
</div>
    </div>

  

    </div>
    </div>
  
{/* 2nd */}


{/* black */}

<div className='pt-12 flex justify-center' >
        <img  className=' mb-10   lg:w-[1550px]' src="blackbg.png" alt="" />
    </div>



{/* black */}

{/* 1st */}

<div className='container mx-auto pt-8 overflow-x-auto'>
      <div className="grid grid-cols-1  md:grid-cols-1 lg:grid-cols-3 gap-4 ">
    <div>
        <div className=" group  w-full max-w-[800px] max-h-[600px] bg-white border border-gray-200 rounded-lg shadow ">
    
    <div className="group-hover:hidden"><img className=" w-[700px] h-[440px] " src="ravef.png" alt="product image" /></div>
    <div className="hidden group-hover:flex"><img className=" w-[700px] h-[440px] " src="raveb.png" alt="product image" /></div>
    
    <div className="px-5 pb-5 mt-6">
        
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 text-center">RAVE</h5>
        
        
        <div className="flex-row items-center justify-between text-center mt-6">
            <span className="text-2xl font-bold text-gray-900  ">15$</span>
        </div>
        <span className="text-sm text-center flex justify-center mt-2  text-gray-900  ">tap/hover to see the back design</span>
    </div>
</div>
    </div>
    
    <div>
        <div className=" group  w-full max-w-[800px] max-h-[600px] bg-white border border-gray-200 rounded-lg shadow ">
    
    <div className="group-hover:hidden"><img className=" w-[700px] h-[440px] " src="fallingf.png" alt="product image" /></div>
    <div className="hidden group-hover:flex"><img className=" w-[700px] h-[440px] " src="fallingb.png" alt="product image" /></div>
    
    <div className="px-5 pb-5 mt-6">
        
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 text-center">FALLING FOR YOU</h5>
        
        
        <div className="flex-row items-center justify-between text-center mt-6">
            <span className="text-2xl font-bold text-gray-900  ">15$</span>
        </div>
        <span className="text-sm text-center flex justify-center mt-2  text-gray-900  ">tap/hover to see the back design</span>
    </div>
</div>
    </div>

    <div>
        <div className=" group  w-full max-w-[800px] max-h-[600px] bg-white border border-gray-200 rounded-lg shadow ">
    
    <div className="group-hover:hidden"><img className=" w-[700px] h-[440px] " src="overf.png" alt="product image" /></div>
    <div className="hidden group-hover:flex"><img className=" w-[700px] h-[440px] " src="overb.png" alt="product image" /></div>
    
    <div className="px-5 pb-5 mt-6">
        
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 text-center">OVERTHINKER</h5>
        
        
        <div className="flex-row items-center justify-between text-center mt-6">
            <span className="text-2xl font-bold text-gray-900 ">15$</span>
        </div>
        <span className="text-sm text-center flex justify-center mt-2  text-gray-900  ">tap/hover to see the back design</span>
    </div>
</div>
    </div>

  

    </div>
    </div>
  
{/* 1st */}

{/* 2nd */}

<div className='container mx-auto pt-8 overflow-x-auto'>
      <div className="grid grid-cols-1  md:grid-cols-1 lg:grid-cols-3 gap-4 ">
    <div>
        <div className=" group  w-full max-w-[800px] max-h-[600px] bg-white border border-gray-200 rounded-lg shadow ">
    
    <div className="group-hover:hidden"><img className=" w-[700px] h-[440px] " src="dreamyf.png" alt="product image" /></div>
    <div className="hidden group-hover:flex"><img className=" w-[700px] h-[440px] " src="dreamyb.png" alt="product image" /></div>
    
    <div className="px-5 pb-5 mt-6">
        
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 text-center">DREAMY</h5>
        
        
        <div className="flex-row items-center justify-between text-center mt-6">
            <span className="text-2xl font-bold text-gray-900  ">15$</span>
        </div>
        <span className="text-sm text-center flex justify-center mt-2  text-gray-900  ">tap/hover to see the back design</span>
    </div>
</div>
    </div>
    
    <div>
        <div className=" group  w-full max-w-[800px] max-h-[600px] bg-white border border-gray-200 rounded-lg shadow ">
    
    <div className="group-hover:hidden"><img className=" w-[700px] h-[440px] " src="summerf.png" alt="product image" /></div>
    <div className="hidden group-hover:flex"><img className=" w-[700px] h-[440px] " src="summerb.png" alt="product image" /></div>
    
    <div className="px-5 pb-5 mt-6">
        
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 text-center">SUMMER NIGHTS</h5>
        
        
        <div className="flex-row items-center justify-between text-center mt-6">
            <span className="text-2xl font-bold text-gray-900  ">15$</span>
        </div>
        <span className="text-sm text-center flex justify-center mt-2  text-gray-900  ">tap/hover to see the back design</span>
    </div>
</div>
    </div>

    <div>
        <div className=" group  w-full max-w-[800px] max-h-[600px] bg-white border border-gray-200 rounded-lg shadow ">
    
    <div className="group-hover:hidden"><img className=" w-[700px] h-[440px] " src="euphoriaf.png" alt="product image" /></div>
    <div className="hidden group-hover:flex"><img className=" w-[700px] h-[440px] " src="euphoriab.png" alt="product image" /></div>
    
    <div className="px-5 pb-5 mt-6">
        
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 text-center">EUPHORIA</h5>
        
        
        <div className="flex-row items-center justify-between text-center mt-6">
            <span className="text-2xl font-bold text-gray-900 ">15$</span>
        </div>
        <span className="text-sm text-center flex justify-center mt-2  text-gray-900  ">tap/hover to see the back design</span>
    </div>
</div>
    </div>

  

    </div>
    </div>
  
{/* 2nd */}




{/* feelings */}

<div className='pt-12 flex justify-center' >
        <img  className=' mb-10   lg:w-[1550px]' src="feelings.png" alt="" />
    </div>



{/* feelings */}

{/* 1st */}

<div className='container mx-auto pt-8 overflow-x-auto'>
      <div className="grid grid-cols-1  md:grid-cols-1 lg:grid-cols-3 gap-4 ">
    <div>
        <div className=" group  w-full max-w-[800px] max-h-[600px] bg-white border border-gray-200 rounded-lg shadow ">
    
    <div className="group-hover:hidden"><img className=" w-[700px] h-[440px] " src="dief.png" alt="product image" /></div>
    <div className="hidden group-hover:flex"><img className=" w-[700px] h-[440px] " src="dieb.png" alt="product image" /></div>
    
    <div className="px-5 pb-5 mt-6">
        
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 text-center">DIE FOR YOU</h5>
        
        
        <div className="flex-row items-center justify-between text-center mt-6">
            <span className="text-2xl font-bold text-gray-900  ">15$</span>
        </div>
        <span className="text-sm text-center flex justify-center mt-2  text-gray-900  ">tap/hover to see the back design</span>
    </div>
</div>
    </div>
    
    <div>
        <div className=" group  w-full max-w-[800px] max-h-[600px] bg-white border border-gray-200 rounded-lg shadow ">
    
    <div className="group-hover:hidden"><img className=" w-[700px] h-[440px] " src="toxicf.png" alt="product image" /></div>
    <div className="hidden group-hover:flex"><img className=" w-[700px] h-[440px] " src="toxicb.png" alt="product image" /></div>
    
    <div className="px-5 pb-5 mt-6">
        
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 text-center">TOXIC</h5>
        
        
        <div className="flex-row items-center justify-between text-center mt-6">
            <span className="text-2xl font-bold text-gray-900  ">15$</span>
        </div>
        <span className="text-sm text-center flex justify-center mt-2  text-gray-900  ">tap/hover to see the back design</span>
    </div>
</div>
    </div>

    <div>
        <div className=" group  w-full max-w-[800px] max-h-[600px] bg-white border border-gray-200 rounded-lg shadow ">
    
    <div className="group-hover:hidden"><img className=" w-[700px] h-[440px] " src="flawsf.png" alt="product image" /></div>
    <div className="hidden group-hover:flex"><img className=" w-[700px] h-[440px] " src="flawsb.png" alt="product image" /></div>
    
    <div className="px-5 pb-5 mt-6">
        
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 text-center">FLAWS</h5>
        
        
        <div className="flex-row items-center justify-between text-center mt-6">
            <span className="text-2xl font-bold text-gray-900 ">15$</span>
        </div>
        <span className="text-sm text-center flex justify-center mt-2  text-gray-900  ">tap/hover to see the back design</span>
    </div>
</div>
    </div>

  

    </div>
    </div>
  
{/* 1st */}

{/* 2nd */}

<div className='container mx-auto pt-8 overflow-x-auto'>
      <div className="grid grid-cols-1  md:grid-cols-1 lg:grid-cols-3 gap-4 ">
    <div>
        <div className=" group  w-full max-w-[800px] max-h-[600px] bg-white border border-gray-200 rounded-lg shadow ">
    
    <div className="group-hover:hidden"><img className=" w-[700px] h-[440px] " src="heartlessf.png" alt="product image" /></div>
    <div className="hidden group-hover:flex"><img className=" w-[700px] h-[440px] " src="heartlessb.png" alt="product image" /></div>
    
    <div className="px-5 pb-5 mt-6">
        
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 text-center">HEARTLESS</h5>
        
        
        <div className="flex-row items-center justify-between text-center mt-6">
            <span className="text-2xl font-bold text-gray-900  ">15$</span>
        </div>
        <span className="text-sm text-center flex justify-center mt-2  text-gray-900  ">tap/hover to see the back design</span>
    </div>
</div>
    </div>
    
    <div>
        <div className=" group  w-full max-w-[800px] max-h-[600px] bg-white border border-gray-200 rounded-lg shadow ">
    
    <div className="group-hover:hidden"><img className=" w-[700px] h-[440px] " src="overf.png" alt="product image" /></div>
    <div className="hidden group-hover:flex"><img className=" w-[700px] h-[440px] " src="overb.png" alt="product image" /></div>
    
    <div className="px-5 pb-5 mt-6">
        
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 text-center">OVERTHINKER</h5>
        
        
        <div className="flex-row items-center justify-between text-center mt-6">
            <span className="text-2xl font-bold text-gray-900  ">15$</span>
        </div>
        <span className="text-sm text-center flex justify-center mt-2  text-gray-900  ">tap/hover to see the back design</span>
    </div>
</div>
    </div>

    <div>
        <div className=" group  w-full max-w-[800px] max-h-[600px] bg-white border border-gray-200 rounded-lg shadow ">
    
    <div className="group-hover:hidden"><img className=" w-[700px] h-[440px] " src="yoursf.png" alt="product image" /></div>
    <div className="hidden group-hover:flex"><img className=" w-[700px] h-[440px] " src="yoursb.png" alt="product image" /></div>
    
    <div className="px-5 pb-5 mt-6">
        
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 text-center">WANNA BE YOURS</h5>
        
        
        <div className="flex-row items-center justify-between text-center mt-6">
            <span className="text-2xl font-bold text-gray-900 ">15$</span>
        </div>
        <span className="text-sm text-center flex justify-center mt-2  text-gray-900  ">tap/hover to see the back design</span>
    </div>
</div>
    </div>

  

    </div>
    </div>
  
{/* 2nd */}

{/* retro */}

{/* <div className='pt-12 flex justify-center' >
        <img  className=' mb-10   lg:w-[1550px]' src="backbg.png" alt="" />
    </div> */}



{/* retro */}

{/* 1st */}

{/* <div className='container mx-auto pt-8 overflow-x-auto'>
      <div className="grid grid-cols-1  md:grid-cols-1 lg:grid-cols-3 gap-4 ">
    <div>
        <div className=" group  w-full max-w-[800px] max-h-[600px] bg-white border border-gray-200 rounded-lg shadow ">
    
    <div className="group-hover:hidden"><img className=" w-[700px] h-[440px] " src="dief.png" alt="product image" /></div>
    <div className="hidden group-hover:flex"><img className=" w-[700px] h-[440px] " src="dieb.png" alt="product image" /></div>
    
    <div className="px-5 pb-5 mt-6">
        
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 text-center">DIE FOR YOU</h5>
        
        
        <div className="flex-row items-center justify-between text-center mt-6">
            <span className="text-2xl font-bold text-gray-900  ">15$</span>
        </div>
    </div>
</div>
    </div>
    
    <div>
        <div className=" group  w-full max-w-[800px] max-h-[600px] bg-white border border-gray-200 rounded-lg shadow ">
    
    <div className="group-hover:hidden"><img className=" w-[700px] h-[440px] " src="toxicf.png" alt="product image" /></div>
    <div className="hidden group-hover:flex"><img className=" w-[700px] h-[440px] " src="toxicb.png" alt="product image" /></div>
    
    <div className="px-5 pb-5 mt-6">
        
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 text-center">TOXIC</h5>
        
        
        <div className="flex-row items-center justify-between text-center mt-6">
            <span className="text-2xl font-bold text-gray-900  ">15$</span>
        </div>
    </div>
</div>
    </div>

    <div>
        <div className=" group  w-full max-w-[800px] max-h-[600px] bg-white border border-gray-200 rounded-lg shadow ">
    
    <div className="group-hover:hidden"><img className=" w-[700px] h-[440px] " src="flawsf.png" alt="product image" /></div>
    <div className="hidden group-hover:flex"><img className=" w-[700px] h-[440px] " src="flawsb.png" alt="product image" /></div>
    
    <div className="px-5 pb-5 mt-6">
        
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 text-center">FLAWS</h5>
        
        
        <div className="flex-row items-center justify-between text-center mt-6">
            <span className="text-2xl font-bold text-gray-900 ">15$</span>
        </div>
    </div>
</div>
    </div>

  

    </div>
    </div>
   */}
{/* 1st */}

{/* footer */}

<footer className=" bg-gray-200 rounded-lg shadow  m-4 mt-20">
    <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-center flex justify-center">
            <a href="https://enigmalb.netlify.app/" className="flex items-cente2  sm:mb-0 space-x-3 rtl:space-x-reverse">
                <img src="enigma text black.png" className="h-20" alt="Logo" />
                
            </a>
            
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto  lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center ">© 2024 <a href="https://enigmalb.netlify.app/" className="hover:underline">ENIGMA™</a>. All Rights Reserved.</span>
    </div>
</footer>

{/* footer */}




    </div>
    </div>

    
      
    
  )
}
