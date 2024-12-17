import { TransactionStatus, TransactionType } from "@/@types";
import { createSlice } from "@reduxjs/toolkit";

export interface User {
  address: string;
  balance: number;
  city: string;
  country: string;
  currency: string;
  deposit: number;
  depositAddress: string;
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
  prompt: { title: string; message: string; seen: boolean };
  state: string;
  suspended: boolean;
  timestamp: number;
  transactions: [] | Transaction[];
  withdrawal: number;
}

export interface Transaction {
  id: string;
  type: TransactionType;
  amount: number;
  source: string;
  date: string;
  status: TransactionStatus;
}

export const userInitialState: User = {
  address: "",
  balance: 0,
  city: "",
  country: "",
  currency: "",
  deposit: 0,
  depositAddress: "bc1qwu55hjssw4675uvwcd5nxdkxtt20unk7cy3qds",
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
  prompt: {
    title: "Welcome to LoomTrust",
    message:
      "Welcome to a platform where secure transactions, advanced features, and trusted security come together to enhance your crypto experience. /n Important: To complete activation and unlock all features, new users must make an initial deposit. This deposit will be added to your account balance and is fully withdrawable during your first transaction.",
    seen: false,
  },
  state: "",
  suspended: false,
  timestamp: 0,
  transactions: [],
  withdrawal: 0,
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
