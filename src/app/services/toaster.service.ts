import { Injectable } from '@angular/core';

declare var toastr:any;
@Injectable({
  providedIn: 'root'
})
export class ToasterService {

  constructor() { 
    //this.toastSetting();
  }

  success(title,message?){
    toastr.success(message,title)
  }

  info(title,message?){
    toastr.info(message,title)
  }

  warning(title,message?){
    toastr.warning(message,title)
  }

  error(title,message?){
    toastr.error(message,title)
  }

  toastSetting(){
    toastr.options = {
      "closeButton": true,
      "debug": false,
      "newestOnTop": false,
      "progressBar": false,
      "positionClass": "toast-bottom-center",
      "preventDuplicates": true,
      "onclick": null,
      "showDuration": "300",
      "hideDuration": "1000",
      "timeOut": "5000",
      "extendedTimeOut": "1000",
      "showEasing": "swing",
      "hideEasing": "linear",
      "showMethod": "fadeIn",
      "hideMethod": "fadeOut"
    }
  }
}
