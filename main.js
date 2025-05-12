function mostrarConexao() {
  const mensagem = "O campo produz alimentos, fibras e energia. A cidade consome, transforma e apoia com tecnologia, educação e comércio. Juntos, campo e cidade formam um ciclo de cooperação!";
  document.getElementById("mensagem").innerText = mensagem;
}

const curiosidades = [
  "O Brasil é um dos maiores produtores de alimentos do mundo.",
  "A agricultura familiar representa mais de 70% dos alimentos consumidos no país.",
  "Drones, sensores e apps estão modernizando a produção agrícola.",
  "O campo também fornece matéria-prima para a indústria e o comércio.",
  "A feira da sua cidade é um elo direto com os produtores rurais locais."
];

function mostrarCuriosidade() {
  const index = Math.floor(Math.random() * curiosidades.length);
  document.getElementById("curiosidade").innerText = curiosidades[index];
}

function mostrarApoio() {
  const lista = document.getElementById("apoio-lista");
  lista.innerHTML = ""; // Limpa a lista antes de adicionar novamente

  const apoios = [
    "Universidades e institutos de pesquisa desenvolvem novas técnicas agrícolas.",
    "A cidade oferece acesso a cursos, feiras e capacitações para os produtores.",
    "Empresas urbanas fornecem maquinário, sementes e insumos agrícolas.",
    "O consumidor consciente valoriza produtos locais e sustentáveis.",
    "Políticas públicas urbanas ajudam com crédito rural e assistência técnica."
  ];

  apoios.forEach(apoio => {
    const li = document.createElement("li");
    li.textContent = "✔️ " + apoio;
    lista.appendChild(li);
  });
}
