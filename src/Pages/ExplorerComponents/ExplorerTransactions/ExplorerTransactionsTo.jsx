import React from 'react';
import ChainSelectorDropdown from '../../HomeComponents/ChainSelectorDropdown/ChainSelectorDropdown';
import TokenSelectionDropdown from '../../HomeComponents/TokenSelectors/TokenSelectionDropdown';

function ExplorerTransactionsTo() {
    return ( 
        <div className="ExplorerTransactionsFilter toTypeFilter">
            <div className="filterName">To</div>
            <div className="filterDropdown">
                <ChainSelectorDropdown/>
            </div>
        </div>
     );
}

export default ExplorerTransactionsTo;