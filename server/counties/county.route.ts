import {USCounties} from './county.controller';
import {Validator} from '../libraries/Validator';
import {CountValidation} from './county.validation';

export class IndexRoutes {

  public usCounties: USCounties = new USCounties()

  public routes(app): void {
    /*
      Seeds the database
     */
    app.route('/seed').get(this.usCounties.seed.bind(this.usCounties))

    /*
    Search county by key * required
     */
    app.route('/search').post(
        CountValidation(),Validator.validate,
        this.usCounties.search.bind(this.usCounties))

  }

}
