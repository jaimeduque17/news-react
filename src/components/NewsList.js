import React from 'react';
import PropTypes from 'prop-types';
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

NewsList.propTypes = {
    news: PropTypes.array.isRequired
}
 
export default NewsList;