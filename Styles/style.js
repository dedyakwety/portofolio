/**
 * Animation qui vient de gauche vers droite
 */
(function () {
    const ratio = .2
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: ratio
    }

    const handleIntersect = function (entries, observer) {
        entries.forEach(function (entry) {
            if (entry.intersectionRatio > ratio) {
                entry.target.classList.add('contenu-visible')
                observer.unobserve(entry.target)
            }
        })
    }
    const observer = new IntersectionObserver(handleIntersect, options)
    document.querySelectorAll('.contenu-invisible').forEach(function (cont) {
        observer.observe(cont)
    })
})()



  
let modal = null
/**
 * 
 * @param {open modal windows} e 
 */
const openModal = function (e) {
    e.preventDefault()
    var windowLogin = document.querySelector('#realisation')
    windowLogin.style.display = null
    windowLogin.removeAttribute('aria-hidden')
    windowLogin.setAttribute('aria-modal', 'true')
    modal = windowLogin
    modal.addEventListener('click', closeModal)
    modal.querySelector('.close').addEventListener('click', closeModal)
    modal.querySelector('.login-stop').addEventListener('click', stopPropagation)
}
/**
 * 
 * @param {for close the windows apparition} e 
 * @returns null
 */
const closeModal = function (e) {
    if (modal === null) return
    e.preventDefault()
    modal.style.display = 'none'
    modal.setAttribute('aria-hidden', 'true')
    modal.removeAttribute('aria-modal')
    modal.addEventListener('click', closeModal)
    modal.querySelector('.close').removeEventListener('click', closeModal)
    modal.querySelector('.login-stop').removeEventListener('click', stopPropagation)
    modal = null
}
/**
 * 
 * @param {stoper la propagation de click} e 
 */
const stopPropagation = function (e) {
    e.stopPropagation()
}
/** */
document.querySelectorAll('.windows').forEach(a => {
    a.addEventListener('click', openModal)
})

window.addEventListener('keydown', function (e) {
    if (e.key === "Escape") {
        closeModal(e)
    }if (e.key === "Esc") {
        closeModal(e)
    }
})