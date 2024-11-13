import logo  from '../../assets/images/landwind-logo.svg'

export function Header() {
  return (
    <div className="px-10 py-5 flex flex-row w-[100%] ">
      <div className="flex flex-row items-center gap-2 w-[12%]">
      <img src={logo} alt="" />
        <h1 className='text-2xl font-bold'>LandWind</h1>
      </div>

      <div className="flex fle-row items-center justify-between w-[88%]">
        <div className="">
          <ul className='flex flex-row gap-8 text-gray-900'>
            <li >Company</li>
            <li>Marketplace</li>
            <li>Features</li>
            <li>Team</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className=" flex flex-row gap-4">
            <button>Log In</button>
            <button className='bg-[#7E3AF2] p-3 rounded-[8px] text-white font-bold'>Get started</button>
        </div>
      </div>
        
    </div>
  )
}
