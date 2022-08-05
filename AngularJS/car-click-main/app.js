//Model = data(du lieu) --- view = ui(giao dien) --- Controller = brain

//model
const model = {
    currentCar: null,
    cars: [{
            clickCount: 0,
            name: 'Coupe Maserati',
            imgSrc: 'img/mec.jpg',
        },
        {
            clickCount: 0,
            name: 'Camaro SS 1LE',
            imgSrc: 'img/',
        },
        {
            clickCount: 0,
            name: 'Dodger charger 1970',
            imgSrc: 'img/images.jpg',
        },
        {
            clickCount: 0,
            name: 'Camaro SS 1LE',
            imgSrc: 'img/images.jpg',
        },
    ]
}

const controller = {
    init() {
        model.currentCar = model.cars[0];

        //tell our views tialize
        carListView.init();
        carView.init();
    },

    getCurrentCar() {

    },
    getCars() {
        return model.cars;
    },
}


const carListView = {
    init() {
        this.carListView = document.getElementById('car-list');
        this.render();
    },
    render() {
        let car;
        let elem;
        let i;
        const cars = controller.getCars();

        this.carListView.innerHTML = '';

        for (let i = 0; i < cars.length; i++) {
            car = cars[i];

            elem = document.createElement('li');
            elem.className = 'list-group-item -flex justify-content-between lh-condensed';
            elem.style.cursor = 'pointer';
            elem.textContent = car.name;
            elem.addEventListener(
                'click',
                (function(carCopy: clickCount:number, imgSrc: string, name: string,)),
            )
        }
    }
}