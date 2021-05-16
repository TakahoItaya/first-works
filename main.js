let map;
let marker;
let infoWindow;
let center = {
  lat: 35.6582906492718, // 緯度
  lng: 139.70221625540262// 経度
};

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: center,
        zoom: 17
    });
    
     marker = new google.maps.Marker({ // マーカーの追加
        position: center, // マーカーを立てる位置を指定
      map: map // マーカーを立てる地図を指定
   });
   
    infoWindow = new google.maps.InfoWindow({ // 吹き出しの追加
        content: '<div class="sample">〒150-6124 <br>東京都渋谷区渋谷２丁目２４−１２ スクランブルスクエア ２４階</div>' // 吹き出しに表示する内容
  });
 marker.addListener('click', function() { // マーカーをクリックしたとき
     infoWindow.open(map, marker); // 吹き出しの表示
    });
    }
    
    $(function () {
  var set = 80;//ウインドウ上部からどれぐらいの位置で変化させるか
  var boxTop = new Array;
  var current = -1;
  //各要素の位置
  //position-nowは場所を取得したい対象の要素に付ける
  $('.position-now').each(function (i) {
    boxTop[i] = $(this).offset().top;
  });
  //最初の要素にclass="positiion-now"をつける
  changeBox(0);
  //スクロールした時の処理
  $(window).scroll(function () {
    scrollPosition = $(window).scrollTop();
    for (var i = boxTop.length - 1; i >= 0; i--) {
      if ($(window).scrollTop() > boxTop[i] - set) {
        changeBox(i);
        break;
      }
    };
  });
  //ナビの処理
  function changeBox(secNum) {
    if (secNum != current) {
      current = secNum;
      secNum2 = secNum + 1;//以下にクラス付与したい要素名と付与したいクラス名
      $('div ul li a').removeClass('link-current');

      //位置によって個別に処理をしたい場合　
      if (current == 0) {
        $('#top_link_js').removeClass('link-current');
        // 現在地がsection1の場合の処理
      } else if (current == 1) {
        $('#vision_link_js').addClass('link-current');
        // 現在地がsection2の場合の処理
      } else if (current == 2) {
        // 現在地がsection3の場合の処理
        $('#service_link_js').addClass('link-current');
      }
      else if (current == 3) {
        // 現在地がsection4の場合の処理
        $('#News_link_js').addClass('link-current');
      }
      else if (current == 4) {
        // 現在地がsection4の場合の処理
        $('#access_link_js').addClass('link-current');
      }
      else if (current == 5) {
        // 現在地がsection5の場合の処理
        $('#contact_link_js').addClass('link-current');
      }

    }
  };
});
  


   
  $(function(){
  // #で始まるa要素をクリックした場合に処理
  $('a[href^=#]').click(function(){
    
    
    const text1 = document.getElementById("vision_link_js");
    const text2 = document.getElementById("service_link_js");
    const text3 = document.getElementById("News_link_js");
    const text4 = document.getElementById("access_link_js");
    const text5 = document.getElementById("contact_link_js")
    
    text1.blur();
    text2.blur();
    text3.blur();
    text4.blur();
    text5.blur();
 
    // 移動先を0px調整する。0を30にすると30px下にずらすことができる。
    let adjust = -60;
    // スクロールの速度（ミリ秒）
    let speed = 400;
    // アンカーの値取得 リンク先（href）を取得して、hrefという変数に代入
    let href= $(this).attr("href");
    // 移動先を取得 リンク先(href）のidがある要素を探して、targetに代入
    let target = $(href == "#" || href == "" ? 'html' : href);
    // 移動先を調整 idの要素の位置をoffset()で取得して、positionに代入
    let position = target.offset().top + adjust;
    // スムーススクロール linear（等速） or swing（変速）
    $('body,html').animate({scrollTop:position}, speed, 'swing');
    return false;
    
    
  
     
  });
});

  
    
    
$('.nav-item a[href]').on('click', function(event) {
    if($('.navbar-toggler').is(":visible"))
        $('.navbar-toggler').trigger('click');
    });
    



    
    
    
    
    

    

