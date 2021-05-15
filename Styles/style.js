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



/**
 * Style qui verifi les contenus visible sur l'écran
 */
const threshold = .6
/**
 * 
 * @param {HTMLelement} elem 
 */
const activate = function (elem) {
    const id = elem.getAttribute('id')
    const anchor = document.querySelector(`a[href="#${id}"]`)
    if (anchor === null) {
        return null
    }
    anchor.parentElement
       .querySelectorAll('.active')
       .forEach(node => node.classList.remove('active'))
    anchor.classList.add('active')
}
/**
 * 
 * @param {IntersectionObserverEntry[]} entries 
 * @param {IntersectionObserver} observer 
 */

const callback = function (entries, observer) {
    entries.forEach(function (entry) {
        if (entry.intersectionRatio > threshold) {
            activate(entry.target)
        }
    })
}

const spies = document.querySelectorAll('[data-spy]')
if (spies.length > 0) {
    const observer = new IntersectionObserver(callback, {
        threshold: threshold
    })
    spies.forEach(function (spy) {
        observer.observe(spy)
    })
}