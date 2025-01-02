import express from 'express';
import { MongoClient, ReturnDocument, ServerApiVersion } from 'mongodb';

const app = express();
let db;

const votes = [
    {name: 'learn-react', upvotes: 0, comments : []},
    {name: 'learn-node', upvotes: 0, comments : []},
    {name: 'mongodb', upvotes: 0, comments : []},
]

app.use(express.json());

app.get('/api/articles/:name', async (req,res) => {
    const name  = req.params.name;


    const article =  await db.collection('articles').findOne({ name });

    res.json(article);

});

// app.get('/api/:name/upvote', function(req,res){
//     const name =  req.params.name;
//     const article = votes.find(a => a.name === name);
//     article.upvotes += 1;
//     res.send('the article' + name +' has been upvoted to ' + article.upvotes)
    
// });

app.get('/api/:name/upvote', async function(req,res){
    const { name } =  req.params;
    const article = await db.collection('articles').findOneAndUpdate({name}, {
        $inc: { upvotes: 1}
    },{
        returnDocument: 'after'
    });

    res.json(article)
    
});

// app.post('/api/:name/comments', (req,res) => {
//     const { name } =  req.params;
//     const { postedBy, text } = req.body;
//     const article = votes.find(a => a.name === name);
//     article.comments.push({
//             postedBy,
//             text,
//         });

//     res.json(article);
// });

app.post('/api/:name/comments', async (req,res) => {
    const { name } =  req.params;
    const { postedBy, text } = req.body;
    const article = await db.collection('articles').findOneAndUpdate({name}, {
        $push: {comments: {postedBy, text}}
    },{
        returnDocument: 'after',
    });
    res.json(article);
});

app.get('/hello',function(req, res){
    res.send('hello from a GET endpoint');
});

app.get('/hello/:name', function(req,res){
    res.send('hello' + req.params.name );
});

app.post('/hello', function(req, res) {
    res.send('hello, :'+ req.body.name + ' from post');
});

async function start(){
    await connectToDB()
    app.listen(8000, function() {
        console.log('Server is listening in')
    
    });
}



async function connectToDB() {
    const uri = 'mongodb://127.0.0.1:27017';

    const client = new MongoClient( uri, {
        serverApi: {
            version: ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true
        }
    });

    await client.connect();

 db = client.db('full-stack-react-db');

}

start();