import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Account } from '../model/account';

export interface AccountsState {
  accounts: Account[]
}

const initialState: AccountsState = {
  
  accounts: [ { key: "acc1", balance: 500, name: 'Itaú', type: 'Budget accounts'}, 
              { key: "acc2", balance: 1500, name: 'NuBank', type: 'Budget accounts'},
              { key: "acc3", balance: 859, name: 'Santander', type: 'Budget accounts'},
              { key: "acc4", balance: 8459, name: 'FGTS', type: 'Reserve'},
              { key: "acc5", balance: 2332, name: 'Previdência', type: 'Reserve'},
            ]
}

export const accountsSlice = createSlice({
  name: 'accounts',
  initialState,
  reducers: {
    addAccount: (state, action: PayloadAction<Account>) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.accounts.push(action.payload);
    },
    deleteAccount: (state, action: PayloadAction<Account>) => {
      state.accounts = state.accounts.filter(acc => acc.key != action.payload.key);
    },
    updateAccount: (state, action: PayloadAction<Account>) => {
      state.accounts.forEach(acc => { 
        if (acc.key == action.payload.key) {
          acc = action.payload;
        }
      })
    },
  },
})

// Action creators are generated for each case reducer function
export const { addAccount, deleteAccount, updateAccount } = accountsSlice.actions

export default accountsSlice.reducer