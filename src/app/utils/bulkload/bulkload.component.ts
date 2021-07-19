import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AlertService } from '../services/alert.service';
import { ToastService } from '../services/toast.service';
import { LoadingService } from '../services/loading.service';
import { ModalController } from '@ionic/angular';
import { ModalService } from '../services/modal.service';
import { API } from '../../utils/requests/api';

@Component({
  selector: 'app-bulkload',
  templateUrl: './bulkload.component.html',
  styleUrls: ['./bulkload.component.scss'],
})
export class BulkloadComponent implements OnInit {
  titulo: string = "";
  form: FormGroup;
  content_errors: any;
  errors: boolean;

  @Input()
  /** API desde la cual se cargarán los elemento */
  service: any | API<any> = null;

  constructor(public fb: FormBuilder, private modalService: ModalService, private modalController: ModalController,
    private toastService: ToastService,
    public alertService: AlertService,
    public loadingService: LoadingService) { }

  ngOnInit() {
    this.titulo = 'Carga Masiva';
    this.form = this.fb.group({
      file: [null]
    });
    this.errors = false;
  }

  async selectFile(event): Promise<void> {
    await this.loadingService.presentLoading();
    const file = (event.target as HTMLInputElement).files[0];
    this.form.patchValue({
      file: file
    });
    this.form.get('file').updateValueAndValidity();
    this.bulkLoad(this.form.value.file);
  }

  bulkLoad(file) {
    this.service.bulkLoad(file).subscribe(data => {
      this.toastService.show('Exito Carga Masiva', 'Se registraron con exito la carga masiva', 'success');
      this.loadingService.close();
      this.modalController.dismiss();
      this.errors = false;
    }, errors => {
      this.toastService.show('Error Carga Masiva', 'Se presentarion algunos errores en la carga masiva', 'error');
      this.loadingService.close();
      this.errors = true;
      this.content_errors = errors.error.invalid_rows;
      console.log('errors',this.content_errors);
    });
  }

  onFileChange(evt: any) {
    const target: DataTransfer = <DataTransfer>(evt.target);
    if (target.files.length !== 1) throw new Error('Cannot use multiple files');
    const reader: FileReader = new FileReader();
    const form: FormData = new FormData();
  }

}
