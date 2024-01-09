import { Component, OnInit } from '@angular/core';
import { Habitat } from 'src/app/interfaces/habitat';
import { HabitatService } from 'src/app/services/habitat.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  allHabitat! : Habitat[]

  constructor(private habibatService:HabitatService){}
  ngOnInit(): void {
  this.getAllHabitats()    
  }


  getAllHabitats()
  {
    this.habibatService.findAll().subscribe({
      next : res=>{
        this.allHabitat = res
      }
    })
  }
}
