createBoat();
function createBoat() {
    const boat = document.getElementById("boat");
    const display = document.getElementById("sea");

    document.addEventListener("keydown", function(event) {
        switch(event.key) {
                
            case "ArrowLeft":
                if(boat.offsetLeft > display.offsetLeft) {
                    boat.style.transform = 'rotateY(180deg)';
                    boat.style.left = boat.offsetLeft - 100 + 'px';
                    break;
                }
                
            case "ArrowRight":
                if(boat.offsetLeft +boat.offsetWidth < display.offsetWidth) {
                    boat.style.transform = 'rotateY(0deg)';
                    boat.style.left = boat.offsetLeft + 100 + 'px';
                    break;
                }

            case "Enter":
                boat.className = 'boat2';
        }
    })
}