import React from 'react';
import { SectionList} from 'react-native';
import { AddAccount, FlexViewHorizontal, FlexViewVertical, HeaderText, LeftText, RightText } from './Accounts.styled';
import { useAppSelector } from '../../redux/hooks'

export default function Accounts(){ 
    const accounts = useAppSelector((state) => state.account.accounts);
    const budgetAccounts = accounts.filter(acc => acc.type == 'Budget accounts');
    const reserveAccounts = accounts.filter(acc => acc.type == 'Reserve');    
    let budAcc = [];
    let resAcc = [];
    budgetAccounts.map(acc => {
        budAcc.push({accountName: acc.name, accountBalance: acc.balance})
    });
    reserveAccounts.map(acc => {
        resAcc.push({accountName: acc.name, accountBalance: acc.balance})
    });    
    let listData = [{title: 'Budget accounts', data: [...budAcc]}, {title: 'Reserve', data: [...resAcc]}];    


    return (
        <FlexViewVertical>
            <SectionList
            sections={listData}
            renderItem={({item}) => <FlexViewHorizontal>
                                        <LeftText >{item.accountName}</LeftText> 
                                        <RightText>R${item.accountBalance}</RightText>
                                    </FlexViewHorizontal>}
            renderSectionHeader={({section}) => <HeaderText>{section.title}</HeaderText>}
            keyExtractor={(item, index) => item.accountName}
            />
            <AddAccount title={'Add new account'}/>
        </FlexViewVertical>
    );
}