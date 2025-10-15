import { useTheme } from '@/contexts/ThemeContext';
import { router } from 'expo-router';
import React from 'react';
import { Dimensions, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const { width, height } = Dimensions.get('window');

export default function SettingsScreen() {
  const { theme, toggleTheme, isDark } = useTheme();

  const handleBackPress = () => {
    router.back();
  };

  const handleAccountPress = () => {
    router.push('/profile');
  };

  const handleMyTicketsPress = () => {
    router.push('/my-ticket');
  };

  const handleSecurityPress = () => {
    router.push('/change-password');
  };

  const handleHelpSupportPress = () => {
    router.push('/help-support');
  };

  const handleAboutPress = () => {
    router.push('/about');
  };

  const handleTermsOfUsePress = () => {
    router.push('/terms-of-use');
  };

  return (
    <View style={[styles.container, isDark && styles.containerDark]}>
      {/* Header */}
      <View style={[styles.header, isDark && styles.headerDark]}>
        <TouchableOpacity style={styles.backButton} onPress={handleBackPress}>
          <Text style={[styles.backIcon, isDark && styles.textDark]}>←</Text>
        </TouchableOpacity>
        <Text style={[styles.headerTitle, isDark && styles.textDark]}>Settings</Text>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Main Settings Section */}
        <View style={[styles.section, isDark && styles.sectionDark]}>
          <TouchableOpacity style={styles.menuItem} onPress={handleAccountPress}>
            <Text style={[styles.menuText, isDark && styles.textDark]}>Account</Text>
            <Text style={[styles.arrowIcon, isDark && styles.textDark]}>→</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem} onPress={handleMyTicketsPress}>
            <Text style={[styles.menuText, isDark && styles.textDark]}>My Tickets</Text>
            <Text style={[styles.arrowIcon, isDark && styles.textDark]}>→</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem} onPress={handleSecurityPress}>
            <Text style={[styles.menuText, isDark && styles.textDark]}>Security</Text>
            <Text style={[styles.arrowIcon, isDark && styles.textDark]}>→</Text>
          </TouchableOpacity>
        </View>

        {/* Divider */}
        <View style={[styles.divider, isDark && styles.dividerDark]} />

        {/* Preferences Section */}
        <View style={[styles.section, isDark && styles.sectionDark]}>
          <TouchableOpacity style={styles.menuItem} onPress={toggleTheme}>
            <View style={styles.menuItemLeft}>
              <Text style={styles.menuIcon}>{isDark ? '🌙' : '☀️'}</Text>
              <Text style={[styles.menuText, isDark && styles.textDark]}>Dark Mode</Text>
            </View>
            <View style={[styles.toggleSwitch, isDark && styles.toggleSwitchActive]}>
              <View style={[styles.toggleThumb, isDark && styles.toggleThumbActive]} />
            </View>
          </TouchableOpacity>
        </View>

        {/* Divider */}
        <View style={[styles.divider, isDark && styles.dividerDark]} />

        {/* Support Section */}
        <View style={[styles.section, isDark && styles.sectionDark]}>
          <TouchableOpacity style={styles.menuItem} onPress={handleHelpSupportPress}>
            <View style={styles.menuItemLeft}>
              <Text style={styles.menuIcon}>💬</Text>
              <Text style={[styles.menuText, isDark && styles.textDark]}>Help & Support</Text>
            </View>
            <Text style={[styles.arrowIcon, isDark && styles.textDark]}>→</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem} onPress={handleAboutPress}>
            <View style={styles.menuItemLeft}>
              <Text style={styles.menuIcon}>ℹ️</Text>
              <Text style={[styles.menuText, isDark && styles.textDark]}>About</Text>
            </View>
            <Text style={[styles.arrowIcon, isDark && styles.textDark]}>→</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem} onPress={handleTermsOfUsePress}>
            <Text style={[styles.menuText, isDark && styles.textDark]}>Term of Use</Text>
            <Text style={[styles.arrowIcon, isDark && styles.textDark]}>→</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNavigation}>
        <TouchableOpacity style={styles.navItem} onPress={() => router.push('/home')}>
          <View style={styles.navIconContainer}>
            <Image source={require('@/assets/images/home.png')} style={styles.navIconImage} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => router.push('/events')}>
          <View style={styles.navIconContainer}>
            <Image source={require('@/assets/images/location.png')} style={styles.navIconImage} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => router.push('/my-ticket')}>
          <View style={styles.navIconContainer}>
            <Image source={require('@/assets/images/ticket.png')} style={styles.navIconImage} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <View style={[styles.navIconContainer, styles.activeNavIconContainer]}>
            <Text style={styles.navIconText}>⚙️</Text>
          </View>
        </TouchableOpacity>
      </View>
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
    fontSize: 24,
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
    marginVertical: 10,
    paddingVertical: 8,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  menuItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuIcon: {
    fontSize: 18,
    marginRight: 12,
  },
  menuText: {
    fontSize: 16,
    color: '#333333',
    fontWeight: '500',
  },
  arrowIcon: {
    fontSize: 18,
    color: '#666666',
  },
  divider: {
    height: 1,
    backgroundColor: '#E0E0E0',
    marginVertical: 10,
  },
  bottomNavigation: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
  },
  navItem: {
    alignItems: 'center',
    paddingVertical: 8,
  },
  navIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  activeNavIconContainer: {
    backgroundColor: '#4A90E2',
  },
  navIconText: {
    fontSize: 20,
    color: '#999999',
  },
  navIconImage: {
    width: 24,
    height: 24,
    tintColor: '#999999',
  },
  // Toggle Switch Styles
  toggleSwitch: {
    width: 50,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#E0E0E0',
    justifyContent: 'center',
    paddingHorizontal: 2,
  },
  toggleSwitchActive: {
    backgroundColor: '#4A90E2',
  },
  toggleThumb: {
    width: 26,
    height: 26,
    borderRadius: 13,
    backgroundColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  toggleThumbActive: {
    transform: [{ translateX: 20 }],
  },
  // Dark Mode Styles
  containerDark: {
    backgroundColor: '#1E1B4B', // Dark indigo background
  },
  headerDark: {
    backgroundColor: '#312E81', // Slightly lighter indigo for header
  },
  sectionDark: {
    backgroundColor: '#312E81', // Slightly lighter indigo for cards
  },
  textDark: {
    color: '#E5E7EB', // Light grey for primary text
  },
  dividerDark: {
    backgroundColor: '#4B5563', // Darker grey for dividers
  },
  logoutButtonDark: {
    backgroundColor: '#312E81', // Dark background for logout button
    borderColor: '#EC4899', // Pink border for logout button
  },
  logoutTextDark: {
    color: '#EC4899', // Pink text for logout button
  },
});
