import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const port = process.argv[2] || 3011;

// let json can come in
app.use(bodyParser.json({limit: '100mb'})); // parse to json : req.body

// allow CORS
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization,locale,isLongPolling");
    res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE, OPTIONS");
    // Locale.setLocale(req.headers.locale);
    next();
});

app.use(function (req, res, next) {

    // x-powered-by 會顯示目前伺服器使用的技術
    res.removeHeader("x-powered-by");
    next();
});

app.use('/static', express.static(__dirname + '/public'));

app.get('/',(req,res)=>{

    res.redirect('/static/');
})

// api routes
app.use('/file', require('./routes/files'));

const server = app.listen(port, () => {
    console.log('uecare api listening at port %s', port);
    console.log(`access api at http://localhost:${port}`);
});
