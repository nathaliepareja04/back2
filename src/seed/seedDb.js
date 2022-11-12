import { empleadoModel } from "../models/empleado.model.js";
import {response} from "../helpers/response.js"
import { data } from "./data.js";

export const seedDt=async(req,res)=>{
    try {
        await empleadoModel.deleteMany()
        const empleados=await empleadoModel.create(data)
        response(res,201,true,empleados,"seed ejecutado")

    } catch (error) {
        response(res,500,false,"",error.message)
    }
}