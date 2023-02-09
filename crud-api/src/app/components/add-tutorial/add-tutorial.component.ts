import { Component, OnInit } from '@angular/core';
import { Tutorial } from 'src/app/models/tutorial.model';
import { TutorialService } from 'src/app/services/tutorial.service';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
// import Validation from './utils/validation';

@Component({
  selector: 'app-add-tutorial',
  templateUrl: './add-tutorial.component.html',
  styleUrls: ['./add-tutorial.component.css'],
})
export class AddTutorialComponent implements OnInit {
  form: FormGroup = new FormGroup({
    title: new FormControl(''),
    description: new FormControl(''),
    published: new FormControl(false),
  });
  submitted = false;
  // tutorial: Tutorial = {
  //   title: '',
  //   description: '',
  //   published: false,
  // };
  // submitted = false;

  constructor(
    private tutorialService: TutorialService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      published: [false, Validators.required],
    });
  }

  get f(): {[key: string]: AbstractControl}{
    return this.form.controls;
  }

  saveTutorial(): void {
    this.submitted = true;

    if (this.form.invalid){
      return;
    }
    console.log(JSON.stringify(this.form.value, null, 2));

    const data = {
      title: this.f['title'].value,
      description: this.f['description'].value,
    };

    this.tutorialService.create(data).subscribe({
      next: (res) => {
        console.log(res);
        this.submitted = true;
      },
      error: (e) => console.error(e),
    });
  }
  
  newTutorial(): void {
    this.submitted = false;
    this.form.reset();
  }
}
