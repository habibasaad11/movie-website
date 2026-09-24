const images = {
  hero:     './14iAUJSgublOVnkymVstP2K5Vn7.jpg',
  dune:     './dckdFbD6JShS8fsP4RSPQPnWUHj.jpg',
  night:    './7kRYHH9H9PjBFwz1FprbHB2AAjI.jpg',
  neon:     './20th centery girl.webp',
  cinema:   './openhimer.webp',
  tv:       './the gangster and the cop.webp',
  future:   './midnight runners.webp',
  portrait: './rambo.webp',
  century:  './the gangster and the cop.webp',
  gangster: './the gangster and the cop.webp',
  echo:     './how to lose a guy.webp',
  ember:    './the gangster and the cop.webp',
  drift:    './prada2.webp',

  // series images
  pulse: './36BnxmIvWvOsMmlQfbI0ilTfuvh.webp',
  static: './the office.webp',
  harbor: './the vampire dairies.webp',
  silver: './When life gives you tangerines.webp',
  shadow: './cukur.webp',
  lantern: './3in sehrya.webp',
  bloom: './zat.webp',
  tide: './shop for killers.webp',
  rift: './yargi.webp',
  anne: './anne with an e.webp',
}

const movies = [
  { title: 'Spider-Man Brand New Day', meta: '2026 · 2h 25m', genre: 'Sci-Fi · Action', image: images.hero, score: '8.9' },
  { title: 'The Stories', meta: '2026 · 1h 41m', genre: 'Drama · Comedy', image: images.dune, score: '8.4' },
  { title: 'Enola Holmes 3', meta: '2026 · 1h 49m', genre: 'Adventure · Crime', image: images.night, score: '8.7' },
  { title: 'oppenhimer', meta: '2023 · 3h 1m', genre: 'Drama · History', image: images.cinema, score: '8.1' },
  { title: 'Midnight Runners', meta: '2017 · 1h 49m', genre: 'Comedy  · Thriller', image: images.future, score: '8.6' },
  { title: 'How to Lose a Guy in 10 Days', meta: '2003 · 1h 56m', genre: 'Comedy · Romance', image: images.echo, score: '8.3' },
  { title: '20th Century Girl', meta: '2022 · 1h 59m', genre: 'Romance · Drama', image: images.neon, score: '8.2' },
  { title: 'Seeking Haven for Mr.Rambo', meta: '2025 · 1h 45m', genre: 'Drama · Thriller', image: images.portrait, score: '8.5' },
  { title: 'The Gangster,The Cop,The Devil', meta: '2019 · 1h 50m', genre: 'Action · Crime', image: images.ember, score: '8.0' },
  { title: 'The Devil Wears Prada 2', meta: '2026 · 1h 50m', genre: 'Comedy · Drama', image: images.drift, score: '8.7' }
]

const series = [
  { title: 'Teach You a Lesson', meta: 'S1 · 10 Episodes', genre: 'Action · Drama', image: images.pulse, score: '9.2' },
  { title: 'The Office', meta: 'S1 · 10 Episodes', genre: 'Mystery · Sci-Fi', image: images.static, score: '8.8' },
  { title: 'The Vampire Diaries', meta: 'S3 · 6 Episodes', genre: 'Drama · Thriller', image: images.harbor, score: '8.6' },
  { title: 'When L ife Gives You Tangerines', meta: 'S1 · 8 Episodes', genre: 'Sci-Fi · Adventure', image: images.silver, score: '8.9' },
  { title: 'Anne With an E', meta: 'S2 · 10 Episodes', genre: 'Crime · Mystery', image: images.anne, score: '8.5' },
  { title: 'Cukur', meta: 'S1 · 8 Episodes', genre: 'Drama · Mystery', image: images.shadow, score: '8.4' },
  { title: 'Magic Eye', meta: 'S2 · 7 Episodes', genre: 'Sci-Fi · Drama', image: images.lantern, score: '8.7' },
  { title: 'A Girl Named Zat', meta: 'S1 · 6 Episodes', genre: 'Crime · Thriller', image: images.bloom, score: '8.2' },
  { title: 'Yargi', meta: 'S3 · 10 Episodes', genre: 'Sci-Fi · Mystery', image: images.rift, score: '8.9' },
  { title: 'A Shop For Killers', meta: 'S1 · 8 Episodes', genre: 'Adventure · Drama', image: images.tide, score: '8.1' }
]

/* ---------- SVG Icons ---------- */

const ICONS = {
  plus: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M12 5v14M5 12h14"></path></svg>',
  play: '<svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="m8 5 11 7-11 7V5Z"></path></svg>',
}

/* ---------- Card Template ---------- */

