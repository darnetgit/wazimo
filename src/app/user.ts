export class User {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  gender: string;
  ip_address: string;
  constructor(jsonResponse) {
    this.id = jsonResponse.id;
    this.first_name = jsonResponse.first_name;
    this.last_name = jsonResponse.last_name;
    this.email = jsonResponse.email;
    this.gender = jsonResponse.gender;
    this.ip_address = jsonResponse.ip_address;
  }
}