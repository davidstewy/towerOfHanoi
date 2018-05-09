let towers = document.getElementsByClassName('tower');
let selectedTopDisc;

function changeTowerClick(addOrRemove, eventListener) {
    for (let tower of towers) {
        if (addOrRemove === "add") {
            tower.addEventListener('click', eventListener);
        } else {
            tower.removeEventListener('click', eventListener);
        }
    }
}

function pickupClick(event) {
    console.log("pickup")

    let currentTower = event.currentTarget;

    if (currentTower.childElementCount !== 0) {
        selectedTopDisc = currentTower.lastElementChild;
        
        changeTowerClick("remove", pickupClick);
        changeTowerClick("add", dropClick);
    }
}

function dropClick(event) {
    console.log("drop")

    let currentTower = event.currentTarget;
    const targetTopDisc = currentTower.lastElementChild;

    if (!targetTopDisc || selectedTopDisc.dataset.size < targetTopDisc.dataset.size) {
        currentTower.appendChild(selectedTopDisc);
    
        changeTowerClick("remove", dropClick);
        changeTowerClick("add", pickupClick);

        
        let win = document.getElementById("end");
        if(end.childElementCount === 4){
        // trigger win check
        setTimeout(function() { alert("You Win!"); }, 500);
            
        }
    } else {
        console.log("CAN'T DO (BUT MATT COULD)");
    }

}


changeTowerClick("add", pickupClick);
