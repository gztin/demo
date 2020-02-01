// 設定預設起始車站資料
$('#end option[value=4400]').attr('selected', 'selected');
$('#endTime option[value=08-00]').attr('selected', 'selected');

// 設定畫面上的出發日期
var dateObj = new Date();
var D = dateObj.getDate();
var Y = dateObj.getFullYear();
var Mh = dateObj.getMonth() + 1;
if (Mh > 12) Mh = 01;
if (Mh < 10) Mh = '0' + Mh;
var weekday = new Array(7);
weekday[0] = "日";
weekday[1] = "一";
weekday[2] = "二";
weekday[3] = "三";
weekday[4] = "四";
weekday[5] = "五";
weekday[6] = "六";
var today = weekday[dateObj.getDay()];
$('#selectDay').html('<p>' + Y + '-' + Mh + '-' + D + '</p>' + '<div>' + '(' + '<span>' + today + '</span>' + ')' + '</div>');

// 設定可購票日期
function dispTime() {
    for (i = 0; i < 9; i++) {
        function GetDateStr(i) {
            var dd = new Date();
            dd.setDate(dd.getDate() + i); //获取AddDayCount天后的日期
            var y = dd.getFullYear();
            var m = (dd.getMonth() + 1) < 10 ? "0" + (dd.getMonth() + 1) : (dd.getMonth() + 1); //获取当前月份的日期，不足10补0
            var d = dd.getDate() < 10 ? "0" + dd.getDate() : dd.getDate(); //获取当前几号，不足10补0
            return y + "-" + m + "-" + d;
        }
        function GetDayStr(i) {
            var dd = new Date();
            dd.setDate(dd.getDate() + i); //获取AddDayCount天后的日期
            var weekday = new Array(7);
            weekday[0] = "日";
            weekday[1] = "一";
            weekday[2] = "二";
            weekday[3] = "三";
            weekday[4] = "四";
            weekday[5] = "五";
            weekday[6] = "六";
            var today = weekday[dd.getDay()];
            return today;
        }
        $('.calender > div > ul').append('<li class="dayData">' + '<p>' + GetDateStr(i) + '</p>' + '<div>' + '(' + '<span>' + GetDayStr(i) + '</span>' + ')' + '</div>' + '</li>');
    }
}
// var timerID = setInterval("dispTime()",1000);
dispTime();

// 開啟出發日期的選擇畫面
$('.dayPick').click(function() {
    $('.bg').css('display', 'block');
    $('.calender').css('display', 'flex');
});

// 若沒有要選擇日期，點選其他地方可關閉畫面
$('.bg').click(function() {
    $('.bg').css('display', 'none');
    $('.calender').css('display', 'none');
});

// 設定出發日期
$('ul.list > li').click(function() {
    var index = $("ul.list > li").index(this);
    var tempDate = $('.dayData').eq(index).find("p").text();
    var tempDay = $('.dayData').eq(index).find("span").text();
    $('#selectDay').find("p").html(tempDate);
    $('#selectDay').find("span").html(tempDay);
    $('.bg').css('display', 'none');
    $('.calender').css('display', 'none');
});