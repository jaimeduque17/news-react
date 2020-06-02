import React from 'react';
import New from './New';

const NewsList = ({news}) => {
    return (  
        <div className="row">
            {news.map(report => (
                <New 
                    key={report.url}
                    report={report}
                />
            ))}
        </div>
    );
}
 
export default NewsList;