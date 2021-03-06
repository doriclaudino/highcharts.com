$(function () {

    // Prepare demo data
    var data = [
        {
            "hc-key": "us-co-069",
            "value": 0
        },
        {
            "hc-key": "us-co-013",
            "value": 1
        },
        {
            "hc-key": "us-co-014",
            "value": 2
        },
        {
            "hc-key": "us-co-025",
            "value": 3
        },
        {
            "hc-key": "us-co-101",
            "value": 4
        },
        {
            "hc-key": "us-co-041",
            "value": 5
        },
        {
            "hc-key": "us-co-063",
            "value": 6
        },
        {
            "hc-key": "us-co-073",
            "value": 7
        },
        {
            "hc-key": "us-co-109",
            "value": 8
        },
        {
            "hc-key": "us-co-003",
            "value": 9
        },
        {
            "hc-key": "us-co-059",
            "value": 10
        },
        {
            "hc-key": "us-co-015",
            "value": 11
        },
        {
            "hc-key": "us-co-043",
            "value": 12
        },
        {
            "hc-key": "us-co-005",
            "value": 13
        },
        {
            "hc-key": "us-co-031",
            "value": 14
        },
        {
            "hc-key": "us-co-045",
            "value": 15
        },
        {
            "hc-key": "us-co-123",
            "value": 16
        },
        {
            "hc-key": "us-co-075",
            "value": 17
        },
        {
            "hc-key": "us-co-115",
            "value": 18
        },
        {
            "hc-key": "us-co-011",
            "value": 19
        },
        {
            "hc-key": "us-co-053",
            "value": 20
        },
        {
            "hc-key": "us-co-091",
            "value": 21
        },
        {
            "hc-key": "us-co-113",
            "value": 22
        },
        {
            "hc-key": "us-co-071",
            "value": 23
        },
        {
            "hc-key": "us-co-001",
            "value": 24
        },
        {
            "hc-key": "us-co-121",
            "value": 25
        },
        {
            "hc-key": "us-co-057",
            "value": 26
        },
        {
            "hc-key": "us-co-007",
            "value": 27
        },
        {
            "hc-key": "us-co-105",
            "value": 28
        },
        {
            "hc-key": "us-co-035",
            "value": 29
        },
        {
            "hc-key": "us-co-119",
            "value": 30
        },
        {
            "hc-key": "us-co-125",
            "value": 31
        },
        {
            "hc-key": "us-co-093",
            "value": 32
        },
        {
            "hc-key": "us-co-065",
            "value": 33
        },
        {
            "hc-key": "us-co-055",
            "value": 34
        },
        {
            "hc-key": "us-co-097",
            "value": 35
        },
        {
            "hc-key": "us-co-107",
            "value": 36
        },
        {
            "hc-key": "us-co-077",
            "value": 37
        },
        {
            "hc-key": "us-co-051",
            "value": 38
        },
        {
            "hc-key": "us-co-087",
            "value": 39
        },
        {
            "hc-key": "us-co-009",
            "value": 40
        },
        {
            "hc-key": "us-co-049",
            "value": 41
        },
        {
            "hc-key": "us-co-047",
            "value": 42
        },
        {
            "hc-key": "us-co-111",
            "value": 43
        },
        {
            "hc-key": "us-co-021",
            "value": 44
        },
        {
            "hc-key": "us-co-117",
            "value": 45
        },
        {
            "hc-key": "us-co-033",
            "value": 46
        },
        {
            "hc-key": "us-co-023",
            "value": 47
        },
        {
            "hc-key": "us-co-039",
            "value": 48
        },
        {
            "hc-key": "us-co-061",
            "value": 49
        },
        {
            "hc-key": "us-co-089",
            "value": 50
        },
        {
            "hc-key": "us-co-079",
            "value": 51
        },
        {
            "hc-key": "us-co-027",
            "value": 52
        },
        {
            "hc-key": "us-co-037",
            "value": 53
        },
        {
            "hc-key": "us-co-085",
            "value": 54
        },
        {
            "hc-key": "us-co-095",
            "value": 55
        },
        {
            "hc-key": "us-co-029",
            "value": 56
        },
        {
            "hc-key": "us-co-099",
            "value": 57
        },
        {
            "hc-key": "us-co-081",
            "value": 58
        },
        {
            "hc-key": "us-co-083",
            "value": 59
        },
        {
            "hc-key": "us-co-103",
            "value": 60
        },
        {
            "hc-key": "us-co-017",
            "value": 61
        },
        {
            "hc-key": "us-co-067",
            "value": 62
        },
        {
            "hc-key": "us-co-019",
            "value": 63
        }
    ];

    // Initiate the chart
    $('#container').highcharts('Map', {

        title : {
            text : 'Highmaps basic demo'
        },

        subtitle : {
            text : 'Source map: <a href="http://code.highcharts.com/mapdata/countries/us/us-co-all.js">Colorado</a>'
        },

        mapNavigation: {
            enabled: true,
            buttonOptions: {
                verticalAlign: 'bottom'
            }
        },

        colorAxis: {
            min: 0
        },

        series : [{
            data : data,
            mapData: Highcharts.maps['countries/us/us-co-all'],
            joinBy: 'hc-key',
            name: 'Random data',
            states: {
                hover: {
                    color: '#BADA55'
                }
            },
            dataLabels: {
                enabled: true,
                format: '{point.name}'
            }
        }]
    });
});
