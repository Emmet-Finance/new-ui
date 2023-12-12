import React from 'react';
import ExplorerHeaderSearch from '../../HeaderFooterSidebar/ExplorerHeaderSearch';
import ExplorerTopGridRow from './ExplorerTopGridRow';
import ExplorerTransactions from './ExplorerTransactions';
import './ExplorerTransactions/ExplorerTransactions.css';
import './ExplorerTopGrid/ExplorerTopGrid.css';
import ExplorerTransactionsTable from './ExplorerTransactionsTable/ExplorerTransactionsTable';
import ExplorerTransactionsSearch from './ExplorerTransactionsSearch';
import DatatablePage from './ExplorerTransactionsTable/DataTable';


function ExplorerPageContainer() {
    return ( 
        <div className="">
             <ExplorerTopGridRow/>
             {/* <ExplorerTransactionsSearch/> */}
             <ExplorerTransactions/>
             <DatatablePage/>
             {/* <ExplorerTransactionsTable/> */}
        </div>
     );
}

export default ExplorerPageContainer;