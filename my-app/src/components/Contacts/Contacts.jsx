import React from 'react'

function Contacts(props) {
    return (
        <div>
            <h3>Vardas:{props.name}</h3>
            <p>Email:{props.email}</p>
        </div>
    )
}

export default Contacts
