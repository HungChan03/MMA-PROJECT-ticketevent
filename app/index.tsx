import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import React, { useEffect } from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';

const { width, height } = Dimensions.get('window');

export default function SplashScreen() {
  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace('/onboarding');
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#4A90E2', '#7B68EE']}
        style={styles.gradient}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <View style={styles.content}>
          {/* Ticket Icon */}
          <View style={styles.ticketIcon}>
            <View style={styles.ticketShape}>
              <View style={styles.ticketNotch} />
              <View style={styles.ticketNotch} />
              <View style={styles.ticketNotch} />
            </View>
          </View>
          
          {/* App Name */}
          <Text style={styles.appName}>Tickme</Text>
          
          {/* Tagline */}
          <Text style={styles.tagline}>We Manage Your Ticket</Text>
        </View>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  ticketIcon: {
    marginBottom: 30,
  },
  ticketShape: {
    width: 80,
    height: 50,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  ticketNotch: {
    width: 4,
    height: 4,
    backgroundColor: '#4A90E2',
    borderRadius: 2,
    marginVertical: 2,
  },
  appName: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 8,
    letterSpacing: 1,
  },
  tagline: {
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.8)',
    fontWeight: '400',
  },
});
