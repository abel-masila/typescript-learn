class Student {
  fullName: string;
  public constructor(
    public firstName: string,
    public middleName: string,
    public lastName: string
  ) {
    this.fullName = firstName + ' ' + middleName + ' ' + lastName;
  }
}
interface Person {
  firstName: string;
  lastName: string;
}
function greeter(person: Person) {
  return 'Hello ' + person.firstName + ' ' + person.lastName;
}
let user = new Student('Masila', 'A', 'Boniface');
document.body.innerHTML = greeter(user);
