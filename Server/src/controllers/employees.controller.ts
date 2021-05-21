import { NextFunction, Request, Response } from 'express';
import { CreateEmployeeDto } from '@dtos/employee.dto';
import { Employee } from '@interfaces/employees.interface';
import employeeService from '@services/employees.service';
import Employees from '@/seeds/employeList';
import axios from 'axios';

class EmployeeController {
  public employeeService = new employeeService();
  resultArray = [];

  public getEmployees = async (req: Request, res: Response, next: NextFunction) => {
    Employees.forEach(employee => {
      console.log(`CURRENT EMPLOYEE : ${employee.firstName}  COUNTRY CODE IS :  ${employee.country} `);

      axios
        .get(`https://restcountries.eu/rest/v2/alpha/${employee.country}`)
        .then(payload => {
          console.log('new payload : ', payload);
          this.resultArray.push(payload);
        })
        .catch(err => {
          if (err) {
            console.log(err);
          }
        });
    });

    res.status(200).json({ data: this.resultArray, message: 'findAll' });

    // try {
    //   let resultArray = [];
    //   const findAllUsersData: User[] = await this.userService.findAllUser();

    //   res.status(200).json({ data: findAllUsersData, message: 'findAll' });
    // } catch (error) {
    //   next(error);
    // }
  };

  //   public getUserById = async (req: Request, res: Response, next: NextFunction) => {
  //     try {
  //       const userId: string = req.params.id;
  //       const findOneUserData: User = await this.userService.findUserById(userId);

  //       res.status(200).json({ data: findOneUserData, message: 'findOne' });
  //     } catch (error) {
  //       next(error);
  //     }
  //   };

  //   public createUser = async (req: Request, res: Response, next: NextFunction) => {
  //     try {
  //       const userData: CreateUserDto = req.body;
  //       const createUserData: User = await this.userService.createUser(userData);

  //       res.status(201).json({ data: createUserData, message: 'created' });
  //     } catch (error) {
  //       next(error);
  //     }
  //   };

  //   public updateUser = async (req: Request, res: Response, next: NextFunction) => {
  //     try {
  //       const userId: string = req.params.id;
  //       const userData: CreateUserDto = req.body;
  //       const updateUserData: User = await this.userService.updateUser(userId, userData);

  //       res.status(200).json({ data: updateUserData, message: 'updated' });
  //     } catch (error) {
  //       next(error);
  //     }
  //   };

  //   public deleteUser = async (req: Request, res: Response, next: NextFunction) => {
  //     try {
  //       const userId: string = req.params.id;
  //       const deleteUserData: User = await this.userService.deleteUser(userId);

  //       res.status(200).json({ data: deleteUserData, message: 'deleted' });
  //     } catch (error) {
  //       next(error);
  //     }
  //   };
}

export default EmployeeController;
