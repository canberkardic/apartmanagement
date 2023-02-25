import React from 'react';
import {Button, Layout, Tooltip} from 'antd';
import {UserOutlined} from "@ant-design/icons";

const { Header } = Layout;

const headerStyle: React.CSSProperties = {
    color: 'black',
    backgroundColor:'#fff',
    height: 64,
    paddingInline: 50,
    lineHeight: '64px',
    position: 'sticky', top: 0, zIndex: 1, width: '100%'
};


function AppHeader() {
    return (
            <Header style={headerStyle} className="text-center; ">
                <div  className="w-full inline-flex justify-between items-center">
                    <h1 className="hidden md:block">
                        ApartManagement - Apartman Yönetimi
                    </h1>

                    <h1 className="text-xl md:hidden">
                        ApartManagement
                    </h1>

                    <Tooltip title="Profil">
                        <Button  shape="circle" icon={<UserOutlined />} />
                    </Tooltip>
                </div>
            </Header>

    );
}

export default AppHeader;
