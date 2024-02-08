export default class HolbertonCourse {
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
  }

  /* Name Setter */
  set name(value) {
    if (typeof value !== 'string') {
      throw new Error('TypeError: Name must be a sting');
    }
    this._name = value;
  }

  /* Name Getter */
  get name() {
    return this._name;
  }

  /* Length Setter */
  set length(value) {
    if (typeof value !== 'number') {
      throw new Error('TypeError: length must be a number');
    }
    this._length = value;
  }

  /* Length Getter */
  get length() {
    return this._length;
  }

  /* Students Setter */
  set students(value) {
    if (!Array.isArray(value)) {
      throw new Error('TypeError: Students must be an array');
    }
    this._students = Value;
  }

  /* Students Getter */
  get students() {
    return this._students;
  }
}
