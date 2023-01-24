import React, { ReactElement } from 'react';
import './InputForm.css';

type NumericalInputFieldProps = {
    onChange: any,
    placeholder: string
}

const NumericalInputField: React.FC<NumericalInputFieldProps> = ({ onChange, placeholder }: NumericalInputFieldProps): ReactElement => {
    return (
        <span>

            <input
                type='number'
                placeholder={placeholder}
                onChange={onChange}
                className='InputForm-input-field'
                required
            />
        </span>
    )
}

type DatetimeInputFieldProps = {
    onChange: any,
    placeholder: string
}

const DatetimeInputField: React.FC<DatetimeInputFieldProps> = ({ onChange, placeholder }: DatetimeInputFieldProps): ReactElement => {
    return (
        <span>
            <input
                type='datetime-local'
                placeholder={placeholder}
                onChange={onChange}
                className='InputForm-input-field'
                required
            />
        </span>
    )
}

type InputFormProps = {
    onChangeDistance: any
    onChangeNumberItems: any
    onChangeBasketValue: any
    onChangeDatetime: any
}

const InputForm: React.FC<InputFormProps> = ({ onChangeDistance, onChangeNumberItems, onChangeBasketValue, onChangeDatetime }: InputFormProps): ReactElement => {
    return (
        <div className='InputForm-container'>
            <div className='input-field'>

                <NumericalInputField
                    onChange={onChangeDistance}
                    placeholder='Delivery Distance in meters'
                /></div>
            <div className='input-field'>
                <p>Number of items</p>
                <NumericalInputField
                    onChange={onChangeNumberItems}
                    placeholder='Number of items'
                /></div>
            <div className='input-field'>
                <p>Basket value</p>
                <NumericalInputField
                    onChange={onChangeBasketValue}
                    placeholder='Basket value'
                /></div>
            <div className='input-field'>
                <p>Time of delivery</p>
                <DatetimeInputField
                    onChange={onChangeDatetime}
                    placeholder='date of delivery'
                /></div>
        </div>
    )
}

export default InputForm