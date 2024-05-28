import { expect,Page } from '@playwright/test';
import { BasePage } from './base-page';
import { Button } from '../page-factory/button';
import { Input } from '../page-factory/input';
import { Checkbox } from '../page-factory/checkbox';

export class SignupPage extends BasePage {

  private readonly fullNameInput: Input;
  private readonly emailInput: Input;
  private readonly passwordInput: Input;
  private readonly confirmPasswordInput: Input;

  private readonly termsConditionsCheckbox: Checkbox;

  public readonly signupButton: Button;

  private email = '';

  private setInput = (element, text, type)=>{
    if(text==''){
      if(type == 'fullName')
        text = 'Autotest Run'

      if(type == 'email'){
        this.email = Date.now()+'autotestRun@karma8.com';
        text = this.email;
      }

      if(type == 'correctPassword')
        text = 'Password!@#123'
    }
    
    element.fill(text)
  }
  
  private readonly searchButton: Button;
  
    constructor(public page: Page) {
      super(page);
      
      //#registration_form_email
  
      this.fullNameInput = new Input({ page, locator: '#registration_form_fullName', name: 'Full Name Input' });
      this.emailInput = new Input({ page, locator: '#registration_form_email', name: 'Email Input' });
      this.passwordInput = new Input({ page, locator: '#registration_form_plainPassword_first', name: 'Password Input' });
      this.confirmPasswordInput = new Input({ page, locator: '#registration_form_plainPassword_second', name: 'Password Confirmation Input' });

      this.termsConditionsCheckbox = new Checkbox({ page , locator: '#registration_form_agreeTerms', name: 'Search Button' })

      this.signupButton = new Button({ page , locator: '.js-submit-button', name: 'Signup Button' })

    }

    async checkTermsAndConditions(): Promise<void> {

      await this.termsConditionsCheckbox.enable();
    }
    
    async setFullName(text): Promise<void> {

      await this.fullNameInput.click()
      await this.setInput(this.fullNameInput,'','fullName')

    }
 
    async setEmail(text): Promise<void> {

        await this.emailInput.click()
        await this.setInput(this.emailInput,'','email')
  
    }

    async setPassword(text): Promise<void> {

      await this.passwordInput.click();
      await this.setInput(this.passwordInput,'','correctPassword');
      
      await this.confirmPasswordInput.click();      
      await this.setInput(this.confirmPasswordInput,'','correctPassword');

    }

    async verifyPageHasCorrectEmail(): Promise<void>{

      await expect(this.page.getByText(this.email)).toBeVisible();

    }

  }
  