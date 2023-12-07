import React from 'react';

function ExplorerTransactionsTnx() {
    return ( 
        <div className="ExplorerTransactionsFilter tnxTypeFilter">
            <div className="filterName">Tnx type</div>
            <div className="filterDropdown">
                <div className="filterDropName">
                    <div className="filterDropSelect">All types</div>
                </div>
                <ul className="filterDropList">
                    <li>
                        <div className="filterDropSelect">
                            All types
                        </div>
                    </li>
                    <li>
                        <div className="filterDropSelect">
                            All 1
                        </div>
                    </li>
                    <li>
                        <div className="filterDropSelect">
                            All 2
                        </div>
                    </li>
                    <li>
                        <div className="filterDropSelect">
                            All 3
                        </div>
                    </li>
                </ul>
            </div>
        </div>
     );
}

export default ExplorerTransactionsTnx ;