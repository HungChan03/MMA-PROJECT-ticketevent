import { useTheme } from '@/contexts/ThemeContext';
import { router } from 'expo-router';
import React, { useState } from 'react';
import { Dimensions, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const { width, height } = Dimensions.get('window');

export default function HomeScreen() {
  const [searchText, setSearchText] = useState('');
  const { isDark } = useTheme();

  const handleSearchPress = () => {
    router.push('/search');
  };

  const handleLocationPress = () => {
    router.push('/events');
  };

  const handleCategoryPress = (categoryName: string) => {
    // Navigate to events screen with selected category
    router.push({
      pathname: '/events',
      params: { category: categoryName }
    });
  };

  const eventCategories = [
    { id: 1, name: 'Business', icon: '💼', color: '#8B4513' },
    { id: 2, name: 'Community', icon: '❤️', color: '#FFD700' },
    { id: 3, name: 'Music', icon: '🎵', color: '#FF6B6B' },
    { id: 4, name: 'Art', icon: '🎨', color: '#4ECDC4' },
    { id: 5, name: 'Sports', icon: '⚽', color: '#45B7D1' },
    { id: 6, name: 'Education', icon: '📚', color: '#96CEB4' },
  ];

  return (
    <View style={[styles.container, isDark && styles.containerDark]}>
      {/* Welcome Section */}
      <View style={styles.welcomeSection}>
        <View style={styles.welcomeText}>
          <Text style={[styles.welcomeTitle, isDark && styles.textDark]}>Welcome back!</Text>
          <Text style={[styles.userName, isDark && styles.textSecondaryDark]}>Chan Hung</Text>
        </View>
        <TouchableOpacity style={styles.profileImage} onPress={() => router.push('/profile')}>
          <View style={styles.profilePlaceholder}>
            <Text style={styles.profileIcon}>👤</Text>
          </View>
        </TouchableOpacity>
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <TouchableOpacity style={[styles.searchBar, isDark && styles.searchBarDark]} onPress={handleSearchPress}>
          <Text style={styles.searchIcon}>🔍</Text>
          <Text style={[styles.searchPlaceholder, isDark && styles.textSecondaryDark]}>Music event, Webinars...</Text>
        </TouchableOpacity>
      </View>

      {/* Event Categories */}
      <View style={styles.categoriesSection}>
        <Text style={[styles.sectionTitle, isDark && styles.textDark]}>Event Categories</Text>
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false}
          style={styles.categoriesScroll}
          contentContainerStyle={styles.categoriesContainer}
        >
          {eventCategories.map((category) => (
            <TouchableOpacity 
              key={category.id} 
              style={styles.categoryCard}
              onPress={() => handleCategoryPress(category.name)}
            >
              <View style={[styles.categoryIcon, { backgroundColor: category.color }]}>
                <Text style={styles.categoryIconText}>{category.icon}</Text>
              </View>
              <Text style={[styles.categoryName, isDark && styles.textDark]}>{category.name}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Bottom Navigation */}
      <View style={styles.bottomNavigation}>
        <TouchableOpacity style={styles.navItem}>
          <View style={[styles.navIconContainer, styles.activeNavIconContainer]}>
            <Image source={require('@/assets/images/home.png')} style={styles.navIconImage} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={handleLocationPress}>
          <View style={styles.navIconContainer}>
            <Image source={require('@/assets/images/location.png')} style={styles.navIconImage} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => router.push('/my-ticket')}>
          <View style={styles.navIconContainer}>
            <Image source={require('@/assets/images/ticket.png')} style={styles.navIconImage} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => router.push('/settings')}>
          <View style={styles.navIconContainer}>
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
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
  },
  welcomeSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 60,
    marginBottom: 30,
  },
  welcomeText: {
    flex: 1,
  },
  welcomeTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 4,
  },
  userName: {
    fontSize: 16,
    color: '#666666',
  },
  profileImage: {
    marginLeft: 16,
  },
  profilePlaceholder: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#E0E0E0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileIcon: {
    fontSize: 24,
    color: '#666666',
  },
  searchContainer: {
    marginBottom: 30,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  searchIcon: {
    fontSize: 18,
    marginRight: 12,
    color: '#666666',
  },
  searchPlaceholder: {
    flex: 1,
    fontSize: 16,
    color: '#999999',
  },
  categoriesSection: {
    flex: 1,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 16,
  },
  categoriesScroll: {
    flexGrow: 0,
  },
  categoriesContainer: {
    paddingRight: 20,
  },
  categoryCard: {
    alignItems: 'center',
    marginRight: 20,
    minWidth: 80,
  },
  categoryIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  categoryIconText: {
    fontSize: 20,
  },
  categoryName: {
    fontSize: 14,
    color: '#333333',
    textAlign: 'center',
    fontWeight: '500',
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
  navIconImage: {
    width: 24,
    height: 24,
    tintColor: '#999999',
  },
  navIconText: {
    fontSize: 20,
    color: '#999999',
  },
  // Dark Mode Styles
  containerDark: {
    backgroundColor: '#1E1B4B', // Dark indigo background
  },
  textDark: {
    color: '#E5E7EB', // Light grey for primary text
  },
  textSecondaryDark: {
    color: '#9CA3AF', // Lighter grey for secondary text
  },
  searchBarDark: {
    backgroundColor: '#312E81', // Dark background for search bar
  },
});
