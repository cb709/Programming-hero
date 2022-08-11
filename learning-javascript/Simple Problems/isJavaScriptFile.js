function isJavaScriptFile(str) {
    if (typeof(str) != 'string') {
        console.log("Please Enter a filename with format");
    } 
    else {
        if(str.endsWith('.js')){
            console.log("true");
        }else {
            console.log("false");
        }
    }
}

isJavaScriptFile(5); 