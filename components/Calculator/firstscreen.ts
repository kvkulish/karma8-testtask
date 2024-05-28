import { Page } from '@playwright/test';
import { Button } from '../../page-factory/button';

export class Navbar {

  private readonly tryItForFreeButton: Button;

  constructor(public page: Page) {
    this.tryItForFreeButton = new Button({ page, locator: '[href*="/signup"]', name: 'Try it for free' });
  }

  async clickTryItForFree(): Promise<void> {

    await this.tryItForFreeButton.shouldBeVisible();
    await this.tryItForFreeButton.hover();
    await this.tryItForFreeButton.click();
  }

}