function createCard(item, index, type = 'movie', isSaved = false) {
  const rank = String(index + 1).padStart(2, '0')
  const extraClass = index >= 5 && !isSaved ? ' extra-card' : ''
  const action = isSaved ? 'remove' : 'add'
  const actionLabel = isSaved ? `Remove ${item.title} from list` : `Add ${item.title} to list`

  return `
    <article class="media-card${extraClass}" data-title="${item.title.toLowerCase()}" data-genre="${item.genre.toLowerCase()}" data-type="${type}">
      <div class="poster-wrap">
        <img src="${item.image}" alt="${item.title} artwork" loading="lazy" />
        <div class="poster-shade"></div>
        <span class="rank">${rank}</span>
        <button class="quick-add" data-action="${action}" data-title="${item.title}" aria-label="${actionLabel}">
          ${isSaved ? '×' : ICONS.plus}
        </button>
        <button class="poster-play" data-action="play" data-title="${item.title}" aria-label="Play ${item.title}">
          ${ICONS.play}
        </button>
      </div>
      <div class="card-copy">
        <div class="card-title-row">
          <h3>${item.title}</h3>
          <span class="rating">★ ${item.score}</span>
        </div>
        <p>${item.meta} <span class="dot">·</span> ${item.genre}</p>
      </div>
    </article>
  `
}

/* ---------- Render Grids ---------- */

function renderGrids() {
  const moviesGrid = document.getElementById('moviesGrid')
  const seriesGrid = document.getElementById('seriesGrid')

  if (moviesGrid) moviesGrid.innerHTML = movies.map((item, index) => createCard(item, index, 'movie')).join('')
  if (seriesGrid) seriesGrid.innerHTML = series.map((item, index) => createCard(item, index, 'series')).join('')
}

function getSavedTitles() {
  try {
    return JSON.parse(localStorage.getItem('nocredits-list') || '[]')
  } catch {
    return []
  }
}

function saveTitle(title) {
  const item = [...movies, ...series].find((entry) => entry.title === title)
  if (!item) return false

  const saved = getSavedTitles()
  if (saved.some((entry) => entry.title === title)) return false

  const type = movies.some((entry) => entry.title === title) ? 'movie' : 'series'
  localStorage.setItem('nocredits-list', JSON.stringify([...saved, { ...item, type }]))
  return true
}

function removeTitle(title) {
  const saved = getSavedTitles().filter((entry) => entry.title !== title)
  localStorage.setItem('nocredits-list', JSON.stringify(saved))
}

function renderSavedList() {
  const savedGrid = document.getElementById('savedGrid')
  const emptyState = document.getElementById('emptyList')
  if (!savedGrid) return

  const saved = getSavedTitles()
  savedGrid.innerHTML = saved.map((item, index) => createCard(item, index, item.type, true)).join('')
  if (emptyState) emptyState.hidden = saved.length > 0
}

/* ---------- Toast Notifications ---------- */

const toast = document.getElementById('toast')
let toastTimer = null

const heroTargetOrder = ['movies', 'series', 'discover', 'footer']
let heroStep = 1

function updateHeroCounter(value) {
  const counterValue = document.querySelector('.hero-counter strong')
  const counterTotal = document.querySelector('.hero-counter span')
  if (!counterValue || !counterTotal) return

  counterValue.textContent = String(value)
  counterTotal.textContent = '/ 4'
}

function showToast(message) {
  if (!toast) return
  toast.textContent = message
  toast.classList.add('show')
  clearTimeout(toastTimer)
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2600)
}

/* ---------- Event Handlers ---------- */

function handleActionClick(event) {
  const button = event.target.closest('[data-action]')
  if (!button) return

  const action = button.dataset.action
  const title = button.dataset.title

  switch (action) {
    case 'add': {
      const added = title ? saveTitle(title) : false
      showToast(added ? `Added "${title}" to your list` : 'That title is already in your list')
      break
    }
    case 'remove':
      removeTitle(title)
      renderSavedList()
      showToast(`Removed "${title}" from your list`)
      break
    case 'play':
      showToast(title ? `Trailer for "${title}" is ready to play` : 'Trailer is ready to play')
      break
    case 'signup':
      showToast('Welcome to NoCredits — your watchlist starts here')
      break
  }
}

function handleSearch(event) {
  const query = event.target.value.trim().toLowerCase()
  const cards = document.querySelectorAll('.media-card')

  cards.forEach((card) => {
    const title = (card.dataset.title || '').toLowerCase()
    const genre = (card.dataset.genre || '').toLowerCase()
    const matches = !query || title.includes(query) || genre.includes(query)
    card.classList.toggle('is-hidden', !matches)
  })
}

function toggleMobileMenu() {
  const nav = document.getElementById('mainNav')
  const menuButton = document.getElementById('menuButton')
  if (!nav || !menuButton) return

  const isOpen = nav.classList.toggle('open')
  menuButton.setAttribute('aria-expanded', String(isOpen))
}

function handleHeaderScroll() {
  const header = document.getElementById('siteHeader')
  if (!header) return
  header.classList.toggle('scrolled', window.scrollY > 60)
}

