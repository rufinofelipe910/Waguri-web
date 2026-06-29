// ── WAGURI WEB — COMMANDS ──

const CATEGORIES = [
  { id: 'ia',    label: '🤖 IA' },
  { id: 'dl',    label: '📥 Descargas' },
  { id: 'rpg',   label: '⚔️ RPG' },
  { id: 'anime', label: '🎌 Anime' },
  { id: 'tools', label: '⚙️ Herramientas' },
  { id: 'fun',   label: '🎮 Diversión' },
  { id: 'eco',   label: '💰 Economía' },
]

const COMMANDS = {
  ia: [
    { icon: '🔵', name: 'claude',  desc: 'Habla con Claude AI',       badge: 'IA' },
    { icon: '🟡', name: 'gemini',  desc: 'Habla con Google Gemini',   badge: 'IA' },
    { icon: '🟢', name: 'GPT',     desc: 'Habla con ChatGPT',         badge: 'IA' },
    { icon: '🟠', name: 'copilot', desc: 'Habla con Microsoft Copilot', badge: 'IA' },
    { icon: '🖼️', name: 'flux',    desc: 'Genera imágenes con IA',    badge: 'IA' },
  ],
  dl: [
    { icon: '🎵', name: 'play',         desc: 'Descarga audio de YouTube' },
    { icon: '🎬', name: 'play2',        desc: 'Descarga video de YouTube' },
    { icon: '📷', name: 'ig',           desc: 'Descarga de Instagram' },
    { icon: '📘', name: 'fb',           desc: 'Descarga de Facebook' },
    { icon: '🔥', name: 'mediafire',    desc: 'Descarga desde MediaFire' },
    { icon: '📱', name: 'APK',          desc: 'Descarga aplicaciones APK' },
    { icon: '📌', name: 'pin',          desc: 'Descarga de Pinterest' },
    { icon: '🔍', name: 'tiktoksearch', desc: 'Busca y descarga de TikTok' },
  ],
  rpg: [
    { icon: '🏹', name: 'cazar',       desc: 'Inicia una misión de caza' },
    { icon: '📜', name: 'contratos',   desc: 'Ver contratos disponibles' },
    { icon: '✅', name: 'aceptar',     desc: 'Acepta un contrato' },
    { icon: '🏆', name: 'completar',   desc: 'Completa el contrato activo' },
    { icon: '👤', name: 'perfil',      desc: 'Ver tus estadísticas RPG' },
    { icon: '🎁', name: 'diario',      desc: 'Recompensa diaria' },
    { icon: '⛏️', name: 'minar',       desc: 'Mina criptomonedas' },
    { icon: '💸', name: 'transferir',  desc: 'Envía créditos a otro usuario' },
    { icon: '🏪', name: 'taller',      desc: 'Tienda de mejoras' },
    { icon: '🛒', name: 'comprar',     desc: 'Compra ítems del taller' },
    { icon: '🧸', name: 'comprar.boy', desc: 'Compra objetos especiales' },
    { icon: '🔎', name: 'item',        desc: 'Info de un objeto' },
    { icon: '💰', name: 'vender',      desc: 'Vende ítems del inventario' },
    { icon: '⚔️', name: 'duelo',       desc: 'Reta a duelo PvP' },
    { icon: '💻', name: 'hack',        desc: 'Hackea para ganar recompensas' },
    { icon: '🥇', name: 'best',        desc: 'Ranking de jugadores' },
    { icon: '📈', name: 'estadisticas',desc: 'Stats detalladas' },
    { icon: '🎒', name: 'inventario',  desc: 'Revisa tu equipo' },
  ],
  anime: [
    { icon: '🛁', name: 'bath',         desc: 'Bañarse' },
    { icon: '🦷', name: 'bite',         desc: 'Morder' },
    { icon: '😊', name: 'blush',        desc: 'Sonrojarse' },
    { icon: '😴', name: 'bored',        desc: 'Estar aburrido' },
    { icon: '🌙', name: 'buenas-noches',desc: 'Desear buenas noches' },
    { icon: '☀️', name: 'buenos-dias',  desc: 'Desear buenos días' },
    { icon: '😢', name: 'cry',          desc: 'Llorar' },
    { icon: '💃', name: 'dance',        desc: 'Bailar' },
    { icon: '🚬', name: 'fumar',        desc: 'Fumar' },
    { icon: '🤗', name: 'hug',          desc: 'Abrazar' },
    { icon: '💏', name: 'kiss',         desc: 'Besar' },
    { icon: '🤔', name: 'pensar',       desc: 'Pensar' },
    { icon: '😱', name: 'sacred',       desc: 'Asustarse' },
    { icon: '👋', name: 'slap',         desc: 'Dar una cachetada' },
    { icon: '💤', name: 'sleep',        desc: 'Dormir' },
  ],
  tools: [
    { icon: '⚡', name: 'ping',       desc: 'Tiempo de respuesta del bot' },
    { icon: '👑', name: 'autoadmin',  desc: 'Hace admin al bot' },
    { icon: '🔽', name: 'demote',     desc: 'Quitar admin a un usuario' },
    { icon: '🚪', name: 'leave',      desc: 'Sale del grupo' },
    { icon: '📢', name: 'tag',        desc: 'Menciona a todos' },
    { icon: '📣', name: 'invocar',    desc: 'Invoca al grupo' },
    { icon: '😶', name: 'sticker',    desc: 'Crea un sticker' },
    { icon: '🛡️', name: 'antilink',   desc: 'Activa el anti-enlace' },
    { icon: '🗑️', name: 'del',        desc: 'Elimina un mensaje' },
    { icon: '📥', name: 'join',       desc: 'Unirse a otro grupo' },
    { icon: '📋', name: 'reg',        desc: 'Registrarse en el bot' },
    { icon: '🎭', name: 'emojimix',   desc: 'Combina emojis' },
    { icon: '🎵', name: 'letra',      desc: 'Busca letra de canción' },
    { icon: '🌐', name: 'link',       desc: 'Enlaces oficiales' },
    { icon: '📦', name: 'repo',       desc: 'Repositorio del bot' },
    { icon: '🧑‍💻', name: 'creador',   desc: 'Ver creadores del bot' },
    { icon: '🔄', name: 'reload',     desc: 'Reactiva el bot' },
    { icon: '🆙', name: 'update',     desc: 'Actualiza el bot' },
  ],
  fun: [
    { icon: '🕵️', name: 'doxear', desc: 'Simula un doxeo (broma)' },
    { icon: '📖', name: 'facto',  desc: 'Dato aleatorio' },
    { icon: '💋', name: 'piropo', desc: 'Tira un piropo' },
    { icon: '🎯', name: 'reto',   desc: 'El bot te reta' },
    { icon: '📊', name: 'top',    desc: 'Top 10 de una categoría' },
    { icon: '🧠', name: 'iqtest', desc: 'Test de IQ' },
    { icon: '🌈', name: 'gey',    desc: 'Señala a alguien (broma)' },
  ],
  eco: [
    { icon: '💼', name: 'trabajar', desc: 'Gana dinero con trabajos' },
    { icon: '💳', name: 'balance',  desc: 'Ver efectivo y banco' },
    { icon: '💵', name: 'pay',      desc: 'Transferir dinero' },
    { icon: '🦹', name: 'rob',      desc: 'Robar (riesgoso)' },
    { icon: '🏦', name: 'deposit',  desc: 'Depositar al banco' },
    { icon: '🏧', name: 'withdraw', desc: 'Retirar del banco' },
  ],
}

