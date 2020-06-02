import React from 'react';
import useSelect from './hooks/useSelect';
import styles from './Form.module.css';

// JS don't accept class names with hyphen with module sintax. example: btn-block' so the way to use that is ['btn-block']

const Form = () => {

    const OPTIONS = [
        {value: 'general', label: 'General'},
        {value: 'business', label: 'Business'},
        {value: 'entertainment', label: 'Entertainment'},
        {value: 'health', label: 'Health'},
        {value: 'science', label: 'Science'},
        {value: 'sports', label: 'Sports'},
        {value: 'technology', label: 'Technology'}
    ]

    // use custom hook
    const [category, NewsSelect] = useSelect('general', OPTIONS);

    return (  
        <div className={`${styles.searcher} row`}>
            <div className="col s12 m8 offset-m2">
                <form>
                    <h2 className={styles.heading}>Find News by Category</h2>
                    <NewsSelect />
                    <div className="input-field col s12">
                        <input 
                            type="submit"
                            className={`${styles['btn-block']} btn-large amber darken-2`}
                            value="Search"
                        />
                    </div>
                </form>
            </div>
        </div>
    );
}
 
export default Form;