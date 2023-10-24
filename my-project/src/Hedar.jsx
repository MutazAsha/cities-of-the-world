import React from 'react'

const Hedar = () => {
  return (
    <div>
<>
  <nav className="sticky inset-0 z-10 block h-max w-full max-w-full rounded-none border border-white/80 bg-white bg-opacity-80 py-2 px-4 text-white shadow-md backdrop-blur-2xl backdrop-saturate-200 lg:px-8 lg:py-4">
    <div className="flex items-center text-gray-900">
      <a
        href="#"
        className="mr-4 block cursor-pointer py-1.5 font-sans text-base font-medium leading-relaxed text-inherit antialiased"
      >
        Cities Of The World
      </a>
      <ul className="ml-auto mr-8 hidden items-center gap-6 lg:flex" >
        <li className="block p-1 font-sans text-sm font-normal leading-normal text-inherit antialiased"id="button-hedar">
          <a className="flex items-center" href="#">
            Home
          </a>
        </li>
        <li className="block p-1 font-sans text-sm font-normal leading-normal text-inherit antialiased">
          <a className="flex items-center" href="#">
            About
          </a>
        </li>
        <li className="block p-1 font-sans text-sm font-normal leading-normal text-inherit antialiased">
          <a className="flex items-center" href="#">
          Contact
          </a>
        </li>
        
      </ul>

      <button
        className="middle none relative ml-auto h-6 max-h-[40px] w-6 max-w-[40px] rounded-lg text-center font-sans text-xs font-medium uppercase text-blue-gray-500 transition-all hover:bg-transparent focus:bg-transparent active:bg-transparent disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:hidden"
        data-collapse-target="sticky-navar"
      >
        <span className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 transform">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            strokewidth={2}
          >
            <path
              strokelinecap="round"
              strokelinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </span>
      </button>
    </div>
    <div
      className="block h-0 w-full basis-full overflow-hidden text-blue-gray-900 transition-all duration-300 ease-in lg:hidden"
      data-collapse="sticky-navar"
    >
      <ul className="mt-2 mb-4 flex flex-col gap-2 pb-2">
        <li className="block p-1 font-sans text-sm font-normal leading-normal text-inherit antialiased">
          <a className="flex items-center" href="#">
            Home
          </a>
        </li>
        <li className="block p-1 font-sans text-sm font-normal leading-normal text-inherit antialiased">
          <a className="flex items-center" href="#">
            About
          </a>
        </li>
        <li className="block p-1 font-sans text-sm font-normal leading-normal text-inherit antialiased">
          <a className="flex items-center" href="#">
            Contact
          </a>
        </li>
       
      
      </ul>
    </div>
  </nav>
  <div className="mx-auto max-w-screen-md py-12">
    <div className="relative mb-12 flex flex-col overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
      <img
        alt="nature"
        className="h-[32rem] w-full object-cover object-center "
        src="https://images.unsplash.com/photo-1485470733090-0aae1788d5af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2717&q=80"
      />
    </div>
   
  </div>
</>

    </div>
  )
}

export default Hedar
