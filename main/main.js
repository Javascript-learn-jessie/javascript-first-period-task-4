module.exports = function calculateTaxiFee(mileage, park_wait_time) {
    let fee;
    if (mileage <= 2) {
        fee = 6 + park_wait_time * 0.25;
    } else if (mileage <= 8) {
        fee = 6 + (mileage - 2) * 0.8 + park_wait_time * 0.25;
    } else {
        fee = 6 + (mileage - 2) * 0.8 + (mileage - 8) * 0.5 + park_wait_time * 0.25;
    }
    fee = Math.ceil(fee);
    return fee;
};