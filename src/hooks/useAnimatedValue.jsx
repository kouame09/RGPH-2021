import { useState, useEffect } from 'react';
import { useSpring } from 'framer-motion';

const useAnimatedValue = (endValue, duration = 2000) => {
  const [displayValue, setDisplayValue] = useState(0);
  const spring = useSpring(0, { duration: duration });

  useEffect(() => {
    spring.set(endValue);
  }, [endValue, spring]);

  useEffect(() => {
    const unsubscribe = spring.onChange((latest) => {
      setDisplayValue(Math.round(latest));
    });
    return unsubscribe;
  }, [spring]);

  return displayValue;
};

export default useAnimatedValue;