import { Directive, ElementRef, HostBinding, HostListener, Input, Renderer2 } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[inputValidation]'
})
export class InputValidationDirective {

  constructor(private el: ElementRef, private renderer: Renderer2, private control: NgControl) {}

  ngOnInit() {
    this.control?.valueChanges?.subscribe(() => {
      this.checkValidity();
    });
  }

  private checkValidity() {
    const errors = this.control.errors;
    const invalidFeedback = this.el.nativeElement.nextElementSibling;

    this.renderer.setStyle(invalidFeedback, 'display', errors ? 'block' : 'none');

    if (errors) {
      let errorMessage = '';
      if (errors['required']) {
        errorMessage = 'Le champ doit être rempli.';
      } else if (errors['minlength']) {
        errorMessage = `La longueur minimale est de ${errors['minlength'].requiredLength} caractères.`;
      } else if (errors['maxlength']) {
        errorMessage = `La longueur maximale est de ${errors['maxlength'].requiredLength} caractères.`;
      }
      else if (errors['min']) {
        errorMessage = `le nombre ne peut être inférieur à ${errors['min'].min}.`;
      }

      invalidFeedback.textContent = errorMessage;
      this.renderer.removeClass(invalidFeedback, 'valid-feedback');
      this.renderer.addClass(invalidFeedback, 'invalid-feedback');

      const validFeedback = this.el.nativeElement.nextElementSibling.nextElementSibling; // Sélection du div "valid-feedback"
      validFeedback.textContent = ''; // Effacer le message de succès
      this.renderer.setStyle(validFeedback, 'display', 'none'); // Cacher le message de succès
    } else {
      const validFeedback = this.el.nativeElement.nextElementSibling.nextElementSibling; // Sélection du div "valid-feedback"
      validFeedback.textContent = 'Success!';
      this.renderer.setStyle(validFeedback, 'display', 'block'); // Affichage du message de succès
      this.renderer.removeClass(validFeedback, 'invalid-feedback');
      this.renderer.addClass(validFeedback, 'valid-feedback');
    }
  }
  }


  // @Input() successMessage: string = 'Success!';
  // @Input() errorMessage: string = 'Le champ doit être rempli.';
  // constructor(private el: ElementRef) { }

  // @HostListener('input') onInput() {
  //   this.setValidationClasses();
  // }

  // @HostListener('focusout') onFocusout() {
  //   this.setValidationClasses();
  // }

  // private setValidationClasses(): void {
  //   const input: HTMLInputElement = this.el.nativeElement;

  //   if (input.validity.valid) {
  //     input.classList.add('is-valid');
  //     input.classList.remove('is-invalid');
  //   } else {
  //     input.classList.add('is-invalid');
  //     input.classList.remove('is-valid');
  //   }
  // }
