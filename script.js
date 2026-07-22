/* ==========================================================================
   script.js — LÓGICA DO SITE (GeoBR Demon List)
   ==========================================================================
   Este arquivo LÊ os dados de data.js e MONTA a página.
   Você normalmente não precisa mexer aqui — só em data.js.
   ========================================================================== */

// Guarda em qual aba o usuário está: "hardest", "challenges" ou "events"
let currentTab = "hardest";

// Elementos fixos da página (pegos uma vez, reutilizados depois)
const levelMenuEl = document.getElementById("levelMenu");
const levelDetailEl = document.getElementById("levelDetail");
const eventsPanelEl = document.getElementById("eventsPanel");
const leaderboardBodyEl = document.getElementById("leaderboardBody");
const tabButtons = document.querySelectorAll(".tab-btn");

// ---------------------------------------------------------------------------
// Retorna a lista de níveis correspondente à aba ativa
// ---------------------------------------------------------------------------
function getListForTab(tab) {
  if (tab === "hardest") return mainList;
  if (tab === "challenges") return challenges;
  return []; // aba "events" não usa lista de níveis
}

// ---------------------------------------------------------------------------
// Monta o card de detalhes de UM nível (usado na coluna central)
// ---------------------------------------------------------------------------
function buildLevelCardHTML(level) {
  return `
    <div class="level-card">
      <h2>#${level.position} — ${level.name}</h2>

      <div class="level-info">
        <div>
          <strong>Autor</strong>
          ${level.author}
        </div>
        <div>
          <strong>Verificador</strong>
          ${level.verifier}
        </div>
        <div>
          <strong>ID do nível</strong>
          ${level.levelId}
        </div>
        <div>
          <strong>Posição</strong>
          #${level.position}
        </div>
      </div>

      <p class="level-description">${level.description || ""}</p>

      <div class="video-wrapper">
        <iframe
          src="https://www.youtube.com/embed/${level.videoId}"
          title="Verificação de ${level.name}"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen>
        </iframe>
      </div>
    </div>
  `;
}

// ---------------------------------------------------------------------------
// Renderiza a lista completa (grade de posições) na coluna central,
// usada quando nenhuma fase específica está "aberta" ainda.
// ---------------------------------------------------------------------------
function buildListGridHTML(list) {
  let html = `<div class="list-grid">`;
  list.forEach((level) => {
    html += `
      <div class="list-item" data-position="${level.position}" data-tab="${currentTab}">
        <div class="rank">#${level.position}</div>
        <div class="info">
          <div>${level.name}</div>
          <small>Autor: ${level.author} · Verificador: ${level.verifier}</small>
        </div>
      </div>
    `;
  });
  html += `</div>`;
  return html;
}

// ---------------------------------------------------------------------------
// Renderiza o menu lateral esquerdo com os nomes/posições dos níveis
// ---------------------------------------------------------------------------
function renderLevelMenu() {
  const list = getListForTab(currentTab);
  levelMenuEl.innerHTML = "";

  if (list.length === 0) {
    levelMenuEl.innerHTML = `<li style="cursor:default; background:transparent;">Sem níveis nesta aba</li>`;
    return;
  }

  list.forEach((level) => {
    const li = document.createElement("li");
    li.dataset.position = level.position;
    li.innerHTML = `<span class="pos">#${level.position}</span>${level.name}`;
    li.addEventListener("click", () => showLevel(level.position));
    levelMenuEl.appendChild(li);
  });
}

// ---------------------------------------------------------------------------
// Mostra o detalhe de um nível específico, marcando ele como "ativo" no menu
// ---------------------------------------------------------------------------
function showLevel(position) {
  const list = getListForTab(currentTab);
  const level = list.find((l) => l.position === position);
  if (!level) return;

  levelDetailEl.innerHTML = buildLevelCardHTML(level);

  // Marca o item ativo no menu lateral esquerdo
  document.querySelectorAll(".level-menu li").forEach((li) => {
    li.classList.toggle("active", Number(li.dataset.position) === position);
  });

  // Rola suavemente até o topo do conteúdo central (útil no celular)
  levelDetailEl.scrollIntoView({ behavior: "smooth", block: "start" });
}

// ---------------------------------------------------------------------------
// Renderiza o conteúdo principal da aba "Hardest Levels" / "Challenges":
// mostra a grade com todas as posições, e cada item abre o detalhe ao clicar.
// ---------------------------------------------------------------------------
function renderListTab() {
  const list = getListForTab(currentTab);
  levelDetailEl.innerHTML = buildListGridHTML(list);

  // Clique em qualquer item da grade abre o detalhe daquele nível
  document.querySelectorAll(".list-item").forEach((item) => {
    item.addEventListener("click", () => {
      showLevel(Number(item.dataset.position));
    });
  });
}

// ---------------------------------------------------------------------------
// Renderiza a aba "Eventos"
// ---------------------------------------------------------------------------
function renderEvents() {
  eventsPanelEl.innerHTML = "";

  if (events.length === 0) {
    eventsPanelEl.innerHTML = `<p>Nenhum evento no momento.</p>`;
    return;
  }

  events.forEach((event) => {
    eventsPanelEl.innerHTML += `
      <div class="event-card">
        <h3>${event.title}</h3>
        <div class="event-date">${event.date}</div>
        <p>${event.description}</p>
      </div>
    `;
  });
}

// ---------------------------------------------------------------------------
// Renderiza a tabela de leaderboard na coluna direita
// (ordena do maior para o menor número de pontos automaticamente)
// ---------------------------------------------------------------------------
function renderLeaderboard() {
  leaderboardBodyEl.innerHTML = "";

  const sorted = [...leaderboard].sort((a, b) => b.points - a.points);

  sorted.forEach((player, index) => {
    leaderboardBodyEl.innerHTML += `
      <tr>
        <td>${index + 1}</td>
        <td>${player.name}</td>
        <td>${player.points}</td>
      </tr>
    `;
  });
}

// ---------------------------------------------------------------------------
// Alterna entre as abas: Hardest Levels / Challenges / Eventos
// ---------------------------------------------------------------------------
function switchTab(tab) {
  currentTab = tab;

  // Atualiza visual dos botões de aba
  tabButtons.forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.tab === tab);
  });

  if (tab === "events") {
    levelDetailEl.classList.add("hidden");
    eventsPanelEl.classList.remove("hidden");
    renderEvents();
  } else {
    eventsPanelEl.classList.add("hidden");
    levelDetailEl.classList.remove("hidden");
    renderListTab();
  }

  // O menu da esquerda sempre reflete a aba atual
  renderLevelMenu();
}

// ---------------------------------------------------------------------------
// Liga os cliques nos botões das abas
// ---------------------------------------------------------------------------
tabButtons.forEach((btn) => {
  btn.addEventListener("click", () => switchTab(btn.dataset.tab));
});

// ---------------------------------------------------------------------------
// INICIALIZAÇÃO: roda assim que a página carrega
// ---------------------------------------------------------------------------
function init() {
  renderLevelMenu();
  renderListTab();     // começa mostrando a grade da aba "Hardest Levels"
  renderLeaderboard();
}

init();
