import { Component, Input } from '@angular/core';
import { Departement } from 'src/app/interfaces/departement';
import { Region } from 'src/app/interfaces/region';

@Component({
     selector: 'app-accordion',
     templateUrl: './accordion.component.html',
     styleUrls: ['./accordion.component.scss'],
})
export class AccordionComponent {
     @Input() TableElement!: Region[] | Departement[];
     @Input() idAccordion!: string;

     
}
