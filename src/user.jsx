function User({data}){
    return (
        <div>
            <h1>User Component</h1>
            <h1>Fetching Method 3</h1>
            <h1>Name : {data.Name}</h1>
            <h1>Country : {data.Country}</h1>
        </div>
)
}

export default User;