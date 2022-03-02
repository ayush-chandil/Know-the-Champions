const cards=document.querySelectorAll('.memory-game');

let flippedcard=false;
let firstcard,secondcard;
let boardlock=false;

function flipcard(){

    if(boardlock){
        return;
    }

    if (this === firstcard) return;
    
    this.classList.add('flip');

    if(!flippedcard){
        flippedcard=true;
        firstcard=this;
       return;  
    }
    
        flippedcard=false;
        secondcard=this;

    check();
}

 function check(){
    if(firstcard.dataset.framework=== secondcard.dataset.framework){
        disablecards();
    }
    else{
        unflipcards();
    }
 }
  
 function disablecards(){
    firstcard.removeEventListener('click',flipcard);
    secondcard.removeEventListener('click',flipcard);
 }
 
 function unflipcards(){
     boardlock=true;
       setTimeout(() => {
        firstcard.classList.remove('flip');
        secondcard.classList.remove('flip');
       boardlock=false; 
    }, 1500);
} 


function resetBoard() {
    [flippedcard,boardlock] = [false, false];
    [firstcard, secondcard] = [null, null];
  }
  

(function shuffle() {
    cards.forEach(card => {
      let randomPos = Math.floor((Math.random() * 12)+1);
      card.style.order = randomPos;
    });
  })();


cards.forEach(card=>card.addEventListener('click',flipcard));


