const calculateDeliveryPrice = function (distanceMeters: number, numberItems: number, basketValue: number, datetime: any): number {
    // alert(`INNER FUNCTION ALERT, HAHA`)
    return calculateDistanceFee(distanceMeters)
}

export default calculateDeliveryPrice



// empty variables
let deliveryDistance = 0
let orderTime = 0

//  cart value < 10€ - surcharge up to 10 eur //
function calculateSurchargeFee(cartValue) {
    let surchargeFee = 0;
    const minimalOrderValue = 10
    if (cartValue >= minimalOrderValue) {
        surchargeFee = 0
    }
    else {
        surchargeFee = minimalOrderValue - cartValue
    }
    return surchargeFee
}

//delivery fee
function calculateDistanceFee(deliveryDistance) {
    let distanceFee = 0;
    if (deliveryDistance < 1000) {
        distanceFee = 2
    }
    else if (deliveryDistance > 1000) {
        distanceFee = 2 + Math.ceil((deliveryDistance - 1000) / 500)
    }
    return distanceFee
}
//variables for bulk items
let numberOfItems = 0
let bulkForItem = 0.5
let maxDeliveryFee = 15


function calculateSurchargeBulk(numberOfItems) {
    let bulkFee = 1.20;
    let bulkForItem = 0.5;
    let thresholdForBulk = 4;
    let surchargeBulk = 0;

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


