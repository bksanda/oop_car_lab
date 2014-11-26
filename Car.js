function Car(make, model, year, color, seats, passengers){
  this.make = make;
  this.model = model;
  //TODO: add year, color, seats here
  this.year = year;
  this.color = color;
  this.seats = seats;

  this.running = false;
  this.owner = "manufacturer";
  this.previousOwners = [];

  this.passengers = passengers || [];
}

Car.prototype.sell = function(newOwner){
	this.previousOwners.push(this.owner);
	this.owner = newOwner;
};

Car.prototype.paint = function(newColor){
  this.color = newColor;

};

//should change the running value of the car to true.
Car.prototype.start = function(runningStart) {
  this.running = true;
}; 

//should change the running value to false.
Car.prototype.off = function (runningOff) {
  this.running = false;
};

//should console.log "driving to <destination>", 
//but only if the car is running. 
//Should return true if it is successful and false if it is not. 
//(this method needs to take a destination param.)
Car.prototype.driveTo = function (destination) {
  if (this.running === true){
    console.log("driving to " + destination);
    return true;
  } else {
    return false;
  }
};


//Car.park() only if the car is not running 
//you should console.log parked!!. 
//Should return true if it is successful and false if it is not.
Car.prototype.park = function(parked) {
  if (this.running === false) {
    console.log("parked!!");
    return true;
  } else {
    return false;
  }
}; 

//Car.pickUp() should take a name and console.log that 
//you are "driving to 'pick up <friend>'", 
//but only if the car is running AND there are enough seats available. 
//It should also update the passengers array to include the new passenger. 
//It should also return true on success and false on failure. 
//Newly picked up passengers should be pushed to the end of the array.
Car.prototype.pickUp = function (name){
  if (this.running === true && this.seats-1 > this.passengers.length) {
      this.passengers.push(name); 
      console.log ("Driving to pick up " + name);
      return true;
  } else {
    return false;
  }

};

// Car.dropOff() it should take a name and remove them from the passengers array, 
// but only if they are in the array. 
// It should also only drop them off if the car is on. 
// should also output "driving to drop off <friend>" and 
// return true on success and false on failure.
Car.prototype.dropOff = function(name) {
if (this.running === true && this.passengers.indexOf(name) >= 0) {
  this.passengers = this.passengers.filter(function(element){
    return (element != name);
    console.log("driving to drop off " + name)
  }) 
  return true;
}return false; 

}

//Car.passengerCount() should return the number (integer) of passengers 
//currently in the car.

Car.prototype.passengerCount = function(name) {
  return this.passengers.length
}

// export the Car function for use in node //
// this is required for the test.js to load this //
module.exports = Car;