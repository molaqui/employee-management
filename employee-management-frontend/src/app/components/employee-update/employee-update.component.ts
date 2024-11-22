import { Component, OnInit } from '@angular/core';
import { EmployeeService, Employee } from '../../services/employee.service';
import { ActivatedRoute, Router } from '@angular/router';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-employee-update',
  templateUrl: './employee-update.component.html',
  styleUrls: ['./employee-update.component.css'],
  imports: [
    FormsModule
  ],
  standalone: true
})
export class EmployeeUpdateComponent implements OnInit {
  employee: Employee = {} as Employee;

  constructor(
    private employeeService: EmployeeService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.employeeService.getEmployees().subscribe((employees) => {
        const existingEmployee = employees.find((e) => e.id === id);
        if (existingEmployee) this.employee = existingEmployee;
      });
    }
  }

  updateEmployee(): void {
    if (this.employee.id) {
      this.employeeService
        .updateEmployee(this.employee.id, this.employee)
        .subscribe(() => {
          alert('Employee updated successfully');
          this.router.navigate(['/']);
        });
    }
  }
}
