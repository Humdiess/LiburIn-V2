import React, { useState, useRef, useEffect } from 'react';
import { View, StyleSheet, Image, ScrollView, Dimensions, Text, Animated } from 'react-native';

const { width: viewportWidth } = Dimensions.get('window');

const Hero = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const scrollViewRef = useRef<ScrollView | null>(null);
  const fadeAnim = useRef(new Animated.Value(0)).current; 

  const banners = [
    require('../assets/images/banner (1).png'),
    require('../assets/images/banner (2).png'),
    require('../assets/images/banner (3).png'),
  ];

  const handleScroll = (event:any) => {
    const slide = Math.ceil(
      event.nativeEvent.contentOffset.x / event.nativeEvent.layoutMeasurement.width
    );
    if (slide !== activeSlide) {
      setActiveSlide(slide);
    }
  };

  useEffect(() => {
      const intervalId = setInterval(() => {
      setActiveSlide((prevSlide) => {
        const nextSlide = (prevSlide + 1) % banners.length;
        if (scrollViewRef.current) {
          scrollViewRef.current.scrollTo({ x: nextSlide * (viewportWidth - 30), animated: true });
        }
        return nextSlide;
      });
    }, 3000);

    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();

    return () => clearInterval(intervalId);
  }, [banners.length, fadeAnim]);

  return (
    <View style={styles.hero}>
      <Animated.Text style={[styles.welcomeText, { opacity: fadeAnim }]}>Halo, Masyhudi</Animated.Text>
      <Animated.Text style={[styles.slogan, { opacity: fadeAnim }]}>Mau liburan kemana kamu hari ini?</Animated.Text>
      <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}
      >
        {banners.map((image, index) => (
          <View key={index} style={styles.imageContainer}>
            <Image key={index} style={styles.image} source={image} />
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  hero: {
    paddingHorizontal: 15,
    paddingTop: 10,
  },
  imageContainer: {
    width: viewportWidth - 30,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    borderRadius: 10,
  },
  image: {
    width: '100%',
    height: 80,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'center',
  },
  slogan: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
});

export default Hero;
