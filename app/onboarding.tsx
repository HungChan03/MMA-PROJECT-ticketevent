import { router } from 'expo-router';
import React, { useState } from 'react';
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const { width, height } = Dimensions.get('window');

export default function OnboardingScreen() {
  const [currentStep, setCurrentStep] = useState(0);

  const handleNext = () => {
    if (currentStep < 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // Navigate to login screen
      router.replace('/login');
    }
  };

  const renderWelcomeScreen = () => (
    <>
      {/* Central Graphic */}
      <View style={styles.centralGraphic}>
        <View style={styles.circleContainer}>
          <View style={styles.outerCircle}>
            <View style={styles.innerCircle}>
              {/* Central image placeholder */}
              <View style={styles.centralImage}>
                <View style={styles.imagePlaceholder} />
              </View>
              
              {/* Profile circles around */}
              <View style={[styles.profileCircle, styles.profileTopLeft]}>
                <View style={styles.profilePlaceholder} />
              </View>
              <View style={[styles.profileCircle, styles.profileTopRight]}>
                <View style={styles.profilePlaceholder} />
              </View>
              <View style={[styles.profileCircle, styles.profileBottomLeft]}>
                <View style={styles.profilePlaceholder} />
              </View>
              <View style={[styles.profileCircle, styles.profileBottomRight]}>
                <View style={styles.profilePlaceholder} />
              </View>
              
              {/* Icons */}
              <View style={[styles.iconCircle, styles.iconTopLeft]}>
                <Text style={styles.iconText}>👍</Text>
              </View>
              <View style={[styles.iconCircle, styles.iconBottomRight]}>
                <Text style={styles.iconText}>❤️</Text>
              </View>
            </View>
          </View>
        </View>
      </View>

      {/* Welcome Message */}
      <View style={styles.welcomeContainer}>
        <Text style={styles.welcomeTitle}>Welcome to Tickme!</Text>
        <Text style={styles.welcomeDescription}>
          We are a service application to manage your ticket without charging any fees. enjoy your hobby freely.
        </Text>
      </View>
    </>
  );

  const renderStayUpdateScreen = () => (
    <>
      {/* Notification Cards */}
      <View style={styles.notificationContainer}>
        <View style={styles.notificationCard}>
          <View style={[styles.iconContainer, { backgroundColor: '#FF6B47' }]}>
            <Text style={styles.iconText}>⏰</Text>
          </View>
          <View style={styles.notificationText}>
            <Text style={styles.notificationTitle}>Event Reminder</Text>
            <Text style={styles.notificationSubtitle}>Your concert ticket expires in 2 days</Text>
          </View>
        </View>

        <View style={styles.notificationCard}>
          <View style={[styles.iconContainer, { backgroundColor: '#FFA726' }]}>
            <Text style={styles.iconText}>⚠️</Text>
          </View>
          <View style={styles.notificationText}>
            <Text style={styles.notificationTitle}>Important Update</Text>
            <Text style={styles.notificationSubtitle}>Venue change for tomorrow's event</Text>
          </View>
        </View>

        <View style={styles.notificationCard}>
          <View style={[styles.iconContainer, { backgroundColor: '#66BB6A' }]}>
            <Text style={styles.iconText}>✅</Text>
          </View>
          <View style={styles.notificationText}>
            <Text style={styles.notificationTitle}>Booking Confirmed</Text>
            <Text style={styles.notificationSubtitle}>Your movie ticket is ready to use</Text>
          </View>
        </View>
      </View>

      {/* Stay Update Content */}
      <View style={styles.stayUpdateContainer}>
        <Text style={styles.stayUpdateTitle}>Stay Update</Text>
        <Text style={styles.stayUpdateDescription}>
          You can follow updates about the events that you will be participating in, this can make it easier for you to manage your events.
        </Text>
      </View>
    </>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.logoContainer}>
          <View style={styles.ticketIcon}>
            <View style={styles.ticketShape}>
              <View style={styles.ticketNotch} />
              <View style={styles.ticketNotch} />
              <View style={styles.ticketNotch} />
            </View>
          </View>
          <Text style={styles.logoText}>Tickme</Text>
        </View>
      </View>

      {/* Content based on current step */}
      {currentStep === 0 ? renderWelcomeScreen() : renderStayUpdateScreen()}

      {/* Pagination - Only 2 dots now */}
      <View style={styles.pagination}>
        <View style={[styles.dot, currentStep === 0 && styles.activeDot]} />
        <View style={[styles.dot, currentStep === 1 && styles.activeDot]} />
      </View>

      {/* Next Button */}
      <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
        <Text style={styles.nextButtonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    paddingTop: 50,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ticketIcon: {
    marginRight: 10,
  },
  ticketShape: {
    width: 30,
    height: 20,
    backgroundColor: '#4A90E2',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ticketNotch: {
    width: 2,
    height: 2,
    backgroundColor: '#FFFFFF',
    borderRadius: 1,
    marginVertical: 1,
  },
  logoText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4A90E2',
  },
  centralGraphic: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 40,
  },
  circleContainer: {
    position: 'relative',
  },
  outerCircle: {
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: '#F0F0F0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerCircle: {
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: '#E0E0E0',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  centralImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#FF6B9D',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imagePlaceholder: {
    width: 40,
    height: 40,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
  },
  profileCircle: {
    position: 'absolute',
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#E0E0E0',
  },
  profileTopLeft: {
    top: -10,
    left: -10,
  },
  profileTopRight: {
    top: -10,
    right: -10,
  },
  profileBottomLeft: {
    bottom: -10,
    left: -10,
  },
  profileBottomRight: {
    bottom: -10,
    right: -10,
  },
  profilePlaceholder: {
    width: 30,
    height: 30,
    backgroundColor: '#C0C0C0',
    borderRadius: 15,
  },
  iconCircle: {
    position: 'absolute',
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconTopLeft: {
    top: 10,
    left: 10,
    backgroundColor: '#4A90E2',
  },
  iconBottomRight: {
    bottom: 10,
    right: 10,
    backgroundColor: '#FF6B9D',
  },
  iconText: {
    fontSize: 16,
  },
  welcomeContainer: {
    paddingHorizontal: 40,
    alignItems: 'center',
    marginBottom: 30,
  },
  welcomeTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 16,
    textAlign: 'center',
  },
  welcomeDescription: {
    fontSize: 16,
    color: '#666666',
    textAlign: 'center',
    lineHeight: 24,
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#E0E0E0',
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: '#4A90E2',
  },
  nextButton: {
    backgroundColor: '#4A90E2',
    marginHorizontal: 40,
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 40,
  },
  nextButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  // Notification Cards Styles
  notificationContainer: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  notificationCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  notificationText: {
    flex: 1,
  },
  notificationTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333333',
    marginBottom: 4,
  },
  notificationSubtitle: {
    fontSize: 14,
    color: '#666666',
  },
  // Stay Update Styles
  stayUpdateContainer: {
    paddingHorizontal: 40,
    alignItems: 'center',
    marginTop: 40,
    marginBottom: 30,
  },
  stayUpdateTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 16,
    textAlign: 'center',
  },
  stayUpdateDescription: {
    fontSize: 16,
    color: '#666666',
    textAlign: 'center',
    lineHeight: 24,
  },
});
