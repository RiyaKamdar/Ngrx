import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeeComponent implements OnInit {
  displayColumns: string[] = ["id","employee_name","employee_salary","employee_age","contact"];
  
  @Input() dataSource: any = '';
  @Input() stringFilter: any ='';

  constructor(private employee: EmployeeService) { }

  ngOnInit(): void {

  }

}
