import { Component, ViewChild, ElementRef, OnInit, AfterViewInit } from '@angular/core';
import * as pbi from 'powerbi-client';
import { HttpClient } from '@angular/common/http';
declare var powerbi: any;

@Component({
  selector: 'ngx-historyfield',
  templateUrl: './historyfield.component.html',
  styleUrls: ['./historyfield.component.scss']
})
export class HistoryfieldComponent implements OnInit {

  @ViewChild('embeddedReport')
  embeddedReport: ElementRef;
  config: any;
  screenHeight: number;

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.screenHeight = (window.screen.height);
    this.httpClient.get<any>("http://optimpowerbackend.azurewebsites.net/gettokenhistoricfield")
    .subscribe(config => {
      this.config = config;
      const model = pbi.models;
      const embedConfig = {
        type: 'report',
        tokenType: model.TokenType.Embed,
        accessToken: config.token,
        embedUrl: config.embedUrl,
        permissions: model.Permissions.All,
        settings: {
          filterPaneEnabled: false,
          navContentPaneEnabled: false,
        },
      };
      powerbi.embed(this.embeddedReport.nativeElement, embedConfig);
    });
  }
}

