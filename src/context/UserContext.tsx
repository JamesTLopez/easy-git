
import React  from 'react';

interface UserState {
    name:string,
    login:string,
    userName:string
}

const initState:UserState = {
   name:'James',
   login:'james#gmails.com',
   userName:'JamesTLopez'
};
export const Store = React.createContext(initState);




const UserReducer = () => {
    //pass


}

export default function StoreProvider (props: any):JSX.Element {
    return <Store.Provider value={initState}>{props.children}</Store.Provider>
} 