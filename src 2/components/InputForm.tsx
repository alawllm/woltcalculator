import React from 'react';
import './InputForm.css';

type InputFormProps = {
    onClick: any
    param: string
}

function InputForm({ onClick, param }: InputFormProps) {
    return <button type='button' onClick={onClick} className='SubmitButton'> MESSAGE: param={param} POWER BUTTON </button>;
}

export default InputForm