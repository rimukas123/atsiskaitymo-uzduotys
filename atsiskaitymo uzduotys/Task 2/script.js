/* ------------------------------ TASK 2 ----------------------------
Parašykite JS kodą, kuris skaičiuos kiek kartų buvo paspaustas mygtukas
su tekstu "CLICK ME". Paspaudimų rezultatas turi būti matomas dešinėje
pusėje esančiame "state" skaičiavimo bloke (<div id="btn__state">0</div>)
------------------------------------------------------------------- */

document.addEventListener('DOMContentLoaded', function() {

    let clickCount = 0;
  
    
    const buttonElement = document.getElementById('btn__element');
  
    
    const stateElement = document.getElementById('btn__state');
  
    
    buttonElement.addEventListener('click', function() {
      
      clickCount++;
  
      stateElement.textContent = clickCount;
    });
  });
  
  