
import './App.css';
import {  Layout, Menu } from 'antd';
import React from 'react';
import {useState} from 'react';
import { QuestionCircleOutlined }from '@ant-design/icons'

const { Header, Content, Footer } = Layout;

function App() {

    const [data,setData]=useState ([


    {
        id: "1",
        title: "Ticket Name 1",
        photo: "https://static.remove.bg/sample-gallery/graphics/bird-thumbnail.jpg",
        
        description: "Ticket description 1",
        date: "10/10/22",
        price: 20000,
        availableTicket: 50
    },
    {
        id: "2",
        title: "Ticket Name 2",
        photo: "https://static.remove.bg/sample-gallery/graphics/bird-thumbnail.jpg",
        description: "Ticket description 2",
        date: "10/10/22",
        price: 20000,
        availableTicket: 50
    },
    {
        id: "3",
        title: "Ticket Name 3",
        photo: "https://static.remove.bg/sample-gallery/graphics/bird-thumbnail.jpg",
        description: "Ticket description 3",
        date: "10/10/22",
        price: 20000,
        availableTicket: 50
    },
    {
        id: "4",
        title: "Ticket Name 4",
        photo: "https://static.remove.bg/sample-gallery/graphics/bird-thumbnail.jpg",
        description: "Ticket description 4",
        date: "10/10/22",
        price: 20000,
        availableTicket: 50
    },
    {
        id: "5",
        title: "Ticket Name 5",
        photo: "https://static.remove.bg/sample-gallery/graphics/bird-thumbnail.jpg",
        description: "Ticket description 5",
        date: "10/10/22",
        price: 20000,
        availableTicket: 50
    },
  
]
    )
  return (
<Layout>
    <Header
      style={{
        position: 'fixed',
        zIndex: 1,
        width: '100%',
      }}
    >
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        items={new Array(3).fill(null).map((_, index) => ({
          key: String(index + 1),
          label: `nav ${index + 1}`,
        }))}
      />
    </Header>
    <Content
      className="site-layout"
      style={{
        padding: '0 50px',
        marginTop: 64,
      }}
    >
      
      <div
        className="site-layout-background"
        style={{
          padding: 24,
          minHeight: 380,
        }}
      >
        <div className="App"></div>
        <table>
          <thead>
            <tr>
              <th> Ticket name</th>
              <th> Event Organizer</th>
              <th> Venue</th>
              <th> Date</th>
              <th> Availability</th>
              <th> Price</th>
              <th> Action</th>
            </tr>
          </thead>
          <tbody>
            {
              data.map((item,index)=> { return (
                <tr>

<td>{item.title}</td>
<td> {item.description}</td>
<td>{"malaybalay"}</td>
<td>{item.date}</td>
<td>{item.price}</td>
<td></td>
</tr> )})
              
              }     
            
          </tbody>
        </table>
      </div>
    </Content>
    <Footer
      style={{
        textAlign: 'center',
      }}
    >
      Ant Design ©2018 Created by Ant UED
    </Footer>
  </Layout>
  );
}

export default App;
