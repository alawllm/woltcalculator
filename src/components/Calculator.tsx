import React, { ReactElement, useState } from 'react';
import './Calculator.css';
import DataForm from './DataForm'
import calculateDeliveryPrice from '../calculateDeliveryPrice'


// class Calculator extends React.Component {
const Calculator: React.FC = (): ReactElement => {

    const [distance, setDistance] = useState<number>(0);
    const [numberItems, setNumberItems] = useState<number>(0);
    const [basketValue, setBasketValue] = useState<number>(0);
    const [datetime, setDatetime] = useState<string>('');
    const [outText, setOutText] = useState<string>('');

    const handleButtonClick = function (): void {
        let output_text: string = 'please enter the data'
        if (numberItems <= 0 || !(Number.isInteger(numberItems))) {
            setNumberItems(0)
        }
        if (distance <= 0 || numberItems == 0 || basketValue <= 0 || datetime == '') {
            output_text = `please enter valid numbers`
        }
        else {
            const deliveryPrice = calculateDeliveryPrice(distance, numberItems, basketValue, datetime)
            output_text = `your delivery will cost ${deliveryPrice}€!`
        }
        setOutText(output_text)
    }

    // const status = () => {setDistance(0);}
    return (
        <div className='calculator-container'>
            <div>
                <h1 className='calculator-container-header'>Calculate total price!</h1>
            </div>
            <div>
                <DataForm
                    onChangeDistance={(e) => setDistance(parseInt(e.target.value))}
                    onChangeNumberItems={(e) => setNumberItems(parseInt(e.target.value))}
                    onChangeBasketValue={(e) => setBasketValue(parseInt(e.target.value))}
                    onChangeDatetime={(e) => setDatetime(e.target.value.toString())}
                    handleButtonClick={handleButtonClick}
                />
                <h2 className='OutputField'>{outText} </h2>
            </div>
        </div>
    );
}

export default Calculator;