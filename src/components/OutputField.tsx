import React, { ReactElement } from 'react';
import './OutputField.css';

type OutputFieldProps = {
    value: string
}

const OutputField: React.FC<OutputFieldProps> = ({ value }: OutputFieldProps): ReactElement => {
    return (
        <h2 className='OutputField'>{value} </h2>
    )
        ;
}

export default OutputField