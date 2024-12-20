

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

  document.querySelectorAll('tbody').forEach(tbody => {
    tbody.addEventListener('change', (event) => {
      if (event.target.classList.contains('checkRisco')) {
        const areaDeTexto = event.target.closest('tr').querySelector('.fontes');
        if (event.target.checked) {
          areaDeTexto.disabled = false;  // Habilita o textarea
        } else {
          areaDeTexto.disabled = true;   // Desabilita o textarea
        }
      }
    });
  });
  

mostraInputOutro('caracteristicasAmbiente', 'inputOutro');
mostraInputOutro('peDireito', 'inputPeDireito');
mostraInputOutro('paredes', 'inputParedes');
mostraInputOutro('piso', 'inputPiso');
mostraInputOutro('cobertura', 'inputCobertura');
mostraInputOutro('ventilacao', 'inputVentilacao');

//Função que mostra o campo input number ao selecionar o EPI
function mostraCA() {
  // Seleciona todos os elementos select com a classe .selectClass
  const selects = document.querySelectorAll(".selectClass");

  // Itera sobre todos os selects
  selects.forEach(select => {
    // Localiza o elemento span associado na mesma linha
    const epi = select.closest("td").querySelector(".spanEPI");

    if (select.value !== "") {
      // Adiciona o campo de texto se houver uma seleção válida
      epi.innerHTML = `<input type="number"  class="form-control no-spin-buttons" placeholder="C.A." inputmode="numeric">`;
    } else {
      // Remove o campo de texto se a seleção for vazia
      epi.innerHTML = "";
    }
  });
}

//Efeito hide tabela
//Risco físico
$(document).ready(function() {
  // Inicialmente, esconda o corpo da tabela
  $('#tabelaRiscosFisicos').hide();

  // Quando clicar no título da tabela, alternar a visibilidade do corpo
  $('#tituloRiscoFisico').click(function() {
    $('#tabelaRiscosFisicos').toggle(); // Alterna entre mostrar e esconder as linhas
  });
});

//Risco químico
$(document).ready(function() {
  // Inicialmente, esconda o corpo da tabela
  $('#tabelaRiscosQuimicos').hide();

  // Quando clicar no título da tabela, alternar a visibilidade do corpo
  $('#tituloRiscoQuimico').click(function() {
    $('#tabelaRiscosQuimicos').toggle(); // Alterna entre mostrar e esconder as linhas
  });
});

//Risco químico
$(document).ready(function() {
  // Inicialmente, esconda o corpo da tabela
  $('#tabelaRiscosBiologicos').hide();

  // Quando clicar no título da tabela, alternar a visibilidade do corpo
  $('#tituloRiscoBiologico').click(function() {
    $('#tabelaRiscosBiologicos').toggle(); // Alterna entre mostrar e esconder as linhas
  });
});

//Risco ergonômico
$(document).ready(function() {
  // Inicialmente, esconda o corpo da tabela
  $('#tabelaRiscosErgonomicos').hide();

  // Quando clicar no título da tabela, alternar a visibilidade do corpo
  $('#tituloRiscoErgonomico').click(function() {
    $('#tabelaRiscosErgonomicos').toggle(); // Alterna entre mostrar e esconder as linhas
  });
});

//Risco Acidente
$(document).ready(function() {
  // Inicialmente, esconda o corpo da tabela
  $('#tabelaRiscosAcidentes').hide();

  // Quando clicar no título da tabela, alternar a visibilidade do corpo
  $('#tituloRiscoAcidente').click(function() {
    $('#tabelaRiscosAcidentes').toggle(); // Alterna entre mostrar e esconder as linhas
  });
});

//Adiciona uma nova linha para inclusão de substancia química
function adicionarSubstancia(){
  let risco = document.getElementById('risco')
  let fonte = document.getElementById('fonte')
  let epi = document.getElementById('epi')

  let varRisco = risco.value.trim()
  let varFonte = fonte.value.trim()
  let varEpi = epi.value.trim()
  
  if(varRisco === '' || varFonte === '' || varEpi === ''){
    alert('Informe os dados antes de adicionar')   
    
  }else{

    //cria uma nova linha tr
    const linha = quimicos.insertRow(7)
    
    
    //adiciona células td à linha
    let celulaRisco = linha.insertCell(0)
    let celulaFonte = linha.insertCell(1)
    let celulaEpi = linha.insertCell(2)
    const celulaAcao = linha.insertCell(3)
  
    //preenche as células com os valores digitados
    celulaRisco.textContent = varRisco
    celulaFonte.textContent = varFonte
    celulaEpi.textContent = varEpi
  
     // Cria o botão de deletar
     const btnDelete = document.createElement('button');
     btnDelete.textContent = 'Remover';
     btnDelete.classList.add('btn', 'btn-danger'); // Adiciona classes para estilização
     btnDelete.addEventListener('click', function (event) {
         event.preventDefault(); // Previne o recarregamento da página
         quimicos.deleteRow(linha.rowIndex); // Remove a linha
     })
  
    celulaAcao.appendChild(btnDelete)
  
    //limpa os campos de entrada
    risco.value = ''
    fonte.value = ''
    epi.value = ''
  }
  
}

 
 

