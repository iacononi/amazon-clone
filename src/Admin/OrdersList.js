// in src/Orders.js
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

const OrdersFilter = (props) => (
  <Filter {...props}>
    <TextInput label="Search" source="title" alwaysOn />
  </Filter>
);

export const OrdersList = (props) => (
  <List {...props} filters={<OrdersFilter />}>
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

export const OrdersShow = (props) => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source="id" />
      <TextField source="title" />
      <TextField source="price" />
      <TextField source="image" />
    </SimpleShowLayout>
  </Show>
);

export const OrdersCreate = (props) => (
  <Create {...props} >
    <SimpleForm>
      <TextInput source="id" />
      <TextInput source="title" />
      <TextInput source="price" />
      <TextInput source="image" />
    </SimpleForm>
  </Create>
);

export const OrdersEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <TextInput source="title" />
      <TextInput source="price" />
      <TextInput source="image" />
    </SimpleForm>
  </Edit>
);
