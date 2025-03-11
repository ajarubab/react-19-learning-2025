function User({myName="Vicky"}){        // default valued prop ( if prop passed, passed value, otherwise default value)
    return(
        <div>
            <h1>My Name is {myName}</h1>
        </div>
    )
}

export default User;