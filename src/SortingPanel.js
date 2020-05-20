
import React from "react";

import {
    EuiFlexGroup,
    EuiFlexItem,
    EuiButton,
} from '@elastic/eui';


const SortingPanel = ({ onClickSortingDirection }) => {

    const directions = ['asc', 'desc'];
    return (
        <EuiFlexGroup gutterSize="l" alignItems="center">

            {directions.map(direction => {
                return <EuiFlexItem grow={false} key={direction}>
                    <EuiButton onClick={() => { onClickSortingDirection(direction) }}>Sort by {direction}</EuiButton>
                </EuiFlexItem>
            })}
        </EuiFlexGroup>
    );
}

export default SortingPanel;