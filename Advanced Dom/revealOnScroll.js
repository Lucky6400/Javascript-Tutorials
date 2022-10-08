const allSections = document.querySelectorAll('.section');

function revealSection(entries, observer) {
    const [entry] = entries;
    if(!entry.isIntersecting) return;

    entry.target.classList.remove('section--hidden');
    observer.unobserve(entry.target)
};

const sectionObserver = new IntersectionObserver(revealSection, {
    root: null,
    threshold: 0.20 // trigger function when the component is 20% visible
});

allSections.forEach(item => {
    sectionObserver.observe(item);
    item.classList.add('section--hidden');
})
