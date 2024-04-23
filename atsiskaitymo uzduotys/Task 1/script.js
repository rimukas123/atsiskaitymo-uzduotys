/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formulė: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */
document.addEventListener('DOMContentLoaded', function() {
   
    document.querySelector('form').addEventListener('submit', function(event) {
     
      event.preventDefault();
  
     
      const kilograms = parseFloat(document.getElementById('search').value);
  
      
      if (isNaN(kilograms)) {
        alert('Įveskite tinkamą skaičių!');
        return; 
      }
  
      
      const pounds = kilograms * 2.20462;
  
      
      document.getElementById('output').innerHTML = `<p>${kilograms} kilogramai yra ${pounds.toFixed(2)} svarai</p>`;
    });
  });
  