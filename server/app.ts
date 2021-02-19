import * as express from "express";
import * as helmet from "helmet";
import * as bodyParser from "body-parser";
import {IndexRoutes} from './counties/county.route';
import * as path from 'path';
import * as mongoose from "mongoose";
import {config} from "./config";

/**
 * Express Class App
 */
class App {

  public app: express.Application = express();

  // routes
  public indexRoutes: IndexRoutes = new IndexRoutes();

  setupRoutes(){
    this.indexRoutes.routes(this.app);
  }

  /**
   * We do all initializations here, if you want to add another database it here
   */
  constructor() {
    this.config();
    this.setupRoutes();
    this.mongoSetup();
  }

  /**
   * We load all of our middleware here
   * @private
   */
  private config(): void{
    this.app.use(helmet())
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
    this.app.set('trust proxy', 1) // trust first proxy
    this.app.use(express.static('public'));
  }

  /**
   * MongoDB connection
   * @private
   */
  private mongoSetup(): void{
    mongoose.set('debug', config.DEBUG_MONGO);
    mongoose.connect(config.MONGO_URL, {
      useNewUrlParser: true,
      useCreateIndex: true,
      autoIndex: true
    }).then(
        () => { /** ready to use. The `mongoose.connect()` promise resolves to undefined. */ },
    ).catch(err => {
      // process.exit();
    });
  }

}

export default new App().app;
