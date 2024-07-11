import { Component } from '@angular/core';
import { CraneServiceComponent } from './crane-service/crane-service.component';

@Component({
  selector: 'app-crane-services-tab',
  standalone: true,
  imports: [CraneServiceComponent],
  templateUrl: './crane-services-tab.component.html',
  styleUrl: './crane-services-tab.component.scss',
})
export class CraneServicesTabComponent {
  service1: string[] = [
    'Подем и преместване на тежки товари',
    'Монтаж и демонтаж на машини и съоръжения',
    'Преместване на контейнери, гаражи и други големи обекти',
  ];

  service2: string[] = [
    'Монтаж на строителни елементи',
    'Инсталиране на рекламни билбордове и конструкции',
    'Подем на строителни материали на високи етажи',
  ];
}
