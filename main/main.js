module.exports = function main(inputs) {
    // write your code here...
    let inputArray = inputs;
    let distance = inputArray.distance;
    let parkTime = inputArray.parkTime;
    let baseMoney = 6;
    let allTime = parkTime * 0.25
    let totalMoney = 0 ;
    if(distance <= 2){
         totalMoney = Math.round(baseMoney + allTime);
    }
    else if (distance > 2 && distance <= 8){
        let cha = distance - 2;
        totalMoney = Math.round(baseMoney + cha * 0.8 + allTime) 
    }
    else{
        if(parkTime !== 0){
            let cha1 = distance - 8;
            let cha2 = distance - 2 - cha1;
            let unitPrice = 0.8 + (0.8 * 0.5);
            totalMoney = Math.round(baseMoney + cha1 * unitPrice + cha2 * 0.8 + allTime)
        }else{
            let cha1 = distance - 8;
            let cha2 = distance - 2 - cha1;
            let unitPrice = 0.8 + (0.8 * 0.5);
            totalMoney = Math.round(baseMoney + cha1 * unitPrice + cha2 * 0.8 )

        }
    }
    return totalMoney;
};
