import Image from 'next/image'

export default function ProfileLeft() {
    return (
        <button className="mt-5 mb-5 rounded-full flex items-center gap-2 px-4 py-2 w-11/12 text-xl h-16 transition duration-200 hover:bg-gray-800 ">
            <Image src="profile.svg" alt="" width={40} height={40}/>
            <p className="font-bold ml-6">Guest</p>
        </button>
    )
}