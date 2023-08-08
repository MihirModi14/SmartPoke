// Pokemon Models
export interface PokemonModel {
  name: string;
  url: string;
}

export interface PokemonDetailsModel {
  id: number;
  name: string;
  height: number;
  weight: number;
  image: string;
  abilities: AbilityModel[];
  experience?: number;
  order?: number;
  type?: "listing" | "details";
}

interface AbilityModel {
  ability: {
    name: string;
  };
}

// Auth Model
export interface LoginCredModel {
  email: string;
  password: string;
}

export interface RegisterCredModel {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

// Logged User Model
export interface UserModel {
  name: string;
  email: string;
  password?: string;
}

// Pagination Model
export interface PaginationParamsModel {
  offset: number;
  limit: number;
}

// Context Model
export interface GlobalContextType {
  userDetails: UserModel;
  updateUserDetails: (name: string, email: string) => void;
}
