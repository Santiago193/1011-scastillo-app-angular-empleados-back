const Empleado = require('../models/Empleado');

const empleadoCtrl = {};

empleadoCtrl.getEmpleados = async (req, res) => {
  const empleados = await Empleado.find();
  res.json(empleados);
};

empleadoCtrl.createEmpleado = async (req, res) => {
  const empleado = new Empleado(req.body);
  await empleado.save();
  res.json({ status: 'Empleado guardado' });
};

empleadoCtrl.getEmpleado = async (req, res) => {
  const empleado = await Empleado.findById(req.params.id);
  res.json(empleado);
};

empleadoCtrl.editEmpleado = async (req, res) => {
  await Empleado.findByIdAndUpdate(req.params.id, req.body);
  res.json({ status: 'Empleado actualizado' });
};

empleadoCtrl.deleteEmpleado = async (req, res) => {
  await Empleado.findByIdAndDelete(req.params.id);
  res.json({ status: 'Empleado eliminado' });
};

module.exports = empleadoCtrl;
