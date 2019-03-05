function User(name, surname) {
    this.name = name;
    this.surname = surname;

  getFullName() {
    return this.name + ' ' + this.surname;
   }
}


function student(year) {
	User.call(this);
	courseYear = year;
    currentYear = Date().getFullYear();

	getCourse() {
		return currentYear - courseYear;
	}
}