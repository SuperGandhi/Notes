const container2 = document.getElementsByClassName("container2")[0];
const container3 = document.getElementsByClassName("container2")[0];
const checkIcon = document.getElementById("check-icon");
const xIcon = document.getElementById("x-icon");
const i = 0;

xIcon.addEventListener("click", function () {
    typeNote();
})

checkIcon.addEventListener("click", function () {
    createNote();
})

function typeNote() {
    if (container3.style.display == "none") {
        container3.style.display = "block";
    } else {
        container3.style.display = "none";
    }
}

function createNote() {
    const noteText = document.getElementById("note-text").value;


    const node0 = document.createElement("div");
    const node1 = document.createElement("h1");

    node1.innerHTML = noteText;
    node1.setAttribute(" style ","width:250px ; padding: 25 px; height: 250 px; font - size: 26 px; margin - top: 10 px; overflow: hidden; box - shadow: 0 px 10 px 24 px 0 px rgba(0, 0, 0, 0.75)" );

    node1.style.margin = margin(); 
    node1.style.transform = rotate(); 
    node1.style.background = color(); 
    node0.appendChild(node1);

    container2.insertAdjacentElement("beforeend", node0)

    node0.addEventListener ("mouseenter" , function() {
        node0.style.transform = "scale( 1.1)" ;
    } )
    
    node0.addEventListener ("mouse leave" , function() {
      node0.style.transform = "scale(1)"; 
    })

    node0.addEventListener ("dblclick",function() {
        node0.remove();
    } )
                I
    document.getElementById ("note - text").value = "";
}
    function margin() {
        const randomMargin = ["-5px", "1px", "5px", "10px", "15px", "20px"];
        return randomMargin[Math.floor(Math.random() * randomMargin.length)];
    }

    function rotate() {
        const randomRotate = ["rotate(3deg)", "rotate(1deg)", "rotate(-1deg)", "rotate(-3deg)", "rotate(-5deg)", "rotate(-10deg)"];
        return randomRotate[Math.floor(Math.random() * randomRotate.length)]
    }

    function color() {
        const randomColor = ["#c2ff3d", "#ff3de8", "#3dc2ff", "#04e022", "#bc83e6", "#ebb328"];


        if (i > randomColor.length - 1) {
            i = 0;
        }
        return randomColor[i++]
    }