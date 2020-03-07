const cookieParser = require('cookie-parser');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = require('express')();
const portValidation = require('./utils/port_validator');
require('dotenv').config();


const env = process.env.NODE_ENV;
// routers -- 
const testRouter  = require('./routes/test.routes');

const version = '/v1';

const port = portValidation.normalizePort(process.env.PORT);

/*db
*   db connection here
*/
global.HELPER = require('./utils/helper');
global.ERROR_CODES = require('./utils/message_codes');
global.LOGGER = require('./utils/message_codes');

app.disable('x-powered-by');
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(version + '/test', testRouter);
// define custom logging format
;
app.get('/', (req,res)=>{
    res.send({message:ERROR_CODES.HEALTH});
});
// Check if apis are running
app.get('/health', (req,res)=>{
    res.send({message:ERROR_CODES.HEALTH});
});
// error handler
app.use(function(err, req, res, next) {
    console.log(err)
});

module.export = app.listen(port, function(){
    console.log('Server Running on port:'+port+" env="+env);
});