import { router } from 'expo-router';
import React from 'react';
import { Dimensions, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const { width, height } = Dimensions.get('window');

export default function TermsOfUseScreen() {
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
        <Text style={styles.headerTitle}>Terms of Use</Text>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.section}>
          <Text style={styles.lastUpdated}>Last updated: December 2024</Text>
          
          <Text style={styles.sectionTitle}>1. Acceptance of Terms</Text>
          <Text style={styles.contentText}>
            By accessing and using the Tickme mobile application ("App"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
          </Text>

          <Text style={styles.sectionTitle}>2. Description of Service</Text>
          <Text style={styles.contentText}>
            Tickme provides a platform for discovering, browsing, and purchasing tickets for various events including but not limited to concerts, conferences, sports events, and community gatherings. Our service connects users with event organizers and facilitates ticket transactions.
          </Text>

          <Text style={styles.sectionTitle}>3. User Accounts</Text>
          <Text style={styles.contentText}>
            To access certain features of the App, you must create an account. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to provide accurate, current, and complete information during registration.
          </Text>

          <Text style={styles.sectionTitle}>4. Ticket Purchases</Text>
          <Text style={styles.contentText}>
            All ticket purchases are final unless otherwise specified by the event organizer. Tickme acts as a marketplace and is not responsible for event cancellations, changes, or refunds unless required by applicable law. Refund policies vary by event organizer.
          </Text>

          <Text style={styles.sectionTitle}>5. Prohibited Uses</Text>
          <Text style={styles.contentText}>
            You may not use the App for any unlawful purpose or to solicit others to perform unlawful acts. Prohibited activities include but are not limited to:
            {'\n'}• Violating any local, state, national, or international law
            {'\n'}• Infringing upon intellectual property rights
            {'\n'}• Harassing, abusing, or harming other users
            {'\n'}• Transmitting viruses or malicious code
            {'\n'}• Attempting to gain unauthorized access to the App
          </Text>

          <Text style={styles.sectionTitle}>6. Privacy Policy</Text>
          <Text style={styles.contentText}>
            Your privacy is important to us. Our Privacy Policy explains how we collect, use, and protect your information when you use our App. By using our App, you agree to the collection and use of information in accordance with our Privacy Policy.
          </Text>

          <Text style={styles.sectionTitle}>7. Intellectual Property</Text>
          <Text style={styles.contentText}>
            The App and its original content, features, and functionality are owned by Tickme and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
          </Text>

          <Text style={styles.sectionTitle}>8. Limitation of Liability</Text>
          <Text style={styles.contentText}>
            In no event shall Tickme, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your use of the App.
          </Text>

          <Text style={styles.sectionTitle}>9. Termination</Text>
          <Text style={styles.contentText}>
            We may terminate or suspend your account and bar access to the App immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever and without limitation, including but not limited to a breach of the Terms.
          </Text>

          <Text style={styles.sectionTitle}>10. Changes to Terms</Text>
          <Text style={styles.contentText}>
            We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days notice prior to any new terms taking effect.
          </Text>

          <Text style={styles.sectionTitle}>11. Contact Information</Text>
          <Text style={styles.contentText}>
            If you have any questions about these Terms of Use, please contact us at:
            {'\n'}Email: legal@tickme.com
            {'\n'}Address: 123 Event Street, City, State 12345
          </Text>

          <Text style={styles.sectionTitle}>12. Governing Law</Text>
          <Text style={styles.contentText}>
            These Terms shall be interpreted and governed by the laws of the jurisdiction in which Tickme operates, without regard to its conflict of law provisions.
          </Text>
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
  lastUpdated: {
    fontSize: 14,
    color: '#666666',
    fontStyle: 'italic',
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333333',
    marginTop: 20,
    marginBottom: 12,
  },
  contentText: {
    fontSize: 14,
    color: '#666666',
    lineHeight: 22,
    marginBottom: 8,
  },
});
