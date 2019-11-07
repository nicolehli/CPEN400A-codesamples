// Prints the given ${time} after ${time} ms.
function resolveAfter(time){
    // to implement
    var p = new Promise(
        (resolve, reject) => {
            setTimeout(console.log(`${time}`), time);
            resolve();
        }
    );
}

// Make the program print 500, 1000, 1500 
var first = resolveAfter(500).then( // to implement;
        resolveAfter(1000)
    ).then(
        resolveAfter(1500)
    );
