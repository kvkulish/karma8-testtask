import { expect, Page } from '@playwright/test';
import { BasePage } from './base-page';
import { Button } from '../page-factory/button';
import { Link } from '../page-factory/link';

export class FirstPage extends BasePage {

  private readonly tryItForFreeButton: Button;
  
  constructor(public page: Page) {
    super(page);

    this.tryItForFreeButton = new Button({ page, locator: 'div[class="arrow-wrap"] a[href*="signup"]', name: 'Try it for free' });

  }

  async clickTryItForFree(): Promise<void> {

    await this.tryItForFreeButton.shouldBeVisible();
    await this.tryItForFreeButton.hover();
    await this.tryItForFreeButton.click();
  }

  async openTermsAndConditionsPopup(): Promise<void> {

    await this.page.getByText('Terms & Conditions').click();

  }

  async checkIfTermsAndConditionsPopupIsOpened(): Promise<void> {

    await expect(this.page.locator('#modalPrivacy .modal-container')).toHaveCount(1);
    await expect(this.page.locator('.modal-container').getByText('Terms of Use').first()).toBeVisible();

  }
}
