import React from 'react';
import './SubmitButton.css';

type SubmitButtonPros = {
    onClick: any
    param: string
}

function SubmitButton({ onClick, param }: SubmitButtonPros) {
    return <button type='button' onClick={onClick} className='SubmitButton'> MESSAGE: param={param} POWER BUTTON </button>;
}

export default SubmitButton