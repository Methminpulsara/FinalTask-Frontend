import { Component } from '@angular/core';
import EmployeeService from '../../../../service/EmployeeService';
import Employee from '../../../../model/Employee';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-add-employee',
  imports: [CommonModule,FormsModule],
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.css'
})
export class AddEmployeeComponent {


  constructor(private employeeService:EmployeeService){}

  public employee : Employee= {
    employeeId: 0,
    name: '',
    email: '',
    department: '',
    createdDate: '',
    modifiedDate: ''
  }

  add(){
    this.employeeService.save(this.employee).subscribe(res=>{
      this.resetform();
      alert("added succccsfully ! ")
    })

  }


  resetform(){
      this.employee ={
      employeeId: 0,
      name: '',
      email: '',
      department: '',
      createdDate: '',
      modifiedDate:""
    }
  }
  }
