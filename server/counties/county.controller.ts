import {Request, Response} from 'express';
import {CountyInterface} from './county.interface';
import { County } from './county.model';
const _ = require('lodash');
const fs = require('fs');
export class USCounties {

    /**
     * Get US counties based on the keyword, this will match based on the front key
     * example: keyword is `th` will match `thailand` but not `keith`
     * @param req Express Request
     * @param res Express Response
     * @returns an Array of Counties
     */
    public async search(req: Request, res: Response): Promise<CountyInterface[]> {
        const key = '^' + req.body.key || '' + '.*';
        const counties = await County.find({name: {$regex: key, $options: 'i'}}).limit(10).exec()
        return res.jsonp(counties)
    }

    /**
     * Seed the database with initial data from the json file, running this again will silently throw an error
     * @param req Express Request
     * @param res Express Response
     * @returns void
     */
    public seed(req: Request, res: Response): void{

        const rawdata = fs.readFileSync('./seed-data.json');
        const counties = JSON.parse(rawdata);

        counties.forEach(c => {
            const county = new County(c)
            county.save(()=>{})
        })

        res.jsonp({message:'ok'})
    }

    public index(req: Request, res: Response): void{
        res.jsonp({message:'ok'})
    }


}
