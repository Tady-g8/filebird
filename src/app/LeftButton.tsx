import Image from 'next/image'

export default function LeftButton(props: {btnText: string, btnIcon: string, onClick?: () => void}) {
    return (
        <button onClick={props.onClick} className="border border-black rounded-full flex items-center gap-2 px-4 max-w-96 mt-2 transition duration-200 hover:bg-gray-800 text-xl h-14">
            <Image src={props.btnIcon} alt="" width={20} height={20}/>
            <span className='hidden lg:block'>
                {props.btnText}
            </span>
        </button>
    )
}