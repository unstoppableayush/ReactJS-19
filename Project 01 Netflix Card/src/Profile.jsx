function Profile(){
    return(
        <div>
            <h1>Profile Card Challenge</h1>
            <ProfileCard
            name="Ayush"
            age={20}
            greeting={
                <div>
                    <strong>Hey Ayush</strong>
                </div>
            }

            >
            <p>Hobbies: Coding, Travelling , Exploring</p>
            <button>Contact</button>
            </ProfileCard>

            <ProfileCard
            name="Bob"
            age={20}
            greeting={
                <div>
                    <strong>Hey Bob, Keep up the great work</strong>
                </div>
            }

            >
            <p>Hobbies: Gaimg, Cooking , Exploring</p>
            <button>Contact</button>
            </ProfileCard>
        </div>

    )
}

export default Profile;

function ProfileCard(props){
    const {name, age, greeting, children } = props
    return(
        <>
        <h2>Name: {name}</h2>
        <p>Age: {age}</p>
        <p>{greeting}</p>
        <div>{children}</div>
        </>
    )
}
