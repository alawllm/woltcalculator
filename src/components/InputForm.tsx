import React, { ReactElement } from 'react';
import './InputForm.css';

type NumInputFieldProps = {
    onChange: any,
    placeholder: string,
    label: string
    id: string
}

const NumInputField: React.FC<NumInputFieldProps> = ({ onChange, placeholder, label, id }: NumInputFieldProps): ReactElement => {
    return (
        <div className='numInputFieldDiv'>
            <label htmlFor={id} className='numInputFieldLabel'>{label}</label>
            <p></p>
            <input
                type='string'
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
    onChange: any,
    placeholder: string
    label: string
    id: string
}

const DatetimeInputField: React.FC<DatetimeInputFieldProps> = ({ onChange, placeholder, label, id }: DatetimeInputFieldProps): ReactElement => {
    return (
        <div className='numInputFieldDiv'>
            <label htmlFor={id} className='numInputFieldLabel'>{label}</label>
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
    onChangeDistance: any
    onChangeNumberItems: any
    onChangeBasketValue: any
    onChangeDatetime: any
}

const InputForm: React.FC<InputFormProps> = ({ onChangeDistance, onChangeNumberItems, onChangeBasketValue, onChangeDatetime }: InputFormProps): ReactElement => {
    return (
        <div className='InputForm-container'>
            <div className='input-field'>
                <NumInputField
                    onChange={onChangeDistance}
                    placeholder='Delivery Distance in meters'
                    label='delivery distance'
                    id='deliveryDistanceId'
                /></div>
            <div className='input-field'>
                <NumInputField
                    onChange={onChangeNumberItems}
                    placeholder='Number of items'
                    label='number of items'
                    id='numItemsId'
                /></div>
            <div className='input-field'>
                <NumInputField
                    onChange={onChangeBasketValue}
                    placeholder='Basket value'
                    label='basket value'
                    id='basketValueId'
                /></div>
            <div className='input-field'>
                <DatetimeInputField
                    onChange={onChangeDatetime}
                    placeholder='date of delivery'
                    label='date of delivery'
                    id='datetimeId'

                /></div>
        </div>
    )
}

export default InputForm