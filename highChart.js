// Build the chart
Highcharts.chart('container', {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: 'Results so far'
    },


    // plotOptions: {
    //     pie: {
    //         allowPointSelect: true,
    //         dataLabels: {
    //             enabled: true
    //         },
    //         showInLegend: true
    //     }
    // },
    series: [{
        name: 'Results',
        colorByPoint: true,
        data: [{
            name: 'Chrome',
            y: 61.41,
            sliced: true,
            selected: true
        }, {
            name: 'Internet Explorer',
            y: 11.84
        }, {
            name: 'Firefox',
            y: 10.85
        }, {
            name: 'Edge',
            y: 4.67
        }, {
            name: 'Safari',
            y: 4.18
        }, {
            name: 'Other',
            y: 7.05
        }, {
            name: 'tor',
            y: 5
        }, {
            name: 'torch',
            y: 95
        }]
    }]
});