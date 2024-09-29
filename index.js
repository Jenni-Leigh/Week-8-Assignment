//This is where I created the class called Car which is made up of the make and model
class Car {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }
}

//This is where I created the second class called Menu
class Menu {
    constructor() {
        this.cars = [];
    }
//This is used to set up addCar, and what the prompts will say
    addCar() {
        let carMake = prompt("Enter car make:");
        let carModel = prompt("Enter the car model:");
        this.cars.push(new Car(carMake, carModel));
        console.log(`Added: ${carMake} ${carModel}`);
    }
//This is used to set up deleteCar, and what the prompts will say when a car is deleted
    deleteCar() {
        let index = prompt("Enter the index of the car to delete (starting from 0):");
        if (index >= 0 && index < this.cars.length) {
            let deletedCar = this.cars.splice(index, 1);
            console.log(`Deleted: ${deletedCar[0].make} ${deletedCar[0].model}`);
        } else {
            console.log("Invalid index.");
        }
    }
//this is used to view the cars that have been entered
    viewCars() {
        if (this.cars.length === 0) {
            console.log("No cars in the list.");
            return;
        }
        this.cars.forEach((car, index) => {
            console.log(`${index}: ${car.make} ${car.model}`);
        });
    }
//This is where I set up the menu that will show w/ the start of the page
    start() {
        let choice;
        do {
            choice = prompt("Menu:\n1. Add Car\n2. Delete Car\n3. View Cars\n4. Exit\nChoose an option:");
            switch (choice) {
                case '1':
                    this.addCar();
                    break;
                case '2':
                    this.deleteCar();
                    break;
                case '3':
                    this.viewCars();
                    break;
                case '4':
                    console.log("Exiting...");
                    break;
                default:
                    console.log("Invalid option. Please try again.");
            }
        } while (choice !== '4');
    }
}

// Instantiate the menu and invoke the start method, this allows me to access the menu and make necessary additions, deletions, view cars etc.
let menu = new Menu();
menu.start();
