import Image from 'next/image'

export default function ProfileLeft() {
    return (
        <button className="MainProfileLeft mt-5 mb-5 rounded-full flex items-center gap-2 px-4 py-2 lg:w-11/12 md:w-fit text-xl h-16 transition duration-200 hover:bg-gray-800 ">
            <Image className='lg:hidden' src="profile.svg" alt="" width={30} height={30}/>
            
            <Image className='hidden lg:block' src="profile.svg" alt="" width={40} height={40}/>
            
            <p className="font-bold ml-4 hidden lg:block">Guest</p>
        </button>
    )
}