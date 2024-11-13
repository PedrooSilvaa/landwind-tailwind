import marketing from '../../assets/images/marketing-strategy.svg'

export function Hero(){
    return(
        <div className='w-[100%]  flex flex-row items-center px-20 h-[544px] gap-44 justify-center'>
            <div className='w-[50%]'>
                <h1 className='font-black text-6xl text-gray-900 py-6'>Building digital <br />products & brands.</h1>
                <p className='text-xl font-normal text-gray-500'>Here at flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>
                <div className="flex flex-row gap-2 mt-10">
                    <button className="bg-purple-600 py-3 px-5 rounded-lg text-white">Start 30 day free trial</button>
                    <button className='rounded-lg border border-gray-200 py-3 px-5 text-gray-800'>Pricing & FAQ</button>
                </div>
            </div>
            <div>
                <img src={marketing} alt="" />
            </div>
        </div>
    );
}