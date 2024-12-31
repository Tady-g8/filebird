

export default function Collection(props: {collectionName: string, onClick?: () => void}) {
    return (
        <button onClick={props.onClick} className="border border-black rounded-full flex items-center gap-2 px-4 max-w-96 mt-2 transition duration-200 hover:bg-gray-800 text-xl h-14">
            <span className="absolute w-3 h-3 bg-transparent border-l-2 border-b-2 border-white rounded-bl-lg -translate-y-1"></span>

            <span className='hidden lg:block pl-6'>
                {props.collectionName}
            </span>
        </button>
    )
}