/* ==========================================================================
   data.js — BANCO DE DADOS DO SITE (GeoBR Demon List)
   ==========================================================================
   ESTE É O ÚNICO ARQUIVO QUE VOCÊ PRECISA EDITAR NO DIA A DIA.

   Aqui ficam TODOS os dados do site: a lista principal (Hardest Levels),
   os Challenges, os Eventos e o Leaderboard (placar de jogadores).

   REGRAS SIMPLES PARA EDITAR:
   1. Cada nível é um bloco { ... } separado por vírgula.
   2. Para ADICIONAR um nível novo: copie um bloco inteiro (do { até }),
      cole antes do "];" da lista e mude os valores.
   3. Para MUDAR o Top 1: edite os valores dentro do primeiro bloco de
      "mainList" (position: 1).
   4. NÃO apague vírgulas, chaves { } ou aspas " ", isso quebra o site.
   5. O campo "videoId" é só o CÓDIGO do vídeo do YouTube (a parte depois
      de "v=" no link, ou depois de "youtu.be/"). Não precisa colar o link
      inteiro.
   ========================================================================== */

// ---------------------------------------------------------------------------
// 1) LISTA PRINCIPAL (Hardest Levels / Main List)
// ---------------------------------------------------------------------------
const mainList = [
  {
    position: 1,                     // Posição na lista (#1 = mais difícil)
    name: "Nightmare Royal",         // Nome da fase
    author: "GD_Fenix",              // Autor (criador do nível) - EXEMPLO, troque à vontade
    verifier: "Terkimalon",          // Verificador
    levelId: "000000001",            // ID do nível no Geometry Dash (fictício, troque depois)
    videoId: "dQw4w9WgXcQ",          // Código do vídeo do YouTube (verificação)
    description: "O nível mais difícil do GeoBR até o momento. Uma jornada extrema de precisão e memorização."
  },
  {
    position: 2,
    name: "Abyss Genesis",
    author: "DarkPulse",
    verifier: "Zoink",
    levelId: "000000002",
    videoId: "dQw4w9WgXcQ",
    description: "Um clássico moderno cheio de timings apertados."
  },
  {
    position: 3,
    name: "Chaos Theory BR",
    author: "NexoDev",
    verifier: "Sunix",
    levelId: "000000003",
    videoId: "dQw4w9WgXcQ",
    description: "Nível com decorações pesadas e gameplay técnico."
  },
  {
    position: 4,
    name: "Frostbyte",
    author: "IceCoreGD",
    verifier: "Knobbelboy",
    levelId: "000000004",
    videoId: "dQw4w9WgXcQ",
    description: "Tema gelado, gameplay quente. Muito dual e mini."
  },
  {
    position: 5,
    name: "Solar Requiem",
    author: "SunDev",
    verifier: "Tigerlin",
    levelId: "000000005",
    videoId: "dQw4w9WgXcQ",
    description: "Nível com wave técnica e final brutal."
  }
  // 👉 Para adicionar o nível #6, copie um bloco acima, cole aqui embaixo
  //    (lembrando da vírgula "," antes) e mude os dados.
];

// ---------------------------------------------------------------------------
// 2) CHALLENGES (desafios separados da lista principal)
// ---------------------------------------------------------------------------
const challenges = [
  {
    position: 1,
    name: "Spam Challenge BR",
    author: "PixelWave",
    verifier: "Terkimalon",
    levelId: "000000101",
    videoId: "dQw4w9WgXcQ",
    description: "Desafio focado 100% em spam de clique."
  },
  {
    position: 2,
    name: "Timing Trial",
    author: "ClickMaster",
    verifier: "Zoink",
    levelId: "000000102",
    videoId: "dQw4w9WgXcQ",
    description: "Desafio de timings curtos e precisos."
  }
];

// ---------------------------------------------------------------------------
// 3) EVENTOS (avisos e novidades da comunidade)
// ---------------------------------------------------------------------------
const events = [
  {
    title: "Lançamento oficial da GeoBR Demon List!",
    date: "21/07/2026",
    description: "A lista está no ar! Envie seus recordes e verificações para a nossa equipe."
  },
  {
    title: "Novo verificador procurado",
    date: "22/07/2026",
    description: "Estamos buscando verificadores para os próximos níveis extremos. Entre em contato pelo Discord."
  }
  // 👉 Para adicionar um evento novo, copie um bloco { ... } acima e cole aqui.
];

// ---------------------------------------------------------------------------
// 4) LEADERBOARD (placar de jogadores / pontos)
// ---------------------------------------------------------------------------
// Dica: quanto mais alto o nível completado, mais pontos ele costuma valer.
// Você decide a pontuação de cada nível e soma manualmente aqui.
const leaderboard = [
  { name: "Terkimalon", points: 950 },
  { name: "Zoink", points: 820 },
  { name: "Sunix", points: 705 },
  { name: "Knobbelboy", points: 640 },
  { name: "Tigerlin", points: 500 }
  // 👉 Para adicionar um jogador novo, copie uma linha { ... } acima.
];
