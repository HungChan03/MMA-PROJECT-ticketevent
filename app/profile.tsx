import { useTheme } from '@/contexts/ThemeContext';
import { router } from 'expo-router';
import React from 'react';
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const { width, height } = Dimensions.get('window');

export default function ProfileScreen() {
  const { isDark } = useTheme();

  const handleBackPress = () => {
    router.back();
  };

  const handleEditProfile = () => {
    router.push('/edit-profile');
  };

  const handleHelpSupport = () => {
    router.push('/help-support');
  };

  const handleTermsOfUse = () => {
    router.push('/terms-of-use');
  };

  const handleLogout = () => {
    router.push('/login');
  };

  return (
    <View style={[styles.container, isDark && styles.containerDark]}>
      {/* Header */}
      <View style={[styles.header, isDark && styles.headerDark]}>
        <TouchableOpacity style={styles.backButton} onPress={handleBackPress}>
          <Text style={[styles.backIcon, isDark && styles.textDark]}>←</Text>
        </TouchableOpacity>
        <Text style={[styles.headerTitle, isDark && styles.textDark]}>Profile</Text>
      </View>

      {/* User Profile Section */}
      <TouchableOpacity style={[styles.profileSection, isDark && styles.sectionDark]} onPress={handleEditProfile}>
        <View style={styles.profileInfo}>
          <View style={styles.avatarContainer}>
            <View style={styles.avatar}>
              <Text style={styles.avatarText}>👤</Text>
            </View>
          </View>
          <View style={styles.userInfo}>
            <Text style={[styles.userName, isDark && styles.textDark]}>Rony Amanda</Text>
            <Text style={[styles.userEmail, isDark && styles.textSecondaryDark]}>Ronnyamanda@gmail.com</Text>
          </View>
          <View style={styles.editArrow}>
            <Text style={[styles.arrowIcon, isDark && styles.textDark]}>→</Text>
          </View>
        </View>
      </TouchableOpacity>

      {/* Divider */}
      <View style={[styles.divider, isDark && styles.dividerDark]} />

      {/* Support Section */}
      <View style={[styles.section, isDark && styles.sectionDark]}>
        <TouchableOpacity style={styles.menuItem} onPress={handleHelpSupport}>
          <View style={styles.menuItemLeft}>
            <Text style={styles.menuIcon}>💬</Text>
            <Text style={[styles.menuText, isDark && styles.textDark]}>Help & Support</Text>
          </View>
          <Text style={[styles.arrowIcon, isDark && styles.textDark]}>→</Text>
        </TouchableOpacity>
      </View>

      {/* Divider */}
      <View style={[styles.divider, isDark && styles.dividerDark]} />

      {/* Legal Section */}
      <View style={[styles.section, isDark && styles.sectionDark]}>
        <TouchableOpacity style={styles.menuItem} onPress={handleTermsOfUse}>
          <View style={styles.menuItemLeft}>
            <Text style={[styles.menuText, isDark && styles.textDark]}>Term of Use</Text>
          </View>
          <Text style={[styles.arrowIcon, isDark && styles.textDark]}>→</Text>
        </TouchableOpacity>
      </View>

      {/* Divider */}
      <View style={[styles.divider, isDark && styles.dividerDark]} />

      {/* Logout Button */}
      <View style={styles.logoutContainer}>
        <TouchableOpacity style={[styles.logoutButton, isDark && styles.logoutButtonDark]} onPress={handleLogout}>
          <Text style={[styles.logoutText, isDark && styles.logoutTextDark]}>Log Out</Text>
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
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333333',
  },
  profileSection: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  profileInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatarContainer: {
    marginRight: 16,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#E0E0E0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarText: {
    fontSize: 24,
    color: '#666666',
  },
  userInfo: {
    flex: 1,
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 4,
  },
  userEmail: {
    fontSize: 14,
    color: '#666666',
  },
  editArrow: {
    marginLeft: 16,
  },
  arrowIcon: {
    fontSize: 18,
    color: '#666666',
  },
  divider: {
    height: 1,
    backgroundColor: '#E0E0E0',
  },
  section: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 16,
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
  },
  logoutContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  logoutButton: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#FF6B6B',
    borderRadius: 8,
    paddingVertical: 16,
    alignItems: 'center',
  },
  logoutText: {
    fontSize: 16,
    color: '#FF6B6B',
    fontWeight: '600',
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
  textSecondaryDark: {
    color: '#9CA3AF', // Lighter grey for secondary text
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