function openLoginModal() {
  const modal = document.getElementById('loginModal')
  if (!modal) return
  modal.classList.add('show')
  modal.setAttribute('aria-hidden', 'false')
}

function closeLoginModal() {
  const modal = document.getElementById('loginModal')
  if (!modal) return
  modal.classList.remove('show')
  modal.setAttribute('aria-hidden', 'true')
}

function toggleLanguageMenu(event) {
  const picker = document.getElementById('languagePicker')
  if (!picker) return

  const shouldOpen = !picker.classList.contains('open')
  picker.classList.toggle('open', shouldOpen)

  const button = document.getElementById('languageButton')
  if (button) button.setAttribute('aria-expanded', String(shouldOpen))

  if (event) event.stopPropagation()
}

function setLanguage(languageCode) {
  const selected = document.getElementById('selectedLanguage')
  if (!selected) return

  const options = { en: 'EN', ar: 'AR', fr: 'FR' }
  selected.textContent = options[languageCode] || 'EN'

  document.querySelectorAll('.language-option').forEach((option) => {
    option.classList.toggle('active', option.dataset.lang === languageCode)
  })

  const picker = document.getElementById('languagePicker')
  if (picker) picker.classList.remove('open')

  const button = document.getElementById('languageButton')
  if (button) button.setAttribute('aria-expanded', 'false')
}

function handleViewMore(event) {
  const button = event.currentTarget
  const grid = document.getElementById(button.dataset.target)
  if (!grid) return

  const expanded = grid.classList.toggle('is-expanded')
  button.setAttribute('aria-expanded', String(expanded))
  button.querySelector('span').textContent = expanded ? 'View less' : 'View more'
  button.querySelector('svg').style.transform = expanded ? 'rotate(-90deg)' : 'rotate(0deg)'
}

function scrollToNextSection() {
  const targetId = heroTargetOrder[heroStep - 1]
  const target = targetId === 'footer' ? document.querySelector('footer.site-footer') : document.getElementById(targetId)

  if (target) {
    target.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  updateHeroCounter(heroStep)
  heroStep = heroStep >= heroTargetOrder.length ? 1 : heroStep + 1
}

/* ---------- Init ---------- */

function init() {
  renderGrids()
  renderSavedList()

  document.addEventListener('click', handleActionClick)

  const searchInput = document.getElementById('searchInput')
  if (searchInput) searchInput.addEventListener('input', handleSearch)

  const menuButton = document.getElementById('menuButton')
  if (menuButton) menuButton.addEventListener('click', toggleMobileMenu)

  const languageButton = document.getElementById('languageButton')
  if (languageButton) languageButton.addEventListener('click', toggleLanguageMenu)

  const languagePicker = document.getElementById('languagePicker')
  if (languagePicker) {
    languagePicker.addEventListener('mouseleave', () => {
      languagePicker.classList.remove('open')
      const button = document.getElementById('languageButton')
      if (button) button.setAttribute('aria-expanded', 'false')
    })
  }

  document.querySelectorAll('.language-option').forEach((option) => {
    option.addEventListener('click', (event) => {
      const languageCode = event.currentTarget.dataset.lang
      setLanguage(languageCode)
      showToast(`Language changed to ${event.currentTarget.textContent}`)
    })
  })

  document.addEventListener('click', (event) => {
    const picker = document.getElementById('languagePicker')
    if (!picker) return
    if (!picker.contains(event.target)) {
      picker.classList.remove('open')
      const button = document.getElementById('languageButton')
      if (button) button.setAttribute('aria-expanded', 'false')
    }
  })

  const loginButton = document.getElementById('loginButton')
  if (loginButton) loginButton.addEventListener('click', openLoginModal)

  const loginClose = document.getElementById('loginClose')
  if (loginClose) loginClose.addEventListener('click', closeLoginModal)

  const loginModal = document.getElementById('loginModal')
  if (loginModal) {
    loginModal.addEventListener('click', (event) => {
      if (event.target === loginModal) closeLoginModal()
    })
  }

  const loginForm = document.getElementById('loginForm')
  if (loginForm) {
    loginForm.addEventListener('submit', (event) => {
      event.preventDefault()
      const name = document.getElementById('loginName')?.value?.trim() || 'User'
      showToast(`Welcome, ${name}! You're logged in.`)
      closeLoginModal()
      loginForm.reset()
    })
  }

  updateHeroCounter(heroStep)

  const heroNext = document.getElementById('heroNext')
  if (heroNext) heroNext.addEventListener('click', scrollToNextSection)

  document.querySelectorAll('.view-more-button').forEach((button) => {
    button.addEventListener('click', handleViewMore)
  })

  document.querySelectorAll('.nav-link').forEach((link) => {
    link.addEventListener('click', () => {
      document.getElementById('mainNav')?.classList.remove('open')
    })
  })

  window.addEventListener('scroll', handleHeaderScroll, { passive: true })
}

document.addEventListener('DOMContentLoaded', init)
