const element = document.querySelectorAll('ol li');
const list =[];
document.body.classList.add(localStorage.getItem('color'))
element.forEach(e =>{
    list.push(e.getAttribute('data-color'));
    e.addEventListener('click', function(){
        document.body.classList.remove(...list);
        document.body.classList.add(this.getAttribute('data-color'));
        localStorage.setItem('color',this.getAttribute('data-color'));
    });
});