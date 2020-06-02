import React from 'react';
import New from './New';

const NewsList = ({news}) => {
    return (  
        <div className="row">
            {news.map(report => (
                <New />
            ))}
        </div>
    );
}
 
export default NewsList;