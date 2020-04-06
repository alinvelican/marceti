import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'nga-root',
  styleUrls: [ './app.component.scss' ],
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent   {
//   onActivate(event: any) {
//     console.log(event);
//     window.scroll(0,0);
//     //or document.body.scrollTop = 0;
//     //or document.querySelector('body').scrollTo(0,0)
     
// }
// onActivate(e: any, outlet: any){
//   outlet.scrollTop = 0;
//   document.querySelector('body').scrollTo(0,0)
// }
constructor( ) {}

  
}
