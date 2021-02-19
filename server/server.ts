require('dotenv').config()
import app from './app';
import {config} from './config';
const port = process.env.NODE_PORT
const chalk = require('chalk');
const env = process.env.NODE_ENV || 'development';

/**
 * Start Express
 */
app.listen(port, function () {
  const server = (process.env.NODE_ENV === 'secure' ? 'https://' : 'http://') + config.NODE_HOST + ':' + config.NODE_PORT;
  console.log('Express TS running on http://localhost:' + port);
  console.log('--');
  console.log();
  console.log(chalk.yellow('Environment:     ' + env));
  console.log(chalk.magenta('Server:          ' + server));
  console.log(chalk.green('Database:        ' + config.MONGO_URL));
  console.log(chalk.red('Mongo Debug:     ' + config.DEBUG_MONGO));
  console.log();
  console.log('--');
  console.log();
});


