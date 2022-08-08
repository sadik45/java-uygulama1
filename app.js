const body = document.querySelector("body");
const button = document.querySelector("button");
const colors = [
    "black" ,
    "yellow" ,
    "green" ,
    "#c7bf67" ,
    "#7b55cf" ,
    "#ad4747" ,
    "#2963ab"];

button.addEventListener( "click" , changeBacround);

let sıra = 0;

function changeBacround(){
    //rastgele bir renk
   // const rastgeleSayı = Math.floor(Math.random() * colors.length );
    
   // const secilenRenk = colors[rastgeleSayı];

   // console.log(rastgeleSayı , secilenRenk);

   // body.style.backgroundColor = secilenRenk;

    //sırayla arkaplan rengini seç

  
    if(sıra==7) sıra=0;

    const secilenRenk = colors[sıra];

    sıra++;

    body.style.backgroundColor = secilenRenk;
}
