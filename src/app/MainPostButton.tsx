import Image from 'next/image'

export default function MainPostButton() {
    return (
        <button className="bg-blue-500 text-white rounded-full gap-2 mr-5 px-4 py-2 lg:w-11/12 text-xl text-center transition duration-200 hover:bg-blue-400 
                           h-16 lg:h-16 lg:px-4 w-16">
            <span className="hidden lg:block">
                Post
            </span>
            <Image className="lg:hidden" src="feather.svg" alt="" width={40} height={40} />
        </button>
    );
}