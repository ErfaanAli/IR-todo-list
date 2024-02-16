import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  public getData : any;
  public postJsonValue : any;

  constructor(private http: HttpClient) 
  {}

  ngOnInit(): void{
    this.GetMethod();
  }

   public GetMethod(){
    this.http.get("https://jsonplaceholder.typicode.com/posts/1").subscribe(   
    (response:any) => {
      this.getData = response;
    } )
  } 

}
