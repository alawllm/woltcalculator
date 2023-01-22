import React, { ReactElement } from 'react';
import './SubmitButton.css';

type SubmitButtonProps = {
    onClick: any
    param: string
}

// function SubmitButton({ onClick, param }: SubmitButtonPros) {
const SubmitButton: React.FC<SubmitButtonProps> = ({ onClick, param }: SubmitButtonProps): ReactElement => {
    return <button type='button' onClick={onClick} className='SubmitButton'> {param} </button>;
}

export default SubmitButton