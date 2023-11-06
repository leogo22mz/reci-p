import { List, Avatar } from 'antd';
import { ClockCircleFilled } from '@ant-design/icons';

import "./recipe.css";



function Recipe() {

    const data = [
        {
            title: 'Macaroni with tomato'
        },
    ];

    return (
        <div className='recipe-container'>
        <List className='recipe'
            itemLayout="horizontal"
            dataSource={data}
            renderItem={(item, index) => (
                <List.Item>
                    <List.Item.Meta
                        avatar={<Avatar className="avatar" src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${index}`} />}
                        title={<a href="https://ant.design">{item.title}</a>}
                        description="The easiest way to have a fast and yummy pasta dish!"
                    />
                    <div className='timer'>
                    <div><ClockCircleFilled className='buttonIcon'/></div>
                    <p>10 min</p>
                    </div>
                </List.Item>
            )}
        />
        </div>
    );
}

export default Recipe;

