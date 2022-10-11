const express = require('express');
const fs = require('fs');
const app = express();
app.use(express.json()); // sin este middleware no funciona el req.body ,e dará undefined
const port = process.env.PORT;


//console.log(products);

app.post('/api/multiplicacion/:multiplicador?', function(req,res) { 
  let multiplicador = req.params.multiplicador || 1
  let arreglo = req.body || [1,3,6,4,2]
  let multiplication = arreglo.map(function(element) { return element * 5; })
  console.log(multiplication)
  res.json(
      {
          arreglo: arreglo,
          multiplication: multiplication
      }
  );  
})

app.listen(port, ()=>{
  console.log(`App running on port ${port}`);
});
