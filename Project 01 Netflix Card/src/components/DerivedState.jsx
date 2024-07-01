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
            </ul>
        </div>
    )
}