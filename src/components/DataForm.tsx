import React, { ReactElement } from 'react';
import './DataForm.css';
import InputForm from './InputForm';
import SubmitButton from './SubmitButton'


type DataFormProps = {
    onChangeDistance: any
    onChangeNumberItems: any
    onChangeBasketValue: any
    onChangeDatetime: any
    handleButtonClick: any
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

                <p><SubmitButton onClick={handleButtonClick} param='CALCULATE DELIVERY PRICE' /></p>
            </form>
        </div>
    )
}

export default DataForm