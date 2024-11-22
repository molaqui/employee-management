import { Component } from '@angular/core';
import { EmployeeService, Employee } from '../../services/employee.service';
import {Router, RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  imports: [CommonModule, FormsModule, RouterModule],
  styleUrls: ['./employee-form.component.css'],
  standalone: true
})
export class EmployeeFormComponent {
  employee: Partial<Employee> = {};

  constructor(private employeeService: EmployeeService, private router: Router) {}

  addEmployee(): void {
    this.employeeService.addEmployee(this.employee as Employee).subscribe(() => {
      alert('Employee added successfully!');
      this.router.navigate(['/']);
    });
  }
}
