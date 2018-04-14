const calculateTaxiFee = require('../main/main');

describe('taxi fee', function () {
    var mileages;
    var park_wait_time;
    // write your tests here...
    it('the mileages are in the based range',function(){
        mileages=1.5;
        park_wait_time=0;
        var expectFee = 6;
        var actualFee = calculateTaxiFee(mileages,park_wait_time);
        expect(actualFee).toEqual(expectFee);
    });
    it('the mileages over the based range but less 8 km',function(){
        mileages = 6;
        park_wait_time = 3;
        var expectFee = 10;
        var actualFee = calculateTaxiFee(mileages,park_wait_time); 
        expect(actualFee).toEqual(expectFee);
    });
    it('the mileages over 8 km',function(){
        mileages = 10;
        park_wait_time = 10;
        var expectFee = 16;
        var actualFee = calculateTaxiFee(mileages,park_wait_time); 
        expect(actualFee).toEqual(expectFee);
    });

});
