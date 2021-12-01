// Initialising the canvas
const contentEl = document.getElementById("content");

let content = contentEl.innerText;

const con = {
    write(text){
        contentEl.innerText += text;
    },
    writeLine(text){
        this.write(text + "\n");
    },
};



let symbols = 'ABCDEFGHIJKLMNOPQRSTUVXYZ' + "ABCDEFGHIJKLMNOPQRSTUVXYZ".toLowerCase() + "1234567890*-!'^+%&/()=?_>£#$½{[]}\\|";
symbols = symbols.split('');

/*
// Setting up the columns
var fontSize = 10,
    columns = canvas.width / fontSize;
*/

/*
// Setting up the drops
var drops = [];
for (let i = 0; i < columns; i++) {
  drops[i] = 1;
}
*/



let bo = true;
function draw() {

    if(bo) {
        con.write("_");
    } else {
        contentEl.innerText = contentEl.innerText.slice(0, -1); 
    }
    bo = !bo;

    if(false){
        ctx.fillStyle = 'rgba(0, 0, 0, .1)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        for (var i = 0; i < drops.length; i++) {
            var text = symbols[Math.floor(Math.random() * symbols.length)];
            ctx.fillStyle = '#0f0';
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);
            drops[i]++;
            if (drops[i] * fontSize > canvas.height && Math.random() > .95) {
                drops[i] = 0;
            }
        }
    }
}




//setInterval(draw, 500);

