import { router } from 'expo-router';
import React from 'react';
import { Dimensions, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const { width, height } = Dimensions.get('window');

export default function HelpSupportScreen() {
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
        <Text style={styles.headerTitle}>Help & Support</Text>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* FAQ Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Frequently Asked Questions</Text>
          
          <View style={styles.faqItem}>
            <Text style={styles.faqQuestion}>How do I create an account?</Text>
            <Text style={styles.faqAnswer}>
              To create an account, tap "Create Account" on the login screen and fill in your information. 
              You'll need to provide your email address and create a secure password.
            </Text>
          </View>

          <View style={styles.faqItem}>
            <Text style={styles.faqQuestion}>How can I find events near me?</Text>
            <Text style={styles.faqAnswer}>
              Use the search bar on the home screen to search for events by keywords like "Music event" or "Webinars". 
              You can also browse event categories or use the location feature to find events in your area.
            </Text>
          </View>

          <View style={styles.faqItem}>
            <Text style={styles.faqQuestion}>How do I purchase tickets?</Text>
            <Text style={styles.faqAnswer}>
              Browse events, select the one you're interested in, and tap "Buy Tickets". 
              Follow the checkout process to complete your purchase securely.
            </Text>
          </View>

          <View style={styles.faqItem}>
            <Text style={styles.faqQuestion}>Can I cancel my ticket purchase?</Text>
            <Text style={styles.faqAnswer}>
              Ticket cancellation policies vary by event organizer. Please check the event details 
              for specific cancellation terms before purchasing.
            </Text>
          </View>
        </View>

        {/* Contact Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Contact Us</Text>
          
          <View style={styles.contactItem}>
            <Text style={styles.contactLabel}>Email Support</Text>
            <Text style={styles.contactValue}>support@tickme.com</Text>
          </View>

          <View style={styles.contactItem}>
            <Text style={styles.contactLabel}>Phone Support</Text>
            <Text style={styles.contactValue}>+1 (555) 123-4567</Text>
          </View>

          <View style={styles.contactItem}>
            <Text style={styles.contactLabel}>Business Hours</Text>
            <Text style={styles.contactValue}>Monday - Friday: 9:00 AM - 6:00 PM EST</Text>
          </View>
        </View>

        {/* Troubleshooting Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Troubleshooting</Text>
          
          <View style={styles.troubleshootItem}>
            <Text style={styles.troubleshootTitle}>App not loading properly</Text>
            <Text style={styles.troubleshootText}>
              • Check your internet connection{'\n'}
              • Close and reopen the app{'\n'}
              • Restart your device{'\n'}
              • Update to the latest app version
            </Text>
          </View>

          <View style={styles.troubleshootItem}>
            <Text style={styles.troubleshootTitle}>Login issues</Text>
            <Text style={styles.troubleshootText}>
              • Verify your email and password{'\n'}
              • Use "Recovery Password" if needed{'\n'}
              • Check your email for verification links{'\n'}
              • Contact support if problems persist
            </Text>
          </View>
        </View>

        {/* Additional Help */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Additional Resources</Text>
          
          <TouchableOpacity style={styles.resourceItem}>
            <Text style={styles.resourceText}>📖 User Guide</Text>
            <Text style={styles.arrowIcon}>→</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.resourceItem}>
            <Text style={styles.resourceText}>🎥 Video Tutorials</Text>
            <Text style={styles.arrowIcon}>→</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.resourceItem}>
            <Text style={styles.resourceText}>💬 Live Chat</Text>
            <Text style={styles.arrowIcon}>→</Text>
          </TouchableOpacity>
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
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 16,
  },
  faqItem: {
    marginBottom: 20,
  },
  faqQuestion: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333333',
    marginBottom: 8,
  },
  faqAnswer: {
    fontSize: 14,
    color: '#666666',
    lineHeight: 20,
  },
  contactItem: {
    marginBottom: 16,
  },
  contactLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333333',
    marginBottom: 4,
  },
  contactValue: {
    fontSize: 14,
    color: '#666666',
  },
  troubleshootItem: {
    marginBottom: 16,
  },
  troubleshootTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333333',
    marginBottom: 8,
  },
  troubleshootText: {
    fontSize: 14,
    color: '#666666',
    lineHeight: 20,
  },
  resourceItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  resourceText: {
    fontSize: 16,
    color: '#333333',
  },
  arrowIcon: {
    fontSize: 18,
    color: '#666666',
  },
});
