import {Request, Response} from 'express';
import {CountiesInterface} from './counties.interface';
import { County } from './counties.model';
const _ = require('lodash');
const fs = require('fs');
export class USCounties {

    /**
     * Get US counties based on the keyword, this will match based on the front key
     * example: keyword is `th` will match `thailand` but not `keith`
     * @param req
     * @param res
     *
     */
    public async search(req: Request, res: Response): Promise<CountiesInterface[]> {
        const key = '^' + req.body.key + '.*';
        const counties = await County.find({name: {$regex: key, $options: 'i'}}).limit(10).exec()
        return res.jsonp(counties)
    }

    /**
     * Seed the database with initial data from the json file, running this again will silently throw an error
     * @param req
     * @param res
     * @returns void
     */
    public seed(req: Request, res: Response): void{

        let rawdata = fs.readFileSync('./seed-data.json');
        let counties = JSON.parse(rawdata);

        counties.forEach(c => {
            const county = new County(c)
            county.save(()=>{})
        })

        res.jsonp({message:'ok'})
    }


}
