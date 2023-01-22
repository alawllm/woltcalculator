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
                <InputForm
                    onChangeDistance={onChangeDistance}
                    onChangeBasketValue={onChangeBasketValue}
                    onChangeDatetime={onChangeDatetime}
                />
                <SubmitButton onClick={handleButtonClick} param='CLICK HERE TO GET DELIVERY VALUE CALCULATED' />
            </form>
        </div>
    )
}

export default DataForm