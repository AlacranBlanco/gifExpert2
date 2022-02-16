import React, {useState} from 'react';
import PropTypes from "prop-types";

const AddCategory = ({setCategories}: any, props: any) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e: any) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e: any) => {
        e.preventDefault();
        if(inputValue.trim().length > 2){
            setCategories((cats: any) => [inputValue, ...cats]);
            setInputValue('');
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                />
            </form>
        </>
    );
};

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}

export default AddCategory;
