import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Proprietaire } from 'src/app/interfaces/proprietaire';
import { ProprietaireService } from 'src/app/services/proprietaire.service';

@Component({
  selector: 'app-proprietaire',
  templateUrl: './proprietaire.component.html',
  styleUrls: ['./proprietaire.component.scss']
})
export class ProprietaireComponent implements OnInit {
  form!: FormGroup;
  allProprietaire!: Proprietaire[];

  constructor(private proprietaireService: ProprietaireService, private toastr: ToastrService,) { }

  ngOnInit(): void {
    this.onGetProprietaire();
    this.onForm();
  }

  onForm() {
    this.form = new FormGroup({
      nom: new FormControl('', [Validators.required]),
      prenom: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      contact: new FormControl('', [Validators.required]),
    });
  }

  submit() {

    var proprietaire: Proprietaire = {
      nom: this.form.value.nom,
      prenom: this.form.value.prenom,
      email: this.form.value.email,
      contact: this.form.value.contact,
    };

     if (proprietaire) {
      this.proprietaireService.record(proprietaire).subscribe({
        next: data => {
          this.toastr.success('Enregistrement effectué', 'Success');
          this.onGetProprietaire();
          this.form.reset()
        },
        error: error => {
          this.toastr.error("Erreur d'enregistrement", 'Error');
        },
      });
    }

  }

  onGetProprietaire() {
    this.proprietaireService.findAll().subscribe({
      next: res => {
        this.allProprietaire = res;
        console.log(res)
      },
    });
  }



  remove(arg: String | undefined) {
    if (arg)
      this.proprietaireService.delete(arg).subscribe({
        next: data => {
          this.toastr.success('Enregistrement effectué', 'Success');
          this.onGetProprietaire()
          this.form.reset()
        },
        error: err => {
          this.toastr.error("Erreur d'suppression", 'Error');
        }
      })
  }



}