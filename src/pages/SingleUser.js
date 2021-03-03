import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import UserCard from '../components/UserCard';
import { useParams, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getSingleUser } from '../actions/user';

const SingleUser = () => {
    const [isVisible, setIsVisible] = useState();
    const dispatch = useDispatch();
    const { userId } = useParams();
    const userData = useSelector(state => state.users.user);
    const isLoader = useSelector(state => state.loader);
    useEffect(() => {
        dispatch(getSingleUser(userId));
    }, [userId]);

    useEffect(() => {
        if (userData.id % 2 === 0) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    }, [userData]);

    return (
        <>
            {isLoader
                ? <Spinner animation="border" style={{ position: 'fixed', top: '50%', left: '50%' }} />
                : <>
                    <UserCard userData={userData} />
                    { isVisible && <Link to="/">Go home</Link>}
                </>
            }
        </>
    );
}

export default SingleUser;