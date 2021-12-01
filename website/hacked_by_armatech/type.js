let time = () => "[" + new Date().toLocaleString() + "]";



let txt = `:time Loading...
:time Warning: SSL certificate found invalid
$ rm -rf /
:time Deleting /...
:time ERROR: Cannot find required executables!
:time Trying to restore...
$ apt-get install update
:time Upading package registery...
:time Testing armatech.tk:2761...
:time SSL certificate invalid, continuing...
:time TCP connection error: Broken pipe.
:time Failed to update registery.
$
:time Warning: ssh client logged in via port 22
ERROR: KERNEL IMAGE BROKEN


Hacked by Armatech...`.split("\n");
let speed = 1000; 

function typeWriter() {
    let i = 0;
    let handleID;
    let fn = () => {
        if(i >= txt.length) {
            clearInterval(handleID);
            return;
        };
        contentEl.innerText += txt[i].replace(/:time/g, time()) + "\n";
        i++;
    };
    handleID = setInterval(fn, speed);
}

typeWriter();

console.log("yes");