import { Component, OnInit, Input } from '@angular/core';
import { Http, RequestMethod } from '@angular/http';
import { ConfigService } from './config/config.service';
import { Biblia } from './biblia';
import { LIVROS } from './mock-livro';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  url: string;
  resultado: any;
  biblia: Biblia;
  listLivros = LIVROS;

  constructor(private configService: ConfigService) { }

  ngOnInit() {
    console.log(this.listLivros)
  }

  onSubmit(form : NgForm) {

    this.biblia =  new Biblia(form.value.livro, form.value.capitulo);  

    this.url = 
        'https://data.biblebox.com/v18/bibles/nvi/' + 
        this.biblia.livro + 
        '/' + 
        this.biblia.capitulo + 
        '.xml';

    this.configService.getBibleBox(this.url).subscribe(
      result => {
        this.resultado = result;
        this.resultado = this.resultado.replace(/chapter/g, "ol");
        this.resultado = this.resultado.replace(/verse/g, "li");
        document.getElementById("result").innerHTML = this.resultado;
      }
    );

  }

}
