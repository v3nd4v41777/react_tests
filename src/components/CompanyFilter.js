import React from 'react';
import { DropdownButton, Dropdown } from 'react-bootstrap';

const CompanyFilter = ({ companies, onSelect }) => {
    return (
        <DropdownButton id="dropdown-item-button" title="Select company">
            {companies.map((company, index) => (
                <Dropdown.Item
                    key={index}
                    as="button"
                    eventKey={company.name}
                    onSelect={onSelect}
                >{company.name}</Dropdown.Item>))}
        </DropdownButton>
    );
}

export default CompanyFilter;