let activeCategory = 'ia'

function renderTabs() {
  const tabsEl = document.getElementById('cmdTabs')
  if (!tabsEl) return

  CATEGORIES.forEach(cat => {
    const btn = document.createElement('button')
    btn.className = 'cmd-tab' + (cat.id === activeCategory ? ' active' : '')
    btn.textContent = cat.label
    btn.dataset.cat = cat.id
    btn.addEventListener('click', () => {
      document.querySelectorAll('.cmd-tab').forEach(t => t.classList.remove('active'))
      btn.classList.add('active')
      activeCategory = cat.id
      renderCommands(cat.id)
    })
    tabsEl.appendChild(btn)
  })
}

function renderCommands(catId) {
  const listEl = document.getElementById('cmdList')
  if (!listEl) return

  listEl.innerHTML = ''
  const list = COMMANDS[catId] || []

  list.forEach(cmd => {
    const item = document.createElement('div')
    item.className = 'cmd-item'
    item.innerHTML = `
      <div class="cmd-icon-wrap">${cmd.icon}</div>
      <div class="cmd-info">
        <div class="cmd-name">.${cmd.name}</div>
        ${cmd.desc ? `<div class="cmd-desc">${cmd.desc}</div>` : ''}
      </div>
      ${cmd.badge ? `<span class="cmd-badge">${cmd.badge}</span>` : ''}
    `
    listEl.appendChild(item)
  })
}

document.addEventListener('DOMContentLoaded', () => {
  renderTabs()
  renderCommands(activeCategory)
})