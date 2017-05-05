function addCPS(a, b, callback) {
    callback(a + b); // continuation
}

const result = addCPS(1, 2, function(result) {
    console.log(result);
});

console.log(result);