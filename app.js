//değişkenler
var birinci = document.getElementById("first");
var ikinci = document.getElementById("second");
var pulse = document.getElementById("pulse");
var fire = document.getElementById("fire");
var fire2 = document.getElementById("fire2")
var ikinciMenu = document.querySelectorAll("#span2");
// var stage1 = document.getElementById("stage1");
// var stage2 = document.getElementById("stage2");
// var stage3 = document.getElementById("stage3");
// var stage4 = document.getElementById("stage4");
var circle = document.getElementById("circle")
var star = document.getElementById("star");
var svg = document.getElementById("svgElectric");
var path = svg.querySelectorAll("path")
var kucuksol = document.getElementById("kucuksol");
var kucuksag = document.getElementById("kucuksag");
var logo = document.getElementById("logo");
var logo1 = document.getElementById("logo1");
var metin1 = document.getElementById("metin1");
var left = document.getElementById("animation-left")
var right = document.getElementById("animation-right")
var logolar = document.getElementById("logolar")
var bg = document.getElementById("bg")
var clear = document.getElementById("clear")
let a = 0
let hiz = 1.25
var update
var previousDelta = 0
var fpsLimit = 30

//döngüyü sağlayan slider. her slider da başlaması gereken fonksiyonlar yazılı
document.addEventListener("DOMContentLoaded", function(event) {
    var temp = 0; // sayfa
    var i = 0 // kalma süresi
    function slider() {
      document.getElementById("stage1").style.display = 'none';
      document.getElementById("stage2").style.display = 'none';
      document.getElementById("stage3").style.display = 'none';
      document.getElementById("stage4").style.display = "none"
      if (temp == 0) {
        document.body.style.backgroundImage = ""
        i= 5000
        if(fire.style.display == "none"){
            fire.classList.remove("kucult")
            fire2.classList.remove("kucult")
            fire.style.display = "block"
            fire2.style.display = "block"
          }
          if(pulse.className == "pulse scaleDown"){
            pulse.classList.remove("scaleDown")
            pulse.classList.remove("pulse")
            pulse.classList.add("scaleUp")
          }
        setTimeout(stopFire, 1400);
        document.getElementById("stage1").style.display = 'block';
      } else if (temp == 1) {
        i=30000
       
        if(kucuksol.className == "kucuksol opacityOut none"){
            restart();
            deleteStars();
        }
        if(bg.className == "bg opacityOut none"){
            restart2();
        }
        setTimeout(pulse1, 2500);
        setTimeout(open,10000);
        setTimeout(circleOp,20000)
        setTimeout(exit, 25000)
        document.getElementById("stage2").style.display = 'block';
      } else if (temp == 2) {    
          i=20000
        createStars(5)
        setTimeout(() => {
            showStars(5)
            }, 1000);
        run(305)
        setTimeout(exit2, 15000)
        document.body.style.backgroundImage = "linear-gradient(60deg, #29323c 0%, #485563 100%)"
        document.getElementById("stage3").style.display = 'block';
      }else if(temp == 3){
          i=20000
          document.getElementById("stage4").style.display = 'block';
       }
      temp = (temp + 1) % 4;
      setTimeout(slider, i);
    }
  
    slider();
  });


//fonksiyonlar
// uzay mekiğinin ateşini azaltan fonksiyon
  function stopFire(){
      
      console.log("calisti")
    fire.classList.add("kucult");
    fire2.classList.add("kucult");
    setTimeout(() => {
        fire.style.display = "none";
        fire2.style.display = "none"
    }, 500);
}
//ortadaki çembere dalga efekti verir
function pulse1(){
    pulse.classList.add("pulse")
}
//ortadaki çemberin büyüyerek yokolmasını sağlar
function open(){
    birinci.classList.add("scaleOut")
    ikinci.classList.remove("second")
    ikinci.classList.add("block")
    setTimeout(() => {
        ikinci.classList.add("scaleOut")
    }, 6000);
}
//fiyat etiketini ortaya çıkarır
function circleOp(){
    circle.classList.add("opacityIn");
}
//sayfadan çıkmadan önce bir bütün halinde çıkabilmesi adına bazı class eklemeleri ve çıkartmaları yapar
function exit(){
    kucuksol.classList.add("opacityOut")
    kucuksag.classList.add("opacityOut")
    logo.classList.add("opacityOut")
    logo1.classList.add("opacityOut")
    circle.classList.add("opacityOut") 
    metin1.classList.add("opacityOut")
    setTimeout(()=>{
        left.classList.add("poly_anim_sol_ters")
        right.classList.add("poly_anim_sag_ters")
        pulse.classList.remove("scaleUp")
        pulse.classList.add("scaleDown")
        kucuksol.classList.add("none")
        kucuksag.classList.add("none")
        logo.classList.add("none")
        logo1.classList.add("none")
        circle.classList.add("none")
        metin1.classList.add("none");
        stage3.style.display = "block"
        setTimeout(()=>{
            left.classList.add("none");
            right.classList.add("none");
        },2500)
    },2000)
}
//ilk haline döndürmek için kullanılır.
function restart(){
    kucuksol.classList.remove("opacityOut")
    kucuksag.classList.remove("opacityOut")
    birinci.classList.remove("scaleOut")
    ikinci.classList.remove("scaleOut")
    logo.classList.remove("opacityOut")
    logo1.classList.remove("opacityOut")
    circle.classList.remove("opacityIn");
    circle.classList.remove("opacityOut")
    metin1.classList.remove("opacityOut")
    left.classList.remove("poly_anim_sol_ters")
    right.classList.remove("poly_anim_sag_ters")
    kucuksol.classList.remove("none")
    kucuksag.classList.remove("none")
    logo.classList.remove("none")
    logo1.classList.remove("none")
    circle.classList.remove("none")
    metin1.classList.remove("none");
    left.classList.remove("none");
    right.classList.remove("none");
    ikinci.classList.add("second")
    ikinci.classList.remove("block")
}

