import {USCounties} from './county.controller';

export class IndexRoutes {

  public usCounties: USCounties = new USCounties()

  public routes(app): void {
    /**
      Seeds the database
     */
    app.route('/seed').get(this.usCounties.seed.bind(this.usCounties))

    /**
    Search county by key * required
     */
    app.route('/suggest').get(
        this.usCounties.suggest.bind(this.usCounties))

  }

}
