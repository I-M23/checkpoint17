import React from 'react';
import { Card } from 'antd';
const { Meta } = Card;
const MovieCard = ({item}) => {
    return (
        <Card
        hoverable
        style={{
          width: 240,
        }}
        cover={<img alt="example" src= {item.picture} />}
      >
        <Meta title= {item.title } description={item.rate} />
      </Card>
     )
        
}
 

export default MovieCard;