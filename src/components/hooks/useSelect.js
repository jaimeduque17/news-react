import React, { useState } from 'react';

const useSelect = (initialState, options) => {

    // custom hook state
    const [state, setState] = useState('');

    const NewsSelect = () => (
        <select className="browser-default">
            <option value="">Select</option>
        </select>
    );

    return [state, NewsSelect];

}

export default useSelect;