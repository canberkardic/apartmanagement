import {Tabs, TabsProps} from 'antd';
import TableComp from '../shared-components/table';

function TabsContainer() {
    const onChange = (key: string) => {
        console.log(key);
    };

    const items: TabsProps['items'] = [
        {
            key: '1',
            label: `Gelirler`,
            children: <TableComp></TableComp>
        },
        {
            key: '2',
            label: `Giderler`,
            children: <TableComp></TableComp>
        }
    ];

    return (
        <Tabs centered defaultActiveKey="1" items={items} onChange={onChange} />
    );
}

export default TabsContainer;
