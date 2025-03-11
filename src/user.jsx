function User({ fruits }) {
    return (
        <div>
            <h1>User Component</h1>
            <div>
                <h2>A for {fruits[0]}</h2>
                <h2>B for {fruits[1]}</h2>
                <h2>C for {fruits[2]}</h2>
            </div>
            <div>
                <h1>Fruit Names</h1>
                <ul>
                    {fruits.map((fruit, i) => (
                        <li key={i}>
                            <h2>{fruit}</h2>
                        </li>
                    ))}
                </ul>
            </div>
        </div>

    )
}

export default User;