var x = 1, y = 0, z;
var add = function(x) {
    return x = x + 1;
}
function add(x) {
    return x = x + 3;
}   

y = add(x);
z = add(y);
console.log(x, y, z)