// in src/Product.js
import * as React from "react";
// tslint:disable-next-line:no-var-requires
import {
  Datagrid,
  List,
  Show,
  Create,
  Edit,
  Filter,
  SimpleShowLayout,
  SimpleForm,
  TextField,
  TextInput,
  ShowButton,
  EditButton,
  DeleteButton,
} from "react-admin";


const ProductFilter = (props) => (
  <Filter {...props}>
    <TextInput label="Search" source="title" alwaysOn />
  </Filter>
);

export const ProductList = (props) => (
  <List {...props} filters={<ProductFilter />}>
    <Datagrid>
      <TextField source="title" />
      <TextField source="price" />
      <TextField source="id" />
      <TextField source="image" />
      <ShowButton label="" />
      <EditButton label="" />
      <DeleteButton label="" redirect={false}/>
    </Datagrid>
  </List>
);

export const ProductShow = (props) => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source="id" />
      <TextField source="title" />
      <TextField source="price" />
      <TextField source="image" />
    </SimpleShowLayout>
  </Show>
);

export const ProductCreate = (props) => (
  <Create {...props} >
    <SimpleForm>
      <TextInput source="id" />
      <TextInput source="title" />
      <TextInput source="price" />
      <TextInput source="image" />
    </SimpleForm>
  </Create>
);

export const ProductEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <TextInput source="title" />
      <TextInput source="price" />
      <TextInput source="image" />
    </SimpleForm>
  </Edit>
);
