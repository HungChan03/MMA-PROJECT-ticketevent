import { router } from 'expo-router';
import React, { useState } from 'react';
import { Dimensions, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const { width, height } = Dimensions.get('window');

export default function SearchScreen() {
  const [searchText, setSearchText] = useState('');
  const [recentSearches, setRecentSearches] = useState([
    'Music Event',
    'Design Conference', 
    'UI UX Webinars',
    'Adam Levine Concert'
  ]);

  const recentViews = [
    {
      id: 1,
      title: 'Artistics Museum 2022',
      organizer: 'Wonderwood',
      date: 'Feb 12 2022',
      participants: '2k participant',
      image: '🎨'
    },
    {
      id: 2,
      title: 'Tech Conference 2022',
      organizer: 'TechCorp',
      date: 'Mar 15 2022',
      participants: '1.5k participant',
      image: '💻'
    },
    {
      id: 3,
      title: 'Music Festival',
      organizer: 'SoundWave',
      date: 'Apr 20 2022',
      participants: '5k participant',
      image: '🎵'
    }
  ];

  const handleBack = () => {
    router.back();
  };

  const handleSearch = (query: string) => {
    if (query.trim()) {
      // Add to recent searches if not already exists
      if (!recentSearches.includes(query)) {
        setRecentSearches([query, ...recentSearches.slice(0, 3)]);
      }
      setSearchText(query);
      // Here you would perform the actual search
      console.log('Searching for:', query);
    }
  };

  const removeRecentSearch = (index: number) => {
    setRecentSearches(recentSearches.filter((_, i) => i !== index));
  };

  return (
    <View style={styles.container}>
      {/* Search Bar */}
      <View style={styles.searchBarContainer}>
        <TouchableOpacity style={styles.backButton} onPress={handleBack}>
          <Text style={styles.backIcon}>←</Text>
        </TouchableOpacity>
        <View style={styles.searchBar}>
          <TextInput
            style={styles.searchInput}
            placeholder="Music event, Webinars..."
            value={searchText}
            onChangeText={setSearchText}
            placeholderTextColor="#999999"
            onSubmitEditing={() => handleSearch(searchText)}
            autoFocus
          />
        </View>
        <TouchableOpacity style={styles.filterButton}>
          <Text style={styles.filterIcon}>⚙️</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Recent Search Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Recent Search</Text>
          {recentSearches.map((search, index) => (
            <TouchableOpacity 
              key={index} 
              style={styles.recentSearchItem}
              onPress={() => handleSearch(search)}
            >
              <Text style={styles.clockIcon}>🕐</Text>
              <Text style={styles.searchText}>{search}</Text>
              <TouchableOpacity 
                style={styles.removeButton}
                onPress={() => removeRecentSearch(index)}
              >
                <Text style={styles.removeIcon}>✕</Text>
              </TouchableOpacity>
            </TouchableOpacity>
          ))}
        </View>

        {/* Recent View Section */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Recent View</Text>
            <TouchableOpacity>
              <Text style={styles.seeMoreText}>See more</Text>
            </TouchableOpacity>
          </View>
          
          <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false}
            style={styles.recentViewScroll}
            contentContainerStyle={styles.recentViewContainer}
          >
            {recentViews.map((event) => (
              <TouchableOpacity key={event.id} style={styles.eventCard}>
                <View style={styles.eventImage}>
                  <Text style={styles.eventImageIcon}>{event.image}</Text>
                </View>
                <View style={styles.eventBadge}>
                  <Text style={styles.badgeText}>{event.participants}</Text>
                </View>
                <TouchableOpacity style={styles.heartButton}>
                  <Text style={styles.heartIcon}>❤️</Text>
                </TouchableOpacity>
                <View style={styles.eventInfo}>
                  <Text style={styles.eventTitle}>{event.title}</Text>
                  <View style={styles.eventDetails}>
                    <View style={styles.organizerInfo}>
                      <Text style={styles.organizerIcon}>👤</Text>
                      <Text style={styles.organizerName}>{event.organizer}</Text>
                    </View>
                    <Text style={styles.eventDate}>{event.date}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNavigation}>
        <TouchableOpacity style={styles.navItem}>
          <View style={styles.navIconContainer}>
            <Image source={require('@/assets/images/home.png')} style={styles.navIconImage} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <View style={[styles.navIconContainer, styles.activeNavIconContainer]}>
            <Text style={styles.navIconText}>👁️</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <View style={styles.navIconContainer}>
            <Text style={styles.navIconText}>🧩</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
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
  },
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 60,
    paddingBottom: 20,
    backgroundColor: '#FFFFFF',
  },
  backButton: {
    marginRight: 12,
  },
  backIcon: {
    fontSize: 24,
    color: '#333333',
  },
  searchBar: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  searchInput: {
    fontSize: 16,
    color: '#333333',
  },
  filterButton: {
    marginLeft: 12,
  },
  filterIcon: {
    fontSize: 20,
    color: '#666666',
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  section: {
    marginBottom: 30,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333333',
  },
  seeMoreText: {
    fontSize: 16,
    color: '#4A90E2',
    fontWeight: '600',
  },
  recentSearchItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: '#F9F9F9',
    borderRadius: 8,
    marginBottom: 8,
  },
  clockIcon: {
    fontSize: 16,
    color: '#999999',
    marginRight: 12,
  },
  searchText: {
    flex: 1,
    fontSize: 16,
    color: '#333333',
  },
  removeButton: {
    padding: 4,
  },
  removeIcon: {
    fontSize: 16,
    color: '#999999',
  },
  recentViewScroll: {
    flexGrow: 0,
  },
  recentViewContainer: {
    paddingRight: 20,
  },
  eventCard: {
    width: 200,
    marginRight: 16,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  eventImage: {
    height: 120,
    backgroundColor: '#E0E0E0',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  eventImageIcon: {
    fontSize: 40,
  },
  eventBadge: {
    position: 'absolute',
    top: 12,
    left: 12,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  badgeText: {
    fontSize: 12,
    color: '#333333',
    fontWeight: '600',
  },
  heartButton: {
    position: 'absolute',
    top: 12,
    right: 12,
    padding: 4,
  },
  heartIcon: {
    fontSize: 16,
  },
  eventInfo: {
    padding: 12,
  },
  eventTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 8,
  },
  eventDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  organizerInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  organizerIcon: {
    fontSize: 12,
    marginRight: 4,
  },
  organizerName: {
    fontSize: 12,
    color: '#666666',
  },
  eventDate: {
    fontSize: 12,
    color: '#666666',
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
});
