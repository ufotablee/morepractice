let tabNav = document.querySelectorAll('.tabs_items');
let tabContent = document.querySelectorAll('.item');
let tabNav2 = document.querySelectorAll('.tabs_items2')
tabNav.forEach(item => {
    item.addEventListener('click', selectTabNav)
});
tabNav2.forEach(item => {
    item.addEventListener('click', selectTabNav2)
});

function selectTabNav(){
    tabNav.forEach( item=>{
        item.classList.remove('is-active');
    });
    this.classList.add('is-active');
    for (let i = 0 ; i < this.children.length; i++){
        this.children[i].classList.add('is_active');
    }    
let tabName = this.getAttribute('data-tab-name');
selectTabContent(tabName)
}
function selectTabContent(tabName){
    tabContent.forEach(item => {
        item.classList.contains(tabName) ? item.classList.add('is-active') : item.classList.remove('is-active');
    })
}


function selectTabNav2(){
    tabNav2.forEach( item=>{
        item.classList.remove('is-active2');
    });
    this.classList.add('is-active2');
    for (let i = 0 ; i < this.children.length; i++){
        this.children[i].classList.add('is_active2');
    }    
let tabName2 = this.getAttribute('data-tab-name');
selectTabContent2(tabName2)
}
function selectTabContent2(tabName2){
    tabContent.forEach(item => {
        item.classList.contains(tabName2) ? item.classList.add('is-active2') : item.classList.remove('is-active2');
    })
}


