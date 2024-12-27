import express from 'express'

const app = express();

const votes = [
    {name: 'learn-react', upvotes: 0, comments : []},
    {name: 'learn-node', upvotes: 0, comments : []},
    {name: 'mongodb', upvotes: 0, comments : []},
]

app.use(express.json());

app.get('/api/:name/upvote', function(req,res){
    const name =  req.params.name;
    const article = votes.find(a => a.name === name);
    article.upvotes += 1;
    res.send('the article' + name +' has been upvoted to ' + article.upvotes)
    
});

app.post('/api/:name/comments', (req,res) => {
    const { name } =  req.params;
    const { postedBy, text } = req.body;
    const article = votes.find(a => a.name === name);
    article.comments.push({
            postedBy,
            text,
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

app.listen(8000, function() {
    console.log('Server is listening in')
});