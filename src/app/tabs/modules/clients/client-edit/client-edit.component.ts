import { Component, OnInit } from '@angular/core';
import { Countries, Documents } from '../../../../utils/requests/general_information';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientService } from '../../../../services/client.service';
import { Client } from '../../../../models/models';
import { ToastService } from '../../../../utils/services/toast.service';
import { LoadingService } from '../../../../utils/services/loading.service';


@Component({
  selector: 'app-client-edit',
  templateUrl: './client-edit.component.html',
  styleUrls: ['./client-edit.component.scss'],
})
export class ClientEditComponent implements OnInit {
  clientAlreadyExist: boolean = false;
  newClient: FormGroup;
  id: string = '';

  countries = Countries;
  documents = Documents;

  validation_messages = {
    'code': [
      { type: 'required', message: 'El tipo de documento es requerido.' },
    ],
    'document': [
      { type: 'required', message: 'El documento es requerido.' },
    ],
    'shortName': [
      { type: 'required', message: 'El Nombre Corto es requerido.' },
    ],
    'name': [
      { type: 'required', message: 'El Nombre Completo es requerido.' },
    ],
    'phoneCode': [
      { type: 'required', message: 'El codigo de Area es requerido.' },
    ],
    'phoneNumber': [
      { type: 'required', message: 'El Telefono es requerido.' },
    ],
    'email': [
      { type: 'required', message: 'El Correo es requerido.' },
      { type: 'pattern', message: 'Ingresa un Email valido' }
    ],
    'active': [
      { type: 'required', message: 'Activo es requerido.' },
    ]
  };


  constructor(private fb: FormBuilder,
    private route: ActivatedRoute,
    private clientService: ClientService,
    private toastService: ToastService,
    private loadingService: LoadingService,
    private router: Router) { }

  ngOnInit() {
    this.newClient = this.fb.group({
      code: ['', Validators.required],
      document: ['', Validators.required],
      shortName: ['', Validators.required],
      name: ['', Validators.required],
      phoneCode: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      email: ['', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])],
      active: [true, Validators.required]
    });

    this.route.params.subscribe((params) => {
      if ('id' in params) {
        this.id = params.id;
        this.clientService.get(this.id).subscribe((currentClient: Client) => {
          
          const document = currentClient.document.split('-');
          const phone = currentClient.phoneNumber.split('-');
          
          this.newClient.controls.code.setValue(document[0]);
          this.newClient.controls.document.setValue(document[1]);
          this.newClient.controls.shortName.setValue(currentClient.shortName);
          this.newClient.controls.name.setValue(currentClient.name);
          this.newClient.controls.phoneCode.setValue(phone[0]);
          this.newClient.controls.phoneNumber.setValue(phone[1]);
          this.newClient.controls.email.setValue(currentClient.email);
          this.newClient.controls.active.setValue(currentClient.active);
        });
      }
    });
  }

  async onSubmit() {
    await this.loadingService.presentLoading('Guardando...')
    const clientBody = this.newClient.value;
    
    if (this.id) {
      clientBody['phoneNumber'] = `${clientBody['phoneCode']}-${clientBody['phoneNumber']}`;
      delete clientBody.code;
      delete clientBody.document;
      delete clientBody.phoneCode;

      this.clientService.update(this.id, clientBody).subscribe((response: Client) => {
        console.log({ response });
        this.loadingService.close();
        this.toastService.show('Guardado Correctamente', 'Se modifico correctamente', 'success');
        this.router.navigateByUrl('/app/client');
      }, (err) => {
        console.log({ err });
        this.loadingService.close();
        this.toastService.show('Error', err, 'error');
      });
    } else {
      clientBody['document'] = `${clientBody['code']}-${clientBody['document']}`;
      clientBody['phoneNumber'] = `${clientBody['phoneCode']}-${clientBody['phoneNumber']}`;
      delete clientBody.phoneCode;
      delete clientBody.code;
      this.clientService.add(clientBody).subscribe((response: Client) => {
        console.log({ response });
        this.loadingService.close();
        this.toastService.show('Guardado Correctamente', 'Se ha guardado correctamente', 'success');
        this.router.navigateByUrl('/app/client');

      }, (err) => {
        console.log({ err });
        this.loadingService.close();
        this.toastService.show('Error', err, 'error');
      });
    }
  }

}
