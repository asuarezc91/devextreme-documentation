$(function () {
    $('#linearGaugeContainer').dxLinearGauge({
        scale: { startValue: 0, endValue: 100 },
        subvalueIndicator: {
            color: 'orangered'
        },
        value: 100,
        subvalues: [0, 0, 0]
    });

    $('#increaseSubvalueButton').click(function () {
        var gauge = $('#linearGaugeContainer').dxLinearGauge('instance');
        var subvals = gauge.subvalues();
        var rand = Math.floor(Math.random() * subvals.length);
        subvals[rand]++;
        var scaleEnd = gauge.option('scale.endValue');
        if (subvals[rand] == scaleEnd) {
            gauge.option({
                rangeContainer: { backgroundColor: 'red' }
            });
            $(this).attr('disabled', 'disabled');
        };
        gauge.subvalues(subvals);
    });
})