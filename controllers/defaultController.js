import { catchAsyncErrors } from "../middlewares/catchAsyncError.js";
import ErrorHandler from "../middlewares/error.js";

export const defaultMessage = catchAsyncErrors(async(req, res, next)=>{
 try{
    res.status(200).json({
        success:true,
        messsage:"default endpoint reached! use github readme for endpoint guide",
    });
 }catch(error){
    next(new ErrorHandler(error.messsage), 500);
 }

})