import express from 'express';
import alumnoRoutes from "./src/alumno/alumno.routes.js"

const app = express();
const port = 3000;

app.use(express.json());

app.use('/api', alumnoRoutes);

app.listen(port, () => {
    console.log(`App lista en el puerto ${port}`);
});