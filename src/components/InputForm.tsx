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
    onChangeBasketValue: any
    onChangeDatetime: any
}

const InputForm: React.FC<InputFormProps> = ({ onChangeDistance, onChangeBasketValue, onChangeDatetime }: InputFormProps): ReactElement => {
    return (
        <div className='InputForm-container'>
            <h2>Form inputs</h2>
            <NumericalInputField
                onChange={onChangeDistance}
                placeholder='Delivery Distance in meters'
            />
            <NumericalInputField
                onChange={onChangeBasketValue}
                placeholder='Basket value'
            />
            <DatetimeInputField
                onChange={onChangeDatetime}
                placeholder='date of delivery'
            />
        </div>
    )
}

export default InputForm