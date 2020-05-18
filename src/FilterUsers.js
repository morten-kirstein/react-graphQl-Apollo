import React from 'react';

import {
    EuiForm,
    EuiFormRow,
    EuiFieldText
} from '@elastic/eui';

export function FilterUsers(props) {

    const handleFilter = event => {
        const filterText = event.target.value;
        props.onFilter(filterText);
    }

    return (
        <EuiForm component="form">
            <EuiFormRow label="Filter" helpText="Filter users by name">
                <EuiFieldText
                    onChange={handleFilter} />
            </EuiFormRow>
        </EuiForm >
    );
}
