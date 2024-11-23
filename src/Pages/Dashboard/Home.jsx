import React, { useEffect } from 'react'
import Navbar from '../../Commons/Navbar' 
import { useState } from 'react';
import { db } from '../../FireBase/Config'; 
import { get, set, onValue, orderByChild, equalTo, ref, query } from 'firebase/database';

function Home() { 
  const [searchQuery, setSearchQuery] = useState('');  

  const [data, setData] = useState([]); 

  const enter_data = [
     {type: "Smart Home"}, 
     {type: "Gate"},
  ];
 

  useEffect(() => {
    const dataRefdb = ref(db, 'products_management/products');
    // const queryRef = query(dataRefdb, orderByChild('installation_type'), equalTo('Cloud'));
  
    get(dataRefdb)
      .then((snapshot) => {
        const filteredData = snapshot.val();
        console.log(filteredData); 
        setData(filteredData); 
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  function sendToFirebase() {
    const sendRef = ref(db, 'products_management/installation_types'); 
    set(sendRef, enter_data).then(() => {
      console.log('successfull!')
    })
  }


  return ( 
    <> 
    <Navbar /> 
    <button className="" onClick={'sendToFirebase'}>but</button>
    <div>
    {/* table */}
    <div class="container mx-auto px-4 py-6">
  <div class="mb-4">
    <input type="text" placeholder="Search..." value={searchQuery} 
    onChange={e => setSearchQuery(e.target.value)} 
    class="rounded-md px-3 py-2 border border-lime-400 w-full shadow-md" />
  </div>
  <div class="overflow-x-auto rounded-md shadow-md border">
    <table class="min-w-full bg-slate-">
      <thead>
        <tr>
          <th class="py-2 px-4 border-b-2 border-lime-400">Date</th>
          <th class="py-2 px-4 border-b-2 border-lime-400">Product ID</th>
          <th class="py-2 px-4 border-b-2 border-lime-400">Product Type</th>
          <th class="py-2 px-4 border-b-2 border-lime-400">Version</th>
          <th class="py-2 px-4 border-b-2 border-lime-400">Installation Type</th>
          <th class="py-2 px-4 border-b-2 border-lime-400">Entered By</th>
  
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index} class="hover:bg-lime-100 text-center">
            <td class="py-2 px-4 border-b">{item.date}</td>
            <td class="py-2 px-4 border-b">{item.product_id}</td>
            <td class="py-2 px-4 border-b">{item.product_type}</td>
            <td class="py-2 px-4 border-b">{item.version}</td>
            <td class="py-2 px-4 border-b">{item.installation_type}</td>
            <td class="py-2 px-4 border-b">{item.user}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>
    {/* table */}
   
    </div>
    </>
  )
}

export default Home