import { Component, OnInit } from '@angular/core';
import { Citoyen } from 'src/app/interfaces/citoyen';
import { CitoyenService } from 'src/app/services/citoyen.service';

@Component({
  selector: 'app-all-citoyens',
  templateUrl: './all-citoyens.component.html',
  styleUrls: ['./all-citoyens.component.scss']
})
export class AllCitoyensComponent implements OnInit {

  allCitoyens! : Citoyen[]
  constructor(private citoyenService: CitoyenService ) {}

  ngOnInit(): void {
    this.getCitoyens()
    
  }
  getCitoyens(){
    this.citoyenService.findAll().subscribe({
      next: res => {
        this.allCitoyens = res
      }
    })

  }
  findCitoyen(id: String) {
    return this.allCitoyens.find(item => id === item.id)
}

}  

