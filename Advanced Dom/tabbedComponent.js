const tabButtons = document.querySelectorAll('.operations__tab');
const tabContents = document.querySelectorAll('.operations__content')

tabButtons.forEach((item, index) => {
    item.addEventListener('click', function() {
       // console.log(index)
       tabButtons.forEach(tabButton => tabButton.classList.remove('operations__tab--active'));
       tabContents.forEach(tabContent => tabContent.classList.remove('operations__content--active'));
       this.classList.add('operations__tab--active');
       tabContents[index].classList.add('operations__content--active');
    })
})