import { Component } from '@angular/core';
import { FileUploader} from 'ng2-file-upload';
import { FileService } from './file.service';
import {saveAs} from 'file-saver';

const uri = 'http://localhost:3000/file/upload';
@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers:[FileService]
})
export class AppComponent {

    uploader:FileUploader = new FileUploader({url:uri});

    attachmentList:any = [];

    constructor(private _fileService:FileService){

        this.uploader.onCompleteItem = (item:any, response:any , status:any, headers:any) => {
            this.attachmentList.push(JSON.parse(response));
            item.remove();
        }
    }
}