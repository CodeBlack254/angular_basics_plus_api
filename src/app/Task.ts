export interface Task { //You can explicitly describe this object’s shape using an interface declaration:
    id?: number; //? makes it optional
    text: string;
    day: string;
    reminder: boolean;
  }