import { Component } from '@angular/core'

@Component({
    selector:'photo-uploader',
    templateUrl:'./photo-uploader.html'
})
export class PhotoUploaderComponent {
    url: any

    readUrl(event) {
        if (event.target.files && event.target.files[0]) {
            var reader = new FileReader();

            reader.onload = (event:any) => {
                this.url = event.target.result;
            }

            reader.readAsDataURL(event.target.files[0]);
        }
    }
}
