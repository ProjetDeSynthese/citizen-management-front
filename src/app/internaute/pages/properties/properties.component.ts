import { TypeHabitat } from 'src/app/interfaces/type-habitat';
import { TypeHabitatService } from './../../../services/type-habitat.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Quartier } from 'src/app/interfaces/quartier';
import { QuartierService } from 'src/app/services/quartier.service';

@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.scss']
})
export class PropertiesComponent implements OnInit {

  form!: FormGroup;
  allTypeHabitat!: TypeHabitat[];
  allQuatier!: Quartier[];

  constructor(
    private maisonService: TypeHabitatService,
    private quartierService: QuartierService,
  ) { }
  ngOnInit(): void {

    this.onGetMaison();
    this.onGetQuartier();
  }

  onGetQuartier() {
    this.quartierService.findAll().subscribe({
      next: res => {
        this.allQuatier = res;
      },
    });
  }

  onGetMaison() {
    this.maisonService.findAll().subscribe({
      next: res => {
        this.allTypeHabitat = res;
      },
    });
  }

}
