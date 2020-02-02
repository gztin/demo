function loadData(){
    fetch('https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWB-157944DE-8E78-4585-8F55-6BFD77881E42&format=JSON', {})
    .then((response) => {
        // 可以透過 blob(), json(), text() 轉成可用的資訊
        return response.json(); 
    }).then((jsonData) => {
        console.log(jsonData);
        var dataTotal = jsonData.records.location.length;
        var dataCount = 0;
        var data = jsonData.records;
        // 顯示縣市資料
        while(dataCount<dataTotal){
            $('.place').append('<option value="'+dataCount+'">'+data.location[dataCount].locationName+'</option>');
            dataCount++;
        }
        
        // 顯示溫度資訊
        // 天氣描述
        // 溫度
        // 氣溫狀態
        $('#place option[value=5]').attr('selected', 'selected');
        $('.tempContent').append('<p>'+data.location[0].weatherElement[0].time[0].parameter.parameterName+'</p>');
        $('.tempInf').append('<p>'+data.location[0].weatherElement[2].time[0].parameter.parameterName+'</p>'+'<p class="cUnit">°C</p>');
        $('.status').append('<p>'+data.location[0].weatherElement[3].time[0].parameter.parameterName+'</p>');
    }).catch((err) => {
        console.log('錯誤:', err);
    });
}
function changeLocation(){
    $('.tempInf').html("");
    $('.status').html("");
    $('.tempContent').html("");
    var choice = $('#place').val();
    fetch('https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWB-157944DE-8E78-4585-8F55-6BFD77881E42&format=JSON', {})
    .then((response) => {
        // 可以透過 blob(), json(), text() 轉成可用的資訊
        return response.json(); 
    }).then((jsonData) => {
        var data = jsonData.records;
        // 顯示溫度資訊
        // 天氣描述
        // 溫度
        // 氣溫狀態
        $('.tempContent').append('<p>'+data.location[choice].weatherElement[0].time[0].parameter.parameterName+'</p>');
        $('.tempInf').append('<p>'+data.location[choice].weatherElement[2].time[0].parameter.parameterName+'</p>'+'<p class="cUnit">°C</p>');
        $('.status').append('<p>'+data.location[choice].weatherElement[3].time[0].parameter.parameterName+'</p>');
    }).catch((err) => {
        console.log('錯誤:', err);
    });
}
// function change
loadData();