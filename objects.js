var square = {
    width: 6,
    height: 8,
    area:function () {
        return square.width * square.height
    }
};
console.log('height: ' + square.height);
console.log('Area: ' + square.area());
square.width = 20;

console.log('New Area: ' + square.area());
