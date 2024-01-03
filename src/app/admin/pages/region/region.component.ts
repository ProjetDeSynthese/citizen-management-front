import { RegionService } from './../../../services/region.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Region } from 'src/app/interfaces/region';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.scss']
})
export class RegionComponent implements OnInit {

  form = new FormGroup({
    name: new FormControl('', [Validators.required]),
    code: new FormControl('', [Validators.required])
  })
  public regions!: Region[]

  constructor(private regionService: RegionService) { }
  ngOnInit(): void {
    this.findAll()
  }

  public findAll() {
    this.regionService.findAll().subscribe((data) => {
      this.regions = data;
    })

  }

  submit() {
    console.log(this.form.value)
  }





}
