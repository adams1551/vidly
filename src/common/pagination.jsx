import React from 'react';
import _ from 'lodash';

const Pagination = (props) => {
    const {itemCount, pageSize, onPageChange, currentPage} = props;
    const pagesCount = Math.ceil(itemCount / pageSize);
    const pages = _.range(1, pagesCount +1);
    console.log(currentPage)
    return ( <div>
        <ul className='pagination'>
            {pages.map(page =>  
                <li key={page} className={currentPage === page ? 'page-item active': 'page-item'}>
                <a className="page-link" onClick={() => onPageChange(page)}>{page}</a>
            </li>)}
           
        </ul>
    </div>);
}
 
export default Pagination;