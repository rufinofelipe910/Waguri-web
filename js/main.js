// ── WAGURI WEB — MAIN ──

document.addEventListener('DOMContentLoaded', () => {

  // ── PÉTALOS DE SAKURA ──
  const petalsEl = document.getElementById('petals')
  for (let i = 0; i < 30; i++) {
    const p = document.createElement('div')
    p.className = 'petal'
    const size = 6 + Math.random() * 10
    Object.assign(p.style, {
      left:             `${Math.random() * 100}%`,
      width:            `${size}px`,
      height:           `${size}px`,
      animationDuration:`${7 + Math.random() * 10}s`,
      animationDelay:   `${Math.random() * 14}s`,
    })
    petalsEl.appendChild(p)
  }

  // ── NAVBAR SCROLL ──
  const navbar = document.getElementById('navbar')
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 20)
  })

  // ── HAMBURGER ──
  const hamburger  = document.getElementById('hamburger')
  const mobileMenu = document.getElementById('mobileMenu')
  hamburger?.addEventListener('click', () => {
    mobileMenu.classList.toggle('open')
  })
  mobileMenu?.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => mobileMenu.classList.remove('open'))
  })

  // ── SCROLL REVEAL ──
  const revealObs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible')
        revealObs.unobserve(e.target)
      }
    })
  }, { threshold: 0.12 })
  document.querySelectorAll('.reveal').forEach(el => revealObs.observe(el))

  // ── CONTADORES ANIMADOS ──
  const countObs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (!e.isIntersecting) return
      const el     = e.target
      const target = +el.dataset.count
      let cur      = 0
      const step   = Math.ceil(target / 40)
      const timer  = setInterval(() => {
        cur = Math.min(cur + step, target)
        el.textContent = cur
        if (cur >= target) clearInterval(timer)
      }, 30)
      countObs.unobserve(el)
    })
  }, { threshold: 0.5 })
  document.querySelectorAll('[data-count]').forEach(el => countObs.observe(el))

})