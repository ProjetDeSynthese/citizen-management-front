import { RegionService } from './../../../services/region.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
<<<<<<< HEAD
=======
import { ToastrService } from 'ngx-toastr';
>>>>>>> df07812f6f428d61cc71a399d00eed3fe66ea0df
import { Region } from 'src/app/interfaces/region';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.scss']
})
export class RegionComponent implements OnInit {

  form!: FormGroup
  public regions!: Region[]

<<<<<<< HEAD
  constructor(private regionService: RegionService) { }
=======
  constructor(private regionService: RegionService,private toastr: ToastrService) { }
>>>>>>> df07812f6f428d61cc71a399d00eed3fe66ea0df
  ngOnInit(): void {
    this.findAll()
    this.onForm()
  }
  onForm() {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
      code: new FormControl('', [Validators.required])
    })
  }

  public findAll() {
    this.regionService.findAll().subscribe((data) => {
      this.regions = data;
    })

  }

  submit() {
    var region: Region = {
      code: this.form.value.code,
      name: this.form.value.name
    }
    this.regionService.record(region).subscribe({
      next: data => {
<<<<<<< HEAD
=======
       this.toastr.success('Enregistrement effectué', 'Success');
>>>>>>> df07812f6f428d61cc71a399d00eed3fe66ea0df
        this.findAll()
      },
      error: error => {
        console.error('There was an error!', error);
<<<<<<< HEAD
        //alert('Erreur  survenir')
=======
       this.toastr.error("Erreur d'enregistrement", 'Error');
>>>>>>> df07812f6f428d61cc71a399d00eed3fe66ea0df
      }
    });

  }
  
}


