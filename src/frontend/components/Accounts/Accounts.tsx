import React from 'react';
import { SectionList, Text } from 'react-native';
import { AddAccount, FlexViewHorizontal, FlexViewVertical, HeaderText, LeftText, RightText } from './Accounts.styled';

export default function Accounts(){
    return (
        <FlexViewVertical>
            <SectionList
            sections={[
                {title: 'Budget accounts', data: [{accountName:'Itaú', accountValue:'R$500,00'}, {accountName:'NuBank', accountValue:'R$1500,00'}]},
                {title: 'Reserve', data: [{accountName:'FGTS', accountValue:'R$500,00'}, {accountName:'Previdência', accountValue:'R$500,00'}]},
            ]}
            renderItem={({item}) => <FlexViewHorizontal>
                                        <LeftText >{item.accountName}</LeftText> 
                                        <RightText>{item.accountValue}</RightText>
                                    </FlexViewHorizontal>}
            renderSectionHeader={({section}) => <HeaderText>{section.title}</HeaderText>}
            keyExtractor={(item, index) => item.accountName}
            />
            <AddAccount title={'Add new account'}/>
        </FlexViewVertical>
    );
}