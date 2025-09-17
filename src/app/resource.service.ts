import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResourceService {
  private email = 'anagh1161@gamil.com';

  getEmail(): string {
    return this.email;
  }

  getEmailUrl(): string {
    return `mailto:${this.email}`;
  }

  getLinkedInUrl(): string {
    return 'https://www.linkedin.com/in/ashutoshkumar1161/';
  }

  getGithubUrl(): string {
    return 'https://github.com/anagh1161';
  }

  getStackoverflowUrl(): string {
    return 'https://stackoverflow.com/users/31496645/ashutosh-kumar';
  }
}
