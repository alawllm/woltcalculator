import React, { ReactElement } from 'react';
import './DataForm.css';
import InputForm from './InputForm';
import SubmitButton from './SubmitButton'

type onChangeFunction = (e: React.ChangeEvent<HTMLInputElement>) => void;

type DataFormProps = {
    onChangeDistance: onChangeFunction
    onChangeNumberItems: onChangeFunction
    onChangeBasketValue: onChangeFunction
    onChangeDatetime: onChangeFunction
    handleButtonClick: () => void;
}

const DataForm: React.FC<DataFormProps> = ({ onChangeDistance, onChangeNumberItems, onChangeBasketValue, onChangeDatetime, handleButtonClick }: DataFormProps): ReactElement => {

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    };

    return (
        <div className='DataForm-container'>
            <form onSubmit={handleSubmit}>
                <InputForm
                    onChangeDistance={onChangeDistance}
                    onChangeNumberItems={onChangeNumberItems}
                    onChangeBasketValue={onChangeBasketValue}
                    onChangeDatetime={onChangeDatetime}
                />

                <p><SubmitButton onClick={handleButtonClick} param='CLICK' /></p>
            </form>
        </div>
    )
}

export default DataForm