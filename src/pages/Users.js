import React, { useCallback, useEffect, useState } from 'react';
import UserCard from '../components/UserCard';
import { Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../actions/user';
import CompanyFilter from '../components/CompanyFilter';

const Users = () => {
    const dispatch = useDispatch();
    const { list, companies } = useSelector(state => state.users);
    const [filter, setFilter] = useState(null);
    const [dataItem, setDataItems] = useState();

    useEffect(() => {
        dispatch(getUsers());
    }, [dispatch]);

    useEffect(() => {
        if (filter) {
            setDataItems(list.filter(item => item.company.name === filter))
        } else {
            setDataItems(list);
        }
    }, [list, filter])

    const filterHandler = useCallback(eventKey => {
        setFilter(eventKey);
    }, []);

    return (
        <>
            <CompanyFilter
                companies={companies}
                onSelect={filterHandler}
                activeFilter={filter}
            />
            <Row>
                {dataItem?.map(item => <UserCard key={item.id} userData={item} />)}
            </Row>
        </>
    )

}

export default Users;