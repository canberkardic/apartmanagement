import React from 'react';
import {Card, DatePicker, DatePickerProps, Divider} from 'antd';
import 'antd/dist/reset.css';
import {CheckOutlined, MinusOutlined, UnorderedListOutlined} from "@ant-design/icons";
import styled from "styled-components";
import {DonutChart} from "../components/DonutChart";
import {CenteredBox} from "../components/CenteredBox";
import dayjs from "dayjs";

const DashboardCard = styled(Card)<{ titleColor?: any, }>`
  .ant-card-head-title {
    color: ${props => props.titleColor ? props.titleColor : "black"};
  }

  .ant-card-body {
    min-height: 150px;
    max-height: 250px;
    overflow-y: auto;
    overflow-x: hidden;

    > p {
      overflow-wrap: break-word;
    }
  }
`

interface ParentCompProps {
    childComp: React.ReactNode;
    title: string
}

const TitleWithIcon: React.FC<ParentCompProps> = (props) => {
    const {childComp, title} = props;

    return (
        <div className="flex gap-2 items-center">
            {childComp}
            <span>{title}</span>
        </div>
    )
};

const onChange: DatePickerProps['onChange'] = (date, dateString) => {
    console.log("Date", dateString);
};


const currentMonth = dayjs().startOf('month')


function Dashboard() {
    return (
        <div className="flex justify-evenly p-5 gap-5 flex-wrap h-full">

            <div className="w-full">
                <div className="w-full flex md:pr-10 md:pl-10  justify-between items-center">
                    <p className="text-xl m-0">Genel Özet</p>
                    <DatePicker defaultValue={currentMonth} format="MM/YYYY" picker="month"/>

                </div>

                <div className="md:hidden m-5">
                    <CenteredBox className="h-full">
                        <DonutChart></DonutChart>
                    </CenteredBox>

                </div>
            </div>

            <Divider className="md:hidden m-2"></Divider>


            <DashboardCard titleColor={"#0891b2"} title="Net Varlık" className="w-80 md:hidden">
                <h1 className="text-xl">
                    15.000₺
                </h1>
            </DashboardCard>


            <DashboardCard titleColor={"#15803d"} title="Aylık Gelir" className="w-80 hidden md:block"
                           extra={<a href="#">Detay</a>}>
                <h1 className="text-xl">
                    4500₺
                </h1>
            </DashboardCard>

            <DashboardCard titleColor={"#c2410c"} title="Aylık Gider" className="w-80 hidden md:block"
                           extra={<a href="#">Detay</a>}>
                <h1 className="text-xl">
                    500₺
                </h1>
            </DashboardCard>

            <DashboardCard titleColor={"#0891b2"} title="Net Varlık" className="w-80 hidden md:block">
                <h1 className="text-xl">
                    15.000₺
                </h1>
            </DashboardCard>


            <DashboardCard
                titleColor="#3730a3"
                title={
                    <TitleWithIcon
                        title="Son Yapılan İşlemler"
                        childComp={<UnorderedListOutlined/>
                        }/>
                } className="w-80">
                <p className="flex gap-2  items-baseline">
                    <CheckOutlined/>
                    <span>Apartman Mantolaması Yapıldı kat malikleri ayarlandı</span>
                </p>
                <p className="flex gap-2  items-baseline">
                    <CheckOutlined/>
                    <span>asdsasa</span>
                </p>
                <p className="flex gap-2  items-center">
                    <CheckOutlined/>
                    <span>asdsasa</span>
                </p>
            </DashboardCard>
        </div>

    );
}

export default Dashboard;
