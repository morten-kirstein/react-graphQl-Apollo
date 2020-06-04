
import React from "react";
import SortingButton from './SortingButton';

import {
    EuiFlexGroup,
    EuiFlexItem,
} from '@elastic/eui';


const SortingPanel = ({ onClickSortingDirection }) => {

    return (
        <EuiFlexGroup gutterSize="l" alignItems="center">
            <EuiFlexItem grow={true}>
                <SortingButton onClick={onClickSortingDirection} direction={'asc'}></SortingButton>
                <SortingButton onClick={onClickSortingDirection} direction={'desc'}></SortingButton>
            </EuiFlexItem>
        </EuiFlexGroup>
    );
}

export default SortingPanel;