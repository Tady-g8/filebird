import Image from "next/image"

export default function Profile(){

    const username = sessionStorage.getItem('username');

    const description = "description"; 

    const profileStats = {
        followers: 0,
        following: 0,
        posts: 0
    };

    function logout() {
        console.log("Logging out");
        sessionStorage.removeItem('username');
        window.location.reload();
    }

    return (
        <div className="profile w-full">
            <div className="profileTop grid grid-cols-3">
                <button className="mt-5">Settings</button>
                <button className="mt-5">Edit Profile</button>
                <button className="mt-5" onClick={logout}>Log out</button>
            </div>
            <div className="banner mt-5"></div>
            <Image className="profilePic" src="profile.svg" alt="" width={80} height={80}/>
            <p className="username ml-5 mt-5 text-2xl font-bold">{"@" + username}</p>
            <p className="profileDescription mt-5 ml-5">{description}</p>
            <div className="profileStats flex border-b border-gray-500 pb-5">
                <div className="followers ml-5 mt-5 flex">
                    <p className="font-bold mr-2">{profileStats.followers}</p>
                    <p>Followers</p>
                </div>
                <div className="following ml-5 mt-5 flex">
                    <p className="font-bold mr-2">{profileStats.following}</p>
                    <p>Following</p>
                </div>
                <div className="posts ml-5 mt-5 flex">
                    <p className="font-bold mr-2">{profileStats.posts}</p>
                    <p>Posts</p>
                </div>
            </div>
        </div>
    )
}