import mongoose, { Schema, Document } from 'mongoose';

interface Employee extends Document {
  name: string,
  age: number,
  country: string,
  charge: string,
  years: number
}

const EmployeeSchema: Schema = new Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  country: { type: String, required: true },
  charge: { type: String, required: true },
  years: { type: Number, required: true},
});

export default mongoose.model<Employee>('Employee', EmployeeSchema);