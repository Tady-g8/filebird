import LeftButton from "./LeftButton";
import MainPostButton from "./MainPostButton";
import ProfileLeft from "./ProfileLeft";

export default function MainLeft() {
    return (
        <div className="h-full mainLeftButtons">

            <div className="place-content-start md:ml-2">
                <LeftButton btnText="Home" btnIcon="home.svg" />
                <LeftButton btnText="Trending" btnIcon="trend.svg" />
                <LeftButton btnText="Spaces" btnIcon="rocket.svg" />
                <LeftButton btnText="Collections" btnIcon="bookmark.svg" />
            </div>
            

            <div className="place-content-end">
                <MainPostButton />
                <ProfileLeft />
            </div>

        </div>
    )
}