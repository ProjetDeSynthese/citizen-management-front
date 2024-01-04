import { RegionService } from './../../../services/region.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
//import { ToastrService } from 'ngx-toastr';
import { Region } from 'src/app/interfaces/region';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.scss']
})
export class RegionComponent implements OnInit {


  form!: FormGroup
  public regions!: Region[]

  constructor(private regionService: RegionService) { }
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

  remove(arg: string | undefined) {
    if (arg)
      this.regionService.delete(arg).subscribe({
        next: data => {
          //   this.toastr.success('Enregistrement effectué', 'Success');
        this.findAll()
        },
        error: err => {
          console.error('There was an error!', err);
          // this.toastr.error("Erreur d'enregistrement", 'Error');
        }
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
        //   this.toastr.success('Enregistrement effectué', 'Success');
        this.findAll()
      },
      error: error => {
        console.error('There was an error!', error);

        // this.toastr.error("Erreur d'enregistrement", 'Error');
      }

    })
  }
}


