import React from 'react';
import { Admin, Resource,ListGuesser } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import { ProductList, ProductShow, ProductCreate, ProductEdit } from './ProductsList';
import { dataProvider } from "../firebase";
import ProductIcon from '@material-ui/icons/ShoppingBasket';


//connect the data provider to the REST endpoint
//const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

function AdminPage() {
   return (
       <Admin dataProvider={dataProvider}>
           <Resource
            name="products"
            icon={ProductIcon}
            list={ProductList}
            show={ProductShow}
            create={ProductCreate}
            edit={ProductEdit}
            />

       </Admin>
   );
}

export default AdminPage;