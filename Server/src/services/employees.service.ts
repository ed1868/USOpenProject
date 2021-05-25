import { CreateEmployeeDto } from '@dtos/employee.dto';
import HttpException from '@exceptions/HttpException';
import { Employee } from '@interfaces/employees.interface';
import employeeModel from '@models/employee.model';
import { isEmpty } from '@utils/util';

class EmployeeService {
  public employees = employeeModel;

  public async findAllEmployees(): Promise<Employee[]> {
    const employees: Employee[] = await this.employees.find();
    return employees;
  }

  //   public async findUserById(userId: string): Promise<User> {
  //     if (isEmpty(userId)) throw new HttpException(400, "You're not userId");

  //     const findUser: User = await this.users.findOne({ _id: userId });
  //     if (!findUser) throw new HttpException(409, "You're not user");

  //     return findUser;
  //   }

  public async createUser(userData: CreateEmployeeDto): Promise<Employee> {
    if (isEmpty(userData)) throw new HttpException(400, "You're not userData");

    const findUser: Employee = await this.employees.findOne({ firstName: userData.firstName });
    if (findUser) throw new HttpException(409, `You're name ${userData.firstName} already exists`);

    console.log('THE USER DATA: ', userData);

    const createUserData: Employee = await this.employees.create({ ...userData });

    return createUserData;
  }

  //   public async updateUser(userId: string, userData: CreateUserDto): Promise<User> {
  //     if (isEmpty(userData)) throw new HttpException(400, "You're not userData");

  //     if (userData.email) {
  //       const findUser: User = await this.users.findOne({ email: userData.email });
  //       if (findUser && findUser._id != userId) throw new HttpException(409, `You're email ${userData.email} already exists`);
  //     }

  //     if (userData.password) {
  //       const hashedPassword = await bcrypt.hash(userData.password, 10);
  //       userData = { ...userData, password: hashedPassword };
  //     }

  //     const updateUserById: User = await this.users.findByIdAndUpdate(userId, { userData });
  //     if (!updateUserById) throw new HttpException(409, "You're not user");

  //     return updateUserById;
  //   }

  //   public async deleteUser(userId: string): Promise<User> {
  //     const deleteUserById: User = await this.users.findByIdAndDelete(userId);
  //     if (!deleteUserById) throw new HttpException(409, "You're not user");

  //     return deleteUserById;
  //   }
}

export default EmployeeService;
