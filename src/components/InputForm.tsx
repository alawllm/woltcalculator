import React, { ReactElement } from 'react';
import './InputForm.css';

type onChangeFunction = (e: React.ChangeEvent<HTMLInputElement>) => void;


type NumInputFieldProps = {
    onChange: onChangeFunction,
    placeholder: string,
    label: string
    id: string
}

const NumInputField: React.FC<NumInputFieldProps> = ({ onChange, placeholder, label, id }: NumInputFieldProps): ReactElement => {
    return (
        <div className='inputFieldDiv'>
            <label htmlFor={id} className='inputFieldLabel'>{label}</label>
            <p></p>
            <input
                type='number'
                min='0'
                placeholder={placeholder}
                onChange={onChange}
                className='InputForm-input-field'
                id={id}
                required
            />
        </div>
    )
}

type DatetimeInputFieldProps = {
    onChange: onChangeFunction,
    placeholder: string
    label: string
    id: string
}

const DatetimeInputField: React.FC<DatetimeInputFieldProps> = ({ onChange, placeholder, label, id }: DatetimeInputFieldProps): ReactElement => {
    return (
        <div className='inputFieldDiv'>
            <label htmlFor={id} className='inputFieldLabel'>{label}</label>
            <p></p>
            <input
                type='datetime-local'
                placeholder={placeholder}
                onChange={onChange}
                className='InputForm-input-field'
                id={id}
                required
            />
        </div>
    )
}

type InputFormProps = {
    onChangeDistance: onChangeFunction,
    onChangeNumberItems: onChangeFunction,
    onChangeBasketValue: onChangeFunction,
    onChangeDatetime: onChangeFunction,
}

const InputForm: React.FC<InputFormProps> = ({ onChangeDistance, onChangeNumberItems, onChangeBasketValue, onChangeDatetime }: InputFormProps): ReactElement => {
    return (
        <div className='InputForm-container'>

            <NumInputField
                onChange={onChangeDistance}
                placeholder='Delivery Distance in meters'
                label='delivery distance'
                id='deliveryDistanceId'
            />

            <NumInputField
                onChange={onChangeNumberItems}
                placeholder='Number of items'
                label='number of items'
                id='numItemsId'
            />

            <NumInputField
                onChange={onChangeBasketValue}
                placeholder='Basket value'
                label='basket value'
                id='basketValueId'
            />

            <DatetimeInputField
                onChange={onChangeDatetime}
                placeholder='date of delivery'
                label='date of delivery'
                id='datetimeId'
            />
        </div>
    )
}

export default InputForm