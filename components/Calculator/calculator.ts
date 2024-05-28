import { Page } from '@playwright/test';
import { Button } from '../../page-factory/button';
import { Input } from '../../page-factory/input';

export class Searchbar {

  private readonly searchBar: Input;
  private readonly searchButton: Button;

  constructor(public page: Page) {
    this.searchBar = new Input({ page, locator: '.mini-suggest__input', name: 'Search bar input' });
    this.searchButton = new Button({ page, locator: '.mini-suggest__button', name: 'Search button' });
  }

}
import { Page } from '@playwright/test';
import { Button } from '../../page-factory/button';

export class Navbar {

  private readonly loginButton: Button;
  private readonly menuButton: Button;

  constructor(public page: Page) {
    this.loginButton = new Button({ page, locator: '[href*="/auth"]', name: 'Login button' });
    this.menuButton = new Button({ page, locator: '.headline__personal-icon > svg', name: 'Menu' });
  }

  async visitLogin(): Promise<void> {
    await this.loginButton.shouldBeVisible();

    await this.loginButton.hover();
    await this.loginButton.click();
    await this.loginButton.page.waitForNavigation();
  }

  async openMenu(): Promise<void> {
    await this.menuButton.shouldBeVisible();

    await this.menuButton.hover();
    await this.menuButton.click();
  }

}
