export interface Employee {
  name: string;
  age: number | string;
  country: string;
  charge: string;
  years: number | string;
  _id: string;
}

export interface EmployeeFormProps {
  name: string;
  setName: (value: string) => void;
  age: string | number;
  setAge: (value: string | number) => void;
  country: string;
  setCountry: (value: string) => void;
  charge: string;
  setCharge: (value: string) => void;
  years: string | number;
  setYears: (value: string | number) => void;
  edit: boolean;
  handleSubmit: (event: React.FormEvent) => void;
  handleCancel: () => void;
}

export interface EmployeeListProps {
  employees: Employee[];
  editEmp: (_id: string)=> void;
  deleteEmp: (_id: string)=> void;
}

export interface EmployeeRowProps {
  val: Employee;
  index: number;
  editEmp: (_id: string)=> void;
  deleteEmp: (_id: string, name: string)=> void;
}