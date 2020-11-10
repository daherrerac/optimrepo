import { Component, ViewChild, ElementRef, OnInit, AfterViewInit } from '@angular/core';
import * as pbi from 'powerbi-client';
import { HttpClient, HttpHeaders } from '@angular/common/http';
declare var powerbi: any;

@Component({
  selector: 'ngx-prediction',
  templateUrl: './prediction.component.html',
  styleUrls: ['./prediction.component.scss']
})
export class PredictionComponent implements OnInit {

  @ViewChild('embeddedReport')
  embeddedReport: ElementRef;
  config: any;
  configg: any;
  screenHeight: number;
  embedConfig: any;
  embedConfigg: any;

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.screenHeight = (window.screen.height);  
    this.httpClient.get<any>("http://optimpowerbackend.azurewebsites.net/gettoken")
    .subscribe(config => {
      this.config = config;
      const model = pbi.models;
      this.embedConfig = {
        type: 'report',
        tokenType: model.TokenType.Embed,
        accessToken: config.token,
        embedUrl: config.embedUrl,
        permissions: model.Permissions.All,
        settings: {
          filterPaneEnabled: false,
          navContentPaneEnabled: false
        }
      };

      powerbi.embed(this.embeddedReport.nativeElement, this.embedConfig);
    });
  }

  async reloadreport(){
    /* let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.embedConfig.accessToken });
    let options = { headers: headers }; */
    this.configg = await this.httpClient.get<any>("http://optimpowerbackend.azurewebsites.net/gettoken").toPromise();

    console.log(this.configg.token);

    let data = { notifyOption: 'NoNotification' }
    const headerDict = {
      'Content-Type': 'application/json',
      'Authorization': this.configg.token,
    }
    const requestOptions = {                                                                                                                                                                                 
      headers: new HttpHeaders(headerDict), 
    };

    //https://api.powerbi.com/v1.0/myorg/groups/{group_id}/datasets/{dataset_id}/refreshes
    this.httpClient.post<any>("https://api.powerbi.com/v1.0/myorg/groups/11e61390-b4d0-47d5-865f-6270fb51a5e0/datasets/023a98a5-3a20-49ce-b7bb-5187a6fefa18/refreshes", data, requestOptions).subscribe(
      res =>{
        console.log("res:"+res);
      },
      err => {
        console.log("token:"+this.configg.token);
        console.log("error:"+err.message);
      }
    )
    
  };
  
}
