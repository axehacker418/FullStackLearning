const express =require('express');
const app= express();

const notes=[ ]
app.get('/',(req,res)=>{
    res.send('hello1')
})
app.use(express.json()); //a middleware

// app.post('/notes', (req,res) =>{
//     console.log(req.body);
//     notes.push(req.body);
//     console.log(notes);
//     res.send('created...');

// });


app.post('/notes',(req,res)=>{
    notes.push(req.body);
    console.log(req.body);// for read from req.body we need middleware express.json use from express 
    res.status(201).json({
        msg: "node created successfully"
    })

    
})

app.get('/notes',(req,res)=>{
    res.send(notes);
})

app.delete("/notes/:index", (req,res)=>{
    delete notes[req.params.index];
    res.send("node deleted successfully")
    console.log("node deleted successfully")
})

app.listen(3000, ()=>{
    console.log("server is listening...........")
})