import { model, Schema, Document } from 'mongoose';
import { Employee } from '@interfaces/employees.interface';

const employeeSchema: Schema = new Schema({
  firstName: String,
  lastName: String,
  dateOfBirth: String,
  jobTitle: String,
  company: String,
  country: Array,
});

const employeeModel = model<Employee & Document>('Employee', employeeSchema);

export default employeeModel;
