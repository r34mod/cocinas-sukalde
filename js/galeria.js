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


for(var i=0; i<6; i++){
   $(".-row-marca").append("<img src='" +marcas[i]+"' class='image col-xl-6' draggable='false' onclick='showImg(this.src)'"+">");
}







//Natura Ascale

const naturAs = ["https://www.dropbox.com/s/59b3zt8uii9rhni/BOREAL-320X160-UMBER-2-V.jpg?dl=1"];

const naturaDe = ["https://www.dropbox.com/s/1j9crxcybllau0o/BOREAL-UMBER-160X320-1024x724.jpg?dl=1"];


   $(".-row-naturAs").append("<img src='" +naturAs[0]+"' class='image col-xl-6' draggable='false' onclick='showImg(this.src)'"+">"+
   "<img src='" +naturDe[0]+"' class='image col-xl-6' draggable='false' onclick='showImg(this.src)'"+">");



//Metal Ascale

const matAs = ["https://www.dropbox.com/s/7ynok3b44ntz9kb/MOMA-RUSTEEL-1780X3560-F5-T7-M0-RGBL-EP.jpg?dl=1"];

const matDe = ["https://www.dropbox.com/s/n2cw2hkumjb4vzc/DETALLE-Moma-corten_Ragusa-Coffee_Crotone-pulpis_hd-1024x721.jpg?dl=1"];



   $(".-row-metAs").append("<img src='" +matAs[0]+"' class='image col-xl-6' draggable='false' onclick='showImg(this.src)'"+">"+
   "<img src='" +matDe[0]+"' class='image col-xl-6' draggable='false' onclick='showImg(this.src)'"+">");




});
