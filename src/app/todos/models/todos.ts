export interface Todos {
  id: string;
  name: string;
  description: string;
  status: string;
  owner: {
    id: string,
    first_name: string,
    last_name: string,
    occupation: string,
    profile_picture: string
  }
}
