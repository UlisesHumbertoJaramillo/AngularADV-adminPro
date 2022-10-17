import { Component } from '@angular/core';
import {
  AbstractControlOptions,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';
import Swal from 'sweetalert2';
import swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  public formSubmited = false;

  public registerForm = this.fb.group(
    {
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5)]],
      password2: ['', [Validators.required, Validators.minLength(5)]],
      terminos: [false, [Validators.requiredTrue]],
    },
    {
      validators: this.passIguales('password', 'password2'),
    } as AbstractControlOptions
  );

  constructor(
    private fb: FormBuilder,
    private usuarioService: UsuarioService,
    private router: Router
  ) {}

  crearUsuario() {
    this.formSubmited = true; // se sabe si se ha enviado un formulario o no.
    if (this.registerForm.invalid) {
      return;
    }

    //ralizar el posteo
    this.usuarioService.crearUsuario(this.registerForm.value).subscribe(
      (resp) => {
        console.log('usuario creado');
        console.log(resp);
        this.router.navigateByUrl('/');
      },
      (err) => {
        //en caso de error
        Swal.fire('Error', err.error.msg, 'error');
      }
    );
  }

  campoNoValido(campo: string): Boolean {
    if (!this.registerForm.get(campo)?.valid && this.formSubmited) {
      return true;
    } else {
      return false;
    }
  }

  aceptaTerminos(): boolean {
    return !this.registerForm.get('terminos')!.value && this.formSubmited;
  }

  passNoValida() {
    const pass1 = this.registerForm.get('password')?.value;
    const pass2 = this.registerForm.get('password2')?.value;

    if (pass1 === pass2 && this.formSubmited) {
      return false;
    } else {
      return true;
    }
  }

  passIguales(pass1Name: string, pass2Name: string) {
    return (formGroup: FormGroup) => {
      const pass1Control = formGroup.get(pass1Name);
      const pass2Control = formGroup.get(pass2Name);

      if (pass1Control?.value === pass2Control?.value) {
        pass2Control?.setErrors(null);
      } else {
        pass2Control?.setErrors({ noEsIgual: true });
      }
    };
  }
}
