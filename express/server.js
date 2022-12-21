
const express = require('express')
const app = express()
const port = 3000

app.get('/',(req, res) => { // Esta es la web //
    let a = 22
    let b = 7
    let suma = a+b;
    let resultado = suma
    res.send(`'Hello World! El resultado es ${resultado}`)
})

app.listen(port, () => { // Esta es nuestra consola //
    console.log(`Example app listening at http://localhost:${port}`)
})
