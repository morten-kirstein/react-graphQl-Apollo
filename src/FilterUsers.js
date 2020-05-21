import React from 'react';

import {
    EuiForm,
    EuiFormRow,
    EuiFieldText
} from '@elastic/eui';

const FilterUsers = ({ onFilter }) => {

    const handleFilter = event => {
        const filterText = event.target.value;
        onFilter(filterText);
    }

    return (
        <EuiForm component="form">
            <EuiFormRow label="Search for user">
                <EuiFieldText
                    onChange={handleFilter} />
            </EuiFormRow>
        </EuiForm >
    );
}

export default FilterUsers;
