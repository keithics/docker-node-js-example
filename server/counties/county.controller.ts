import {Request, Response} from 'express';
import {CountyInterface} from './county.interface';
import { County } from './county.model';
const _ = require('lodash');
const fs = require('fs');
export class USCounties {

    /**
     * Get US counties based on the keyword, this will match based on the front key
     * example: keyword is `th` will match `thailand` but not `keith`
     * both name and state are searched
     * @param req Express Request
     * @param res Express Response
     * @returns an Array of Counties
     */
    public async suggest(req: Request, res: Response): Promise<CountyInterface[]> {
        const key = '^' + req.query.q || '' + '.*';
        const counties = await County.find(
            {
                $or: [
                    {name: {$regex: key, $options: 'i'}},
                    {state: {$regex: key, $options: 'i'}}
                ]
            }
            , {fips:1,name:1,state:1, _id:0}
        ).limit(10).exec()
        return res.jsonp(counties)
    }

    /**
     * Seed the database with initial data from the json file, running this again will silently throw an error
     * @param req Express Request
     * @param res Express Response
     * @returns void
     */
    public seed(req: Request, res: Response): void{

        const rawData = fs.readFileSync('./seed-data.json');
        const counties = JSON.parse(rawData);

        counties.forEach(c => {
            const county = new County(c)
            county.save(()=>{})
        })

        res.jsonp({message:'ok'})
    }



}
