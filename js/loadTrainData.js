// // JSON
$('.sendMsg').click(function() {
    $('.waiting').css('display','flex');
    var startStation = $('.start').val();
    var endStation = $('.end').val();
    var startTime = $('#startTime').val();
    var endTime = $('#endTime').val();
    var rideDate = $('#selectDay').find("p").text();
    console.log('出發時間為'+ startTime);
    console.log('抵達時間為'+ endTime);
    if (startStation == endStation) {
        alert('很抱歉，點跟終點不得為同一車站');
    } else if ((startTime > endTime) || (startTime == endTime)) {
        alert('很抱歉，出發時間不得早於或等於抵達時間');
    } else {
        const uri = "https://taiwan-train-api.herokuapp.com/train_api/" + startStation + "/" + endStation + "/" + rideDate + "/" + startTime + "/" + endTime;
        // const uri = "https://ptx.transportdata.tw/MOTC/v2/Bus/RealTimeByFrequency/Streaming/City/Hsinchu?$top=30&$format=JSON"
        fetch(uri, {
            method: 'GET'
        })
        .then(res => {
            return res.json(); // 使用 text() 可以得到純文字 String
        })
        .then(result => {
            $('.waiting').slideUp();
            console.log(result);
            var dateObj = new Date();
            var D = dateObj.getDate() < 10 ? '0' + dateObj.getDate() : dateObj.getDate();
            var weekday = new Array(7);
            weekday[0] = "日";
            weekday[1] = "一";
            weekday[2] = "二";
            weekday[3] = "三";
            weekday[4] = "四";
            weekday[5] = "五";
            weekday[6] = "六";
            var tripDay = weekday[dateObj.getDay()];
            var startStation = $('.start').find('option:selected').text();
            var endStation = $('.end').find('option:selected').text();
            var tripDate = $('#selectDay').find("p").text();
            var tripTime = $('#startTime').find('option:selected').text();
            $('.tripStart').html(startStation);
            $('.tripEnd').html(endStation);
            $('.tripDate').html(tripDate);
            $('.tripDay').html('週' + tripDay);
            $('.tripTime').html(tripTime + '出發');

            var dataList = result[0].complete_info.length;
            var count = 0;
            for (count = 0; count < dataList; count++) {
                var car = result[0].complete_info[count];
                if((car.blockName=='區間')||(car.blockName=='區間快')){
                    $('.listView > ul').append(
                    '<li class="carInf speed1">' +
                        '<span class="carBlock">' +
                        '<span class="carName car1">' + car.blockName + '</span>' +
                        '</span>' +
                        '<span class="carBlock">' +
                        '<span class="carWay">' + car.start + '</span>' + '<span class="arrow"></span>' + '<span class="carWay">' + car.end + '</span>' +
                        '<span class="carDrivertime">' + car.driver_time + '</span>' +
                        '</span>' +
                        '</li>'
                    );
                }
                else if(car.blockName=='莒光'){
                    $('.listView > ul').append(
                    '<li class="carInf speed2">' +
                        '<span class="carBlock">' +
                        '<span class="carName car2">' + car.blockName + '</span>' +
                        '</span>' +
                        '<span class="carBlock">' +
                        '<span class="carWay">' + car.start + '</span>' + '<span class="arrow"></span>' + '<span class="carWay">' + car.end + '</span>' +
                        '<span class="carDrivertime">' + car.driver_time + '</span>' +
                        '</span>' +
                        '</li>'
                    );
                }
                else if(car.blockName=='自強'){
                    $('.listView > ul').append(
                    '<li class="carInf speed3">' +
                        '<span class="carBlock">' +
                        '<span class="carName car3">' + car.blockName + '</span>' +
                        '</span>' +
                        '<span class="carBlock">' +
                        '<span class="carWay">' + car.start + '</span>' + '<span class="arrow"></span>' + '<span class="carWay">' + car.end + '</span>' +
                        '<span class="carDrivertime">' + car.driver_time + '</span>' +
                        '</span>' +
                        '</li>'
                    );
                }
                else if(car.blockName=='普悠瑪'){
                    $('.listView > ul').append(
                    '<li class="carInf speed4">' +
                        '<span class="carBlock">' +
                        '<span class="carName car4">' + car.blockName + '</span>' +
                        '</span>' +
                        '<span class="carBlock">' +
                        '<span class="carWay">' + car.start + '</span>' + '<span class="arrow"></span>' + '<span class="carWay">' + car.end + '</span>' +
                        '<span class="carDrivertime">' + car.driver_time + '</span>' +
                        '</span>' +
                        '</li>'
                    );
                }
                else if(car.blockName=='太魯閣'){
                    $('.listView > ul').append(
                    '<li class="carInf speed5">' +
                        '<span class="carBlock">' +
                        '<span class="carName car5">' + car.blockName + '</span>' +
                        '</span>' +
                        '<span class="carBlock">' +
                        '<span class="carWay">' + car.start + '</span>' + '<span class="arrow"></span>' + '<span class="carWay">' + car.end + '</span>' +
                        '<span class="carDrivertime">' + car.driver_time + '</span>' +
                        '</span>' +
                        '</li>'
                    );
                }
            }
            $('.listView').slideToggle();
        });
    }
});