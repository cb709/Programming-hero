function oilPrice(dissel, petrol, octane){
    const disselPrice = 114;
    const petrolPrice = 130;
    const octanePrice = 135;
     
    if(typeof(dissel) != 'number' || typeof(petrol) != 'number' || typeof(octane) != 'number'){
        console.log("Please Enter Number");
    }
    else {
        const total = dissel*disselPrice + octanePrice*octane + petrolPrice*petrol;
        console.log(total);
    }
    
}

oilPrice(30,20,10);