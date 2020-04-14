$(document).ready(function () {
  //----------------------test--------------------

  //---------------------test---end



  $(".sldl1").click(function (e) {
    e.preventDefault();
    $(".el .alert-danger").addClass("an");
    
    $(".laytruyenlucchinh").addClass("hien");
    
   

    



    //------------------------
    //------------------------------
    //------------------------

    //tao array tong cac thong so xe
    var DATA_CAR = [];
    //lay kich thuoc co ban cua xe
    var chieu_dai_toan_bo_Lo = $("#validationTooltip01").val();
    var chieu_rong_toan_bo_Bo = $("#validationTooltip02").val();
    var chieu_cao_toan_bo_Ho = $("#validationTooltip03").val();
    var chieu_dai_co_so_L = $("#validationTooltip04").val();
    var vet_banh_truoc_B1 = $("#validationTooltip05").val();
    var vet_banh_sau_B2 = $("#validationTooltip06").val();
    var khoang_sang_gam_xe_H1 = $("#validationTooltip07").val();
    var goc_thoat_truoc_γ1 = $("#validationTooltip08").val();
    var goc_thoat_sau_γ2 = $("#validationTooltip09").val();
    var van_toc_max_Vmax = $("#validationTooltip10").val();
    //lay thong so thet ke phac thao
    var loai_dong_co = $("#validationTooltip11").val();
    var dung_tich_cong_tac = $("#validationTooltip12").val();
    var cong_suat_toi_da = $("#validationTooltip13").val();
    var toc_do_dong_co = $("#validationTooltip14").val();
    var momen_xoan_toi_da = $("#validationTooltip15").val();
    var he_thong_truyen_luc = $("#validationTooltip16").val();
    //lay thong so chon
    var trong_luong_ban_than = $("#validationTooltip17").val();
    var trong_luong_hanh_khach = $("#validationTooltip18").val();
    var trong_luong_hanh_ly = $("#validationTooltip19").val();
    var hieu_suat_truyen_luc = $("#validationTooltip20").val();
    var he_so_cac_khong_khi = $("#validationTooltip21").val();
    var he_so_can_lan_fo = $("#validationTooltip22").val();
    //lay thong so tinh chon
    var he_so_dien_tich_can_chinh_dien = $("#hs_can_chinh_dien").val();
    var chieu_rong_mat_lop = $("#validationTooltip23").val();
    var ti_le_H_B = $("#validationTooltip24").val();
    var duong_kinh_vanh_xe = $("#validationTooltip25").val();
    var he_so_bien_dang_lop = $("#validationTooltip26").val();
    //lay thong so trọng lượng và phân bố trọng lượng lên ô tô
    var so_cho_tren_o_to = $("#validationTooltip27").val();
    var phan_tram_luc_cau_truoc = $("#validationTooltip28").val();
    var phan_tram_luc_cau_sau = $("#validationTooltip29").val();

    //lay du lieu dac tinh ngoai
    var thong_so_abc = $("#hesoabc").val();
    var he_so_can_tong_cong_max = Number($("#hscantc").val());
    var he_so_lamda = Number($("#tisolamda").val());
    var toc_do_vong_quay = Number($("#csvquay").val());
    //lay du lieu dac tinh ngoai

    //phuong trinh can bang luc keo va do thi can bang luc keo 
    var cap_dc = Number($("#cap_dc").val());
    var ty_so_tai_nmax = Number($("#ty_so_tai_nmax").val());
    var ty_so_hsp_max = Number($("#ty_so_hsp_max").val());
    var he_so_pbtt_m = Number($("#he_so_pbtt_m").val());
    var he_so_bam = Number($("#he_so_bam").val());
    var cau_chu_dong = $("#cau_chu_dong").val();
    //----------------------------------
    var thoi_gian_chuyen_so =  Number($("#thoi_gian_chuyen_so").val());

    //phuong trinh can bang luc keo va do thi can bang luc keo

    //


    //--------------
    //----------------
    //--------------------
    //--------------------
    //--------------------
    //test---------------
    //=============================================
    //=================================================

    // var chieu_dai_toan_bo_Lo = 3795;
    // var chieu_rong_toan_bo_Bo = 1665;
    // var chieu_cao_toan_bo_Ho = 1510;
    // var chieu_dai_co_so_L = 2450;
    // var vet_banh_truoc_B1 = 1430;
    // var vet_banh_sau_B2 = 1415;
    // var khoang_sang_gam_xe_H1 = 160;
    // var goc_thoat_truoc_γ1 = 29;
    // var goc_thoat_sau_γ2 = 25;
    // var van_toc_max_Vmax = 170;
    // //------------------------------
    // var trong_luong_ban_than = 830;
    // var trong_luong_hanh_khach = 70;
    // var trong_luong_hanh_ly = 20;
    // var hieu_suat_truyen_luc = 0.9;
    // var he_so_cac_khong_khi = 0.25;
    // var he_so_can_lan_fo =  0.02;
    // //-------------------------
    // var he_so_dien_tich_can_chinh_dien = 0.78;
    // var chieu_rong_mat_lop = 175;
    // var ti_le_H_B = 55;
    // var duong_kinh_vanh_xe = 15;
    // var he_so_bien_dang_lop = 0.94
    // //------------------------
    // var so_cho_tren_o_to = 5;
    // var phan_tram_luc_cau_truoc = 60;
    // var phan_tram_luc_cau_sau = 40;
    // //-------------------------
    // var thong_so_abc = 'TH1';
    // var he_so_can_tong_cong_max = 0.4;
    // var he_so_lamda = 1.1;
    // var toc_do_vong_quay = 6000;
    // //------------------------
    // var cap_dc = 5;
    // var ty_so_tai_nmax = 1;
    // var ty_so_hsp_max = 1;
    // var he_so_pbtt_m = 1.2;
    // var he_so_bam = 0.9;
    // var cau_chu_dong = "TH1";
    // //-------------------------
    // var thoi_gian_chuyen_so = 1.5;
    //=============================================
    //====================================================
    //====================VD2=============================

    // var chieu_dai_toan_bo_Lo = 5780;
    // var chieu_rong_toan_bo_Bo = 2000;
    // var chieu_cao_toan_bo_Ho = 2360;
    // var chieu_dai_co_so_L = 3750;
    // var vet_banh_truoc_B1 = 1740;
    // var vet_banh_sau_B2 = 1704;
    // var khoang_sang_gam_xe_H1 = 165;
    // var goc_thoat_truoc_γ1 = 0;
    // var goc_thoat_sau_γ2 = 0;
    // var van_toc_max_Vmax = 260;
    // //------------------------------
    // var trong_luong_ban_than = 2455;
    // var trong_luong_hanh_khach = 60;
    // var trong_luong_hanh_ly = 20;
    // var hieu_suat_truyen_luc = 0.92;
    // var he_so_cac_khong_khi = 0.2;
    // var he_so_can_lan_fo =  0.016;
    // //-------------------------
    // var he_so_dien_tich_can_chinh_dien = 0.78;
    // var chieu_rong_mat_lop = 215;
    // var ti_le_H_B = 75;
    // var duong_kinh_vanh_xe = 16;
    // var he_so_bien_dang_lop = 0.94
    // //------------------------
    // var so_cho_tren_o_to = 16;
    // var phan_tram_luc_cau_truoc = 55;
    // var phan_tram_luc_cau_sau = 45;
    // //-------------------------
    // var thong_so_abc = 'TH4';
    // var he_so_can_tong_cong_max = 0.4;
    // var he_so_lamda = 1;
    // var toc_do_vong_quay = 3200;
    // //------------------------
    // var cap_dc = 6;
    // var ty_so_tai_nmax = 1;
    // var ty_so_hsp_max = 1;
    // var he_so_pbtt_m = 1.1;
    // var he_so_bam = 0.9;
    // var cau_chu_dong = "TH2";
    // //-------------------------
    // var thoi_gian_chuyen_so = 2.5;
    //=============================================
    //ty so truyen tay 1: 2.27
    //====================================================



    //--------------------
    //--------------------

    //--------------------
    //test-------------


    //array data kich thuoc co ban cua xe
    var data_kich_thuoc_co_ban = [chieu_dai_toan_bo_Lo, chieu_rong_toan_bo_Bo, chieu_cao_toan_bo_Ho, chieu_dai_co_so_L, vet_banh_truoc_B1, vet_banh_sau_B2, khoang_sang_gam_xe_H1, goc_thoat_truoc_γ1, goc_thoat_sau_γ2, van_toc_max_Vmax];


    //kiểm tra dữ kiện vào
    let a1 = 0 //khoi tao bien đếm
    for (let i = 0; i < data_kich_thuoc_co_ban.length; i++) {
      if (data_kich_thuoc_co_ban[i] === "") {
        a1++;

      }

    }
    //kiem tra toan ven data, thiếu báo lỗi
    if (a1 == 0) {
      //đẩy toàn bộ data vào array data_Car
      function data_kich_thuoc_co_ban_cua_xe(chieu_dai_toan_bo_Lo, chieu_rong_toan_bo_Bo, chieu_cao_toan_bo_Ho, chieu_dai_co_so_L, vet_banh_truoc_B1, vet_banh_sau_B2, khoang_sang_gam_xe_H1, goc_thoat_truoc_γ1, goc_thoat_sau_γ2, van_toc_max_Vmax) {

        this.chieu_dai_toan_bo_Lo = chieu_dai_toan_bo_Lo;
        this.chieu_rong_toan_bo_Bo = chieu_rong_toan_bo_Bo;
        this.chieu_cao_toan_bo_Ho = chieu_cao_toan_bo_Ho;
        this.chieu_dai_co_so_L = chieu_dai_co_so_L;
        this.vet_banh_truoc_B1 = vet_banh_truoc_B1;
        this.vet_banh_sau_B2 = vet_banh_sau_B2;
        this.khoang_sang_gam_xe_H1 = khoang_sang_gam_xe_H1;
        this.goc_thoat_truoc_γ1 = goc_thoat_truoc_γ1;
        this.goc_thoat_sau_γ2 = goc_thoat_sau_γ2;
        this.van_toc_max_Vmax = van_toc_max_Vmax;

      }


      var kich_thuoc_co_ban = new data_kich_thuoc_co_ban_cua_xe(chieu_dai_toan_bo_Lo, chieu_rong_toan_bo_Bo, chieu_cao_toan_bo_Ho, chieu_dai_co_so_L, vet_banh_truoc_B1, vet_banh_sau_B2, khoang_sang_gam_xe_H1, goc_thoat_truoc_γ1, goc_thoat_sau_γ2, van_toc_max_Vmax); //tạo ojb kich_thuoc_co_ban_cua_xe

      DATA_CAR.push(kich_thuoc_co_ban);


      //end

    } else {
      $(".tb1").html('<div class="alert alert-danger alert-dismissible fade show" role="alert"><strong>Thiếu dữ liệu!</strong> kiểm tra phần Điền các kích thước cơ bản của xe.<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>');
      $(".laytruyenlucchinh").removeClass("hien");
      $(".chon_gia_toc_95").removeClass("hien");
    }



    var data_thong_so_thiet_ke_phac_thao = [loai_dong_co, dung_tich_cong_tac, cong_suat_toi_da, toc_do_dong_co, momen_xoan_toi_da, he_thong_truyen_luc] // tạo array ata_thong_so_thiet_ke_phac_thao

    let a2 = 0; // khoi tao
    //kiem tra data thong_so_thiet_ke_phac_thao
    for (let i1 = 0; i1 < data_thong_so_thiet_ke_phac_thao.length; i1++) {
      if (data_thong_so_thiet_ke_phac_thao[i1] == "") {
        a2++;
      }

    }
    if (a2 == 0) {
      function thong_so_thiet_ke_phac_thao(loai_dong_co, dung_tich_cong_tac, cong_suat_toi_da, toc_do_dong_co, momen_xoan_toi_da, he_thong_truyen_luc) {
        this.loai_dong_co = loai_dong_co,
          this.dung_tich_cong_tac = dung_tich_cong_tac,
          this.cong_suat_toi_da = cong_suat_toi_da,
          this.toc_do_dong_co = toc_do_dong_co,
          this.momen_xoan_toi_da = momen_xoan_toi_da,
          this.he_thong_truyen_luc = he_thong_truyen_luc

      }
      var thong_so_thiet_ke = new thong_so_thiet_ke_phac_thao(loai_dong_co, dung_tich_cong_tac, cong_suat_toi_da, toc_do_dong_co, momen_xoan_toi_da, he_thong_truyen_luc);
      DATA_CAR.push(thong_so_thiet_ke);



    } else {
      $(".tb2").html('<div class="alert alert-danger alert-dismissible fade show" role="alert"> <strong>Thiếu dữ liệu!</strong> kiểm tra phần thông số thiết kế phác thảo.<button type="button" class="close" data-dismiss="alert" aria-label="Close"> <span aria-hidden="true">&times;</span></button></div>');

      $(".laytruyenlucchinh").removeClass("hien");
      $(".chon_gia_toc_95").removeClass("hien");
    }




    var data_thong_so_chon = [trong_luong_ban_than, trong_luong_hanh_khach, trong_luong_hanh_ly, hieu_suat_truyen_luc, he_so_cac_khong_khi, he_so_can_lan_fo] // tạo array thong so chon
    let a3 = 0; // khoi tao
    //kiem tra data thong_so_thiet_ke_phac_thao
    for (let i2 = 0; i2 < data_thong_so_chon.length; i2++) {
      if (data_thong_so_chon[i2] == "") {
        a3++;
      }

    }

    if (a3 == 0) {
      function thong_so_chon(trong_luong_ban_than, trong_luong_hanh_khach, trong_luong_hanh_ly, hieu_suat_truyen_luc, he_so_cac_khong_khi, he_so_can_lan_fo) {
        this.trong_luong_ban_than = trong_luong_ban_than,
          this.trong_luong_hanh_khach = trong_luong_hanh_khach,
          this.trong_luong_hanh_ly = trong_luong_hanh_ly,
          this.hieu_suat_truyen_luc = hieu_suat_truyen_luc,
          this.he_so_cac_khong_khi = he_so_cac_khong_khi,
          this.he_so_can_lan_fo = he_so_can_lan_fo

      }
      var thong_so_chonn = new thong_so_chon(trong_luong_ban_than, trong_luong_hanh_khach, trong_luong_hanh_ly, hieu_suat_truyen_luc, he_so_cac_khong_khi, he_so_can_lan_fo);
      DATA_CAR.push(thong_so_chonn);



    } else {
      $(".tb3").html('<div class="alert alert-danger alert-dismissible fade show" role="alert"><strong>Thiếu dữ liệu!</strong> kiểm tra phần thông số chọn.<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>');

      $(".laytruyenlucchinh").removeClass("hien");
      $(".chon_gia_toc_95").removeClass("hien");
    }



    var data_thong_so_tinh_chon = [he_so_dien_tich_can_chinh_dien, chieu_rong_mat_lop, ti_le_H_B, duong_kinh_vanh_xe, he_so_bien_dang_lop] // tạo array thong so tinh chon
    let a4 = 0; // khoi tao
    //kiem tra data thong_so_thiet_ke_phac_thao
    for (let i3 = 0; i3 < data_thong_so_tinh_chon.length; i3++) {
      if (data_thong_so_tinh_chon[i3] == "") {
        a4++;
      }

    }

    if (a4 == 0) {
      function thong_so_tinh_chon(he_so_dien_tich_can_chinh_dien, chieu_rong_mat_lop, ti_le_H_B, duong_kinh_vanh_xe, he_so_bien_dang_lop) {
        this.he_so_dien_tich_can_chinh_dien = he_so_dien_tich_can_chinh_dien,
          this.chieu_rong_mat_lop = chieu_rong_mat_lop,
          this.ti_le_H_B = ti_le_H_B,
          this.duong_kinh_vanh_xe = duong_kinh_vanh_xe,
          this.he_so_bien_dang_lop = he_so_bien_dang_lop


      }
      var thong_so_tinh_chonn = new thong_so_tinh_chon(he_so_dien_tich_can_chinh_dien, chieu_rong_mat_lop, ti_le_H_B, duong_kinh_vanh_xe, he_so_bien_dang_lop);
      DATA_CAR.push(thong_so_tinh_chonn);



    } else {
      $(".tb4").html('<div class="alert alert-danger alert-dismissible fade show" role="alert"><strong>Thiếu dữ liệu!</strong> kiểm tra phần thông số tính chọn. <button type="button" class="close" data-dismiss="alert" aria-label="Close"> <span aria-hidden="true">&times;</span> </button></div>');

      $(".laytruyenlucchinh").removeClass("hien");
      $(".chon_gia_toc_95").removeClass("hien");
    }





    var data_trong_luong_phan_bo_trong_luong = [so_cho_tren_o_to, phan_tram_luc_cau_truoc, phan_tram_luc_cau_sau] // tạo array thong so trọng lượng và phân bố trọng lượng lên ô tô
    let a5 = 0; // khoi tao
    //kiem tra data 
    for (let i4 = 0; i4 < data_trong_luong_phan_bo_trong_luong.length; i4++) {
      if (data_trong_luong_phan_bo_trong_luong[i4] == "") {
        a5++;
      }

    }

    if (a5 == 0) {
      function trong_luong_va_phan_bo_trong_luong(so_cho_tren_o_to, phan_tram_luc_cau_truoc, phan_tram_luc_cau_sau) {
        this.so_cho_tren_o_to = so_cho_tren_o_to,
          this.phan_tram_luc_cau_truoc = phan_tram_luc_cau_truoc,
          this.phan_tram_luc_cau_sau = phan_tram_luc_cau_sau





      }
      var trong_luong_va_phan_bo_trong_luongg = new trong_luong_va_phan_bo_trong_luong(so_cho_tren_o_to, phan_tram_luc_cau_truoc, phan_tram_luc_cau_sau);

      DATA_CAR.push(trong_luong_va_phan_bo_trong_luongg);



    } else {
      $(".tb5").html('<div class="alert alert-danger alert-dismissible fade show" role="alert"><strong>Thiếu dữ liệu!</strong> kiểm tra trọng lượng và phân bố trọng lượng lên ô tô.<button type="button" class="close" data-dismiss="alert" aria-label="Close"> <span aria-hidden="true">&times;</span></button></div>');

      $(".laytruyenlucchinh").removeClass("hien");
      $(".chon_gia_toc_95").removeClass("hien");
    }



    //tinh_thong_số
    //chuyển sang dạng số
    var chieu_dai_toan_bo_Lo = Number(chieu_dai_toan_bo_Lo);
    var chieu_rong_toan_bo_Bo = Number(chieu_rong_toan_bo_Bo);
    var chieu_cao_toan_bo_Ho = Number(chieu_cao_toan_bo_Ho);
    var chieu_dai_co_so_L = Number(chieu_dai_co_so_L);
    var vet_banh_truoc_B1 = Number(vet_banh_truoc_B1);
    var vet_banh_sau_B2 = Number(vet_banh_sau_B2);
    var khoang_sang_gam_xe_H1 = Number(khoang_sang_gam_xe_H1);
    var goc_thoat_truoc_γ1 = Number(goc_thoat_truoc_γ1);
    var goc_thoat_sau_γ2 = Number(goc_thoat_sau_γ2);
    var van_toc_max_Vmax = Number(van_toc_max_Vmax);
    /////--------------------------------

    var loai_dong_co = String(loai_dong_co);
    var dung_tich_cong_tac = Number(dung_tich_cong_tac);
    var cong_suat_toi_da = Number(cong_suat_toi_da);
    var toc_do_dong_co = Number(toc_do_dong_co);
    var momen_xoan_toi_da = Number(momen_xoan_toi_da);
    var he_thong_truyen_luc = String(he_thong_truyen_luc);
    /////-------------------------------
    var trong_luong_ban_than = Number(trong_luong_ban_than);
    var trong_luong_hanh_khach = Number(trong_luong_hanh_khach);
    var trong_luong_hanh_ly = Number(trong_luong_hanh_ly);
    var hieu_suat_truyen_luc = Number(hieu_suat_truyen_luc);
    var he_so_cac_khong_khi = Number(he_so_cac_khong_khi);
    var he_so_can_lan_fo = Number(he_so_can_lan_fo);
    ////-------------------------------
    var he_so_dien_tich_can_chinh_dien = Number(he_so_dien_tich_can_chinh_dien);
    var chieu_rong_mat_lop = Number(chieu_rong_mat_lop);
    var ti_le_H_B = Number(ti_le_H_B);
    var duong_kinh_vanh_xe = Number(duong_kinh_vanh_xe);
    var he_so_bien_dang_lop = Number(he_so_bien_dang_lop);
    /////---------------------------
    var so_cho_tren_o_to = Number(so_cho_tren_o_to);
    var phan_tram_luc_cau_truoc = Number(phan_tram_luc_cau_truoc);
    var phan_tram_luc_cau_sau = Number(phan_tram_luc_cau_sau);
    //end chuyển dạng số


    //---
    /////////////

    //hệ số cản lăn
    var Vmax_m_s = (van_toc_max_Vmax * 1000) / 3600
    var he_so_can_lan_f = he_so_can_lan_fo * (1 + ((Math.pow(Vmax_m_s, 2)) / 1500));
    var he_so_can_lan_f = Math.round(he_so_can_lan_f * 100000) / 100000.
    //console.log(he_so_can_lan_f);
    //end hệ số cản lăn

    // diện tích cản chính diện
    switch (he_so_dien_tich_can_chinh_dien) {
      case 1:
        var dien_tich_can_chinh_dien = vet_banh_truoc_B1 * chieu_cao_toan_bo_Ho / 1000000;

        break;

      case 0.78:
        var dien_tich_can_chinh_dien = 0.78 * chieu_rong_toan_bo_Bo * chieu_cao_toan_bo_Ho / 1000000;

        break;


      default:
        
        $(".tb9").html('<div class="alert alert-danger alert-dismissible fade show" role="alert"><strong>Dữ liệu không thỏa mãn!</strong> Hệ số cản chính diện chỉ được nhập 1 hoặc 0.78.<button type="button" class="close" data-dismiss="alert" aria-label="Close"> <span aria-hidden="true">&times;</span> </button> </div>');
        $(".laytruyenlucchinh").removeClass("hien");
        $(".chon_gia_toc_95").removeClass("hien");
        break;
    }
    //var dien_tich_can_chinh_dien =Math.round( dien_tich_can_chinh_dien * 10000 + Number.EPSILON ) / 10000.
    //console.log(dien_tich_can_chinh_dien);
    //en he so can chinh dien

    //tính thông số lốp
    var chieu_cao_hong_lop_H = chieu_rong_mat_lop * (ti_le_H_B / 100); //tinh chieu cao hong lop

    var ban_kinh_thiet_ke_ro = (duong_kinh_vanh_xe * 25.4 / 2) + chieu_cao_hong_lop_H; // tính bán kính thiết kế

    //bán kính làm việc trung bình của bánh xe khi chuyển động không bị trượt thì áp dụng công thức 
    //    rđ = rk = λro

    var ban_kinh_dong_luc_hoc_rđ = he_so_bien_dang_lop * ban_kinh_thiet_ke_ro;
    var ban_kinh_dong_hoc_rk = ban_kinh_dong_luc_hoc_rđ;

    //end thong so lop

    //trọng lượng và phân bố trọng lượng
    var trong_luong_G = (trong_luong_ban_than + (trong_luong_hanh_khach + trong_luong_hanh_ly) * so_cho_tren_o_to) * 9.81;




    var trong_luong_cau_truoc_Z1 = phan_tram_luc_cau_truoc * trong_luong_G / 100;

    var trong_luong_cau_sau_Z2 = (100 - phan_tram_luc_cau_truoc) * trong_luong_G / 100;

    //end trọng lượng và phân bố trọng lượng

    /////////////
    //---
    //en tinh thong so

    //làm tròn dữ liệu 

    var Vmax_m_s = Math.round(Vmax_m_s * 1000 + Number.EPSILON) / 1000.
    var he_so_can_lan_f = Math.round(he_so_can_lan_f * 100000 + Number.EPSILON) / 100000.
    var dien_tich_can_chinh_dien = Math.round(dien_tich_can_chinh_dien * 1000 + Number.EPSILON) / 1000.
    var chieu_cao_hong_lop_H = Math.round(chieu_cao_hong_lop_H * 1000 + Number.EPSILON) / 1000.
    var ban_kinh_thiet_ke_ro = Math.round(ban_kinh_thiet_ke_ro * 1000 + Number.EPSILON) / 1000.
    var ban_kinh_dong_luc_hoc_rđ = Math.round(ban_kinh_dong_luc_hoc_rđ * 1000 + Number.EPSILON) / 1000.
    var ban_kinh_dong_hoc_rk = Math.round(ban_kinh_dong_hoc_rk * 1000 + Number.EPSILON) / 1000.
    var trong_luong_G = Math.round(trong_luong_G * 1000 + Number.EPSILON) / 1000.
    var trong_luong_cau_truoc_Z1 = Math.round(trong_luong_cau_truoc_Z1 * 1000 + Number.EPSILON) / 1000.
    var trong_luong_cau_sau_Z2 = Math.round(trong_luong_cau_sau_Z2 * 1000 + Number.EPSILON) / 1000.


    //end làm tròn dữ liệu 

    //cập nhật data tính vào CARMAX
    var data_tinh_thiet_ke_tuyen_hinh_o_to = [Vmax_m_s, he_so_can_lan_f, dien_tich_can_chinh_dien, chieu_cao_hong_lop_H, ban_kinh_thiet_ke_ro, ban_kinh_dong_luc_hoc_rđ, ban_kinh_dong_hoc_rk, trong_luong_G, trong_luong_cau_truoc_Z1, trong_luong_cau_sau_Z2];

    function tinh_toan_ht_thiet_ke_tuyen_hinh_o_to(Vmax_m_s, he_so_can_lan_f, dien_tich_can_chinh_dien, chieu_cao_hong_lop_H, ban_kinh_thiet_ke_ro, ban_kinh_dong_luc_hoc_rđ, ban_kinh_dong_hoc_rk, trong_luong_G, trong_luong_cau_truoc_Z1, trong_luong_cau_sau_Z2) {
      this.Vmax_m_s = Vmax_m_s,
        this.he_so_can_lan_f = he_so_can_lan_f,
        this.dien_tich_can_chinh_dien = dien_tich_can_chinh_dien,
        this.chieu_cao_hong_lop_H = chieu_cao_hong_lop_H,
        this.ban_kinh_thiet_ke_ro = ban_kinh_thiet_ke_ro,
        this.ban_kinh_dong_luc_hoc_rđ = ban_kinh_dong_luc_hoc_rđ,
        this.ban_kinh_dong_hoc_rk = ban_kinh_dong_hoc_rk,
        this.trong_luong_G = trong_luong_G,
        this.trong_luong_cau_truoc_Z1 = trong_luong_cau_truoc_Z1,
        this.trong_luong_cau_sau_Z2 = trong_luong_cau_sau_Z2


    }
    var tinh_toan_ht_thiet_ke_tuyen_hinh_o_too = new tinh_toan_ht_thiet_ke_tuyen_hinh_o_to(Vmax_m_s, he_so_can_lan_f, dien_tich_can_chinh_dien, chieu_cao_hong_lop_H, ban_kinh_thiet_ke_ro, ban_kinh_dong_luc_hoc_rđ, ban_kinh_dong_hoc_rk, trong_luong_G, trong_luong_cau_truoc_Z1, trong_luong_cau_sau_Z2);
    DATA_CAR.push(tinh_toan_ht_thiet_ke_tuyen_hinh_o_too);

    //DATA_CAR;



    //end upload data

    // hiện thị kết quả tính toán
    $("#app1").remove(); //xóa phần tử id-app1
    $("#kqtinhchon").html('<div  id="app1"><template><div ><b-table striped hover :items="items"></b-table></div></template></div>');

    $("#app2").remove(); //xóa phần tử id-app1
    $("#kqpbtl").html('<div  id="app2"><template><div ><b-table striped hover :items="items"></b-table></div></template></div>');


    var app1 = new Vue({
      el: '#app1',
      data: {
        items: [{
            STT: 1,
            Thông_số: 'Vận tốc cực đại',
            Giá_trị: Vmax_m_s + 'm/s'
          },
          {
            STT: 2,
            Thông_số: 'Hệ số cản lăn ứng với Vmax',
            Giá_trị: he_so_can_lan_f
          },
          {
            STT: 3,
            Thông_số: 'Diện tích cản chính diện',
            Giá_trị: dien_tich_can_chinh_dien + 'm2'
          },
          {
            STT: 4,
            Thông_số: 'Chiều cao hông lốp',
            Giá_trị: chieu_cao_hong_lop_H + 'mm'
          },
          {
            STT: 5,
            Thông_số: 'Bán kính thiết kế ro',
            Giá_trị: ban_kinh_thiet_ke_ro + 'mm'
          },
          {
            STT: 6,
            Thông_số: 'Bán kính động lực học rđ',
            Giá_trị: ban_kinh_dong_luc_hoc_rđ + 'mm'
          },
          {
            STT: 7,
            Thông_số: 'Bán kính động học rk',
            Giá_trị: ban_kinh_dong_hoc_rk + 'mm'
          }
        ]
      }
    })

    var app2 = new Vue({
      el: '#app2',
      data: {
        items: [{
            STT: 1,
            Thông_số: 'Tổng trọng lượng G',
            Giá_trị: trong_luong_G + 'N'
          },
          {
            STT: 2,
            Thông_số: 'Trọng lượng tác dụng lên cầu trước Z1',
            Giá_trị: trong_luong_cau_truoc_Z1 + 'N'
          },
          {
            STT: 2,
            Thông_số: 'Trọng lượng tác dụng lên cầu sau Z2',
            Giá_trị: trong_luong_cau_sau_Z2 + 'N'
          }

        ]
      }
    })
    //end hiện thị kết quả tính toán phan1
    //-----------------------------------------
    //thong bao loi

    if (a1 == 0 && a2 == 0 && a3 == 0 && a4 == 0 && a5 == 0) {



    } else {



    }
    //end thong bao loi
    //---------------------------------------

    // dac tinh toc do ngoai
    var he_so_can_tong_cong=he_so_can_lan_f;

    var data_duong_dac_tinh_toc_do_ngoai = [];




    var data_nhap = {
      thong_so_abc: thong_so_abc,
      he_so_can_tong_cong: he_so_can_tong_cong,
      he_so_lamda: he_so_lamda,
      toc_do_vong_quay: toc_do_vong_quay

    };
    data_duong_dac_tinh_toc_do_ngoai.push(data_nhap);
    if (thong_so_abc != "" && he_so_can_tong_cong != "" && he_so_lamda != "" && toc_do_vong_quay != ""&& he_so_can_tong_cong_max != "") {
      //----su ly du lieu

      //----phan thong so a,b,c
      switch (thong_so_abc) {
        case "TH1":
          var hs_a = 1;
          var hs_b = 1;
          var hs_c = 1;


          break;
        case "TH2":
          var hs_a = 0.5;
          var hs_b = 1.5;
          var hs_c = 1;

          break;
        case "TH3":
          var hs_a = 0.6;
          var hs_b = 1.4;
          var hs_c = 1;

          break;
        case "TH4":
          var hs_a = 0.7;
          var hs_b = 1.1;
          var hs_c = 1;

          break;

        default:
          break;
      }
      var hs_abc = {
        hs_a: hs_a,
        hs_b: hs_b,
        hs_c: hs_c
      };


      //----phan thong so a,b,c

      //----cong xuat can thiet

      var cong_suat_can_thiet = (1 / hieu_suat_truyen_luc) * (trong_luong_G * he_so_can_tong_cong * Vmax_m_s + he_so_cac_khong_khi * dien_tich_can_chinh_dien * Math.pow(Vmax_m_s, 3)) / 1000;
      var cong_suat_can_thiet = Math.round(cong_suat_can_thiet * 1000) / 1000.

      //---end cong suat can thiet


      //----phan tỉ so lamda
      var phan =(he_so_lamda / 0.1);
      var phan=Math.round( phan ) ;
      var MIN_val_lamda = [];
      for (let i1 = 1; i1 < phan+1; i1++) {
        var min_lamda = Math.round(i1 * 0.1 * 100) / 100;
        MIN_val_lamda.push(min_lamda);

      }




      //----phan ti so lamda
      //console.log(data_duong_dac_tinh_toc_do_ngoai); //in ket qua tong quat
      //thuc hien tnh toan----------

      //-----------tinh toc đọ dong cơ ne=lamda.nN------------
      //------console.log(MIN_val_lamda);
      var data_toc_do_ne = [];

      for (let t1 = 0; t1 < MIN_val_lamda.length; t1++) {
        var val_ne = Math.round(MIN_val_lamda[t1] * toc_do_vong_quay * 1000) / 1000;

        data_toc_do_ne.push(val_ne);

      }
      //-----console.log(data_toc_do_ne);
      //data_duong_dac_tinh_toc_do_ngoai.push(data_toc_do_ne);//gia tri bieu do-------------

      //-------cong suat cuc dai Ne(max)
      var cong_suat_cuc_dai_Ne = cong_suat_can_thiet / (hs_a * he_so_lamda + hs_b * Math.pow(he_so_lamda, 2) - hs_c * Math.pow(he_so_lamda, 3));
      var cong_suat_cuc_dai_Ne = Math.round(cong_suat_cuc_dai_Ne * 1000) / 1000
      //------- end cong suat cuc dai Ne(max)



      //--------Tinh cong xuat dong co Ne = (Ne)max.(a.lamda + b.lamda^2 - c.lamda^3)
      var data_cong_suat_Ne = [];

      for (let t1 = 0; t1 < MIN_val_lamda.length; t1++) {
        var cong_suat_Ne = cong_suat_cuc_dai_Ne * (hs_a * MIN_val_lamda[t1] + hs_b * Math.pow(MIN_val_lamda[t1], 2) - hs_c * Math.pow(MIN_val_lamda[t1], 3));
        var cong_suat_Ne = Math.round(cong_suat_Ne * 1000) / 1000

        data_cong_suat_Ne.push(cong_suat_Ne);

      }
      //Math.round(cong_suat_can_thiet * 100)/100;

      //tinh momen xoan
      var data_momen_Me_N_m = [];
      for (let t2 = 0; t2 < MIN_val_lamda.length; t2++) {
        var momen_Me_N_m = 9550 * (data_cong_suat_Ne[t2] / data_toc_do_ne[t2]);
        var momen_Me_N_m = Math.round(momen_Me_N_m * 1000) / 1000;
        data_momen_Me_N_m.push(momen_Me_N_m);


      }
      //end momen xoan
      //----------------------tính momen max----------
      var toc_do_goc=2 * 3.14 * toc_do_vong_quay/60;
      var toc_do_goc = Math.round(toc_do_goc * 1000) / 1000;

      var momen_Me_max_do_thi = [(cong_suat_cuc_dai_Ne  * 1000) / (toc_do_goc)] * [hs_a + (hs_b * hs_b) / (2 * hs_c) - hs_c * (hs_b / (2 * hs_c)) * (hs_b / (2 * hs_c))];
      var momen_Me_max_do_thi = Math.round(momen_Me_max_do_thi * 1000) / 1000;

      //----------------------end tính momen max-----

      //-------tính công suất----
      var cong_suat_max_do_thi = cong_suat_cuc_dai_Ne * 1.1
      var cong_suat_max_do_thi = Math.round(cong_suat_max_do_thi * 1000) / 1000;
      var do_doc_du_doan=(Math.atan((he_so_can_tong_cong_max-he_so_can_lan_fo)))*(180/3.14)
      var do_doc_du_doan=Math.round(do_doc_du_doan * 1000) / 1000
      //-------end tính công suất----

      //-----in ket quả đặc tính ngoài của dộng cơ
      $(".kqtdndc").html('<div class="kqcsmn frint1 alert alert-primary alert-dismissible fade show"><p style="font-size: 1.3em;">kết quả tính công suất, momen động cơ</p><ul style="font-size: 1.3em;"><li><p>Công suất lớn nhất: ' + cong_suat_max_do_thi + ' Kw</p></li><li><p>Momen lớn nhất: ' + momen_Me_max_do_thi + ' N.m</p></li><li><p>Độ dốc dự đoán xe đi được: ' + do_doc_du_doan + ' Độ</p></li></ul><p></p><div id="bdtdngoai"></div></div>');

      //-----end in ket quả đặc tính ngoài của dộng cơ


      var gia_tri_tinh_dac_tinh_toc_do_ngoai = {
        cong_suat_can_thiet_Kw: cong_suat_can_thiet,
        cong_suat_cuc_dai_Ne_Kn_lt: cong_suat_cuc_dai_Ne,
        gia_tri_lamda_chia_nho: MIN_val_lamda,
        toc_do_ne_V_p: data_toc_do_ne,
        momen_Me_N_m: data_momen_Me_N_m,
        cong_suat_Ne_Kw: data_cong_suat_Ne,
        he_so_abc: hs_abc,
        toc_do_goc_rad_s:toc_do_goc

      }



      DATA_CAR.push(gia_tri_tinh_dac_tinh_toc_do_ngoai);

      // do thi dac tinh roc do ngoai
      Highcharts.chart('bdtdngoai', {
        chart: {
          zoomType: 'xy'
        },
        title: {
          text: 'Đồ thị đặc tính tốc độ ngoài của động cơ'
        },

        xAxis: [{
          categories: data_toc_do_ne,
          //crosshair: true
          title: {
            text: 'Tốc độ ne (V/p)'
          }
        }],
        yAxis: [{ // Primary yAxis
          labels: {
            format: '{value} N.m',
            style: {
              color: Highcharts.getOptions().colors[0]
            }
          },
          title: {
            text: 'Momen (Me)',
            style: {
              color: Highcharts.getOptions().colors[0]
            }
          }
        }, { // Secondary yAxis
          title: {
            text: 'Công suất (Ne)',
            style: {
              color: Highcharts.getOptions().colors[1]
            }
          },
          labels: {
            format: '{value} Kw',
            style: {
              color: Highcharts.getOptions().colors[1]
            }
          },
          opposite: true
        }],
        tooltip: {
          shared: true
        },
        legend: {
          layout: 'vertical',
          align: 'left',
          x: 120,
          verticalAlign: 'top',
          y: 30,
          floating: true,
          backgroundColor: Highcharts.defaultOptions.legend.backgroundColor || // theme
            'rgba(255,255,255,0.25)'
        },
        series: [{
            name: 'Momen (Me)',
            type: 'spline',
            yAxis: 0,
            data: data_momen_Me_N_m,
            tooltip: {
              valueSuffix: ' N.m'
            }

          }, {
            name: 'Công suất (Ne)',
            type: 'spline',
            yAxis: 1,
            data: data_cong_suat_Ne,
            tooltip: {
              valueSuffix: 'Kw'
            }
          },

        ]
      });
      //---end do thi dac tinh roc do ngoai






      //---end do thi dac tinh roc do ngoai


      //thuc hien tnh toan----------
      //----su ly du lieu





    } else {
      $(".tb6").html('<div class="alert alert-danger alert-dismissible fade show" role="alert"><strong>Thiếu dữ liệu!</strong> kiểm tra lại thông số đường đặc tính tốc độ ngoài của động cơ.<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>');

      $(".laytruyenlucchinh").removeClass("hien");
      $(".chon_gia_toc_95").removeClass("hien");
    }
    //---end dac tinh toc do ngoai


    //---------------------------
    //---------------------------
    //--su lý tính toán toc độ ngoài
    //------------------------
    if (cap_dc != "" && ty_so_tai_nmax != "" && ty_so_hsp_max != "" && he_so_pbtt_m != "" && he_so_bam != "" && cau_chu_dong != "") {
      //-----------------------

      var toc_do_max_tai_v_max = data_toc_do_ne[data_toc_do_ne.length - 1];
      var ty_so_truyen_luc_chinh = (2 * 3.14 * ban_kinh_dong_luc_hoc_rđ * toc_do_max_tai_v_max / 1000) / (60 * ty_so_tai_nmax * ty_so_hsp_max * Vmax_m_s);
      var ty_so_truyen_luc_chinh = Math.round(ty_so_truyen_luc_chinh * 1000) / 1000;
      //-----------dieu kien chuyen dong----





      var dk_can = (he_so_can_tong_cong * trong_luong_G * ban_kinh_dong_luc_hoc_rđ / 1000) / (momen_Me_max_do_thi * ty_so_truyen_luc_chinh * ty_so_hsp_max * hieu_suat_truyen_luc);
      var dk_can = Math.round(dk_can * 1000) / 1000; //dieu kien chuyen động
      //-----------------------------


      switch (cau_chu_dong) {
        case "TH1":
          var trong_luong_cau_cd = trong_luong_cau_truoc_Z1;

          break;

        case "TH2":
          var trong_luong_cau_cd = trong_luong_cau_sau_Z2;

          break;

        default:
          break;
      }


      var dk_bam = (he_so_bam * he_so_pbtt_m * trong_luong_cau_cd * ban_kinh_dong_luc_hoc_rđ / 1000) / (momen_Me_max_do_thi * ty_so_truyen_luc_chinh * ty_so_hsp_max * hieu_suat_truyen_luc);
      var dk_bam = Math.round(dk_bam * 1000) / 1000; //dieu kien chuyen động


      //xet tim tay so 1
      if (dk_can < dk_bam) {
        
        
        
        
        //$(".dkthongbao .laytruyenlucchinh").html(' <div class="alert alert-success alert-dismissible fade show" role="alert"><strong>Tốt Điều kiện cản nhỏ hơn điều kiện bám đường!</strong><p>Máy tự chọn trong khoảng điều kiện</p><div><form class="needs-validation was-validated form-row"><label for="validationTooltip26">Tỷ số truyền tại tay số 1 là:</label><input type="text" class="form-control" id="ty_so_tay_1" placeholder="Bạn tự chọn" required="#"> </form><p></p><p>Giá trị:</p><ul><li>Tỷ số truyền điều kiện cản: <strong>' + dk_can + '</strong></li><li>Tỷ số truyền điều kiện bám đường:<strong>' + dk_bam + '</strong></li> </ul></div><button type="button" class="close" data-dismiss="alert" aria-label="Close"> <span aria-hidden="true">&times;</span></button></div>');

        $("#gta_tri_dieu_kien").html('<p>Giá trị:</p><ul><li>Tỷ số truyền điều kiện cản: <strong>' + dk_can + '</strong></li> <li>Tỷ số truyền điều kiện bám đường:<strong>' + dk_bam + '</strong>  </li></ul>');


        





      } else {
        $(".dkthongbao .loi").html('  <div class="alert alert-danger alert-dismissible fade show" role="alert"><strong>Lỗi!</strong> Điều kiện cản phải nhỏ hơn điều kiện bám đường, chọn lại<strong>Hệ số phân bố lạo tải trọng</strong>.<p>Giá trị:</p><ul><li>Giá trị cản: <strong>' + dk_can + '</strong></li><li>Giá trị bám đường:<strong>' + dk_bam + '</strong></li></ul><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>');
       
        $(".laytruyenlucchinh").removeClass("hien");
        $(".chon_gia_toc_95").removeClass("hien");



      }
      

      
      
      var ty_so_tay_1= Number($("#ty_so_tay_1").val());

      if (ty_so_tay_1 != "") {
        //tinh cong boi
      var cong_boi = Math.pow((ty_so_tay_1 / ty_so_tai_nmax), 1 / (cap_dc - 1));
      var cong_boi = Math.round(cong_boi * 1000) / 1000;
      //end tinh cong boi

      var ty_so_lui = ty_so_tay_1;
      $(".chon_gia_toc_95").addClass("hien");


      //tim tỉ số truyền trung gian
      var ty_so_truyen_cac_so = [ty_so_tay_1];
      for (let i = 2; i <= cap_dc; i++) {
        var trung_gian = ty_so_tay_1 / (Math.pow(cong_boi, (i - 1)));
        var trung_gian = Math.round(trung_gian * 1000) / 1000;
        ty_so_truyen_cac_so.push(trung_gian);


      }
      ty_so_truyen_cac_so.push(ty_so_lui);



      // console.log(ty_so_truyen_cac_so);
      // console.log(data_momen_Me_N_m);

      //lực kéo tay số 1
      var luc_keo_tong_cong = [];

      for (let i = 0; i < ty_so_truyen_cac_so.length - 1; i++) {

        for (let k = 0; k < data_momen_Me_N_m.length; k++) {
          var luc_keo_tong = (data_momen_Me_N_m[k] * ty_so_truyen_cac_so[i] * ty_so_truyen_luc_chinh * ty_so_hsp_max * hieu_suat_truyen_luc) / (ban_kinh_dong_luc_hoc_rđ / 1000);
          var luc_keo_tong = Math.round(luc_keo_tong * 1000) / 1000;
          luc_keo_tong_cong.push(luc_keo_tong);

        }

      }


      //-------chia khoang luc keo-----
      function chunkArray(myArray, chunk_size) {
        var index = 0;
        var arrayLength = myArray.length;
        var tempArray = [];

        for (index = 0; index < arrayLength; index += chunk_size) {
          myChunk = myArray.slice(index, index + chunk_size);

          tempArray.push(myChunk);
        }

        return tempArray;
      }

      var luc_keo = chunkArray(luc_keo_tong_cong, phan); //tỷ số truyền tại các số trung gian
      //----- chia khoang luc keo----
      var luc_bam_duong = he_so_pbtt_m * trong_luong_cau_cd * he_so_bam; //tính lực bám đường
      var luc_bam_duong = Math.round(luc_bam_duong * 1000) / 1000;

      //tính vận tốc từng tay số
      var van_toc_ung_tung_tay_so_tong_cong = [];
      for (let i = 0; i < ty_so_truyen_cac_so.length - 1; i++) {
        for (let k = 0; k < data_toc_do_ne.length; k++) {

          var van_toc_tay_so = (2 * 3.14 * ban_kinh_dong_luc_hoc_rđ * data_toc_do_ne[k] / 1000) / (60 * ty_so_truyen_luc_chinh * ty_so_truyen_cac_so[i] * ty_so_hsp_max);
          var van_toc_tay_so = Math.round(van_toc_tay_so * 1000) / 1000;

          van_toc_ung_tung_tay_so_tong_cong.push(van_toc_tay_so)

        }
      }
      var van_toc_ung_tung_tay_so = chunkArray(van_toc_ung_tung_tay_so_tong_cong, phan);


      //lay vận tôc max của từng tay số

      // var van_toc_chon = [0.00];

      // for (let i = 0; i < van_toc_ung_tung_tay_so.length; i++) {


      //     var vt_data=van_toc_ung_tung_tay_so[i][van_toc_ung_tung_tay_so[0].length-1];


      //     van_toc_chon.push(vt_data);

      // }

      //------------------------------------------------
      //--------------------chọn chuẩn----------------------------
      //------------------------------------------------
      var van_toc_chon = [];
      for (let i = 0; i < 100; i++) {
        var khoang_vtvt = i * 10;
        if (khoang_vtvt <= Vmax_m_s + 10) {
          van_toc_chon.push(khoang_vtvt);


        } else {
          break;

        }

      }
      //--------------------------------------------
      //---------------------chọn chuẩn-----------------------
      //--------------------------------------------
      //end lay vận tôc max của từng tay số

      //tính lục cản mặt đường
      var luc_can_max_Pc = [];
      for (let i = 0; i < van_toc_chon.length; i++) {
        if (van_toc_chon[i] <= 22.22) {
          var luc_can_Pc = he_so_can_lan_fo * trong_luong_G + he_so_cac_khong_khi * dien_tich_can_chinh_dien * Math.pow(van_toc_chon[i], 2);
          var luc_can_Pc = Math.round(luc_can_Pc * 1000) / 1000;
          luc_can_max_Pc.push(luc_can_Pc);



        } else {
          var luc_can_Pc = he_so_can_lan_fo * (1 + (Math.pow(van_toc_chon[i], 2) / 1500)) * trong_luong_G + he_so_cac_khong_khi * dien_tich_can_chinh_dien * Math.pow(van_toc_chon[i], 2);
          var luc_can_Pc = Math.round(luc_can_Pc * 1000) / 1000;
          luc_can_max_Pc.push(luc_can_Pc);


        }



      }

      //end tính lục cản mặt đường




      //----------------------ket quả tính
      var data_do_thi_luc_keo = {
        ty_so_truyen: ty_so_truyen_cac_so,
        luc_keo_Pk: luc_keo,
        van_toc_ung_voi_cac_tay_so: van_toc_ung_tung_tay_so,
        luc_bam_duong: luc_bam_duong,
        van_toc_chon: van_toc_chon,
        luc_can_max_Pc: luc_can_max_Pc
      }

      DATA_CAR.push(data_do_thi_luc_keo)
      var data_db_bam_duong = {
        name: "Pφ",
        data: [{
          x: 0,
          y: luc_bam_duong
        }, {
          x: van_toc_chon[van_toc_chon.length - 1],
          y: luc_bam_duong
        }]
      }
      //----------------------end ket quả tính
      //---------------------------------------------------------
      //---------------------------------------------------------
      //---------------------------------------------------------

      function ket_noi_array_bieu_do(arr1, arr2, name_e) {
        var tong = [];
        for (let i = 0; i < cap_dc; i++) {
          let a = i + 1;
          var dulieu_cnfn = [];
          for (let i1 = 0; i1 < arr1[0].length; i1++) {

            var dataa = {
              x: arr1[i][i1],
              y: arr2[i][i1],
            }
            dulieu_cnfn.push(dataa);

          }
          da_ta_tong = {
            name: name_e + a,
            data: dulieu_cnfn
          }
          tong.push(da_ta_tong);

        }
        return tong;

      }

      //-------------------------------------------------------
      //---------------------------------------------------------
      //---------------------------------------------------------
      //goc lon nhat
      var goc_ampha=Math.atan( [(momen_Me_max_do_thi*ty_so_truyen_cac_so[0]*ty_so_truyen_luc_chinh*hieu_suat_truyen_luc)/(ban_kinh_dong_luc_hoc_rđ*trong_luong_G/1000)]-he_so_can_lan_fo )*(180/3.14);
      var goc_ampha=Math.round(goc_ampha * 10000) / 10000.
      $(".goc_ampha p").html("Độ dốc tính toán mà xe có thể đi được là: " +goc_ampha+" Độ");
      
      //----------

      //su ly du lieu do thi

      // ----------------------------
      var datalk = ket_noi_array_bieu_do(van_toc_ung_tung_tay_so, luc_keo, "Pk")

      var data_bd_luc_can_pc = [];
      for (let i = 0; i < van_toc_chon.length; i++) {
        var data_luc_can_pc = {
          x: van_toc_chon[i],
          y: luc_can_max_Pc[i]
        }
        data_bd_luc_can_pc.push(data_luc_can_pc);

      }
      var bd_luc_can = {
        name: "Pc",
        data: data_bd_luc_can_pc
      };

      datalk.push(bd_luc_can);
      datalk.push(data_db_bam_duong);

      //-----------------------------------phan bieu do
      Highcharts.chart('ket_qua_dt_cbl', {

        chart: {
          type: 'spline'
        },
        title: {
          text: 'DO THI CAN BANG LUC KEO OTO'
        },
        subtitle: {
          text: ''
        },
        xAxis: {
          type: 'category',

          title: {
            text: 'Vận tốc (m/s)'
          }

        },
        yAxis: {
          title: {
            text: 'Lực (N)'
          }
        },
        series: datalk
      });
      //---------------------------------end phanf bieu do

      //-----------------------------Nhân tố động lực hoc
      var nt_dong_luc_hoc_tong = [];

      for (let i = 0; i < van_toc_ung_tung_tay_so_tong_cong.length; i++) {
        var data_nt_dong_luc_hoc = (luc_keo_tong_cong[i] - he_so_cac_khong_khi * dien_tich_can_chinh_dien * Math.pow(van_toc_ung_tung_tay_so_tong_cong[i], 2)) * (1 / trong_luong_G);
        var data_nt_dong_luc_hoc = Math.round(data_nt_dong_luc_hoc * 1000 + Number.EPSILON) / 1000.

        nt_dong_luc_hoc_tong.push(data_nt_dong_luc_hoc);

      }

      var nt_dong_luc_hoc = chunkArray(nt_dong_luc_hoc_tong, phan);

      var dataa_nt_dong_luc_hoc = ket_noi_array_bieu_do(van_toc_ung_tung_tay_so, nt_dong_luc_hoc, "D") //ket quả động lực học
      //--------Điều kiện bám
      var dk_bam_nt_dong_luc_hoc = [];
      for (let i = 0; i < van_toc_chon.length; i++) {
        var data_dk_bam_nt_dong_luc_hoc = (luc_bam_duong - he_so_cac_khong_khi * dien_tich_can_chinh_dien * Math.pow(van_toc_chon[i], 2)) * (1 / trong_luong_G);
        var data_dk_bam_nt_dong_luc_hoc = Math.round(data_dk_bam_nt_dong_luc_hoc * 1000 + Number.EPSILON) / 1000.
        dk_bam_nt_dong_luc_hoc.push(data_dk_bam_nt_dong_luc_hoc);


      }

      var dk_DK_dong_luc_hoc = [];
      for (let i = 0; i < van_toc_chon.length; i++) {
        var data_DK_can_dong_luc_hoc = {
          x: van_toc_chon[i],
          y: dk_bam_nt_dong_luc_hoc[i]
        }
        dk_DK_dong_luc_hoc.push(data_DK_can_dong_luc_hoc);

      }
      var bd_dieu_kien_dong_luc_hoc = {
        name: "Dφ",
        data: dk_DK_dong_luc_hoc
      };
      dataa_nt_dong_luc_hoc.push(bd_dieu_kien_dong_luc_hoc);
      //-----------------------------------------------------------
      var hscanlan = [];

      for (let i = 0; i < van_toc_chon.length; i++) {
        if (van_toc_chon[i] < 22.2) {

          var data_can_lan = he_so_can_lan_fo;
          hscanlan.push(data_can_lan);


        } else {

          var data_can_lan = he_so_can_lan_fo * (1 + ((Math.pow(van_toc_chon[i], 2)) / 1500));
          var data_can_lan = Math.round(data_can_lan * 1000 + Number.EPSILON) / 1000.
          hscanlan.push(data_can_lan);




        }


      }





      var dk_DK_canlan = [];
      for (let i = 0; i < van_toc_chon.length; i++) {
        var data_DK_canlan = {
          x: van_toc_chon[i],
          y: hscanlan[i]
        }
        dk_DK_canlan.push(data_DK_canlan);

      }
      var bd_dieu_kien_canlan = {
        name: "f",
        data: dk_DK_canlan
      };
      dataa_nt_dong_luc_hoc.push(bd_dieu_kien_canlan);


      //--------Điều kiện bám end


      var datatest = {
        nt_dong_luc_hoc_tong: nt_dong_luc_hoc_tong,
        dataa_nt_dong_luc_hoc: dataa_nt_dong_luc_hoc,




      }
      DATA_CAR.push(datatest);

      //dồ thị nhân tố dộng lực học
      Highcharts.chart('ket_qua_nt_dong_luc_hoc', {

        chart: {
          type: 'spline'
        },
        title: {
          text: 'DO THI NHAN TO DONG LUC HOC OTO'
        },
        subtitle: {
          text: ''
        },
        xAxis: {
          type: 'category',

          title: {
            text: 'Vận tốc (m/s)'
          }

        },
        yAxis: {
          title: {
            text: 'Tỉ lệ'
          }
        },
        series: dataa_nt_dong_luc_hoc
      });

      //dồ thị nhân tố dộng lực học

      //-------


      var data_cong_suat_NK = [];
      for (let i = 0; i < data_cong_suat_Ne.length; i++) {
        var cong_suat_NK = data_cong_suat_Ne[i] * hieu_suat_truyen_luc;
        var cong_suat_NK = Math.round(cong_suat_NK * 1000) / 1000;
        data_cong_suat_NK.push(cong_suat_NK);



      }
      var tong_data_cs_NK = []
      for (let i = 0; i < cap_dc; i++) {
        tong_data_cs_NK.push(data_cong_suat_NK)

      }

      var data_bd_cong_suat_NK = ket_noi_array_bieu_do(van_toc_ung_tung_tay_so, tong_data_cs_NK, "Nk");

      var cong_suat_can = []

      for (let i = 0; i < van_toc_chon.length; i++) {
        if (van_toc_chon[i] < 22.2) {
          var data_cs_can = (trong_luong_G * he_so_can_lan_fo * van_toc_chon[i] + he_so_cac_khong_khi * dien_tich_can_chinh_dien * Math.pow(van_toc_chon[i], 3)) / 1000;
          var data_cs_can = Math.round(data_cs_can * 1000) / 1000;
          cong_suat_can.push(data_cs_can);

        } else {

          var data_cs_can = (trong_luong_G * (he_so_can_lan_fo * (1 + (Math.pow(van_toc_chon[i], 2) / 1500))) * van_toc_chon[i] + he_so_cac_khong_khi * dien_tich_can_chinh_dien * Math.pow(van_toc_chon[i], 3)) / 1000;
          var data_cs_can = Math.round(data_cs_can * 1000) / 1000;
          cong_suat_can.push(data_cs_can);


        }




      }

      var data_bd_cs_can = [];
      for (let i = 0; i < van_toc_chon.length; i++) {
        var data_csc = {
          x: van_toc_chon[i],
          y: cong_suat_can[i]
        }
        data_bd_cs_can.push(data_csc);

      }
      var bd_luc_can = {
        name: "Nc",
        data: data_bd_cs_can
      };


      data_bd_cong_suat_NK.push(bd_luc_can);
      var cong_suat_canNK = {
        cong_suat_can_NK: data_bd_cong_suat_NK

      }
      DATA_CAR.push(cong_suat_canNK);

      //-----------------------------------phan bieu do
      Highcharts.chart('ket_qua_can_bang_cong_suat_dc', {

        chart: {
          type: 'spline'
        },
        title: {
          text: 'DO THI CAN BANG CONG SUAT'
        },
        subtitle: {
          text: ''
        },
        xAxis: {
          type: 'category',

          title: {
            text: 'Vận tốc (m/s)'
          }

        },
        yAxis: {
          title: {
            text: 'Công suất (Kw)'
          }
        },
        series: data_bd_cong_suat_NK
      });
      //---------------------------------end phanf bieu do

      //-----------------------------gia tốc của ô tô


      var hs_cd_quay = [];
      for (let i = 0; i < ty_so_truyen_cac_so.length - 1; i++) {
        var datahs_td_cd_quay = 1.05 + 0.05 * Math.pow(ty_so_truyen_cac_so[i], 2) // khối lượng tính đến chuyển động quay
        var datahs_td_cd_quay = Math.round(datahs_td_cd_quay * 1000 + Number.EPSILON) / 1000.
        hs_cd_quay.push(datahs_td_cd_quay)


      }
      var gia_toc_cd = [];
      var gt_gia_toc_hai_gt_cuoi = [];

      for (let i = 0; i < hs_cd_quay.length; i++) {
        var dd_gia_toc = [];
        var gttg_gt_hai_max = [];
        for (let i1 = 0; i1 < phan; i1++) {
          if (van_toc_ung_tung_tay_so[i][i1] < 22.2) {
            var data_gia_toc = (nt_dong_luc_hoc[i][i1] - he_so_can_lan_fo) * (9.81 / hs_cd_quay[i]);
            var data_gia_toc = Math.round(data_gia_toc * 1000) / 1000.
            dd_gia_toc.push(data_gia_toc)


          } else {
            if (i === hs_cd_quay.length - 1 && i1 > phan - 3) {
              var data_gia_toc = (nt_dong_luc_hoc[i][i1] - (he_so_can_lan_fo * (1 + (Math.pow(van_toc_ung_tung_tay_so[i][i1], 2) / 1500)))) * (9.81 / hs_cd_quay[i]);
              gttg_gt_hai_max.push(data_gia_toc);



            }
            //----------------------

            var data_gia_toc = (nt_dong_luc_hoc[i][i1] - (he_so_can_lan_fo * (1 + (Math.pow(van_toc_ung_tung_tay_so[i][i1], 2) / 1500)))) * (9.81 / hs_cd_quay[i]);

            if (Math.abs(data_gia_toc) <= 0.0095) {
              
              data_gia_toc = 0;
              dd_gia_toc.push(data_gia_toc);


            } else {
              var data_gia_toc = Math.round(data_gia_toc * 1000) / 1000.
              dd_gia_toc.push(data_gia_toc);

            }


            //var data_gia_toc = Math.round(data_gia_toc * 100 + Number.EPSILON) / 100.



          }

        }
        gia_toc_cd.push(dd_gia_toc);
        gt_gia_toc_hai_gt_cuoi.push(gttg_gt_hai_max);


      }



      var gia_toc_data = {
        hs_cd_quay: hs_cd_quay,

        gia_toc_cd: gia_toc_cd


      }
      DATA_CAR.push(gia_toc_data);
      var bd_gia_toc_oto = ket_noi_array_bieu_do(van_toc_ung_tung_tay_so, gia_toc_cd, "J");



      //-------------------phần đò thị gia tốc của chuyển động
      Highcharts.chart('ket_qua_gia_tocdc', {

        chart: {
          type: 'spline'
        },
        title: {
          text: 'DO THI OTO'
        },
        subtitle: {
          text: ''
        },
        xAxis: {
          type: 'category',

          title: {
            text: 'Vận tốc (m/s)'
          }

        },
        yAxis: {
          title: {
            text: 'J (m/s^2)'
          }
        },
        series: bd_gia_toc_oto
      });

      //-------------------end phần đò thị gia tốc của chuyển động


      //gia toc nguoc
      var data_gtn = [];
      for (let i = 0; i < cap_dc; i++) {
        var da_gtn = []
        for (let i1 = 0; i1 < phan; i1++) {
          var gt_nguoc = 1 / (gia_toc_cd[i][i1]);
          var gt_nguoc = Math.round(gt_nguoc * 1000) / 1000;
          da_gtn.push(gt_nguoc);
        }
        data_gtn.push(da_gtn);

      }

      var bd_gia_toc_nguoc = ket_noi_array_bieu_do(van_toc_ung_tung_tay_so, data_gtn, "1/J")


      //gia toc nguoc

      //-------------------phần đò thị gia tốc nguoc
      Highcharts.chart('ket_qua_gia_tocnguoc', {

        chart: {
          type: 'spline'
        },
        title: {
          text: 'DO THI GIA TOC NGUOC'
        },
        subtitle: {
          text: ''
        },
        xAxis: {
          type: 'category',

          title: {
            text: 'Vận tốc (m/s)'
          }

        },
        yAxis: {
          title: {
            text: '1/J (s^2/s)'
          }
        },
        series: bd_gia_toc_nguoc
      });

      //-------------------end phần đò thị gia tốc nguoc
      //---------------------------------










      //----------------------------gia tốc của ô tô





      //----------------------------------

    } else {
      $(".tb7").html('<div class="alert alert-danger alert-dismissible fade show" role="alert"><strong>Thiếu dữ liệu!</strong>Bạn hãy chọn tỷ số truyền tại tay số 1 sao cho phù hợp nhất <button type="button" class="close" data-dismiss="alert" aria-label="Close"> <span aria-hidden="true">&times;</span> </button> </div>');

      $(".laytruyenlucchinh").addClass("hien");

    }


    //goi y chon fo
    var goi_f1=nt_dong_luc_hoc_tong[nt_dong_luc_hoc_tong.length-1]/(1+[Math.pow(van_toc_ung_tung_tay_so_tong_cong[van_toc_ung_tung_tay_so_tong_cong.length-1], 2)]/1500);
    var goi_f2=[nt_dong_luc_hoc_tong[nt_dong_luc_hoc_tong.length-1]-(0.0095*hs_cd_quay[hs_cd_quay.length-1]/9.81)]/[1+([Math.pow(van_toc_ung_tung_tay_so_tong_cong[van_toc_ung_tung_tay_so_tong_cong.length-1], 2)]/1500)]
    //-------------------

    if (gia_toc_cd[cap_dc - 1][phan - 1] != 0) {
      $(".goi_y_fo").html('<div class="alert alert-danger alert-dismissible fade show" role="alert"><p><strong>Giá trị tính toán gia tốc tại vận tốc max (đã làm tròn) phải bằng 0 </strong></p> <p>kiểm tra và chọn lại thông số.</p><p><strong>Gợi ý</strong></p><ul><p>Chọn lại hệ số cản lăn fo (phải thỏa mãn điều kiện theo từng loại đường) - lấy giá trị fo trong khoảng MAX - MIN</p><li style="font-weight: bold;">Giá trị fo Min: <strong class="text-danger">'+goi_f2+'</strong></li><li style="font-weight: bold;">Giá trị fo Max: <strong class="text-danger">'+goi_f1+'</strong></li></ul><button type="button" class="close" data-dismiss="alert"aria-label="Close"><span aria-hidden="true">&times;</span></button></div>');
    }




    //-----------------Thoi gian tang toc va quang duong tang toc


    if (thoi_gian_chuyen_so != "") {
      //-----------------------lay gia tri van toc 2 gia tri cuoi cua tay so loi nhat
      var denta_van_toc_max_ttdt = van_toc_ung_tung_tay_so[cap_dc - 1][phan - 1] - van_toc_ung_tung_tay_so[cap_dc - 1][phan - 2];

      //-----------------------------------------------------

      //-----------------Tinh gia toc nguc 2 gia tri cuoi cua tay so tay lon nhat
      var gia_toc_xet1=Math.round(gttg_gt_hai_max[1]*1000)/1000;
      var gia_toc_xet2=Math.round(gttg_gt_hai_max[0]*1000)/1000;

      var denta_gia_toc_cuoi = Math.abs(1 / gia_toc_xet1) - (1 / gia_toc_xet2);
      
      
      
      

      //----------------------------
      // tinh gia tri van toc=0.95Vmax --do thi
      var van_toc_xet = 0.95 * van_toc_ung_tung_tay_so[cap_dc - 1][phan - 1];
      var van_toc_xet=Math.round(van_toc_xet*1000)/1000;
      var khoang_van_toc_xet = van_toc_ung_tung_tay_so[cap_dc - 1][phan - 1] - van_toc_xet
      //-------------------------
      
      

      //gia toc tai diem co van toc=0.95Vmax
      
      //---------------------------------
      

      var gia_ti_gia_toc_nguoc_nhan=Number($("#giatoc_95").val()) 

      

      if (gia_ti_gia_toc_nguoc_nhan != "") {

        var gia_toc_xet = gia_ti_gia_toc_nguoc_nhan;
        
      } else {
        var gia_toc_xet = (1 / gia_toc_xet2) + (khoang_van_toc_xet / denta_van_toc_max_ttdt) * denta_gia_toc_cuoi;
        var gia_toc_xet=Math.round(gia_toc_xet*100)/100; //80 là giá trị biến số sai số
        
        

        
      }
      $("#gta_tri_gtnguoc").html('<p>Gia tốc ngược tại vận tốc = 95% vận tốc MAX</p><ul><li>Gia tốc ngược ban đầu:<strong> '+gia_toc_xet+' (s^2/m) </strong></li><li>Vận tốc xét:<strong> '+van_toc_xet+' (m/s)</strong></li></ul><p class="text-danger">Bạn có thể bỏ qua bước này!</p>');

      //--------------lấy giá trị độ giảm-
      //lay gia tri van toc max cua tung tay so
      var van_toc_max_tay_so = [];
      for (let i = 0; i < cap_dc; i++) {
        var dtvan_toc_max_tung_tay_so = van_toc_ung_tung_tay_so[i][phan - 1];
        var dtvan_toc_max_tung_tay_so=Math.round(dtvan_toc_max_tung_tay_so*1000)/1000;
        van_toc_max_tay_so.push(dtvan_toc_max_tung_tay_so);


      }
      //------------van toc max-----
      var gia_tri_ap_dung_can_kk = $('#customCheck1').prop('checked');
      //------
      if (gia_tri_ap_dung_can_kk === true) {
        var do_giam_van_toc = [];
        var quang_duong_khi_sang_so = [];
        for (let i = 0; i < cap_dc; i++) {
          if (van_toc_max_tay_so[i] < 22.22) {
            var denta_giam_van_toc = [he_so_can_lan_fo + (he_so_cac_khong_khi * dien_tich_can_chinh_dien * Math.pow(van_toc_max_tay_so[i], 2)) / trong_luong_G] * 9.81 * (thoi_gian_chuyen_so / hs_cd_quay[i]);
            var denta_giam_van_toc=Math.round(denta_giam_van_toc*1000)/1000;
            do_giam_van_toc.push(denta_giam_van_toc);
            //-----------------------------
            var denta_quang_duong_sang_so = [van_toc_max_tay_so[i] - [he_so_can_lan_fo + (he_so_cac_khong_khi * dien_tich_can_chinh_dien * Math.pow(van_toc_max_tay_so[i], 2)) / trong_luong_G] * thoi_gian_chuyen_so] * thoi_gian_chuyen_so;
             var denta_quang_duong_sang_so=Math.round(denta_quang_duong_sang_so*1000)/1000;
            quang_duong_khi_sang_so.push(denta_quang_duong_sang_so);



          } else {
            var denta_giam_van_toc = [he_so_can_lan_fo * (1 + ((Math.pow(van_toc_max_tay_so[i], 2)) / 1500)) + (he_so_cac_khong_khi * dien_tich_can_chinh_dien * Math.pow(van_toc_max_tay_so[i], 2)) / trong_luong_G] * 9.81 * (thoi_gian_chuyen_so / hs_cd_quay[i]);
            var denta_giam_van_toc=Math.round(denta_giam_van_toc*1000)/1000;
            do_giam_van_toc.push(denta_giam_van_toc);
            //----------------------------
            var denta_quang_duong_sang_so = [van_toc_max_tay_so[i] - [he_so_can_lan_fo * (1 + ((Math.pow(van_toc_max_tay_so[i], 2)) / 1500)) + (he_so_cac_khong_khi * dien_tich_can_chinh_dien * Math.pow(van_toc_max_tay_so[i], 2)) / trong_luong_G] * thoi_gian_chuyen_so] * thoi_gian_chuyen_so;
            var denta_quang_duong_sang_so=Math.round(denta_quang_duong_sang_so*1000)/1000;
            quang_duong_khi_sang_so.push(denta_quang_duong_sang_so);


          }

        }



      } else {
        var do_giam_van_toc = [];
        var quang_duong_khi_sang_so = [];
        for (let i = 0; i < cap_dc; i++) {
          if (van_toc_max_tay_so[i] < 22.22) {
            var denta_giam_van_toc = he_so_can_lan_fo * 9.81 * (thoi_gian_chuyen_so / hs_cd_quay[i]);
            var denta_giam_van_toc=Math.round(denta_giam_van_toc*1000)/1000;
            do_giam_van_toc.push(denta_giam_van_toc);
            //-------------------------
            var denta_quang_duong_sang_so = van_toc_max_tay_so[i] * thoi_gian_chuyen_so;
             var denta_quang_duong_sang_so=Math.round(denta_quang_duong_sang_so*1000)/1000;
            quang_duong_khi_sang_so.push(denta_quang_duong_sang_so);



          } else {
            var denta_giam_van_toc = he_so_can_lan_fo * (1 + ((Math.pow(van_toc_max_tay_so[i], 2)) / 1500)) * 9.81 * (thoi_gian_chuyen_so / hs_cd_quay[i]);
            var denta_giam_van_toc=Math.round(denta_giam_van_toc*1000)/1000;

            do_giam_van_toc.push(denta_giam_van_toc);
            var denta_quang_duong_sang_so = van_toc_max_tay_so[i] * thoi_gian_chuyen_so;
            var denta_quang_duong_sang_so=Math.round(denta_quang_duong_sang_so*1000)/1000;
            quang_duong_khi_sang_so.push(denta_quang_duong_sang_so);

          }

        }



      }

      ////--------------end do giam
      //=======van toc tang toc
      var van_toc_xet_tang_toc = [];
      var gia_toc_nguoc_xet_tang_toc = [];
      for (let i = 0; i < cap_dc; i++) {
        var data_van_toc_xet = []
        var data_gia_toc_nguoc_xet_tang_toc = [];
        for (let i1 = 0; i1 < phan; i1++) {
          if (i === 0) {
            data_van_toc_xet.push( Math.round(van_toc_ung_tung_tay_so[i][i1]*1000)/1000 );
            //-----------------
            data_gia_toc_nguoc_xet_tang_toc.push( Math.round(1 / gia_toc_cd[i][i1]*1000)/1000 );



          } else {
            if (i1 === 0) {
              var vt_so_sanh = van_toc_xet_tang_toc[i - 1][van_toc_xet_tang_toc[i - 1].length - 1] - do_giam_van_toc[i - 1];
              var vt_so_sanh = Math.round(vt_so_sanh*1000)/1000
              data_van_toc_xet.push(vt_so_sanh);
              data_gia_toc_nguoc_xet_tang_toc.push(Math.round( gia_toc_nguoc_xet_tang_toc[i - 1][gia_toc_nguoc_xet_tang_toc[i - 1].length - 1]*1000 )/1000);

            }
            if (van_toc_ung_tung_tay_so[i][i1] > data_van_toc_xet[data_van_toc_xet.length - 1]) {
              data_van_toc_xet.push(Math.round( van_toc_ung_tung_tay_so[i][i1]*1000)/1000 );
              data_gia_toc_nguoc_xet_tang_toc.push(Math.round( (1 / gia_toc_cd[i][i1])*1000 )/1000);

            }


          }


        }
        van_toc_xet_tang_toc.push(data_van_toc_xet);
        gia_toc_nguoc_xet_tang_toc.push(data_gia_toc_nguoc_xet_tang_toc);

      }
      //------------------------

      //---------------------
      van_toc_xet_tang_toc[0].unshift(0);
      van_toc_xet_tang_toc[cap_dc - 1].pop();
      van_toc_xet_tang_toc[cap_dc - 1].push(van_toc_xet)
      //=============================
      gia_toc_nguoc_xet_tang_toc[0].unshift(0);
      gia_toc_nguoc_xet_tang_toc[cap_dc - 1].pop();
      gia_toc_nguoc_xet_tang_toc[cap_dc - 1].push(gia_toc_xet);




      //-----vttt---

      //------tinh 1/jtb-----
      var jtb_mu_tru_mot = []
      for (let i = 0; i < cap_dc; i++) {
        var giatri_jtb = [];
        for (let i1 = 0; i1 < gia_toc_nguoc_xet_tang_toc[i].length - 1; i1++) {
          var data_jtb = (gia_toc_nguoc_xet_tang_toc[i][i1 + 1] + gia_toc_nguoc_xet_tang_toc[i][i1])/2;
          var data_jtb =Math.round(data_jtb*1000)/1000;
          giatri_jtb.push(data_jtb);


        }
        jtb_mu_tru_mot.push(giatri_jtb);

      }
      //------end tinh 1/jtb---

      //tinh denta van toc xet
      var denta_van_toc_xet_tt = []
      for (let i = 0; i < cap_dc; i++) {
        var giatri_dentavt = [];
        for (let i1 = 0; i1 < van_toc_xet_tang_toc[i].length - 1; i1++) {
          var data_xetvt = (van_toc_xet_tang_toc[i][i1 + 1] - van_toc_xet_tang_toc[i][i1]);
          var data_xetvt =Math.round(data_xetvt*1000)/1000;
          giatri_dentavt.push(data_xetvt);


        }
        denta_van_toc_xet_tt.push(giatri_dentavt);

      }
      
      

      
      

      //end tinh denta van toc xet

      //======tinh denta T===
      var denta_t = []
      for (let i = 0; i < cap_dc; i++) {
        var gt_dentat = [];
        for (let i1 = 0; i1 < denta_van_toc_xet_tt[i].length; i1++) {
          gt_dentat.push( Math.round( denta_van_toc_xet_tt[i][i1] * jtb_mu_tru_mot[i][i1]*1000)/1000 )

        }
        denta_t.push(gt_dentat)

      }
      //==========end tinh denta_T


      //====---tinh thoi gian tang toc------------
      //denta_t[0].unshift(0);
      //=======
      var thoi_gian_tang_toc = [];
      for (let i = 0; i < cap_dc; i++) {
        var data_tg_tang_toc = [];
        if (i === 0) {
          //var gttgbd=denta_t[i][0];
          data_tg_tang_toc.push(0);
          for (let i1 = 0; i1 < denta_t[i].length; i1++) {


            var gt_thoi_gian_tang_toc = data_tg_tang_toc[data_tg_tang_toc.length - 1] + denta_t[i][i1];
            var gt_thoi_gian_tang_toc =Math.round(gt_thoi_gian_tang_toc*1000)/1000;
            data_tg_tang_toc.push(gt_thoi_gian_tang_toc);





          }

        } else {
          var tgthem = thoi_gian_tang_toc[i - 1][thoi_gian_tang_toc[i - 1].length - 1] + thoi_gian_chuyen_so;
           var tgthem =Math.round(tgthem*1000)/1000;
          data_tg_tang_toc.push(tgthem);
          for (let i1 = 0; i1 < denta_t[i].length; i1++) {

            var gt_thoi_gian_tang_toc = data_tg_tang_toc[data_tg_tang_toc.length - 1] + denta_t[i][i1];
             var gt_thoi_gian_tang_toc =Math.round(gt_thoi_gian_tang_toc*1000)/1000;
            data_tg_tang_toc.push(gt_thoi_gian_tang_toc);


          }




        }
        thoi_gian_tang_toc.push(data_tg_tang_toc);

      }


      //========---end thoi gian tang toc-------


      //===========-----tinh  Vtb tang toc
      var van_toc_trung_binh=[];
      for (let i = 0; i < cap_dc; i++) {
        var datavtb=[];
        for (let i1 = 0; i1 < van_toc_xet_tang_toc[i].length-1; i1++) {
          datavtb.push(Math.round( (van_toc_xet_tang_toc[i][i1+1]+van_toc_xet_tang_toc[i][i1])/2*1000 )/1000);
          
        }
        van_toc_trung_binh.push(datavtb)

        
      }

      //=============end tinh   Vtb tang toc

      //============tinh denta_quang duong tang toc
      var denta_s=[];
      for (let i = 0; i < cap_dc; i++) {
        var datas=[];
        for (let i1 = 0; i1 < van_toc_trung_binh[i].length; i1++) {
          datas.push(Math.round( van_toc_trung_binh[i][i1]* denta_t[i][i1] *1000)/1000);
          
        }
        denta_s.push(datas)

        
      }


      //=========end tinh denta_quang duong tang toc

      //==============tinh quang duong tang toc
      //=======
      var quang_duong_tang_toc = [];
      for (let i = 0; i < cap_dc; i++) {
        var data_qd_tang_toc = [];
        if (i === 0) {
          //var gttgbd=denta_t[i][0];
          data_qd_tang_toc.push(0);
          for (let i1 = 0; i1 < denta_t[i].length; i1++) {


            var gt_quang_duong_tang_toc = data_qd_tang_toc[data_qd_tang_toc.length - 1] + denta_s[i][i1];
            var gt_quang_duong_tang_toc = Math.round(gt_quang_duong_tang_toc*1000)/1000;
            data_qd_tang_toc.push(gt_quang_duong_tang_toc);





          }

        } else {
          var qdthem = quang_duong_tang_toc[i - 1][quang_duong_tang_toc[i - 1].length - 1] + quang_duong_khi_sang_so[i-1];
          var qdthem = Math.round(qdthem*1000)/1000;
          data_qd_tang_toc.push(qdthem);
          for (let i1 = 0; i1 < denta_t[i].length; i1++) {

            var gt_quang_duong_tang_toc = data_qd_tang_toc[data_qd_tang_toc.length - 1] + denta_s[i][i1];
            var gt_quang_duong_tang_toc = Math.round(gt_quang_duong_tang_toc*1000)/1000;
            data_qd_tang_toc.push(gt_quang_duong_tang_toc);


          }




        }
        quang_duong_tang_toc.push(data_qd_tang_toc);

      }

      //----------------end quang duong tang toc

      //=======================================
      //=============bieu do tang toc
      
      //------------------------------
      function gop_thanh_tong(array) {
        var tong_g=[];
        for (let i = 0; i < cap_dc; i++) {
          for (let i1 = 0; i1 < array[i].length; i1++) {
            tong_g.push(array[i][i1])
  
            
          }
          
          
        }
        return tong_g;
        
      }

      //-------------------------
      var van_toc_tang_toc_tong=gop_thanh_tong(van_toc_xet_tang_toc);
      var thoi_gian_tang_toc_tong=gop_thanh_tong(thoi_gian_tang_toc);
      var quang_duong_tang_toc_tong=gop_thanh_tong(quang_duong_tang_toc);
      //------------------------------


      
      //---------------------
      function gep_noi_tang_toc(array1,array2,name) {
        var data_gt_cuatt=[];
        for (let i = 0; i <array1.length; i++) {
          var datagttg={
            x:array1[i],
            y:array2[i]
          }
          data_gt_cuatt.push(datagttg);

          
        
      }
      var tong_ghep_ht=[{
        name:name,
        data:data_gt_cuatt
      }];
      return tong_ghep_ht;
    }

    var bieu_do_thoi_gian_tang_toc=gep_noi_tang_toc(van_toc_tang_toc_tong,thoi_gian_tang_toc_tong,"thoi gian")
    var bieu_do_quang_duong_tang_toc=gep_noi_tang_toc(van_toc_tang_toc_tong,quang_duong_tang_toc_tong,"quang_duong")




      //=============end bieu do tang toc

      //==================================================đồ thị===============
      Highcharts.chart('ket_qua_vtqdtt', {
        chart: {
          zoomType: 'xy'
        },
        title: {
          text: 'DO THI THOI GIAN, QUANG DUONG TANG TOC'
        },

        xAxis: {
          type: 'category',

          title: {
            text: 'Vận tốc (m/s)'
          }

        },
        yAxis: [{ // Primary yAxis
          labels: {
            format: '{value} s',
            style: {
              color: Highcharts.getOptions().colors[0]
            }
          },
          title: {
            text: 'Thời gian',
            style: {
              color: Highcharts.getOptions().colors[0]
            }
          }
        }, { // Secondary yAxis
          title: {
            text: 'Quãng đường',
            style: {
              color: Highcharts.getOptions().colors[1]
            }
          },
          labels: {
            format: '{value}m',
            style: {
              color: Highcharts.getOptions().colors[1]
            }
          },
          opposite: true
        }],
        tooltip: {
          shared: true
        },
        legend: {
          layout: 'vertical',
          align: 'left',
          x: 120,
          verticalAlign: 'top',
          y: 100,
          floating: true,
          backgroundColor: Highcharts.defaultOptions.legend.backgroundColor || // theme
            'rgba(255,255,255,0.25)'
        },
        series: [{
            name: 'Thời gian',
            type: 'spline',
            yAxis: 0,
            data: bieu_do_thoi_gian_tang_toc[0].data,
            tooltip: {
              valueSuffix: ' s'
            }

          }, {
            name: 'Quãng đường',
            type: 'spline',
            yAxis: 1,
            data: bieu_do_quang_duong_tang_toc[0].data,
            tooltip: {
              valueSuffix: 'm'
            }
          },

        ]
      });
      //==========================end đồ thị=====================




      //------------------------
      var gia_tri_tang_toc = {
        van_toc_xet_95: van_toc_xet,
        gia_toc_nguoc_xet_95: gia_toc_xet,
        
        van_toc_max_tung_tay_so: van_toc_max_tay_so,
        do_giam_van_toc: do_giam_van_toc,
        quang_duong_khi_sang_so: quang_duong_khi_sang_so,
        van_toc_xet_tang_toc: van_toc_xet_tang_toc,
        gia_toc_nguoc_xet_tang_toc: gia_toc_nguoc_xet_tang_toc,
        mot_phan_jtb_tang_toc: jtb_mu_tru_mot,
        denta_van_toc_xet_tang_toc: denta_van_toc_xet_tt,
        denta_t: denta_t,
        thoi_gian_tang_toc: thoi_gian_tang_toc,
        tinh_van_toc_trung_binh:van_toc_trung_binh,
        denta_S:denta_s,
        quang_duong_tang_toc:quang_duong_tang_toc,
        bieu_do_thoi_gian_tang_toc: bieu_do_thoi_gian_tang_toc,
        bieu_do_quang_duong_tang_toc:bieu_do_quang_duong_tang_toc
        
        






      }
      DATA_CAR.push(gia_tri_tang_toc)

      //---------------------------------------------------
    } else {
      $(".tb8").html('<div class="alert alert-danger alert-dismissible fade show" role="alert"><strong>Thiếu dữ liệu!</strong> kiểm tra lại phần thời gian và quãng đường tăng tốc.<button type="button" class="close" data-dismiss="alert" aria-label="Close"> <span aria-hidden="true">&times;</span> </button> </div>');

      $(".laytruyenlucchinh").removeClass("hien");
      $(".chon_gia_toc_95").removeClass("hien");

    }
    //-----------------end thoi gian quang duong tang toc




    //---------------------------
    //-------------------------------------Math.round( he_so_can_lan_fo * (1 + (Math.pow(van_toc_ung_tung_tay_so[cap_dc-1][phan-1], 2) / 1500))* 100) / 100.
    
    console.log(DATA_CAR);
    
    
    
    
    
    
    
    

        
      }

      else {
        $(".tb10").html('<div class="alert alert-danger alert-dismissible fade show" role="alert"><strong>Thiếu dữ liệu!</strong> kiểm tra lại Phương trình cân bằng lực kéo và đồ thị cân bằng lực kéo của ôtô. <button type="button" class="close" data-dismiss="alert" aria-label="Close"> <span aria-hidden="true">&times;</span> </button> </div>');
        
        $(".laytruyenlucchinh").removeClass("hien");
        $(".chon_gia_toc_95").removeClass("hien");
        
      }


     
      
      

      

    //end code-------------------
    //--------Hoang Lap--------------------

    
    
    
  });


});