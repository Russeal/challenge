import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private users = [
    {
      id: "6",
      username: "abish",
      password: "1234",
      name: "Abdurasul Bobonazarov"
    },
    {
      id: "7",
      username: "merlyn",
      password: "merlyn",
      name: "Merlyn Monroe"
    },
    {
      id: "8",
      username: "kilian",
      password: "7",
      name: "Kilian Mbappe"
    },
    {
      id: "9",
      username: "adam",
      password: "adam19",
      name: "Adam Smith"
    },
  ]

  constructor() { }

  public authorization(formData: any) {
    let status = false;

    this.users.forEach(user => {
      if (user.username === formData.value.username && user.password === formData.value.password) {
        if (formData.value.remember === true) {
          document.cookie = "userId=" + user.id;
        }
        localStorage.setItem("userName", user.username);
        localStorage.setItem("name", user.name);
        status = true;
      }
    });

    return status;
  }
}
