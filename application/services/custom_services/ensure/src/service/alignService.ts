import { Request, Response } from 'express';
import {alignDao} from '../dao/alignDao';
import { CustomLogger } from '../config/Logger'
let align = new alignDao();

export class alignService {
    
    constructor() { }
    
    public GpDelete(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into alignService.ts: GpDelete')
     const  alignId = req.params.id;
     align.GpDelete(alignId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from alignService.ts: GpDelete')
         callback(response);
         });
    }
public GpSearch(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into alignService.ts: GpSearch')
     const  alignData = req.query;
     align.GpSearch(alignData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from alignService.ts: GpSearch')
         callback(response);
         });
    }
public GpSearchForUpdate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into alignService.ts: GpSearchForUpdate')
     const  alignData = req.body;
     align.GpSearchForUpdate(alignData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from alignService.ts: GpSearchForUpdate')
         callback(response);
         });
    }
public GpUpdate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into alignService.ts: GpUpdate')
     const  alignData = req.body;
     align.GpUpdate(alignData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from alignService.ts: GpUpdate')
         callback(response);
         });
    }
public GpGetAllValues(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into alignService.ts: GpGetAllValues')
     
     align.GpGetAllValues((response)=>{
             new CustomLogger().showLogger('info', 'Exit from alignService.ts: GpGetAllValues')
         callback(response);
         });
    }
public GpCreate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into alignService.ts: GpCreate')
     const  alignData = req.body;
     align.GpCreate(alignData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from alignService.ts: GpCreate')
         callback(response);
         });
    }


}