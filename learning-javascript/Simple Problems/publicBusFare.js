function publicBusFare(passengers){
    if(typeof(passengers) != 'number'){
        console.log("Please Enter Passengers Number");
    }
    else {
        const busRemaining = passengers % 50;
        // console.log(busRemaining);
        const microRemaing = busRemaining % 11;
        // console.log(microRemaing);
        const totalBusFair = microRemaing * 250;
        console.log(totalBusFair);

    }
}

publicBusFare(61);