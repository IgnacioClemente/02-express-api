import express from 'express';

const app = express();
const port = 3000;

app.use(express.json());

let alumnos = [];
let idActual = 1;

app.post('/alumno',(req,res) =>{
    const nuevoAlumno = {
        id: idActual++,
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        curso:req.body.curso,
    };

    alumnos.push(nuevoAlumno);
    res.status(201).json({
        msg: `Se creo correctamen el alumno con id ${nuevoAlumno.id} nombre ${nuevoAlumno.nombre}`,
    });
});

app.get('/alumno', (req,res) =>{
    res.json(alumnos);
});

app.listen(port, () => {
    console.log(`App lista en el puerto ${port}`);
});