import * as mongoose from 'mongoose';
import alignModel from '../models/align';
import { CustomLogger } from '../config/Logger'


export class alignDao {
    private align = alignModel;
    constructor() { }
public GpDelete(alignId, callback){
new CustomLogger().showLogger('info', 'Enter into alignDao.ts: GpDelete')

this.align.findByIdAndRemove(alignId).then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from alignDao.ts: GpDelete');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpSearch(alignData, callback){
new CustomLogger().showLogger('info', 'Enter into alignDao.ts: GpSearch')
let andkey ;let and_obj = {} ;let orkey ;let or_obj = {} ;;Object.entries(alignData).forEach(
                        ([key,value]) => {
                            if(value !== ''){
                                andkey = key;
                                and_obj[andkey] = value;
                            }
                            else{
                                orkey = key;
                                or_obj[orkey] = { $ne: '' }
                            }
                        }
                    );;
;
this.align.find({$and: [
                        {
                            $or: [
                               or_obj
                            ]
                        },
                        and_obj
                    ]}).then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from alignDao.ts: GpSearch');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpSearchForUpdate(alignData, callback){
new CustomLogger().showLogger('info', 'Enter into alignDao.ts: GpSearchForUpdate')

this.align.findOneAndUpdate({ _id: alignData._id }, alignData, { new: true }).then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from alignDao.ts: GpSearchForUpdate');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpUpdate(alignData, callback){
new CustomLogger().showLogger('info', 'Enter into alignDao.ts: GpUpdate')

this.align.findOneAndUpdate({ _id: alignData._id }, alignData, { new: true }).then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from alignDao.ts: GpUpdate');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpGetAllValues(callback){
new CustomLogger().showLogger('info', 'Enter into alignDao.ts: GpGetAllValues')

this.align.find().then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from alignDao.ts: GpGetAllValues');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpCreate(alignData, callback){
new CustomLogger().showLogger('info', 'Enter into alignDao.ts: GpCreate')
let temp = new alignModel(alignData);
;
temp.save().then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from alignDao.ts: GpCreate');
callback(result);
}).catch((error)=>{
callback(error);
});}


}