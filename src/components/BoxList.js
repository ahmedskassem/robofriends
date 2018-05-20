import React from 'react';
import Box from './Box';

const BoxList = ({robots}) => {
    const cards = robots.map((name, i) => {
        return <Box key= {robots[i].id + robots[i].name} id = {robots[i].id} name = {robots[i].name} email = {robots[i].email} />;
    });
    return (
        <div>
        {cards}
        </div>
    );
}

export default BoxList;