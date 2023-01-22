import React, { useState } from 'react';
import './Calculator.css';
import SubmitButton from './SubmitButton'
import calculateDeliveryPrice from '../calculateDeliveryPrice'


// class Calculator extends React.Component {
function Calculator() {

    const [distance, setDistance] = useState<number>(0);
    const [basketValue, setBasketValue] = useState<number>(0);
    const [datetime, setDatetime] = useState<any>('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    };

    const handleButtonClick = () => {
        const deliveryPrice = calculateDeliveryPrice(distance, basketValue, datetime)
        alert(`MESSAGE: distance=${distance}, basketValue=${basketValue}, datetime=${datetime} \n delivery price=${deliveryPrice}`)
    }

    // const status = () => {setDistance(0);}
    return (
        <div className='calculator-container'>
            <div>
                <h1> I AM CALCULATOR NOT ABC!!!</h1>
                <p className="Abc-paragraph"> ABC!!!! </p>
                <hr></hr>
            </div>
            <div>
                <h1>Calculator form here!</h1>
                <form onSubmit={handleSubmit}>
                    <h2>TESTING SOME HTML INPUTS</h2>
                    <h2>Form inputs</h2>
                    <span>
                        <input
                            type='number'
                            placeholder='Distance of delivery (in meters)'
                            onChange={(e) => setDistance(parseInt(e.target.value))}
                            required
                        />
                    </span>
                    <span>
                        <input
                            type='number'
                            placeholder='Basket value'
                            onChange={(e) => setBasketValue(parseInt(e.target.value))}
                            required
                        />
                    </span>
                    <span>
                        <input
                            type='datetime-local'
                            placeholder='date of delivery'
                            onChange={(e) => setDatetime(parseInt(e.target.value))}
                            required
                        />
                    </span>
                    <h2>BUTTON</h2>
                    <SubmitButton onClick={handleButtonClick} param='some string' />
                    <h2>CALCULATION RESULT</h2>
                </form>
                <hr></hr>
            </div>
        </div>
    );
}

export default Calculator;