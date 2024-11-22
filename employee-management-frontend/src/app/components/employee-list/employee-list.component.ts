import { Component, OnInit } from '@angular/core';
import { EmployeeService, Employee } from '../../services/employee.service';
import {Router, RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  imports: [CommonModule, RouterModule],
  styleUrls: ['./employee-list.component.css'],
  standalone: true
})
export class EmployeeListComponent implements OnInit {
  employees: Employee[] = [];

  constructor(private employeeService: EmployeeService, private router: Router) {}

  ngOnInit(): void {
    this.loadEmployees();
  }

  loadEmployees(): void {
    this.employeeService.getEmployees().subscribe((data) => {
      this.employees = data;
    });
  }

  deleteEmployee(id: string): void {
    this.employeeService.deleteEmployee(id).subscribe(() => {
      this.employees = this.employees.filter((e) => e.id !== id);
    });
  }

  editEmployee(id: string | undefined) {
    if (!id) {
      console.error('ID is undefined');
      return;
    }
    this.router.navigate([`/edit/${id}`]);
  }

  viewDetails(id: string): void {
    this.router.navigate([`/details/${id}`]);
  }
}
