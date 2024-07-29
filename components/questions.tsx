import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import QuestionCard from './questioncard';

const dataItems=[
    {
        traders: 750,
        title: 'India to win the 2024 Women’s Asian Championship?',
        description: 'The series will start from 18 July Read more',
        icon: { uri: 'https://static.vecteezy.com/system/resources/thumbnails/038/258/527/small_2x/cricket-player-logo-female-vector.jpg' },
        yesPrice: '7.5 ₹',
        noPrice: '2.5 ₹',
    },
    {
        traders: 60126,
        title: 'Donald Trump to win the 2024 U.S. election?',
        description: 'The exam was re-conducted for 1563 candidates on 23 June, 2024. Read more',
        icon: { uri: 'https://th.bing.com/th/id/OIP.IWS37lT_YTyM0kFm_xUIPAHaH_?rs=1&pid=ImgDetMain' },
        yesPrice: '2.5 ₹',
        noPrice: '7.5 ₹',
    },
    {
        traders: 19956,
        title: 'India to win the T20I series against Sri Lanka 2024?',
        description: '',
        icon: { uri: 'https://www.shoppersbd.com/media/catalog/product/cache/1/thumbnail/9df78eab33525d08d6e5fb8d27136e95/0/1/01_4_2.jpg' },
        yesPrice: '7.5 ₹',
        noPrice: '2.5 ₹',
    },
    {
        traders: 750,
        title: 'Closing Price of Apple to be $220.0 or more on 27 july?',
        description: 'The series will start from 18 July Read more',
        icon: { uri: 'https://th.bing.com/th/id/OIP.tPq9unzwIPvWPnYgmeYwtgHaEz?rs=1&pid=ImgDetMain' },
        yesPrice: '7.5 ₹',
        noPrice: '2.5 ₹',
    }
]

export default function Questions(){
    return(
        <ScrollView >{ dataItems.map((data, index) => (
            <QuestionCard
                key={index}
                traders={data.traders}
                title={data.title}
                description={data.description}
                icon={data.icon}
                yesPrice={data.yesPrice}
                noPrice={data.noPrice}
            />
        ))}

        </ScrollView>
    )
}