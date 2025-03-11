function User({children, color="Green", align}){        // default valued prop ( if prop passed, passed value, otherwise default value)
    return(
        <div style={{border: "5px solid blue", color: color, width: "300px", margin: "10px"}}>
            {children}
        </div>
    )
}

export default User;