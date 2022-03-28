var promise = new Promise(function(resolve, reject) {
    const string1 = "Haseena";

    if(string1 === "Haseena") {
        resolve();
    } else {
        reject();
    }
    });
    
    promise.then(function () {
            console.log('Success!!!!!!!!!!!!!!!!!');
        }).
        catch(function () {
            console.log('Error has occurred');
        });