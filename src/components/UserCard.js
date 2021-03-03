import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const UserCard = ({ userData: { id, name, email, phone, website } }) => {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title><Link to={`/${id}`}>{name}</Link></Card.Title>
                <ul>
                    <li>{email}</li>
                    <li>{phone}</li>
                    <li>{website}</li>
                </ul>
            </Card.Body>
        </Card>
    )
}

export default UserCard;