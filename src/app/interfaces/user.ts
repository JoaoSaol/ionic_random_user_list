export interface User {
  cell: string;
  dob: Dob[];
  email: string;
  gender: string;
  id: Id[];
}

interface Dob {
  date: string;
  age: number;
}

interface Id {
  name: string;
  value: string;
}

interface Location {
  city: string;
  cordinates: string;
}

interface Cordinates {
  latitude: string;
}
