import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import BusLogo from '../components/BusLogo';

const SplashScreen = ({ onFinish }) => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
      onFinish && onFinish();
    }, 2000); // 2 seconds to match animation (1.9s animation + 0.1s buffer)

    return () => clearTimeout(timer);
  }, [onFinish]);

  if (!showSplash) {
    return null;
  }

  return (
    <View style={styles.splashContainer}>
      <BusLogo width={120} height={120} fill="#fff" />
      <StatusBar style="light" />
    </View>
  );
};

const styles = StyleSheet.create({
  splashContainer: {
    flex: 1,
    backgroundColor: '#1a1a1a',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default SplashScreen;
