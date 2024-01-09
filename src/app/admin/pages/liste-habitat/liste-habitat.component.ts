import { Component, OnInit } from '@angular/core';
import { Habitat } from 'src/app/interfaces/habitat';
import { HabitatService } from 'src/app/services/habitat.service';

@Component({
  selector: 'app-liste-habitat',
  templateUrl: './liste-habitat.component.html',
  styleUrls: ['./liste-habitat.component.scss']
})
export class ListeHabitatComponent implements OnInit {
  habitats!: Habitat[]

  constructor( private habitatService: HabitatService) {

  }
  ngOnInit(): void {
    this.getAllHabitats()
  }
  getAllHabitats() {

    this.habitatService.findAll().subscribe({
      next: res => {
        this.habitats = res
      }
    })
  }


}