// stage 3'te arka planda yıldızları göstermeye yarar.

function showStars(sayi){
   
    setTimeout(() => {
        for (let i = 0; i < star.children.length; i++) {
            var stars = document.querySelectorAll("#stars");
            stars[i].style.display = "inline"
            stars[i].style.opacity = "0"
            stars[i].style.width =  sayıUret(1,0.2)+"%"
            stars[i].style.left = sayıUret(1000,1)+"px"
            stars[i].style.top = sayıUret(1000,1)+ "px"
            stars[i].style.animation = "opacityInOut 5s linear" 
        }  
    }, 10);
}

// yıldızları üretir
function createStars(sayi){
    for (let i = 0; i < sayi; i++) {
        var img = document.createElement("img");
        img.className = "stars";
        img.id = "stars";
        img.src= "assets/pics/star.png"
        star.appendChild(img)
    }
}
//yıldızları siler
function deleteStars(){
    var stars = star.getElementsByTagName("img");
    var arr = Array.from(stars); // Collection'ı Array'e çevirir
    for (let i = 0; i < arr.length; i++) {
        star.removeChild(arr[i])  
    }
}

//rastgele sayi üretir.

function sayıUret(sayi,sinir){
      var sayi = Math.random()*sayi+sinir
      return sayi    
}

// elektrik efektini render'lamak içindir
function render(height){

  path[0].setAttribute('d',calculate(0,0,height,20));
  path[1].setAttribute('d',calculate(0,0,height,20));
  path[2].setAttribute('d',calculate(0,50,height,20));
}

//elektrik efektinin ne boyutlarda olacağını belirler

function calculate(x, y, width, height) {
    let sayilar = [[x,height/2]];
    let noktaSayisi = 8;
    let siralar = width/noktaSayisi;
    for(let i = 0; i < noktaSayisi; i++) {
      let cx = siralar*i + (Math.cos(i)*siralar);
      let cy = (Math.random()*height);
      sayilar.push([cx, cy])
    }
    sayilar.push([width, height/2])
    
    let d = sayilar.map((point) => point.join(','));
    return 'M' + d.join(',');
  }


// efekti çalıştırır.
function run(sayi) {
    setTimeout(() => {
        sayi = -50;
        hiz = 0.65
    }, 20000);
    loop = () => {
        
   requestAnimationFrame(loop);

    if(a < sayi){
        a += hiz
        console.log(a)
    }else{
        a = sayi
    }
    render(a)
    }
    loop();
    
  }
 //stage3'teki animasyonların class eklemelerini ve çıkarmalarını yapar
  function exit2(){
    logolar.classList.add("opacityOut");
    bg.classList.add("opacityOut");
    clear.classList.add("opacityOut")
    setTimeout(()=>{
        stage3.classList.add("close")
        stage4.classList.add("block")
        logolar.classList.add("none")
        bg.classList.add("none")
        star.classList.add("none")
        clear.classList.add("none")
    },2000)
}
//stage3'teki animasyonları ilk haline getirir.
function restart2(){
    logolar.classList.remove("opacityOut");
    bg.classList.remove("opacityOut");
    clear.classList.remove("opacityOut")
    stage3.classList.remove("close")
        stage4.classList.remove("block")
        logolar.classList.remove("none")
        bg.classList.remove("none")
        star.classList.remove("none")
        clear.classList.remove("none")
}