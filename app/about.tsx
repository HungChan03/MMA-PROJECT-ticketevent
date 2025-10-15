import { router } from 'expo-router';
import React from 'react';
import { Dimensions, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const { width, height } = Dimensions.get('window');

export default function AboutScreen() {
  const handleBackPress = () => {
    router.back();
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={handleBackPress}>
          <Text style={styles.backIcon}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>About</Text>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.section}>
          {/* App Info */}
          <View style={styles.appInfoContainer}>
            <View style={styles.appIcon}>
              <Text style={styles.appIconText}>🎫</Text>
            </View>
            <Text style={styles.appName}>Tickme</Text>
            <Text style={styles.appVersion}>Version 1.0.0</Text>
            <Text style={styles.appDescription}>
              Your ultimate event discovery and ticket management platform
            </Text>
          </View>

          {/* App Details */}
          <View style={styles.detailsContainer}>
            <Text style={styles.sectionTitle}>About Tickme</Text>
            <Text style={styles.detailText}>
              Tickme is a comprehensive event management platform that helps you discover, 
              browse, and purchase tickets for various events including concerts, conferences, 
              sports events, and community gatherings.
            </Text>

            <Text style={styles.sectionTitle}>Features</Text>
            <Text style={styles.detailText}>
              • Discover events by category and location{'\n'}
              • Browse detailed event information{'\n'}
              • Purchase tickets securely{'\n'}
              • Manage your ticket collection{'\n'}
              • Get notifications about upcoming events{'\n'}
              • Access event details and venue information
            </Text>

            <Text style={styles.sectionTitle}>Contact Information</Text>
            <Text style={styles.detailText}>
              For support, feedback, or inquiries:{'\n'}
              Email: support@tickme.com{'\n'}
              Phone: +1 (555) 123-4567{'\n'}
              Website: www.tickme.com
            </Text>

            <Text style={styles.sectionTitle}>Legal</Text>
            <Text style={styles.detailText}>
              This application is developed and maintained by Tickme Inc. 
              All rights reserved. Please refer to our Terms of Use and 
              Privacy Policy for more information.
            </Text>

            <Text style={styles.sectionTitle}>Acknowledgments</Text>
            <Text style={styles.detailText}>
              We would like to thank all our users for their continued support 
              and feedback. Special thanks to our development team and partners 
              who make Tickme possible.
            </Text>
          </View>

          {/* Copyright */}
          <View style={styles.copyrightContainer}>
            <Text style={styles.copyrightText}>
              © 2024 Tickme Inc. All rights reserved.
            </Text>
            <Text style={styles.copyrightText}>
              Made with ❤️ for event lovers everywhere.
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 60,
    paddingBottom: 20,
    backgroundColor: '#FFFFFF',
  },
  backButton: {
    marginRight: 16,
  },
  backIcon: {
    fontSize: 24,
    color: '#333333',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333333',
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  section: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 20,
    marginVertical: 10,
  },
  appInfoContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  appIcon: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#4A90E2',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  appIconText: {
    fontSize: 40,
    color: '#FFFFFF',
  },
  appName: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 8,
  },
  appVersion: {
    fontSize: 16,
    color: '#666666',
    marginBottom: 12,
  },
  appDescription: {
    fontSize: 16,
    color: '#666666',
    textAlign: 'center',
    lineHeight: 22,
  },
  detailsContainer: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333333',
    marginTop: 20,
    marginBottom: 12,
  },
  detailText: {
    fontSize: 14,
    color: '#666666',
    lineHeight: 22,
    marginBottom: 8,
  },
  copyrightContainer: {
    alignItems: 'center',
    marginTop: 20,
    paddingTop: 20,
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
  },
  copyrightText: {
    fontSize: 12,
    color: '#999999',
    textAlign: 'center',
    marginBottom: 4,
  },
});
