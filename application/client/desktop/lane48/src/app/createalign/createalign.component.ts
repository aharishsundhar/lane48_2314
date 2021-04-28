import { Component, OnInit } from '@angular/core';
import { CreatealignService } from './createalign.service';

@Component({
  selector: 'app-createalign',
  templateUrl: './createalign.component.html',
  styleUrls: ['./createalign.component.scss'],
})

export class CreatealignComponent implements OnInit {
    public align = {
        name: '',
        email: '',
        address: '',
        phone: '',
    }

    constructor (
        private createalignService: CreatealignService,
    ) { }

    ngOnInit() {
    }
    GpCreate() {
        this.createalignService.GpCreate(this.align).subscribe(data => {
            this.align.name = ''
 	 	this.align.email = ''
 	 	this.align.address = ''
 	 	this.align.phone = ''
        },
        error => {
            console.log('Error', error);
        });
    }
}