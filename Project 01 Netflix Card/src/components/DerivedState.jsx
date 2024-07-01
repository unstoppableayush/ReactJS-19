import { useState } from "react"

// const users = [
//     { name: "Alice", age: 25},
//     { name: "Bob", age: 30},
//     { name: "Charlie", age: 45},
//     { name: "Angles", age: 45},
// ]

export const DerivedState = () => {
    const [users, setUsers] = useState([
        { name: "Alice", age: 25},
        { name: "Bob", age: 30},
        { name: "Charlie", age: 45},
        { name: "Angles", age: 45},
    ])

    // Derived State: count of users
    const userCount = users.length;

    // Derived State
    const averageAge = users.reduce((accum, curElem) => accum + curElem.age, 0) / userCount;
    return (
        <div className="">
            <h1>Users List</h1>
            <ul>
                {
                    users.map((curElem, index) => {
                        return <>
                        <li key={index}>
                            {curElem.name} - {curElem.age} year old
                        </li>
                        </>
                    })
                }
                <li>Total Users: {userCount}</li>
                <li>Average Age: {averageAge}</li>
            </ul>

        </div>
    )
}