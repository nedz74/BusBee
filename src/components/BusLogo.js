import React, { useEffect, useRef } from "react";
import { Animated } from "react-native";
import Svg, { Path, Circle, Defs, LinearGradient, Stop } from "react-native-svg";

const AnimatedSvg = Animated.createAnimatedComponent(Svg);
const AnimatedPath = Animated.createAnimatedComponent(Path);
const AnimatedCircle = Animated.createAnimatedComponent(Circle);

const BusLogo = (props) => {
  const strokeDashoffset = useRef(new Animated.Value(1000)).current;
  const fillOpacity = useRef(new Animated.Value(0)).current;
  const headlightOpacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Phase 1: Streak Outline Animation (0-1.0s)
    // The streak follows the path with a fading trail
    const outlineAnimation = Animated.timing(strokeDashoffset, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: false,
    });

    // Phase 2: Fast Double Blink (1.0-1.5s) - 2 blinks in 500ms
    const headlightAnimation = Animated.sequence([
      // First blink
      Animated.timing(headlightOpacity, {
        toValue: 1,
        duration: 100,
        useNativeDriver: false,
      }),
      Animated.timing(headlightOpacity, {
        toValue: 0,
        duration: 100,
        useNativeDriver: false,
      }),
      // Second blink
      Animated.timing(headlightOpacity, {
        toValue: 1,
        duration: 100,
        useNativeDriver: false,
      }),
      Animated.timing(headlightOpacity, {
        toValue: 0,
        duration: 100,
        useNativeDriver: false,
      }),
    ]);

    // Phase 3: Fill Transition (1.5-1.9s) - after headlight blinking
    const fillAnimation = Animated.timing(fillOpacity, {
      toValue: 1,
      duration: 400,
      useNativeDriver: false,
    });

    // Run the complete animation sequence
    Animated.sequence([
      outlineAnimation,
      headlightAnimation,
      fillAnimation,
    ]).start();
  }, []);

  return (
    <AnimatedSvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" {...props}>
      <Defs>
        <LinearGradient id="headlightGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <Stop offset="0%" stopColor="#FFFFFF" stopOpacity="1" />
          <Stop offset="50%" stopColor="#FFD700" stopOpacity="0.9" />
          <Stop offset="100%" stopColor="#FFF8DC" stopOpacity="0.6" />
        </LinearGradient>
      </Defs>
      
      {/* Main bus outline with streak effect */}
      <AnimatedPath 
        d="M192 64c-53 0-96 43-96 96v288c0 29.8 20.4 54.9 48 62v34c0 17.7 14.3 32 32 32h16c17.7 0 32-14.3 32-32v-32h192v32c0 17.7 14.3 32 32 32h16c17.7 0 32-14.3 32-32v-34c27.6-7.1 48-32.2 48-62V160c0-53-43-96-96-96zm-32 128c0-17.7 14.3-32 32-32h256c17.7 0 32 14.3 32 32v96c0 17.7-14.3 32-32 32H192c-17.7 0-32-14.3-32-32zm32 192c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32 14.3-32 32-32m256 0c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32 14.3-32 32-32"
        stroke="#fff"
        strokeWidth="4"
        fill="none"
        strokeDasharray="80 920"
        strokeDashoffset={strokeDashoffset}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      
      {/* Bus fill */}
      <AnimatedPath 
        d="M192 64c-53 0-96 43-96 96v288c0 29.8 20.4 54.9 48 62v34c0 17.7 14.3 32 32 32h16c17.7 0 32-14.3 32-32v-32h192v32c0 17.7 14.3 32 32 32h16c17.7 0 32-14.3 32-32v-34c27.6-7.1 48-32.2 48-62V160c0-53-43-96-96-96zm-32 128c0-17.7 14.3-32 32-32h256c17.7 0 32 14.3 32 32v96c0 17.7-14.3 32-32 32H192c-17.7 0-32-14.3-32-32zm32 192c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32 14.3-32 32-32m256 0c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32 14.3-32 32-32"
        fill="#fff"
        opacity={fillOpacity}
      />
      
      {/* Headlights */}
      <AnimatedCircle
        cx="445"
        cy="415"
        r="20"
        fill="url(#headlightGradient)"
        opacity={headlightOpacity}
      />
      <AnimatedCircle
        cx="190"
        cy="415"
        r="20"
        fill="url(#headlightGradient)"
        opacity={headlightOpacity}
      />
    </AnimatedSvg>
  );
};

export default BusLogo;
