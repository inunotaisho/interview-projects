const express = require('express');
const fs = require('fs');
const path = require('path');
const compression = require('compression');
const app = express();

const logger = require('./logger');
app.log = logger({appName: 'SmartWeb server', enabled: true, level: 'debug'});

const bunyanMiddleware = require('bunyan-middleware');
app.use(bunyanMiddleware(app.log));

const staticRoot = path.resolve(__dirname, '../public');
const port = process.env.PORT || 4200;

// threshold controls compressing based on file size. Let's not do that
// WARNING: The order matters here...compression must come before express.static
app.use(compression({ threshold: 0 }));
app.use(express.static(staticRoot, { maxage: '365d' }));

// app.use(function(req, res) {
//   res.status(404);
//   fs.createReadStream(path.join(staticRoot, '/index.html')).pipe(res);
// });

app.listen(port, function () {
	app.log.info(`** Server is listening on port ${port}`);
	app.log.info('env = ' + app.get('env'));
	app.log.info('__dirname = ' + __dirname);
	app.log.info('process.cwd = ' + process.cwd());
	app.log.info('** Server IS running! **');
});