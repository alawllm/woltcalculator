import React, { ReactElement, useState } from 'react';
import './Calculator.css';
import DataForm from './DataForm'
import calculateDeliveryPrice from '../calculateDeliveryPrice'



// class Calculator extends React.Component {
const Calculator: React.FC = (): ReactElement => {

    const [distance, setDistance] = useState<number>(0);
    const [basketValue, setBasketValue] = useState<number>(0);
    const [datetime, setDatetime] = useState<any>('');

    const handleButtonClick = function (): void {
        const deliveryPrice = calculateDeliveryPrice(distance, basketValue, datetime)
        alert(`MESSAGE: distance=${distance}, basketValue=${basketValue}, datetime=${datetime} \n delivery price=${deliveryPrice}`)
    }

    // const status = () => {setDistance(0);}
    return (
        <div className='calculator-container'>
            <div>
                <h1 className='calculator-container-header'>Delivery Fee Calculator</h1>
            </div>
            <div>
                <DataForm
                    onChangeDistance={(e) => setDistance(parseInt(e.target.value))}
                    onChangeBasketValue={(e) => setBasketValue(parseInt(e.target.value))}
                    onChangeDatetime={(e) => setDatetime(parseInt(e.target.value))}
                    handleButtonClick={handleButtonClick}
                />

            </div>
        </div>
    );
}

export default Calculator;