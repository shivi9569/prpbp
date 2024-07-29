import React, { useState } from 'react';
import { View } from 'react-native';
import ImageGallery from './images';
import Headers from './head';
import Features from './features';
import Trending from './trending';
import Questions from './questions';

export default function Homepage(){
        return(
            <View>
                <Headers/>
                <Features/>
                <ImageGallery/>
                <Trending/>
                <Questions/>
            </View>
        )
}