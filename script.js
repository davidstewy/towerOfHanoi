let towers = document.getElementsByClassName('tower');

for (let tower of towers) {
    tower.addEventListener('click', firstClick);
}

function firstClick(event) {
let currentClick = event.currentTarget;
console.log('inside');
let disc = document.getElementsByClassName('disc');
    if(disc.childElementCount !== 0){
        let x = disc.lastElementChild;
        let selection = document.getElementsByClassName('tower');
        tower.appendChild(x);
    }

    
    

}