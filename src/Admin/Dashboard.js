// in src/Dashboard.js
import React, { useState, useEffect } from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Title } from 'react-admin';
import { useStateValue } from '../StateProvider';
import { db } from '../firebase';
import './admin.css';
import { HistoryRounded } from '@material-ui/icons';


function Dashboard(){
    const [ orders , setOrders ] = useState([])
    useEffect(() => {
        fetchOrders();
    }, [])
    console.log('hello')

    //Get the orders 
    const fetchOrders = async () => {
        const response = db.collection('orders');
        const data = await response.get();
        data.docs.forEach(item => {
            setOrders(oldArray => [...oldArray, item.data()])
        })
    }
    
    console.log("the reviews officially are ", orders);


    return (
    <Card>
        <Title title="Welcome to the admin" />
        <CardContent>Welcome to the Admin!</CardContent>  
        <div className="dashboard_total">
        <p>Total Sales: $10</p>
        </div>  


    </Card>
    );
}

export default Dashboard;