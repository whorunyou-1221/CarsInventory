const express = require('express');
const app = express();
const port = 3009;

const data = {
    cars:  [
    {id: 1, make: 'Toyota', model: 'Camry', year: '2023', color: 'Silver', quantity: '15', dealer: 'Toyota of Glendale'},
    {id: 2, make: 'Honda', model: 'Civic', year: '2024', color: 'Black', quantity: '20', dealer: 'Honda Downtown'},
    {id: 3, make: 'Ford', model: 'F-150', year: '2023', color: 'White', quantity: '10', dealer: 'Ford of North Hollywood'},
    {id: 4, make: 'Chevrolet', model: 'Tahoe', year: '2024', color: 'Red', quantity: '8', dealer: 'Chevy Malibu'},
    {id: 5, make: 'Nissan', model: 'Rogue', year: '2023', color: 'Blue', quantity: '12', dealer: 'Nissan of Burbank'},
    {id: 6, make: 'BMW', model: 'X5', year: '2024', color: 'Gray', quantity: '5', dealer: 'BMW of Encino'},
    {id: 7, make: 'Mercedes-Benz', model: 'C-Class', year: '2023', color: 'Black', quantity: '7', dealer: 'MB of Bev Hills'},
    {id: 8, make: 'Hyundai', model: 'Elantra', year: '2023', color: 'White', quantity: '18', dealer: 'Hyundai of A'},
    {id: 9, make: 'Toyota', model: 'RAV4', year: '2024', color: 'Blue', quantity: '14', dealer: 'Toyota of Pasadena'},
    {id: 10, make: 'Toyota', model: 'Corolla', year: '2024', color: 'White', quantity: '22', dealer: 'Toyota of Glendale'},
    {id: 11, make: 'BMW', model: '3 Series', year: '2023', color: 'Black', quantity: '9', dealer: 'BMW of Beverly Hills'},

]
};
// GET – Developer Information 
// URI: GET /api/developer 
app.get('/api/developer', (req,res) =>{
    res.send('Candy E. Huraño')
});

// GET – Retrieve All Cars 
// URI: GET /api/cars 
app.get('/api/cars', (req,res) => {
    res.json(data.cars)
});

// GET – Retrieve Cars by Category Using Query Parameters 
// URI: GET /api/cars/maker?maker=Toyota
app.get('/api/cars/maker/:id',(req,res)=>{
    const id = Number (req.params.id);
    const cars = data.cars.find(c => c.id === id);

    if(!cars){
        return res.status(404).json({message: 'cars not found'});
    }
    res.json(cars);
});

// GET – Retrieve a Specific Car 
// URI: GET /api/cars/:id 
app.get('/api/cars/:id',(req,res)=>{
    const id = Number (req.params.id);
    const cars = data.cars.find(c => c.id === id);

    if(!cars){
        return res.status(404).json({message: 'cars not found'});
    }
    res.json(cars);
});

// POST – Add a New Car 
// URI: POST /api/cars/add 
app.post('/api/car/add', (req,res)=>{
    const newCar = req.body;

    data.cars.push(newCar);

    res.status(201).json({message: 'car added',
        cars: newCar
    });
});

// PUT – Update an Existing Car 
// URI: PUT /api/cars/:id 
app.put('/api/cars/:id', (req,res) =>{
    const id = Number (req.params.id);
    const index = data.cars.findIndex(c => c.id === id)

    if(index === -1){
        return res.status(404).json({message:'car not found'});
    }
   data.cars[index] = {
    ...data.cars[index],
    ...req.body
   };
});

// DELETE – Delete an Existing Car 
// URI: DELETE /api/cars/31 
app.delete('/api/car/:id', (req,res) =>{
    const id = Number (req.params.id);
    const index = data.cars.findIndex(c => c.id === id)

    if(index === -1){
        return res.status(404).json({message:'car not found'});
    }
    const deleted = data.cars.splice(index, 1);
    res.json(car);
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});