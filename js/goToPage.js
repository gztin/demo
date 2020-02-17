// 切換項目

$('.menu span').click(function(){
  var x =$(this).index();
  $('.menu span').eq(x).addClass('cur').siblings().removeClass('cur');
});

$('.all').click(function(){
  $('.pop').hide();
  $('.newsList div > div').css('display','flex');
});

$('.focus').click(function(){
  $('.pop').hide();
  $('.newsList div > div').hide();
  $('.newsList div > div.newsFocus').css('display','flex');
});

$('.politics').click(function(){
  $('.pop').hide();
  $('.newsList div > div').hide();
  $('.newsList div > div.newsPolitics').css('display','flex');
});

$('.gossiping').click(function(){
  $('.pop').hide();
  $('.newsList div > div').hide();
  $('.newsList div > div.newsGossiping').css('display','flex');
});

$('.entertainment').click(function(){
  $('.pop').hide();
  $('.newsList div > div').hide();
  $('.newsList div > div.newsEntertainment').css('display','flex');
});

$('.gossiping').click(function(){
  $('.pop').hide();
  $('.newsList div > div').hide();
  $('.newsList div > div.newsGossiping').css('display','flex');
});

$('.global').click(function(){
  $('.pop').hide();
  $('.newsList div > div').hide();
  $('.newsList div > div.newsGlobal').css('display','flex');
});

$('.finance').click(function(){
  $('.pop').hide();
  $('.newsList div > div').hide();
  $('.newsList div > div.newsFinance').css('display','flex');
});

$('.society').click(function(){
  $('.pop').hide();
  $('.newsList div > div').hide();
  $('.newsList div > div.newsSociety').css('display','flex');
});

$('.sport').click(function(){
  $('.pop').hide();
  $('.newsList div > div').hide();
  $('.newsList div > div.newsSport').css('display','flex');
});

$('.sport').click(function(){
  $('.pop').hide();
  $('.newsList div > div').hide();
  $('.newsList div > div.newsSport').css('display','flex');
});


// 跳頁
$('.newsList > div > .newsContent').click(function(){
  var y =$(this).index();
  console.log(y);
  alert("aaa");
});

// 複製連結
$('.newslink').click(function(){
   alert("aaa");
});