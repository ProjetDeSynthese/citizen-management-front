import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { TypeHabitat } from 'src/app/interfaces/type-habitat';
import { TypeHabitatService } from 'src/app/services/type-habitat.service';

@Component({
  selector: 'app-type-habitat',
  templateUrl: './type-habitat.component.html',
  styleUrls: ['./type-habitat.component.scss']
})
export class TypeHabitatComponent implements OnInit {
  form!: FormGroup;
  allHabitat!: TypeHabitat[];

  constructor(
    private habitatService: TypeHabitatService,
    private toastr: ToastrService,
  ) { }

  ngOnInit(): void {
    this.onGetHabitat();
    this.onForm();
  }

  onForm() {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
    });
  }

  submit() {

    var habitat: TypeHabitat = {
      name: this.form.value.name,
    };
    if (habitat) {
      this.habitatService.record(habitat).subscribe({
        next: data => {
          this.toastr.success('Enregistrement effectué', 'Success');
          this.onGetHabitat();
        },
        error: error => {
          this.toastr.error("Erreur d'enregistrement", 'Error');
        },
      });
    }

  }

  onGetHabitat() {
    this.habitatService.findAll().subscribe({
      next: res => {
        this.allHabitat = res;
      },
    });
  }



  remove(arg : String | undefined) {
    if (arg)
      this.habitatService.delete(arg).subscribe({
        next: data => {
          //   this.toastr.success('Enregistrement effectué', 'Success');
          this.onGetHabitat()
        },
        error: err => {
          console.error('There was an error!', err);
          // this.toastr.error("Erreur d'enregistrement", 'Error');
        }
      })
  }

 

}
