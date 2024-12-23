import Image from 'next/image'

export default function MainPostButton() {
    return (
        <button className="bg-blue-500 text-white rounded-full gap-2 mr-5 px-4 py-2 lg:w-11/12 text-xl text-center h-16 transition duration-200 hover:bg-blue-400 md:w-fit">
            <span className="hidden lg:block">
                Post
            </span>
            <Image className='lg:hidden' src="feather.svg" alt="" width={30} height={30}/>
        </button>
    )
}