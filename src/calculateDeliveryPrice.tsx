const calculateDeliveryPrice = function (distanceMeters: number, basketValue: number, datetime: any): number {
    alert(`INNER FUNCTION ALERT, HAHA`)
    return distanceMeters + 5 * basketValue;
}

export default calculateDeliveryPrice
