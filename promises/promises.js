// Typical promise struture
// Promises are great for being able to ensure that you will get an answer on whether or not
// something was accomplished. They are used a lot for fetching data from APIs

const promise = new Promise((resolve, reject) => {
    let alfredoMadeTheStudyGuide = false;
    
    //If a condition is met
    //then something will happen & be returned
    // If not, something else will be returned
    if(alfredoMadeTheStudyGuide) {
        resolve('Study Guide')
    } else {
        reject('Alfredo do not make the study guide yet....')
    }
})


//Calling the promise now...
promise().then((response) => {
    console.log(response);
}).catch(error => {
    console.log(error);
})

// Since alfredoMadeTheStudyGuide = false, the .then() statement will not run!
// The promise was rejected and instead the .catch() statement will run!