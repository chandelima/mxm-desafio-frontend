import { FormGroup } from "@angular/forms";
import { Constructor } from "./constructor.mixim";


export interface HtmlElementValidatable {
  verifyValidTouched(control: string): boolean
  applyControlInvalid(control: string): object
}

export function htmlElementValidatable<T extends Constructor>(base: T): Constructor<HtmlElementValidatable> & T {
  return class extends base {
    form?: FormGroup;

    verifyValidTouched(control: string): boolean {
      return (
        !this.form!.get(control)!.value &&
        this.form!.get(control)!.touched
      );
    }

    applyControlInvalid(control: string): object {
      return {
        'ng-invalid': this.verifyValidTouched(control),
        'ng-dirty': this.verifyValidTouched(control),
      };
    }
  }
}
