import { Router } from 'express'
import { check } from 'express-validator'
import empleadoCtrl from '../controllers/empleado.controller.js'
import { validFields } from '../middleware/ValidFields.js'
import { seedDt } from '../seed/seedDb.js'

const route=Router()

//seed poblar base de datos
route.get("/seed",seedDt)

route.get('/',empleadoCtrl.listar)
route.get('/:id',empleadoCtrl.listById)

route.post('/',[

    check("nombres","el campo nombres es obligatorio")
    .notEmpty()
    .isLength({min:4,max:50}),

    check("apellidos")
    .optional()
    .isLength({min:4,max:50}),

    check("correo","el campo correo es obligatorio")
    .notEmpty()
    .isEmail(),

    check("edad","el campo edad es obligatorio")
    .notEmpty(),

    check("cargo","el campo cargo es obligatorio")
    .notEmpty(),

    check("salario","el campo salario es obligatorio")
    .notEmpty()

],
    validFields,
    empleadoCtrl.guardar)

route.put('/:id',empleadoCtrl.actualizar)
route.delete('/:id',empleadoCtrl.eliminar)

export default route