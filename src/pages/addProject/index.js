


import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import { Layout } from '../../layout/Layout';

const AddProject = dynamic(() => import('../../components/AddProject/AddProject'), {
  ssr: false,
})

const Home = () => {
  return (
    <Layout>
      <AddProject/>
    </Layout>
  );
};

export default Home;