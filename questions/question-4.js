// what will be the output of below code?
function b(){
    console.log(`the length is ${this.length}`);
}

let a = {
    length: 10,
    method: function(b) {
        arguments[0]();
    }
};

a.method(b, 5); // the length is 2