import {USCounties} from './counties.controller';

export class IndexRoutes {

  public usCounties: USCounties = new USCounties()

  public routes(app): void {
    app.route('/search').post(this.usCounties.search.bind(this.usCounties))
    app.route('/seed').get(this.usCounties.seed.bind(this.usCounties))

  }

}
