// REVERSE STRING 

function reverse1(str){
    if(!str || typeof str != 'string' || str.length < 2 ) return str;
    const backwords = [];
    const totalItems = str.length - 1;
    for(let i = totalItems; i >= 0; i--){
        backwords.push(str[i]);
    }
    return backwords.join('');
}
  
function reverse2(str){
//check for valid input
return str.split('').reverse().join('');
}

const reverse3 = str => [...str].reverse().join('');

reverse('Hello World');
reverse2('Hello World');
reverse3('Hello World');