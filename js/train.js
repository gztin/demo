let data = {
    startStation:'台北',
    endStation:'高雄',
    selectedStart: '台北',
    selectedEnd: '高雄',
    station:[
        {stationCode:'1100',stationName:'台北'},
        {stationCode:'1110',stationName:'松山'},
        {stationCode:'1120',stationName:'萬華'},
        {stationCode:'1130',stationName:'板橋'},
        {stationCode:'1150',stationName:'高雄'}
    ],
    timeChoice:[
        {clock:'6:00-8:00'},
        {clock:'8:00-9:00'},
        {clock:'9:00-10:00'},
        {clock:'10:00-11:00'},
        {clock:'11:00-12:00'},
        {clock:'12:00-13:00'},
        {clock:'13:00-14:00'},
        {clock:'14:00-15:00'},
        {clock:'15:00-16:00'},
        {clock:'16:00-17:00'},
        {clock:'17:00-18:00'},
        {clock:'18:00-19:00'},
        {clock:'19:00-20:00'},
        {clock:'20:00-21:00'},
        {clock:'21:00-22:00'},
        {clock:'22:00-23:00'},
        {clock:'23:00-24:00'}
    ],
    dayChoice:[
        {today:'星期日'},
        {today:'星期一'},
        {today:'星期二'},
        {today:'星期三'},
        {today:'星期四'},
        {today:'星期五'},
        {today:'星期六'}
    ]
}

let vm = new Vue({
    el:'#app',
    data:data
    
    
});
$('.switch').click(function(){
    $('.switch').toggleClass('rotated');
});