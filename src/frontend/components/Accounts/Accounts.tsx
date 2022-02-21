import React, { useEffect, useState } from 'react';
import { SectionList } from 'react-native';
import {
  AddAccount,
  FlexViewHorizontal,
  FlexViewVertical,
  HeaderText,
  LeftText,
  RightText,
} from './Accounts.styled';
import { useAppSelector, useAppDispatch } from '../../redux/hooks';
import { addAccount } from '../../redux/accountSlice';
import { Account } from '../../model/account';
import uuid from '../../utils/uuid';

interface GridItem {
  accountName: string,
  accountBalance: number,
}
interface Grid{
  title: string,
  data: GridItem[]
}

function extractAccountTypes(accounts: Account[]): string[]{
  let types = new Set<string>();
  accounts.forEach(acc => types.add(acc.type));
  return Array.from(types.values());
}

function generateAccountSectionData(accounts: Account[]){
  const accountTypes = extractAccountTypes(accounts);
  let result: Grid[] = [];
  accountTypes.forEach(act => {
    let data: GridItem[] = [];
    accounts.forEach(acc => {  
      if (acc.type === act)
        data.push({ accountName: acc.name, accountBalance: acc.balance});
     });
    result.push({ title: act, data: [...data]});
  })
  return result;
}

export default function Accounts() {
  const accounts = useAppSelector((state) => state.account.accounts);
  const dispatch = useAppDispatch();
  const [accountSectionData, setAccountSectionData ] = useState<Grid[]>([]);
  
  useEffect(() => { 
    setAccountSectionData(() => generateAccountSectionData(accounts));    
  }, [accounts]);
  
  function Teste() {
    console.log("teste...");
    dispatch(addAccount({
      key: uuid(), balance: 99999, name: 'Teste', type: 'Budget accounts',
    }));
  }

  return (
    <FlexViewVertical>
      <SectionList
        sections={accountSectionData}
        renderItem={({ item }) => (
          <FlexViewHorizontal>
            <LeftText>{item.accountName}</LeftText>
            <RightText>
              R$
              {item.accountBalance.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
            </RightText>
          </FlexViewHorizontal>
        )}
        renderSectionHeader={({ section }) => (
          <HeaderText>{section.title}</HeaderText>
        )}
        keyExtractor={(item, index) => item.accountName+index}
      />
      <AddAccount onPress={Teste} title="Add new account" />
    </FlexViewVertical>
  );
}
