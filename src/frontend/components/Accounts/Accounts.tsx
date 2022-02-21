import React from 'react';
import { SectionList } from 'react-native';
import { v4 as uuidv4 } from 'uuid';
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

export default function Accounts() {
  const accounts = useAppSelector((state) => state.account.accounts);
  const dispatch = useAppDispatch();

  const budgetAccounts = accounts.filter(
    (acc) => acc.type === 'Budget accounts',
  );
  const reserveAccounts = accounts.filter((acc) => acc.type === 'Reserve');
  const budAcc = [];
  const resAcc = [];
  budgetAccounts.map((acc) => {
    budAcc.push({ accountName: acc.name, accountBalance: acc.balance });
  });
  reserveAccounts.map((acc) => {
    resAcc.push({ accountName: acc.name, accountBalance: acc.balance });
  });
  const listData = [
    { title: 'Budget accounts', data: [...budAcc] },
    { title: 'Reserve', data: [...resAcc] },
  ];

  function Teste() {
    dispatch(addAccount({
      key: uuidv4(), balance: 99999, name: 'Teste', type: 'Budget accounts',
    }));
  }

  return (
    <FlexViewVertical>
      <SectionList
        sections={listData}
        renderItem={({ item }) => (
          <FlexViewHorizontal>
            <LeftText>{item.accountName}</LeftText>
            <RightText>
              R$
              {parseInt(item.accountBalance).toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
            </RightText>
          </FlexViewHorizontal>
        )}
        renderSectionHeader={({ section }) => (
          <HeaderText>{section.title}</HeaderText>
        )}
        keyExtractor={(item, index) => item.accountName}
      />
      <AddAccount onPress={Teste} title="Add new account" />
    </FlexViewVertical>
  );
}
