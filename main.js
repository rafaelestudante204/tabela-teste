const alunos = [
    {
      nome: "teste",
      curso: "ADS"
    },
    {
      nome: "teste dois",
      curso: "ENG"
    },
    {
      nome: "teste três",
      curso: "ENG"
    }
  ];
  
  const formulario = document.getElementById("FormularioAluno");
  const campoNome = document.getElementById("nome");
  const campoCurso = document.getElementById("curso");
  const corpoTabela = document.getElementById("corpoTabela");
  
  function exibir() {
    corpoTabela.innerHTML = "";
  
    for (let posicao = 0; posicao < alunos.length; posicao++) {
      const aluno = alunos[posicao];
  
      corpoTabela.innerHTML += `
        <tr>
          <td>${posicao + 1}</td>
          <td>${aluno.nome}</td>
          <td>${aluno.curso}</td>
        </tr>
      `;
    }
  }
  
  formulario.addEventListener("submit", function (event) {
    event.preventDefault();
  
    const nome = campoNome.value.trim();
    const curso = campoCurso.value.trim();
  
    if (!nome || !curso) {
      alert("Preencha o nome e o curso.");
      return;
    }
  
    alunos.push({ nome, curso });
    exibir();
  
    campoNome.value = "";
    campoCurso.value = "";
    campoNome.focus();
  });
  
  // Exibe os alunos iniciais ao carregar a página
  exibir();