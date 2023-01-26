import React, { ReactElement, useState } from 'react';
import './Calculator.css';
import DataForm from './DataForm'
import OutputField from './OutputField'
import calculateDeliveryPrice from '../calculateDeliveryPrice'


// class Calculator extends React.Component {
const Calculator: React.FC = (): ReactElement => {

    const [distance, setDistance] = useState<number>(0);
    const [numberItems, setNumberItems] = useState<number>(0);
    const [basketValue, setBasketValue] = useState<number>(0);
    const [datetime, setDatetime] = useState<any>('');
    const [outText, setOutText] = useState<string>('');

    const handleButtonClick = function (): void {
        let output_text: string;
        const deliveryPrice = calculateDeliveryPrice(distance, numberItems, basketValue, datetime)
        output_text = `distance=${distance}, numberItems=${numberItems} basketValue=${basketValue}, datetime=${datetime.toString()} \n delivery price=${deliveryPrice}`
        setOutText(output_text)
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
                    onChangeNumberItems={(e) => setNumberItems(parseInt(e.target.value))}
                    onChangeBasketValue={(e) => setBasketValue(parseInt(e.target.value))}
                    onChangeDatetime={(e) => setDatetime(e.target.value)}
                    handleButtonClick={handleButtonClick}
                />
                <OutputField
                    value={outText}
                />
            </div>
        </div>
    );
}

export default Calculator;