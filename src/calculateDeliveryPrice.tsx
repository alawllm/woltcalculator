//  cart value < 10€ - surcharge up to 10 eur //
function calculateSurchargeFee(cartValue: number): number {
    let surchargeFee: number = 0;
    const minimalOrderValue: number = 10
    if (cartValue >= minimalOrderValue) {
        surchargeFee = 0
    }
    else {
        surchargeFee = minimalOrderValue - cartValue
    }
    return surchargeFee
}

//delivery fee
function calculateDistanceFee(deliveryDistance: number): number {
    let distanceFee: number = 0;
    if (deliveryDistance < 1000) {
        distanceFee = 2
    }
    else if (deliveryDistance > 1000) {
        distanceFee = 2 + Math.ceil((deliveryDistance - 1000) / 500)
    }
    return distanceFee
}


function calculateSurchargeBulk(numberOfItems: number): number {
    const bulkFee: number = 1.20;
    const bulkForItem: number = 0.5;
    const thresholdForBulk: number = 4;
    let surchargeBulk: number = 0;

    // if number of items<=4 then no surcharge bulk fee
    if (numberOfItems <= thresholdForBulk) {
        return 0;
    }
    // if number of items > 4 surcharge bulk = 0.5 for every item above 4
    if (numberOfItems > thresholdForBulk) {
        surchargeBulk = bulkForItem * (numberOfItems - thresholdForBulk)
    }
    // if number of items bigger than 12 then bulk fee 1.20 is added
    if (numberOfItems > 12) {
        surchargeBulk += bulkFee
    }
    return surchargeBulk
}

function isRushHour(dateAndHourLocal: string): boolean {

    const delivTime: Date = new Date(dateAndHourLocal)
    const delivDay: number = delivTime.getUTCDay()
    const delivHour: number = delivTime.getUTCHours()
    let isFriday: boolean = false;
    let isHotTime: boolean = false;

    if (delivDay == 5) {
        isFriday = true;
    }
    if (delivHour >= 15 && delivHour < 19) {
        isHotTime = true;
    }
    return isFriday && isHotTime

}

function calculateDeliveryPrice(distanceMeters: number, numberItems: number, basketValue: number, dateTime: string): number {

    const calculatedSurchargeFee: number = calculateSurchargeFee(basketValue)
    const calculatedDistanceFee: number = calculateDistanceFee(distanceMeters)
    const calculatedSurchargeBulk: number = calculateSurchargeBulk(numberItems)
    const calculatedRushHour: boolean = isRushHour(dateTime)

    let totalDeliveryPrice: number = calculatedSurchargeFee + calculatedDistanceFee + calculatedSurchargeBulk

    if (basketValue >= 100) {
        totalDeliveryPrice = 0
    }
    if (calculatedRushHour) {
        totalDeliveryPrice *= 1.2
    }
    if (totalDeliveryPrice > 15) {
        totalDeliveryPrice = 15
    }

    return totalDeliveryPrice
}


export default calculateDeliveryPrice
