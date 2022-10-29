var object={"a":"あ","b":"い","c":"う"}
// // console.dir(object);
// console.dir(object.a);
// console.dir(object.b);
// console.dir(object.c);

// var obj = [
//     {fname:"Tarou",lname:"Yamazaki"},
//     {fname:"Anna",lname:"Smith"},
//     {fname:"Peter",lname:"Jones"}
// ];

// var json = JSON.stringify(obj);
// console.log(json);

// var obj2= JSON.parse(json);
// console.log(obj2);

$.getJSON(
    "https://www.googleapis.com/books/v1/volumes?q=jquery",
    function(data){
        console.dir(data);
    }
);