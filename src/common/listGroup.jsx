import React from 'react'

const listGroup = (props) => {
    const {items, textProperty, valueProperty, onFiltering, selectedItem} = props
    return ( 
        <ul className="list-group">
        {items.map(item => <li key={item[valueProperty]} onClick={() =>onFiltering(item)}
         className={item===selectedItem ?
             "list-group-item active": "list-group-item"}>{item[textProperty]}</li> )}
    
    
</ul> 
);
}
 
export default listGroup;