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
    const [ names, setNames ] = useState([]);
    const [ historyOrders, setHistoryOrders ] = useState([]);

    console.log('hello')

    useEffect(() => {
        fetchUsers();
    }, [])

        //Get the users details from firebase 
        const fetchUsers = async () => {
            const response = db.collection('users');
            const data = await response.get();
            console.log('data is ', data)
            data.docs.forEach(item => {
                setNames(oldArray => [...oldArray, item])
            })
        }
        console.log('names are ', names)


    //Get the orders for that product 
    const fetchOrders = async () => {
        console.log('the names array is fetched yet or nah', names)
        for (let i=0;i<=names.length;i++){
        console.log('ehy nickos ', names[i]?.id)
        if (names[i]?.id){
        const response = db.collection('users').doc(names[i]?.id).collection('orders').orderBy('created', 'desc');
        console.log('response is ', response)
        const data = await response.get();
        console.log('data for order is ', data)
        data.docs.forEach(item => {
            setHistoryOrders(oldArray => [...oldArray, item.data()])
        })
        }
     }
    }

    var nameExists = false;
    var count = 1;
    for (let i=0; i<=names.length;i++){
        console.log('names i is ', names[i]?.id)
        if (names[i]?.id){
            nameExists = true;
        }
    }



    console.log('orders are ', historyOrders)

    
    var totalSpend = 0;
    {historyOrders?.map(order => (
        totalSpend += order.amount / 100
    ))}
    

    return (
    <Card>
        <Title title="Welcome to the admin" />
        <CardContent>Welcome to the Admin!</CardContent>  
        <div className="dashboard_total">
        <p>Total Sales: ${totalSpend.toFixed(2)}</p>
        </div>  


    </Card>
    );
}

export default Dashboard;