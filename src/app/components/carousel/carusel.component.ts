import {
  Component,
  OnInit
} from '@angular/core';
import {
  environment
} from 'src/environments/environment';
import {
  RequestService
} from 'src/service/request.service';




@Component({
  selector: 'app-karusel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
  providers: [RequestService]
})
export class KaruselComponent implements OnInit {

  public date: any
  private url: string = environment.home.getcourser

  constructor(public request: RequestService) {}

  ngOnInit(): void {
    this.request.getData(this.url).subscribe((data) => {
      this.date = data

    });
  }

}
