import { Request, Response } from 'express';
import { alignService } from '../service/alignService';
import { CustomLogger } from '../config/Logger'
let align = new alignService();

export class alignController {
    
    constructor() { }
    
    public GpDelete(req: Request, res: Response) {
align.GpDelete(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into alignController.ts: GpDelete');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from alignController.ts: GpDelete');
    })}
public GpSearch(req: Request, res: Response) {
align.GpSearch(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into alignController.ts: GpSearch');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from alignController.ts: GpSearch');
    })}
public GpSearchForUpdate(req: Request, res: Response) {
align.GpSearchForUpdate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into alignController.ts: GpSearchForUpdate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from alignController.ts: GpSearchForUpdate');
    })}
public GpUpdate(req: Request, res: Response) {
align.GpUpdate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into alignController.ts: GpUpdate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from alignController.ts: GpUpdate');
    })}
public GpGetAllValues(req: Request, res: Response) {
align.GpGetAllValues(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into alignController.ts: GpGetAllValues');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from alignController.ts: GpGetAllValues');
    })}
public GpCreate(req: Request, res: Response) {
align.GpCreate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into alignController.ts: GpCreate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from alignController.ts: GpCreate');
    })}


}