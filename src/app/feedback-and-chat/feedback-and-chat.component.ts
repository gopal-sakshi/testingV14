import { Component, CUSTOM_ELEMENTS_SCHEMA, inject, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-feedback-and-chat',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './feedback-and-chat.component.html',
  styleUrls: ['./feedback-and-chat.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
//   schemas: [NO_ERRORS_SCHEMA]
})

export class FeedbackAndChatComponent {

  // Remove the following constructor. Inject the FormBuilder service through the inject function
  private formBuilder = inject(FormBuilder);

  contactForm = this.formBuilder.group({
    fullname: '',
    email: '',
    comments: ''
  });

  login = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  login_untyped = new UntypedFormGroup({
    email: new UntypedFormControl('')
  })

  showMsg: boolean = false;

  constructor(private readonly route: ActivatedRoute) { }


  // df-messanger web component requires a javascript that should be injected 
    // only when the feedback and chat component is loaded. 
    // For this purpose we are going to add the relevant code to the ngOnInit() method
  ngOnInit() {
    // console.log("title23 ====> ", this.route.snapshot.routeConfig?.title);
    // Load the chat script, which activates the `<df-messenger>` element.
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.gstatic.com/dialogflow-console/fast/messenger-cx/bootstrap.js?v=1';
    document.head.appendChild(script);

    // UNCOMMENT AND SEE below line --> throws compile error
    // const email1Domain = this.login.value.email1.domain;        // strictly typed ===> there is no domain property on email.
    const email2Domain = this.login_untyped.value.email.domain;     // not a problem

  }

  onSubmit(): void {
    console.log('Your feedback has been submitted', this.contactForm.value);
    this.showMsg = true;
    this.contactForm.reset();
  }

}


/* 

Understand HTML

You use the formGroup property binding to bind contactForm to the form element and the ngSubmit event binding
The FormGroup directive listens for the submit event emitted by the form element. 
  Then, the FormGroup directive emits an ngSubmit event that you are able to bind to the onSubmit callback function.
In a later step, you implement the onSubmit callback function in the feedback-and-chat.component.ts file

*/