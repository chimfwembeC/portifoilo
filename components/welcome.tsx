"use client";

import React from 'react';
import { Chart } from 'primereact/chart';
import { Timeline } from 'primereact/timeline';
import { Card } from 'primereact/card';

const Home = () => {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'My First dataset',
        backgroundColor: '#42A5F5',
        borderColor: '#1E88E5',
        data: [65, 59, 80, 81, 56, 55, 40],
      },
    ],
  };

  const events = [
    { status: 'Ordered', date: '15/10/2020', icon: 'pi pi-shopping-cart', color: '#FF9900' },
    { status: 'Processing', date: '15/10/2020', icon: 'pi pi-cog', color: '#FFCC00' },
    { status: 'Shipped', date: '15/10/2020', icon: 'pi pi-envelope', color: '#66CC66' },
    { status: 'Delivered', date: '15/10/2020', icon: 'pi pi-check', color: '#008000' },
  ];

  return (
    <main className="p-4">
      <div className="flex flex-column md:flex-row">
        <div className="w-full md:w-2/3 p-4">
          <Card title="Sales Chart">
            <Chart type="line" data={data} />
          </Card>
        </div>
        <div className="w-full md:w-1/3 p-4">
          <Card title="Timeline">
            <Timeline value={events} align="alternate" />
          </Card>
        </div>
      </div>
    </main>
  );
};

export default Home;
