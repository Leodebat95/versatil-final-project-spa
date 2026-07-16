// --------------- Variables -----------------------------
const routes = {
    "/": "pages/home.html",
    "/about": "/pages/about.html",
    "/signup": "/pages/signup.html",
    "/portfolio": "/pages/portfolio.html",
    "/contactus": "/pages/contactus.html"
}


// --------------- Functions ------------------------------
function routeHome(href, event) {

    event = event || window.event
    event.preventDefault()
  
    window.history.pushState({}, "", href)
        // window.history.pushState({}, "", event.target.href)
  
    handle()
    navActiveHome()
}

function routeAbout(href, event) {
  
    event = event || window.event
    event.preventDefault()
  
    window.history.pushState({}, "", href)
  
    handle()
    navActiveAbout()
}

function routeContactus(href, event) {
  
    event = event || window.event
    event.preventDefault()
  
    window.history.pushState({}, "", href)
  
    handle()
    navActiveContactus()
}

function routePortfolio(href, event) {
  
    event = event || window.event
    event.preventDefault()
  
    window.history.pushState({}, "", href)
  
    handle()
    navActivePortfolio()
}

function routeSignup(href, event) {
  
    event = event || window.event
    event.preventDefault()
  
    window.history.pushState({}, "", href)
  
    handle()
    navActiveSignup()
}

function handle() {
    
    const { pathname } = window.location

    const route = routes[pathname] || routes["/"]
  
    fetch(route)
    .then(data => data.text())
    .then(html => {
        document.querySelector('main').innerHTML = html

        // O #slider só existe depois que o home.html é injetado aqui.
        // Por isso o slider é inicializado neste ponto, e não no ready.
        if (route === routes["/"]) {
            initSlider()
        }
    })
}
  
handle()
  
window.onpopstate = () => handle()
  
window.routeHome = (href) => routeHome(href)
window.routeAbout = (href) => routeAbout(href)
window.routeContactus = (href) => routeContactus(href)
window.routePortfolio = (href) => routePortfolio(href)
window.routeSignup = (href) => routeSignup(href)



// --------------- Nav Functions ------------------------------
function navActiveHome() {
    document.querySelector("#nav-home").classList.add("active")
    document.querySelector("#nav-about").classList.remove("active")
    document.querySelector("#nav-signup").classList.remove("active")
    document.querySelector("#nav-portfolio").classList.remove("active")
    document.querySelector("#nav-contactus").classList.remove("active")
}

function navActiveAbout() {
    document.querySelector("#nav-about").classList.add("active")
    document.querySelector("#nav-home").classList.remove("active")
    document.querySelector("#nav-signup").classList.remove("active")
    document.querySelector("#nav-portfolio").classList.remove("active")
    document.querySelector("#nav-contactus").classList.remove("active")
}

function navActiveSignup() {
    document.querySelector("#nav-signup").classList.add("active")
    document.querySelector("#nav-home").classList.remove("active")
    document.querySelector("#nav-about").classList.remove("active")
    document.querySelector("#nav-portfolio").classList.remove("active")
    document.querySelector("#nav-contactus").classList.remove("active")
}

function navActivePortfolio() {
    document.querySelector("#nav-portfolio").classList.add("active")
    document.querySelector("#nav-home").classList.remove("active")
    document.querySelector("#nav-about").classList.remove("active")
    document.querySelector("#nav-signup").classList.remove("active")
    document.querySelector("#nav-contactus").classList.remove("active")
}

function navActiveContactus() {
    document.querySelector("#nav-contactus").classList.add("active")
    document.querySelector("#nav-home").classList.remove("active")
    document.querySelector("#nav-about").classList.remove("active")
    document.querySelector("#nav-signup").classList.remove("active")
    document.querySelector("#nav-portfolio").classList.remove("active")
}
