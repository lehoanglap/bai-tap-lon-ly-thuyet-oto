$(document).ready(function () {
    
  anime({
      targets: '.svg3',
      translateX: -45,
      translateY: 55,
      easing: 'easeInOutQuad',
      direction: 'alternate',
      loop: true,
      duration: 5000
    });

    anime({
      targets: '.svg6',
      translateX: -45,
      translateY: -55,
      rotate: '1turn',
      easing: 'easeInOutQuad',
      direction: 'alternate',
      loop: true,
      duration: 30000
    });

    anime({
      targets: '.svg4',
      translateX: 15,
      translateY: 35,
      rotate: '90deg',
      easing: 'easeInOutQuad',
      direction: 'alternate',
      loop: true,
      duration: 10000
    });
    anime({
      targets: '.svg5',
      translateX: 55,
      translateY: -15,
      rotate: '20deg',
      easing: 'easeInOutQuad',
      direction: 'alternate',
      loop: true,
      duration: 10000
    });

    anime({
      targets: '.svg2',
      translateX: 15,
      translateY: 65,
      rotate: '220deg',
      easing: 'easeInOutQuad',
      direction: 'alternate',
      loop: true,
      duration: 10000
    });

    

    $(".hstl").click(function (e) { 
      e.preventDefault();
      $(".table2 .xoa").remove();
      $(".table1 .xoa").remove();
      $(".table3 .xoa").remove();
      $(".table1").html('<div class="alert alert-warning alert-dismissible fade show xoa" role="alert" style="transition: ease-in;"><strong>Hiệu suất truyền lực ntl</strong> Bảng hệ số bên dưới. bên dưới.<br><div id="hdtable1"><div><b-table striped hover :items="items"></b-table> </div></div><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>');


      //hưỡng dẫn hiệu suất truyền lực
    var ndtable1 = new Vue({
      el: '#hdtable1',
      data: {
        items: [
          { STT: 1, Loại_ôtô_và_các_tổng_thành: 'Ôtô con', Giá_trị_trung_bình: '0.9 - 0.93' },
          { STT: 2, Loại_ôtô_và_các_tổng_thành: 'Ôtô tải và ôtô buýt', Giá_trị_trung_bình: '0.82 - 0.85' },
          { STT: 3, Loại_ôtô_và_các_tổng_thành: 'Ôtô có tính cơ động cao', Giá_trị_trung_bình: '0.8 - 0.85' },
          { STT: 4, Loại_ôtô_và_các_tổng_thành: 'Số truyền thẳng ', Giá_trị_trung_bình: '0.98 - 0.99' },
          { STT: 5, Loại_ôtô_và_các_tổng_thành: 'Số thấp', Giá_trị_trung_bình: '0.94 - 0.96' },
          { STT: 6, Loại_ôtô_và_các_tổng_thành: 'Truyền động các đăng', Giá_trị_trung_bình: '0.97 - 0.98' },
          { STT: 7, Loại_ôtô_và_các_tổng_thành: 'Truyền lực chính loại một cấp', Giá_trị_trung_bình: '0.96 - 0.97' },
          { STT: 8, Loại_ôtô_và_các_tổng_thành: 'Truyền lực chính loại nhiều cấp', Giá_trị_trung_bình: '0.92 - 0.94' }
        ]
      }
    })



    });


    $(".hdchonfo").click(function (e) { 
      e.preventDefault();
      $(".table2 .xoa").remove();
      $(".table1 .xoa").remove();
      $(".table3 .xoa").remove();
      $(".table2").html('<div class="alert alert-warning alert-dismissible fade show xoa" role="alert" style="transition: ease-in;"><strong>Hệ số cản lăn khi vận tốc max nhỏ hơn 22,22m/s (80Km/h)</strong> Bảng hệ số cản lăn bên dưới.<br><div id="hdtable2"><div><b-table striped hover :items="items"></b-table></div></div><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>');


      //hưỡng dẫn hệ số cản lăn
    var ndtable1 = new Vue({
      el: '#hdtable2',
      data: {
        items: [
          { STT: 1, Loại_đường: 'Đường cao tốc bê tông trạng thái tốt ', Giá_trị_trung_bình: '0.007 - 0.015' },
          { STT: 2, Loại_đường: 'Đường cao tốc bê tông trạng thái bình thường ', Giá_trị_trung_bình: '0.015 - 0.020' },
          { STT: 3, Loại_đường: 'Đường đá dăm ở trạng thái tốt', Giá_trị_trung_bình: '0.025 - 0.030' },
          { STT: 4, Loại_đường: 'Đường đất khô', Giá_trị_trung_bình: '0.030 - 0.035' },
          { STT: 5, Loại_đường: 'Đường đất ướt', Giá_trị_trung_bình: '0.050 - 0.150' },
          { STT: 6, Loại_đường: 'Đường đất ướt', Giá_trị_trung_bình: '0.050 - 0.150' },
          { STT: 7, Loại_đường: 'Đường cát khô', Giá_trị_trung_bình: '0.100 - 0.300' },
          { STT: 8, Loại_đường: 'Đường cát ướt', Giá_trị_trung_bình: '0.060 - 0.150' },
          
        ]
      }
    })



    });


    $(".hdchonK").click(function (e) { 
      e.preventDefault();
      $(".table2 .xoa").remove();
      $(".table1 .xoa").remove();
      $(".table3 .xoa").remove();
      $(".table3").html('<div class="alert alert-warning alert-dismissible fade show xoa" role="alert" style="transition: ease-in;"><strong>Hệ số cản không khí K</strong> Bảng hệ số cản không khí bên dưới.<br><div id="hdtable3"><div><b-table striped hover :items="items"></b-table></div></div><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>');


      //hưỡng dẫn hệ số cản không khí
    var ndtable3 = new Vue({
      el: '#hdtable3',
      data: {
        items: [
          { STT: 1, Loại_ôtô: 'Ôtô con và du lịch vỏ kín', Giá_trị_trung_bình_K: '0.20 - 0.35' },
          { STT: 2, Loại_ôtô: 'Ôtô tải', Giá_trị_trung_bình_K: '0.5 - 0.7' },
          { STT: 3, Loại_ôtô: 'Ôtô khách', Giá_trị_trung_bình_K: '0.35 - 0.45' },
          { STT: 3, Loại_ôtô: 'Ôtô kéo moóc', Giá_trị_trung_bình_K: '0.85 - 0.95' },
          
          
        ]
      }
    })



    });


    
   //in kết quả phan1

    $(".kqtc").click(function (e) { 
      e.preventDefault();
      $(".frint1").toggleClass("hien");
      
    });

    $(".phan_bo_trong_luong").click(function (e) { 
      e.preventDefault();
      $(".frint2").toggleClass("hien");
      
    });
    

    
  



  //end in kết quả phần 1


  // phan 2
//-------------
  $(".hdddt").click(function (e) { 
    e.preventDefault();
    $(".hd1").toggleClass("hien");

  });
//--------------
  $(".hddttd").click(function (e) { 
    e.preventDefault();
    $(".hd1").removeClass("hien");

  });
//-----------

  $(".hdhsctc").click(function (e) { 
    e.preventDefault();
    $(".hdtsldd").removeClass("hien");
    $(".hdtdqq").removeClass("hien");
    $(".hdhsctco").toggleClass("hien");
    
  });

  $(".nutt01").click(function (e) { 
    e.preventDefault();
    $(".hdhsctco").removeClass("hien");
    
  });
//---------
$(".tisotd").click(function (e) { 
e.preventDefault();
$(".hdhsctco").removeClass("hien");
$(".hdtdqq").removeClass("hien");
$(".hdtsldd").toggleClass("hien");

});

$(".nutt02").click(function (e) { 
e.preventDefault();
$(".hdtsldd ").removeClass("hien");

});
//--------
$(".chonvongquay").click(function (e) { 
e.preventDefault();
$(".hdhsctco").removeClass("hien");
$(".hdtsldd").removeClass("hien");
$(".hdtdqq").toggleClass("hien");

});

$(".nutt03").click(function (e) { 
e.preventDefault();
$(".hdtdqq ").removeClass("hien");

});
$(".hdddt").click(function (e) { 
e.preventDefault();
$(".kqtdndc").removeClass("hien");

});

$(".kqtdn").click(function (e) { 
e.preventDefault();
$(".hd1").removeClass("hien");
$(".kqtdndc").toggleClass("hien");

});
//-------


  //end phần 2
  
//huong dan ve bieu do luc keo
$(".hdcblk").click(function (e) { 
  e.preventDefault();
  $(".hd2btcblk").toggleClass("hien");
  $(".kqdtcblk").removeClass("hien");
  
});

$(".hddtcblk").click(function (e) { 
  e.preventDefault();
  $(".hd2btcblk").removeClass("hien")
  
  
});

//huong dan ve bieu do luc keo

//----------do thi can bang luc keo-------
$(".kqcblkk").click(function (e) { 
  e.preventDefault();
  $(".kqdtcblk").toggleClass("hien");
  $(".hd2btcblk").removeClass("hien");
  
});

//----------end do thi can bang luc keo-------
//-----------------------------------------------
$(".hddtntdlh").click(function (e) { 
  e.preventDefault();
  $(".kqnt_dong_luc_hoc").removeClass("hien");
  $(".hdtb").toggleClass("hien");
  
});

$(".cldlh").click(function (e) { 
  e.preventDefault();
  $(".hdtb").removeClass("hien");
  
});

$(".kqntdlh").click(function (e) { 
  e.preventDefault();
  $(".hdtb").removeClass("hien");
  $(".kqnt_dong_luc_hoc").toggleClass("hien");
  
});
//----------------
$(".hdcbcsdc").click(function (e) { 
  e.preventDefault();
  $(".kqcbcsdcc").removeClass("hien");
  $(".hdndcbcsdc").toggleClass("hien");
  
});
$(".clhncbcsdc").click(function (e) { 
  e.preventDefault();
  $(".hdndcbcsdc").removeClass("hien");
  
});

$(".kqcbangcs").click(function (e) { 
  e.preventDefault();
  $(".hdndcbcsdc").removeClass("hien");
  $(".kqcbcsdcc").toggleClass("hien");
 
  
});
//-----------------------------------------
$(".hdgtot").click(function (e) { 
  e.preventDefault();
  $(".kqt_gia_toc").removeClass("hien");
  $(".hdgtcdc").toggleClass("hien");
  
});
$(".clear_gtot").click(function (e) { 
  e.preventDefault();
  $(".hdgtcdc").removeClass("hien");
  
});

$(".kqgtot").click(function (e) { 
  e.preventDefault();
  $(".hdgtcdc").removeClass("hien");
  $(".kqt_gia_toc").toggleClass("hien");
 
  
});



//-------------------------------
//////////////////
$(".hdtgqdtt").click(function (e) { 
  e.preventDefault();
  $(".kqttt_thoi_gian_tt").removeClass("hien");
  $(".hdtgttoto").toggleClass("hien");
  
});
$(".clohdttot").click(function (e) { 
  e.preventDefault();
  $(".hdtgttoto").removeClass("hien");
  
});

$(".kqtgqdttot").click(function (e) { 
  e.preventDefault();
  $(".hdtgttoto").removeClass("hien");
  $(".kqttt_thoi_gian_tt").toggleClass("hien");
 
  
});

$(".dong_goi_y").click(function (e) { 
  e.preventDefault();
  
  $(".laytruyenlucchinh").removeClass("hien");
  
});

$(".chon_gia_toc").click(function (e) { 
  e.preventDefault();
  
  $(".chon_gia_toc_95").removeClass("hien");
  
});

var offset = $(".p1").offset();
var toppa = offset.top;




$(window).scroll(function(){
  var top=$(document).scrollTop();

  if (top>toppa) {
    $(".menu").addClass("cdmenu");
    
  } else {
    $(".menu").removeClass("cdmenu");
    
  }
  

})










});

