$(document).ready(function() {
   window.onscroll = function() {scrollFunction()};
   function scrollFunction() {
      var height = $(".-header").height();
      if (document.body.scrollTop > height - 50 || document.documentElement.scrollTop > height - 50) {
         $(".-header-items").css({"background-color" : "rgba(0,0,0,0.5)", "box-shadow": "0 1rem 3rem rgba(0,0,0,.175)", "padding": "10px"});
      } else {
         $(".-header-items").css({"background-color" : "transparent", "box-shadow": "none", "padding": "20px"});
      }
   }
   $(".-header-content-items-toggle-btn").click(function(){
      $(".-header-content-resp").slideDown(500);
   });
   $(".close-dropdown").click(function() {
      $(".-header-content-resp").slideUp(500);
   });
   $(".-header-content-resp-item").click(function() {
      $(".-header-content-resp").slideUp(500);
   });
   function chekWidth() {
      if (window.innerWidth > 991) {
         $(".-header-content-resp").css({"display": "none"});
      }
   }
   setInterval(chekWidth, 500);
   const imgData = ["https://www.dropbox.com/s/u76d3rxy5budy8u/Turin%20Jucar.jpg?dl=1",
      "https://www.dropbox.com/s/wt2edjy0z8b1oqc/Rey%20Plus.jpg?dl=1",
       "https://www.dropbox.com/s/3iroj3bpjlozbbs/Oslo.jpg?dl=1",
       "https://www.dropbox.com/s/teil861fodiggot/Oporto.jpg?dl=1",
       "https://www.dropbox.com/s/9ez54fgjmi0u94a/Niza.jpg?dl=1",
       "https://www.dropbox.com/s/1q0x9zmq6sv161y/Madrid.jpg?dl=1",
	   "https://www.dropbox.com/s/o0xrydofqh27yja/Londres.jpg?dl=1",
	   "https://www.dropbox.com/s/9f9uc3e24xngatd/Lisboa.jpg?dl=1",
	   "https://www.dropbox.com/s/yp4dlcq8a3duds7/Jucar%20Turin.jpg?dl=1",
	   "https://www.dropbox.com/s/5azcxh6ctbn2ngt/Deva.jpg?dl=1",
	   "https://www.dropbox.com/s/it1w7nka08szizj/Cumbre.jpg?dl=1",
	   "https://www.dropbox.com/s/jfvea4uhkuo252v/Cadiz.jpg?dl=1",
	   "https://www.dropbox.com/s/wy5a41536bka4ob/Boston.jpg?dl=1",
	   "https://www.dropbox.com/s/leadv04ovbu5e0v/Boston%20Liso.jpg?dl=1",
	   "https://www.dropbox.com/s/uynbuelvqnmcldc/Bahia%20II.jpg?dl=1",
	   "https://www.dropbox.com/s/29wjbczxf31k5az/Ana.jpg?dl=1",
	   "https://www.dropbox.com/s/flfkw3gibhltdcm/Altea%20Restyle.jpg?dl=1",
	   "https://www.dropbox.com/s/mrx1dexvwheh917/Altea%20Gola.jpg?dl=1"

   ];
   
   const nombres = ["Turin Jucar", "Rey Plus", "Oslo", "Oporto", "Niza", "Madrid", "Londres", "Lisboa", "Jucar", "Deva", "Cumbre", "Cadiz",
                     "Boston","Boston Liso", "Bahia II", "Ana", "Altea Restyle", "Altea Gola"];
   for (var i = imgData.length - 1; i >= 0; i--) {
      $(".-row-ourimages").append("<img src='" + imgData[i] + "' class='image col-xl-6' draggable='false' onclick='showImg(this.src)'" + "> "+nombres[i]);
   }

//MUEBLES

const imgMuebles = ["https://www.dropbox.com/s/vt5s9t93smwd824/Tandem%20Side%20Plus.jpg?dl=1",
"https://www.dropbox.com/s/a0jkaqkmniv8sxn/Tandem%20Plus.jpg?dl=1",
"https://www.dropbox.com/s/orvsh10oa9xyxro/Rincon%20Giratorio%20Plus.jpg?dl=1",
"https://www.dropbox.com/s/yc72n0srcxul4ki/Magic%20Corner.jpg?dl=1",
"https://www.dropbox.com/s/y05wd232u8rp8vk/Lemans.jpg?dl=1",
"https://www.dropbox.com/s/0us030u9h58sl9s/Dispensa%20Extraible%20Plus.jpg?dl=1",
"https://www.dropbox.com/s/8fy3npwa0ybrohw/Convoy%20Lavido.jpg?dl=1",
"https://www.dropbox.com/s/8smvowqvmvbzpyy/Confort%20Plus.jpg?dl=1",
"https://www.dropbox.com/s/pyqz2fws83gz0ho/Cajon%20Plus.png?dl=1",
"https://www.dropbox.com/s/m451s55a021dz01/Botellero.jpg?dl=1"];

for(var i = imgMuebles.length -1; i>=0; i--){
   $(".-row-muebles").append("<img src='" + imgMuebles[i] +"' class='image col-xl-6' draggable='false' onclick='showImg(this.src)'"+">");
}

//TIRADORES

   const imgTirador = ["https://www.verges.com/5356-home_default/profab-183.jpg",
"https://www.pomoline.com/wp-content/uploads/productos/90016.jpg",
"https://www.fecosur.es/thumb/product/384_411_sen_6765032.JPG",
"https://cdn.manomano.com/tirador-orlando-P-500768-1743051_1.jpg",
"https://www.cocinaskitonline.com/380-thickbox_default/tirador-metalico-2348-para-cocina.jpg"];

const codigo = ["1", "2", "3", "4", "5"];

   for (var i = imgTirador.length -1 ; i>=0 ; i--){
      $(".-row-tirador").append("<img src='" + imgTirador[i] +"' class='image col-xl-6' draggable='false' onclick='showImg(this.src)'"+"> "+codigo[i]);
   }

//Marmol Ascale
const marmolAs = ["https://www.dropbox.com/s/6bryc1r9c7ud2mi/BAHIA-320X160-3-V.jpg?dl=1","https://www.dropbox.com/s/zj9i8wddos7vxao/ARMANI_SILVER_F1-V.jpg?dl=1",
"https://www.dropbox.com/s/kagt9j77xay7rdg/varese-onice-3.jpg?dl=1","https://www.dropbox.com/s/rak9l31rn8ikeew/BELVEDERE-BLACK-1780x3560.jpg?dl=1",
"https://www.dropbox.com/s/t4tldvz8mx1zvli/PULPIS-BROWN-2.jpg?dl=1","https://www.dropbox.com/s/qwn9ktu1g07ptzm/ducal-gold-1.jpg?dl=1",
"https://www.dropbox.com/s/tspc9mnqlb8wzxv/grassi-white-1.jpg?dl=1","https://www.dropbox.com/s/p0lp05igm8mj5xk/torano-statuario-5.jpg?dl=1",
"https://www.dropbox.com/s/e6o3vel1c9t3mn6/torano-statuario-1.jpg?dl=1","https://www.dropbox.com/s/cy919ig7kt9fop4/vagli-gold-4.jpg?dl=1",
"https://www.dropbox.com/s/7dfjg0hv4eqi908/vagli-gold-2.jpg?dl=1"];

//Marmol imagen completa
const marmolRe =["https://www.dropbox.com/s/weluavs6r9kiqqh/amb-BAHIA-MONTECLEMO-1024x768.jpg?dl=1","https://www.dropbox.com/s/4r2d9qinqckklnp/ARMANI-MONTECLEMO-MOMA-CORTEN-1024x768.jpg?dl=1",
"https://www.dropbox.com/s/m5ac479xst91wer/varese-onice-5-1024x726.jpg?dl=1","https://www.dropbox.com/s/fbi12h5yurl3t97/Ascale_BELVEDERE_BLACK_MATE_Modf_HD-1024x721.jpg?dl=1",
"https://www.dropbox.com/s/ua9j4ymzgcue5rg/Crotone-pulpis-imperia-black-vagli-gold-fidenza-linen-1024x722.jpg?dl=1",
"https://www.dropbox.com/s/iegebsnlysz3qql/DucalGold_hd-1024x721.jpg?dl=1","https://www.dropbox.com/s/hi5ms9d2d4daxy4/Grassi_White_HD-1024x721.jpg?dl=1",
"https://www.dropbox.com/s/hf7158etkg9y5ct/Ambte-3_torano_statuario_pulido_detalle-1024x614.jpg?dl=1",
"https://www.dropbox.com/s/f1yaoox1blyvbeq/Ambte-5_Torano-statuario-Seleni-white-1024x721.jpg?dl=1","https://www.dropbox.com/s/s6gq3dz3upd3vg4/DETALLE-VAGLI-GOLD-MOMA-1024x614.jpg?dl=1",
"https://www.dropbox.com/s/xb04gvhk9zq1psp/VAGLI-GOLD-MOMA-1-1024x722.jpg?dl=1"];

for(var i = marmolAs.length-1; i>0; i--){
   $(".-row-marmolAs").append("<img src='" +marmolAs[i]+"' class='image col-xl-6' draggable='false' onclick='showImg(this.src)'"+">"+
   "<img src='" +marmolRe[i]+"' class='image col-xl-6' draggable='false' onclick='showImg(this.src)'"+">");
}


//Piedra Ascale
const piedraAs = ["https://www.dropbox.com/s/9i1w3pf4cfuexnc/PALOMASTONE-320X160-1-V.jpg?dl=1",
"https://www.dropbox.com/s/9i1w3pf4cfuexnc/PALOMASTONE-320X160-1-V.jpg?dl=1","https://www.dropbox.com/s/hl91xyeg3b6iqce/MONTECLEMO-SILVER-1780X3560.jpg?dl=1",
"https://www.dropbox.com/s/dfb2b0ka1nbqd9u/BORGOGNA-PEARL-160X320-SILVER-EN-CAT%C2%B5LOGO.jpg?dl=1","https://www.dropbox.com/s/quum2csrplconj3/CARDOSO-GRAY-MG3-1780x3560.jpg?dl=1",
"https://www.dropbox.com/s/ffogdxr0qat40ho/imperia-black-1.jpg?dl=1","https://www.dropbox.com/s/3zr5m7x1rey2wef/imperia-silver-1.jpg?dl=1",
"https://www.dropbox.com/s/oedrc300vx2suwv/Arizona_sand.jpg?dl=1","https://www.dropbox.com/s/t47dqs44jj9rhf8/MONTECLEMO-BLACK-1780x3560.jpg?dl=1"];


const piedraDe = ["https://www.dropbox.com/s/e0i80ue6g4hisz0/DETALLE-COCINA-PALOMASTONE-Y-BOREAL-1024x924.jpg?dl=1",
"https://www.dropbox.com/s/e0i80ue6g4hisz0/DETALLE-COCINA-PALOMASTONE-Y-BOREAL-1024x924.jpg?dl=1","https://www.dropbox.com/s/tswnzly0y2abek6/Ascale_MONTECLEMO-SILVER-MOMA-1024x721.jpg?dl=1",
"https://www.dropbox.com/s/sc186bylyjxxw7g/DETALLE-BORGOGNA-pearl-GRASSI-white-1024x768.jpg?dl=1","https://www.dropbox.com/s/eqbgn3wp12kqv08/Amb_Cardoso-Gray-Cosmopolita-Silver-1024x721.jpg?dl=1",
"https://www.dropbox.com/s/nuoozlbyp29x9zi/AS-imperia_black-Silver-Seleni-coffee-1024x721.jpg?dl=1","https://www.dropbox.com/s/um9r749tkllujx9/AS-MONTECLEMO-SILVER-IMPERIA-SILVER-1024x721.jpg?dl=1",
"https://www.dropbox.com/s/h83hbbu6atc4ont/Det_Modif_ArizonaSand-1024x721.jpg?dl=1","https://www.dropbox.com/s/41crbc7oimphjuz/amb-MONTECLEMO-BLACK-PUL-MOMA-COSMOPOLITA-GRAY-1-1024x768.jpg?dl=1"];

for(var i = piedraAs.length-1; i>0; i--){
   $(".-row-piedraAs").append("<img src='" +piedraAs[i]+"' class='image col-xl-6' draggable='false' onclick='showImg(this.src)'"+">"+
   "<img src='" +piedraDe[i]+"' class='image col-xl-6' draggable='false' onclick='showImg(this.src)'"+">");
}

//Cemento Ascale

const cementoAs = ["https://www.dropbox.com/s/64whjzf97yt60hc/cosmopolitan-gray.jpg?dl=1","https://www.dropbox.com/s/miuafasy0x99pad/cosmopolitan-silver-1.jpg?dl=1"];

const cementoDe = ["https://www.dropbox.com/s/8zpdavkmc2nga4w/Det_Cosmopolita-Gray-1024x614.jpg?dl=1","https://www.dropbox.com/s/xgufuu91r22werw/Det_Cosmopolita-Silver-1024x614.jpg?dl=1"];


for(var i = 0; i<2; i++){
   $(".-row-cementoAs").append("<img src='" +cementoAs[i]+"' class='image col-xl-6' draggable='false' onclick='showImg(this.src)'"+">"+
   "<img src='" +cementoDe[i]+"' class='image col-xl-6' draggable='false' onclick='showImg(this.src)'"+">");
}


//Esencial Ascale

const esencialAs = ["https://www.dropbox.com/s/xcdftm3stvgkdv8/alpi-white.jpg?dl=1", "https://www.dropbox.com/s/iy1ksz9ojfadzyu/grum-black.jpg?dl=1"];

const esencialDe = ["https://www.dropbox.com/s/0vv0hoj9xptts9z/AS-Alpi_white_det_hd-1024x614.jpg?dl=1","https://www.dropbox.com/s/hux2xnyl6nqnrmh/Grumblack_AlpiWhite_pulido-detalle-1024x614.jpg?dl=1"];

for(var i = 0; i<2; i++){
   $(".-row-esencialAs").append("<img src='" +esencialAs[i]+"' class='image col-xl-6' draggable='false' onclick='showImg(this.src)'"+">"+
   "<img src='" +esencialDe[i]+"' class='image col-xl-6' draggable='false' onclick='showImg(this.src)'"+">");
}



//colores


const colorAs = ["https://www.dropbox.com/s/82y7569v3palgig/1.png?dl=1","https://www.dropbox.com/s/zpkfb80rmqw8rd6/2.png?dl=1","https://www.dropbox.com/s/r4wi74u1ktwpojb/36.png?dl=1",
"https://www.dropbox.com/s/rcn58m87wu0ygek/35.png?dl=1","https://www.dropbox.com/s/yfyrb1o64qkau4c/34.png?dl=1","https://www.dropbox.com/s/h99gape7opxm36p/33.png?dl=1",
"https://www.dropbox.com/s/f487iroidjr8948/32.png?dl=1","https://www.dropbox.com/s/fh8d7zen3tjv3lc/31.png?dl=1","https://www.dropbox.com/s/bl1g7vs8m3clvw1/30.png?dl=1",
"https://www.dropbox.com/s/zb154km1yiyq7ib/29.png?dl=1","https://www.dropbox.com/s/sy0s4anewnlfh9f/28.png?dl=1","https://www.dropbox.com/s/09hhr2eavxq2e7j/27.png?dl=1",
"https://www.dropbox.com/s/thd9zds5anf8w32/26.png?dl=1","https://www.dropbox.com/s/le397fh75c3u6dk/25.png?dl=1","https://www.dropbox.com/s/ihggokfim5xu35u/24.png?dl=1",
"https://www.dropbox.com/s/snedlv1hrg3dvn2/23.png?dl=1","https://www.dropbox.com/s/33wjml9krvr9c3z/22.png?dl=1","https://www.dropbox.com/s/lay8zovgyu27j53/21.png?dl=1",
"https://www.dropbox.com/s/ltzdtrds5p54zay/20.png?dl=1","https://www.dropbox.com/s/zpryrsj6xn3gf66/19.png?dl=1","https://www.dropbox.com/s/403zftzzh3xio32/18.png?dl=1",
"https://www.dropbox.com/s/65jf4g4higevhy0/17.png?dl=1","https://www.dropbox.com/s/7uaq2c7r2zknsp7/16.png?dl=1","https://www.dropbox.com/s/m4w0c51213nahia/15.png?dl=1",
"https://www.dropbox.com/s/5x7weq4l179n1ge/14.png?dl=1","https://www.dropbox.com/s/ftkd31j1r645rf5/13.png?dl=1","https://www.dropbox.com/s/wuguhnglua5od97/12.png?dl=1",
"https://www.dropbox.com/s/2rarm6bs79ba883/11.png?dl=1","https://www.dropbox.com/s/awcrhoiyzrdvtb1/10.png?dl=1","https://www.dropbox.com/s/0e5py4f72t30s2j/9.png?dl=1",
"https://www.dropbox.com/s/55w1v1d7i08okn5/8.png?dl=1","https://www.dropbox.com/s/vgvi48l8neghaof/7.png?dl=1","https://www.dropbox.com/s/9elxg2unb1am639/6.png?dl=1",
"https://www.dropbox.com/s/t4okf8lo59ghakt/5.png?dl=1","https://www.dropbox.com/s/8f3q1emvs6u2m6w/4.png?dl=1","https://www.dropbox.com/s/f9sy007qrt4upwd/3.png?dl=1",
"https://www.dropbox.com/s/ywkxm6eu5b6ttco/2.png?dl=1","https://www.dropbox.com/s/iwpvg89lsg87am2/1.png?dl=1"];

const fotoDe = ["https://www.dropbox.com/s/5sr7fe2a255dmqa/1.1.png?dl=1","https://www.dropbox.com/s/dqvrhfodrj0iqwr/2.1.png?dl=1","https://www.dropbox.com/s/g8p60m0tjmxfwfj/36.1.png?dl=1",
"https://www.dropbox.com/s/3obi8p4l4249d3b/35.1.png?dl=1","https://www.dropbox.com/s/zortt4d3yw06uch/34.1.png?dl=1","https://www.dropbox.com/s/amg9qku27stph8x/33.1.png?dl=1",
"https://www.dropbox.com/s/x69dpnu0dmaxrk8/32.1.png?dl=1","https://www.dropbox.com/s/aqktqctelnaogxe/31.1.png?dl=1","https://www.dropbox.com/s/4eqe8aufy83w6bu/30.1.png?dl=1",
"https://www.dropbox.com/s/9pewdxajna9ze33/29.1.png?dl=1","https://www.dropbox.com/s/10jvibkqazj3y4f/28.1.png?dl=1","https://www.dropbox.com/s/k6eih0mp8iqqy8r/27.1.png?dl=1",
"https://www.dropbox.com/s/adkm4gdl9nyjljx/26.1.png?dl=1","https://www.dropbox.com/s/8ldi3v4a04snuwg/25.1.png?dl=1","https://www.dropbox.com/s/empsxo8mth1imlj/24.1.png?dl=1",
"https://www.dropbox.com/s/4y5kpbiteq01e4o/23.1.png?dl=1","https://www.dropbox.com/s/1ngax3ea1rcmsyg/22.2.png?dl=1","https://www.dropbox.com/s/a0xr0gexbxeg3zf/21.1.png?dl=1",
"https://www.dropbox.com/s/ri2umar10hhugem/20.1.png?dl=1","https://www.dropbox.com/s/r0eirnzqloletgt/19.1.png?dl=1","https://www.dropbox.com/s/ivnoi9pumocwanj/18.1.png?dl=1",
"https://www.dropbox.com/s/x2m7v07wtsb381z/17.1.png?dl=1","https://www.dropbox.com/s/tjfg0uo693t9f99/16.1.png?dl=1","https://www.dropbox.com/s/7j986nzp2megemh/15.1.png?dl=1",
"https://www.dropbox.com/s/ploxmh8g5spum9l/14.1.png?dl=1","https://www.dropbox.com/s/r7oss1mttsz6kar/13.1.png?dl=1","https://www.dropbox.com/s/f1ib386do9ijye6/12.1.png?dl=1",
"https://www.dropbox.com/s/pqya7ey03xbjj5f/11.1.png?dl=1","https://www.dropbox.com/s/fgp5zftpftenvcd/10.1.png?dl=1","https://www.dropbox.com/s/v7vksgvn5jibw8e/9.1.png?dl=1",
"https://www.dropbox.com/s/muamgbnojbkxrs5/8.1.png?dl=1","https://www.dropbox.com/s/8rhkqe2vfn0542l/7.1.png?dl=1","https://www.dropbox.com/s/b8zqdby1f8ekpqs/6.1.png?dl=1",
"https://www.dropbox.com/s/yew3kh4kptj3ye8/5.1.png?dl=1","https://www.dropbox.com/s/eo38udjtbdga3sr/4.1.png?dl=1","https://www.dropbox.com/s/3nkpka4pre9phrs/3.1.png?dl=1",
"https://www.dropbox.com/s/0gdbzdo0kiv1ky6/2.1.png?dl=1","https://www.dropbox.com/s/e8yzl82giroeu71/1.1.png?dl=1"];


for(var i = colorAs.length-1; i>0; i--){
   $(".-row-colorAs").append("<img src='" +colorAs[i]+"' class='image col-xl-6' draggable='false' onclick='showImg(this.src)'"+">"+
   "<img src='" +fotoDe[i]+"' class='image col-xl-6' draggable='false' onclick='showImg(this.src)'"+">");
}



//MARCAS


const marcas = ["https://www.dropbox.com/s/7gdo7u54dxd83pa/whirlpool-lavadora-awg-812-pro-01.jpg?dl=1","https://www.dropbox.com/s/hetq7n7fvabztz1/Fregadero-Bajo-Encimera-TEKA-Linea-R15-45.40.jpg?dl=1",
"https://www.dropbox.com/s/m65qgd2ms7behfj/Campana60cm.jpeg?dl=1","https://www.dropbox.com/s/qmx4w2dcy1c93ag/00104741145025____1__640x640.jpg.webp?dl=1",
"https://www.dropbox.com/s/22fd2s8ftiv3jo4/0000-siemens-lavavajilla-negro-1584488196-1400x1400.jpg?dl=1","https://www.dropbox.com/s/dg0lvbj3bykpbyp/frigorificos-puertas-cristal-colores.jpg?dl=1"];


for(var i=0; i<7; i++){
   $(".-row-marca").append("<img src='" +marcas[i]+"' class='image col-xl-6' draggable='false' onclick='showImg(this.src)'"+">");
}


});