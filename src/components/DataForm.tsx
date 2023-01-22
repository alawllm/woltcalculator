import React, { ReactElement } from 'react';
import './DataForm.css';
import InputForm from './InputForm';
import SubmitButton from './SubmitButton'


type DataFormProps = {
    onChangeDistance: any
    onChangeBasketValue: any
    onChangeDatetime: any
    handleButtonClick: any
}

const DataForm: React.FC<DataFormProps> = ({ onChangeDistance, onChangeBasketValue, onChangeDatetime, handleButtonClick }: DataFormProps): ReactElement => {

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    };

    return (
        <div className='DataForm-container'>
            <form onSubmit={handleSubmit}>
                <h2>TESTING SOME HTML INPUTS</h2>
                <InputForm
                    onChangeDistance={onChangeDistance}
                    onChangeBasketValue={onChangeBasketValue}
                    onChangeDatetime={onChangeDatetime}
                />
                <h2>BUTTON</h2>
                <SubmitButton onClick={handleButtonClick} param='CLICK HERE TO GET DELIVERY VALUE CALCULATED' />
                <h2>CALCULATION RESULT</h2>
            </form>
        </div>
    )
}

export default DataForm