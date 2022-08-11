function isBestFriend(obj1 , obj2) {
    if (typeof(obj1) != 'object' || typeof(obj2) != 'object'){
        console.log("Please Enter Object");
    }
    else {
        if(obj1.name == obj2.friend && obj2.name == obj1.friend){
            console.log("true");
        }
        else {
            console.log("false");
        }
    }
}

isBestFriend({name: "Mahdi", friend: "Salman"},{name: "Chinmoy", friend: "Mahdi"});