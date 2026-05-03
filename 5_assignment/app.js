const express = require('express');

const app = express();

// app.use((req, res, next)=>{
//   console.log('First Middleware');
//   next();
// })

// app.use((req, res)=>{
//    console.log('First Middleware')
//    res.send('<p>Return response from my middleware</p>')
// })

app.use('/users', (req, res)=>{
   console.log('/users Middleware')
   res.send('<p>Return response from my /users middleware</p>')
})

app.use('/', (req, res, next)=>{
  console.log('/ Middleware');
   res.send('<p>Return response from my / middleware</p>')
})


app.listen(3000);