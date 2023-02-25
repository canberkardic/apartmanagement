import React from 'react';
import './App.css';
import {ConfigProvider, Layout} from 'antd';
import 'antd/dist/reset.css';
import Dashboard from "./pages/Dashboard";
import AppHeader from "./components/Header";
import 'dayjs/locale/tr';
import locale from 'antd/locale/tr_TR';


const { Content } = Layout;


function App() {
    return (
        <ConfigProvider locale={locale}>

        <Layout style={{minHeight:"100vh"}}>
              <AppHeader></AppHeader>
            <Content style={{paddingInline:"10px"}}>
                <Dashboard></Dashboard>
            </Content>

          </Layout>
</ConfigProvider>
  );
}

export default App;
