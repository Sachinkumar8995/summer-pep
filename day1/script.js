console.log("Hello, World!");
// clouser
function outer(){
    let count = 0;

    function inner(){
        count++;
        console.log(count);
    }
    return inner;

}
const myClosure = outer();
myClosure(); // 1
myClosure(); // 2
myClosure(); // 3
