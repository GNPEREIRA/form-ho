

function mostraInputOutro(selectId, inputDivId) {
  const selectElement = document.getElementById(selectId);
  const inputDiv = document.getElementById(inputDivId);

  selectElement.addEventListener('change', () => {
      const outroSelected = Array.from(selectElement.selectedOptions)
          .some(option => option.value === "Outro");

      // Verifica se o campo já existe
      let inputField = inputDiv.querySelector('input');

      if (outroSelected && !inputField) {
          // Cria o campo de texto
          inputField = document.createElement('input');
          inputField.type = 'text';
          inputField.name = `${selectId}_outro`;
          inputField.className = 'form-control';
          inputField.placeholder = 'Especifique';
          inputDiv.appendChild(inputField);
      } else if (!outroSelected && inputField) {
          // Remove o campo de texto se a opção "Outro" não estiver selecionada
          inputDiv.removeChild(inputField);
      }
  });
}

//
// document.querySelector('tbody').addEventListener('change', (event) => {
//     if (event.target.classList.contains('selectClass')) {
//       const span = event.target.closest('tr').querySelector('.spanEPI');
//       const selectedValue = event.target.value;
//       if (selectedValue) {
//         span.innerHTML = `<input type="number" inputmode="numeric" class="ca" placeholder="C.A." >`;
//       } else{
//         span.innerHTML = '';
//       }
//     }
//   });


const selectElements = document.querySelectorAll('.selectClass');
const inputFields = document.querySelectorAll('.spanEPI');

function mostrarCampoEntrada(elementoSelect, campoEntrada) {
    const opcaoSelecionada = elementoSelect.options[elementoSelect.selectedIndex].value;

    if (opcaoSelecionada === 'A') {
        campoEntrada.style.display = 'block';
    } else {
        campoEntrada.style.display = 'none';
    }
}

selectElements.forEach((selectElement, index) => {
    selectElement.addEventListener('change', () => {
        mostrarCampoEntrada(selectElement, inputFields[index]);
    });
});

//Habilita o textarea ao clicar no checkbox
document.querySelector('tbody').addEventListener('change', (event) => {
    if (event.target.classList.contains('checkRisco')) {
      const areaDeTexto = event.target.closest('tr').querySelector('.fontes');
      if (event.target.checked) {
        areaDeTexto.disabled = false
      } else {
        areaDeTexto.disabled = true
      }
    }
  });


mostraInputOutro('caracteristicasAmbiente', 'inputOutro');
mostraInputOutro('peDireito', 'inputPeDireito');
mostraInputOutro('paredes', 'inputParedes');
mostraInputOutro('piso', 'inputPiso');
mostraInputOutro('cobertura', 'inputCobertura');
mostraInputOutro('ventilacao', 'inputVentilacao');
mostrarCampoEntrada('elementoSelect', 'campoEntrada')






