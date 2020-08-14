//Son sahnedeki animasyonu Class'lı yapıyla ile kodlamak istedim. 

class Noktalar{
    balloon = document.getElementById("balloon")
    arttir = 0
    constructor(){
        this.createPoints();
        console.log(this.sayiUret(1080,1))
        this.dagit()
        this.anime()
    }

    //noktaları oluşturur.
    createPoints(){
        for (let i = 0; i < 20; i++) {
            var div = document.createElement("div");
            div.className = "balonlar";
            div.id = "balonlar";
            this.balloon.appendChild(div)
        }
    }
    //rastgele sayi üretir.
    sayiUret(sayi,sinir){
        var sayi = Math.random()*sayi+sinir
        return sayi.toFixed(3)
    }
    //üretilen noktaları dagitir
    dagit(){
        let balonlar = document.querySelectorAll(".balonlar")
        
        balonlar.forEach(balon => {
            
            let wnh = this.sayiUret(3,1)
            balon.style.width = wnh + "px"
            balon.style.height = wnh + "px";
            balon.style.borderRadius = wnh/2 + "px"
            balon.style.left = this.sayiUret(1920,1) + "px"
            balon.style.bottom = this.sayiUret(1080,1) + "px"
        });
    }
    // noktaların animasyonu
    anime(){
        let balonlar = document.querySelectorAll(".balonlar")
        var items = [].slice.call(document.getElementsByClassName('balonlar'))
        var sayi = this.arttir++
        setTimeout(() => {
            for (let i = 0; i < 20; i++) {
                
                balonlar[i].animate([
                    { transform: 'rotate(0deg) translate(0px) rotate(0deg) scale(0)'}, 
                    { transform: 'rotate('+ this.sayiUret(180,1)+ 'deg) translate('+ this.sayiUret(-500,1)+ 'px) rotate('+ this.sayiUret(-180,1)+ 'deg) scale(1)'},
                    { transform: ' rotate('+ this.sayiUret(360,1)+ 'deg) translate('+ this.sayiUret(-1000,1)+ 'px) rotate('+ this.sayiUret(-360,1)+ 'deg) scale(0)'}
                ], {
                    duration: 20000+ i*500,
                    iterations: Infinity,
                })
                }
           }, 250);

        }
}

setTimeout(()=>{
    new Noktalar();
},52000)