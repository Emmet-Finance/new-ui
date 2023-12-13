import React from 'react';
import ChainSelectorDropdown from '../../HomeComponents/ChainSelectorDropdown/ChainSelectorDropdown';
import TokenSelectionDropdown from '../../HomeComponents/TokenSelectors/TokenSelectionDropdown';

function ExplorerTransactionsFrom() {
    return ( 
        <div className="ExplorerTransactionsFilter fromTypeFilter">
            <div className="filterName">From</div>
            <div className="filterDropdown">
                <TokenSelectionDropdown
                    parent="explorer"
                    direction="from"
                />
            </div>
        </div>
     );
}

export default ExplorerTransactionsFrom ;