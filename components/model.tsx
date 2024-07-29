import React, { useState, useRef, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal, TouchableWithoutFeedback, Dimensions, Image, Animated, Easing } from 'react-native';
import Slider from 'react-native-sliders';
import SwipeButton from 'rn-swipe-button';

let { width, height } = Dimensions.get('window');

interface BidModelProps {
    yesPrice: number;
    noPrice: number;
    onClose: () => void;
    selectedButton: 'yes' | 'no' | null;
    title: string;
    icon: { uri: string };
}

const Model: React.FC<BidModelProps> = ({ yesPrice, noPrice, onClose, selectedButton, title, icon }) => {
    const [preselectedButton, setPreselectedButton] = useState<'yes' | 'no' | null>(selectedButton);
    const [bidPrice, setBidPrice] = useState(selectedButton === 'yes' ? yesPrice : noPrice);
    const [quantity, setQuantity] = useState(1);
    const setColor = preselectedButton === "yes" ? '#2db838' : "#2db838";
    const [swipeColor, setSwipeColor] = useState(setColor);
    const [title1, settitle] = useState("Swipe to complete");
    const [orderSuccess, setOrderSuccess] = useState(false);

    const slideAnim = useRef(new Animated.Value(height)).current;
    useEffect(() => {
        if (preselectedButton === 'yes') {
            setBidPrice(yesPrice);
        } else if (preselectedButton === 'no') {
            setBidPrice(noPrice);
        }
    }, [preselectedButton, yesPrice, noPrice]);

    useEffect(() => {
        Animated.timing(slideAnim, {
            toValue: 0,
            duration: 300,
            easing: Easing.ease,
            useNativeDriver: true,
        }).start();
    }, [slideAnim]);

    const handleSwipeSuccess = () => {
        setSwipeColor("black");
        settitle("Order Success")
        setOrderSuccess(true);
        setTimeout(() => {
            onClose();
        }, 2000);
    };

    const totalPrice = bidPrice * quantity;

    return (
        <Modal
            transparent={true}
            animationType="none"
            onRequestClose={onClose}
        >
            <TouchableWithoutFeedback onPress={onClose}>
                <View style={styles.modalOverlay}>
                    <View style={styles.topMost}>
                        
                        <View style={styles.centeredButton}>
                            
                        </View>
                        <TouchableOpacity style={styles.closeButton} onPress={onClose}>
                            <Text style={styles.closeButtonText}>X</Text>
                        </TouchableOpacity>
                    </View>
                  
                    <TouchableWithoutFeedback>
                        <Animated.View style={[styles.modalContent, { transform: [{ translateY: slideAnim }] }]}>
                            <View style={styles.header}>
                                <Text style={styles.title}>{title}</Text>
                                <Image source={icon} style={styles.icon} />
                            </View>
                            {orderSuccess ? (
                                <Text style={styles.successMessage}>Order Success</Text>
                            ) : (
                                <View style={styles.elevatedView}>
                                    <View style={styles.buttonContainer}>
                                        <TouchableOpacity
                                            style={[styles.button, preselectedButton === 'yes' && styles.selectedYesButton]}
                                            onPress={() => setPreselectedButton('yes')}
                                        >
                                            <Text style={[styles.buttonText, preselectedButton === 'yes' && { color: 'white' }]}>
                                                {`Yes ₹ ${yesPrice}`}
                                            </Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity
                                            style={[styles.button, preselectedButton === 'no' && styles.selectedNoButton]}
                                            onPress={() => setPreselectedButton('no')}
                                        >
                                            <Text style={[styles.buttonText, preselectedButton === 'no' && { color: 'white' }]}>
                                                {`No ₹ ${noPrice}`}
                                            </Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            )}
                            {!orderSuccess && (
                                <View style={styles.elevatedView}>
                                    <Text style={styles.sliderLabel}>{`Bid Price: ₹ ${bidPrice.toFixed(2)}`}</Text>
                                    <View style={styles.sliderContainer}>
                                        <TouchableOpacity onPress={() => setBidPrice(prev => Math.max(prev - 0.5, 0.5))}>
                                            <Text style={styles.sliderButton}>-</Text>
                                        </TouchableOpacity>
                                        <Slider
                                            style={styles.slider}
                                            minimumValue={0.5}
                                            maximumValue={9.5}
                                            step={0.5}
                                            value={bidPrice}
                                            onValueChange={setBidPrice}
                                            minimumTrackTintColor="black"
                                            maximumTrackTintColor="#d3d3d3"
                                            thumbTintColor="black"
                                            
                                        />
                                        <TouchableOpacity onPress={() => setBidPrice(prev => Math.min(prev + 0.5, 9.5))}>
                                            <Text style={styles.sliderButton}>+</Text>
                                        </TouchableOpacity>
                                    </View>
                                    
                                    <Text style={styles.sliderLabel}>Quantity</Text>
                                    <View style={styles.sliderContainer}>
                                        <TouchableOpacity onPress={() => setQuantity(prev => Math.max(prev - 1, 1))}>
                                            <Text style={styles.sliderButton}>-</Text>
                                        </TouchableOpacity>
                                        <Slider
                                            style={styles.slider}
                                            minimumValue={1}
                                            maximumValue={5}
                                            step={1}
                                            value={quantity}
                                            onValueChange={setQuantity}
                                            minimumTrackTintColor="black"
                                            maximumTrackTintColor="#d3d3d3"
                                            thumbTintColor="black"
                                        />
                                        <TouchableOpacity onPress={() => setQuantity(prev => Math.min(prev + 1, 5))}>
                                            <Text style={styles.sliderButton}>+</Text>
                                        </TouchableOpacity>
                                    </View>
                                    <Text style={styles.totalPriceText}>{`Total: ₹ ${totalPrice.toFixed(2)}`}</Text>
                                    <SwipeButton
                                        containerStyles={styles.swipeButtonContainer}
                                        height={50}
                                        width={width * 0.8}
                                        title={title1}
                                        thumbIconBackgroundColor="#ffffff"
                                        railBackgroundColor={preselectedButton === "yes" ? '#434ce7' : "#c75147"}
                                        onSwipeSuccess={handleSwipeSuccess}
                                        swipeSuccessThreshold={90}
                                        railFillBackgroundColor={swipeColor}
                                        shouldResetAfterSuccess={true}
                                        resetAfterSuccessAnimDelay={2000}
                                        resetAfterSuccessAnimDuration={1000}
                                    />
                                </View>
                            )}
                        </Animated.View>
                    </TouchableWithoutFeedback>
                </View>
            </TouchableWithoutFeedback>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalOverlay: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    topMost: {
        width: 30,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
        // paddingVertical: 10,
        backgroundColor: '#ffffff',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    centeredButton: {
        width: 45,
        height: 15,
        borderRadius:10,
        backgroundColor: '#f6f6f6',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:-30
    },
    centeredButtonText: {
        fontSize: 24,
        color: 'black',
    },
    closeButton: {
        position: 'absolute',
        top:-50,
        right:-(width*0.4),
        backgroundColor: '#ffffff',
        borderRadius: 100,
        padding: 10,
    },
    closeButtonText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    modalContainer: {
        width: '100%',
    },
    modalContent: {
        width: '100%',
        backgroundColor: '#ffffff',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        padding: 20,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    title: {
        flex: 1,
        fontSize: 18,
        fontWeight: 'bold',
    },
    icon: {
        width: 40,
        height: 30,
        marginLeft: 10,
    },
    elevatedView: {
        backgroundColor: '#ffffff',
        borderRadius: 10,
        padding: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
        marginVertical: 10,
        width: '100%',
        alignItems: 'center',
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        borderRadius: 30,
    },
    button: {
        flex: 1,
        backgroundColor: '#e6f4f1',
        padding: 20,
        borderRadius: 30,
        alignItems: 'center',
    },
    selectedYesButton: {
        backgroundColor: 'blue',
    },
    selectedNoButton: {
        backgroundColor: 'red',
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black',
    },
    sliderLabel: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    sliderContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        width: '100%',
    },
    slider: {
        flex: 1,
        height: 70,
        
    },
    sliderButton: {
        fontSize: 20,
        fontWeight: 'bold',
        marginHorizontal: 10,
    },
    totalPriceText: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    swipeButtonContainer: {
        marginHorizontal: 5,
        borderRadius: 30,
    },
    successMessage: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'green',
        marginTop: 20,
    },
});

export default Model;
