// ── WAGURI WEB — SLIDER ──
// Agrega tus imágenes aquí dentro de assets/images/
// y pon los nombres de archivo en el array de abajo

const SLIDES = [
  // Reemplaza estas URLs con tus propias imágenes de Waguri
  // Ejemplo: 'assets/images/waguri1.jpg'
  'https://i.pinimg.com/originals/6e/0e/a2/6e0ea2aa8e40411de4a57b4d9d4a5a1f.jpg',
  'https://i.pinimg.com/originals/3e/49/07/3e49072b2a4d05a4bfb1e7e02e4b2b3b.jpg',
  'https://i.pinimg.com/originals/b7/4e/50/b74e50f2b1d1f2c2b0e3c4d5e6f7a8b9.jpg',
]

let currentSlide = 0
let slideInterval = null

function initSlider() {
  const sliderEl = document.getElementById('heroSlider')
  const dotsEl   = document.getElementById('sliderDots')

  if (!sliderEl || SLIDES.length === 0) return

  // Crear slides
  SLIDES.forEach((src, i) => {
    const slide = document.createElement('div')
    slide.className = 'hero-slide' + (i === 0 ? ' active' : '')
    slide.style.backgroundImage = `url('${src}')`
    sliderEl.appendChild(slide)

    // Crear dot
    const dot = document.createElement('button')
    dot.className = 'slider-dot' + (i === 0 ? ' active' : '')
    dot.setAttribute('aria-label', `Slide ${i + 1}`)
    dot.addEventListener('click', () => goToSlide(i))
    dotsEl.appendChild(dot)
  })

  // Auto-play
  slideInterval = setInterval(nextSlide, 4500)
}

function goToSlide(index) {
  const slides = document.querySelectorAll('.hero-slide')
  const dots   = document.querySelectorAll('.slider-dot')

  slides[currentSlide].classList.remove('active')
  dots[currentSlide].classList.remove('active')

  currentSlide = index
  slides[currentSlide].classList.add('active')
  dots[currentSlide].classList.add('active')

  // Reiniciar timer
  clearInterval(slideInterval)
  slideInterval = setInterval(nextSlide, 4500)
}

function nextSlide() {
  const next = (currentSlide + 1) % SLIDES.length
  goToSlide(next)
}

// Iniciar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', initSlider)