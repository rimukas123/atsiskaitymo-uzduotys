/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotjui atėjus į tinkaį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Informacija apie automobilį (brand) (jo kortelė) bei turi turėti 
bent minimalų stilių;
-------------------------------------------------------------------------- */
document.addEventListener('DOMContentLoaded', function() {
    const outputElement = document.getElementById('output');
  
    
    fetch('cars.json')
      .then(response => response.json())
      .then(data => {
        data.forEach(manufacturer => {
          
          const manufacturerElement = document.createElement('div');
          manufacturerElement.classList.add('manufacturer');
  
          
          const brandHeading = document.createElement('h2');
          brandHeading.textContent = manufacturer.brand;
          manufacturerElement.appendChild(brandHeading);
  
          
          const modelsList = document.createElement('ul');
          
          manufacturer.models.forEach(model => {
            const modelItem = document.createElement('li');
            modelItem.textContent = model;
            modelsList.appendChild(modelItem);
          });
          
          manufacturerElement.appendChild(modelsList);
  
          
          outputElement.appendChild(manufacturerElement);
        });
      })
      .catch(error => {
        
        outputElement.innerHTML = '<p>Įvyko klaida gaunant duomenis.</p>';
      });
  });
  