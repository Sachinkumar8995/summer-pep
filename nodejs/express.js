import express from 'express';
const app = express();

app.get('/', (req, res) => {
    res.send('Hello world');
});


const students = [
    {id:1, name: "ztop", age: 20,city: "shanghai"},
    {id:2, name: "alice", age: 22,city: "beijing"},
    {id:3, name: "bob", age: 21,city: "guangzhou"},
    {id:4, name: "charlie", age: 23,city: "shenzhen"},
]

app.get('/student', (req, res) =>{
    const city = req.query.city;
    const student = students.filter(s => s.city === city);
    res.json(student);
})
app.get('/student/:id', (req, res) => {
    const studentId = parseInt(req.params.id);
    const student = students.find(s => s.id === studentId);
    if (student) {
        res.json(student);
    } else {
        res.status(404).send('Student not found');
    }
});

app.post('/student', (req, res) => {
    const newStudent = req.body;
    students.push(newStudent);
    res.status(201).json(newStudent);
});
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});