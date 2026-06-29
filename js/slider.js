// ── WAGURI WEB — SLIDER ──

const SLIDES = [
  'assets/images/SV0S.jpg',
  'assets/images/f (1).jpg',
  'assets/images/f (2).jpg',
  'assets/images/f (3).jpg',
  'assets/images/f (4).jpg',
  'assets/images/f (5).jpg',
  'assets/images/f (6).jpg',
  'assets/images/f (7).jpg',
  'assets/images/f (8).jpg',
  'assets/images/f (9).jpg',
]

let currentSlide = 0
let slideInterval = null

function initSlider() {
  const sliderEl = document.getElementById('heroSlider')
  const dotsEl   = document.getElementById('sliderDots')

  if (!sliderEl || SLIDES.length === 0) return

  SLIDES.forEach((src, i) => {
    const slide = document.createElement('div')
    slide.className = 'hero-slide' + (i === 0 ? ' active' : '')
    slide.style.backgroundImage = `url('${src}')`
    sliderEl.appendChild(slide)

    const dot = document.createElement('button')
    dot.className = 'slider-dot' + (i === 0 ? ' active' : '')
    dot.setAttribute('aria-label', `Slide ${i + 1}`)
    dot.addEventListener('click', () => goToSlide(i))
    dotsEl.appendChild(dot)
  })

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

  clearInterval(slideInterval)
  slideInterval = setInterval(nextSlide, 4500)
}

function nextSlide() {
  goToSlide((currentSlide + 1) % SLIDES.length)
}

document.addEventListener('DOMContentLoaded', initSlider)
    
