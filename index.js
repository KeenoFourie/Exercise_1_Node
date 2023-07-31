const {writeFile, readFile, appendFile} = require('fs')


writeFile('./data.txt', 'Hello World👋', 'utf-8', (err)=> {
    if(!err)
        console.log('Hello World👋');
    else
        console.log('Try again!');
})

writeFile('./data.txt', 'Goodbye World🫂', 'utf-8', (err)=> {
    if(!err)
        console.log('Goodbye World🫂');
    else
        console.log('Try again!');
})

// It is placed on the next line

appendFile('./data.txt', 'This is how we do it!💃🕺', 'utf-8', (err)=> {
    if(!err)
        console.log('This is how we do it!💃🕺');
    else
        console.log('Try again!');
})



// readFile('./data.txt', 'utf-8', (err, data)=> {
//     if(!err)
//         console.log(data);
//         else
//     console.log('An error occurred');
// })