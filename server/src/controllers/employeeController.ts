import { Request, Response } from 'express';
import Employee from '../models/employeeModel';

// Obtener empleados
export const getEmployees = async(req: Request, res: Response)=> {
  try {
    const employees = await Employee.find();
    res.status(200).json(employees);
  } catch (err) {
    res.status(500).json({ error: `Internal server error ${err}` });
  }
};

// Crear empleados
export const createEmployee = async(req: Request, res: Response)=> {
  try {
    const { name, age, country, charge, years } = req.body;
    const employee = new Employee({ name, age, country, charge, years });
    await employee.save();
    res.status(201).json(employee);
  } catch (err) {
    res.status(500).json({ error: `Internal server error ${err}` });
  }
};

// Actualizar empleado
export const updateEmployee = async(req: Request, res: Response)=> {
  try {
    const { id } = req.params;
    const { name, age, country, charge, years } = req.body;
    const employee = await Employee.findByIdAndUpdate(
      id,
      { name, age, country, charge, years },
      { new: true }
    );
    res.status(200).json(employee);
  } catch (err) {
    res.status(500).json({ error: `Internal server error ${err}` });
  }
};

// Eliminar Empleado
export const deleteEmployee = async(req: Request, res: Response)=> {
  try {
    const { id } = req.params;
    await Employee.findByIdAndDelete(id);
    res.status(200).json({ message: `Empleado eliminado` });
  } catch (err) {
    res.status(500).json({ error: `Internal server error ${err}` });
  }
};