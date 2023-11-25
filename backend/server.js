import express from 'express';
import env from 'dotenv';

env.config()

const app = express();
//get a list of jokes

app.use(express.static('dist'));


// app.get("/", (req, res)=>{
//     res.send('Server is ready')
// });

app.get("/api/jokes", (req, res)=>{
    const jokes = [
        
        {
            id: 1,
            title: "A Joke",
            content: "This is a joke"
        },
        {
            id: 2,
            title: "Another Joke",
            content: "This is another joke"
        },
        {
            id: 3,
            title: "Third Joke",
            content: "This is third joke"
        },
        {
            id: 4,
            title: "Fourth Joke",
            content: "This is fourth joke"
        },
    ]
    res.send(jokes)
})

const port = process.env.PORT || 3000;

app.listen(port, ()=>{
    console.log(`Serve at http://localhost:${port}`);
})