import React from "react";

import {
    EuiButton
} from '@elastic/eui';

const SortingButton = ({ onClick, direction }) => {
    return (
        <EuiButton onClick={() => onClick(direction)}>Sort by {direction}</EuiButton>
    );
}

export default SortingButton;