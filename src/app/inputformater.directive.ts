import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appInputformater]'
})
export class InputformaterDirective {

  constructor(private ele:ElementRef) { }
 @Input("appInputFormat") formate:any;
  @HostListener("focus") onFocus(){
    console.log("on Focus");
  }

  @HostListener("blur") onBlur(){
    console.log("on Blur");
    let value : string = this.ele.nativeElement.value;
    if(this.formate == "lowercase"){
      this.ele.nativeElement.value=value.toLowerCase();
    } else {
      this.ele.nativeElement.value = value.toUpperCase();
    }
  }

}
