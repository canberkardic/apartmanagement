import React from 'react';
import './App.css';
import {Button, Layout, Tooltip} from 'antd';
import 'antd/dist/reset.css';
import {UserOutlined} from "@ant-design/icons";
import {Container} from "../shared-components/Container";
import TabsContainer from "../components/TabsContainer";

const { Header, Footer, Content } = Layout;

const headerStyle: React.CSSProperties = {
    color: 'black',
    backgroundColor:'transparent',
    height: 64,
    paddingInline: 50,
    lineHeight: '64px',
};

const contentStyle: React.CSSProperties = {
    textAlign: 'center',
    minHeight: 120,
    lineHeight: '120px',
    color: '#fff',
};

const footerStyle: React.CSSProperties = {
    textAlign: 'center',
    color: '#fff',
};

function IncomeExpense() {
    return (
        <Container>
            <Layout>
                <Header style={headerStyle}>
                    <div style={{display:"inline-flex", justifyContent:'space-between', alignItems:"center"}}>
                        <h1 className="text-3xl font-bold underline">
                            Apartmanagement
                        </h1>

                        <Tooltip title="Profil">
                            <Button  shape="circle" icon={<UserOutlined />} />
                        </Tooltip>
                    </div>
                </Header>
                <Content style={contentStyle}>
                    <TabsContainer></TabsContainer>
                </Content>
            </Layout>
        </Container>
    );
}

export default IncomeExpense;
