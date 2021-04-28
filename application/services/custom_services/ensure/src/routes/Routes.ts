import { Request, Response, NextFunction } from "express";
import { alignController } from '../controller/alignController';


export class Routes {
    private align: alignController = new alignController();
    
    public routes(app): void {
          app.route('/health/entity-service').get((req: Request, res: Response) => {
            res.status(200).send({
                status: 'up'
            })
        })
        app.route('/align/:id').delete(this.align.GpDelete);
app.route('/align/get/search').get(this.align.GpSearch);
app.route('/align/get/update').put(this.align.GpSearchForUpdate);
app.route('/align').put(this.align.GpUpdate);
app.route('/align').get(this.align.GpGetAllValues);
app.route('/align').post(this.align.GpCreate);
     }

}