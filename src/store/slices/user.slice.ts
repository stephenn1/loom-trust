import { createSlice } from "@reduxjs/toolkit";

export interface User {
  address: string;
  balance: number;
  city: string;
  country: string;
  currency: string;
  deposit: number;
  email: string;
  firstName: string;
  gender: string;
  id: string;
  lastName: string;
  occupation: string;
  password: string;
  phoneNumber: string;
  photoUrl: string;
  postalCode: number;
  profit: number;
  state: string;
  timestamp: number;
  transactions: [] | Transaction[];
}

export interface Transaction {
  id: string;
  type: "deposit" | "withdrawal";
  amount: number;
  date: string;
  completed: boolean;
}

export const userInitialState: User = {
  address: "",
  balance: 0,
  city: "",
  country: "",
  currency: "",
  deposit: 0,
  email: "",
  firstName: "",
  gender: "",
  id: "",
  lastName: "",
  occupation: "",
  password: "",
  phoneNumber: "",
  photoUrl: "",
  postalCode: 0,
  profit: 0,
  state: "",
  timestamp: 0,
  transactions: [],
};

const userSlice = createSlice({
  name: "user",
  initialState: userInitialState,
  reducers: {
    setUser: (state, action) => action.payload,
    setUserPhotoUrl: (state, action) => ({
      ...state,
      photoUrl: action.payload,
    }),
  },
});

export const { setUser, setUserPhotoUrl } = userSlice.actions;
export const user = userSlice.name;
export const userReducer = userSlice.reducer;
