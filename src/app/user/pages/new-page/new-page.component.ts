import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user-service.service';
import { User, dataUser } from '../../interfaces/user.interface';

@Component({
  selector: 'app-new-page',
  templateUrl: './new-page.component.html',
  styles: [],
})
export class NewPageComponent {
  public UserForm = new FormGroup({
    //! I COMMENTED THE VALIDATORS WHILE I CHECK ERROR.....
    name: new FormControl<string>('', [
      // Validators.required,
      // Validators.minLength(5),
    ]),
    email: new FormControl<string>('', [
      // Validators.required,
      // Validators.minLength(5),
      // Validators.pattern(/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/),
    ]),
    phone: new FormControl<string>('', [
      // Validators.required,
      // Validators.maxLength(10),
      // Validators.pattern(/^([0-9])*$/),
    ]),
    address: new FormControl<string>('', [
      // Validators.required,
      // Validators.minLength(5),
    ]),
  });

  showResult: Boolean = false;

  constructor(private userService: UserService) {}

  createUser() {
    const { name, email, phone, address } = this.UserForm.value;
    let user: dataUser = { name, email, phone, address };
    this.userService.createUser(user).subscribe((result) => {
      this.showResult = true;
      this.UserForm.reset();
      console.log({ result });
      setTimeout(() => {
        this.showResult = false;
      }, 3000);
    });
  }
}
