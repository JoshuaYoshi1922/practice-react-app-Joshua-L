import ProfileCard from "./ProfileCard"

function ProfileContainer(props) {

    return(
        <>
        
        <div className="profile1">
        <ProfileCard name="Michael Scott" age={`40s`} bio={"'I'm not superstitious,  but I am a little stitious'"}></ProfileCard>
        </div>
        
        <div className="profile2">
        <ProfileCard name="Ash Ketchum" age={10} bio="'Gotta Catch 'Em All!'"></ProfileCard>
        </div>
        
        <div className="profile3">
        <ProfileCard name="Clark Kent" age={31} bio="I write local stories at the Daily Planet."></ProfileCard>
        </div>
        </>
    )
}

export default ProfileContainer