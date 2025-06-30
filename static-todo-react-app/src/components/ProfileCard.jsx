function ProfileCard(props) {
    return(
        
        <div className="profile-card">
            <h1 className="heading">User Profile</h1>
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Bio: {props.bio}</p>
        </div>
    );
}

export default ProfileCard