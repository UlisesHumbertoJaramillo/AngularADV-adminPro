import {
  Component,
  AfterViewInit,
  ViewChild,
  ElementRef,
  NgZone,
} from '@angular/core';
import {
  AbstractControlOptions,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';
import Swal from 'sweetalert2';

declare const google: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements AfterViewInit {
  @ViewChild('GoogleBtn') googleBtn: ElementRef | undefined;
  ngAfterViewInit(): void {
    this.googleInit();
  }

  googleInit() {
    google.accounts.id.initialize({
      client_id:
        '501779769785-18alhf24jeplsiboce054un36562a30v.apps.googleusercontent.com',
      callback: (response: any) => this.handleCredentialResponse(response),
    });
    google.accounts.id.renderButton(
      //document.getElementById('buttonDiv'), no se debe usar en Angular
      this.googleBtn!.nativeElement,
      { theme: 'outline', size: 'large' } // customization attributes
    );
  }

  handleCredentialResponse(response: any) {
    //console.log('Encoded JWT ID token: ' + response.credential);
    this.usuarioService.loginGoogle(response.credential).subscribe((resp) => {
      //console.log(resp)
      this.ngZone.run(() => {
        this.router.navigateByUrl('/');
      });
    });
  }
  public formSubmited = false;

  public loginForm = this.fb.group({
    email: [
      localStorage.getItem('email') || '',
      [Validators.required, Validators.email],
    ],
    password: ['', [Validators.required, Validators.minLength(5)]],
    remember: [false],
  });

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private usuarioService: UsuarioService,
    private ngZone: NgZone
  ) {}
  login() {
    this.usuarioService.login(this.loginForm.value).subscribe(
      (resp) => {
        if (this.loginForm.get('remember')?.value) {
          localStorage.setItem(
            'email',
            this.loginForm.get('email')?.value as string
          );
        } else {
          localStorage.removeItem('email');
        }
        this.router.navigateByUrl('/');
      },
      (err) => {
        //en caso de error
        Swal.fire('Error', err.error.msg, 'error');
      }
    );
    //console.log(this.loginForm.value);
    //this.router.navigateByUrl('/');
  }
}
