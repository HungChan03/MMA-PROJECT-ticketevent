import { useTheme } from '@/contexts/ThemeContext';
import { router, useLocalSearchParams } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { Dimensions, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const { width, height } = Dimensions.get('window');

export default function EventsScreen() {
  const [searchText, setSearchText] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const { category } = useLocalSearchParams();
  const { isDark } = useTheme();

  // Set initial category from navigation params
  useEffect(() => {
    if (category && typeof category === 'string') {
      setSelectedCategory(category);
    }
  }, [category]);

  // Mock data based on your Event model
  const events = [
    {
      _id: '1',
      title: 'Artistics Museum 2022',
      description: 'A spectacular art exhibition featuring contemporary works',
      posterUrl: 'https://example.com/poster1.jpg',
      venue: {
        name: 'Art Gallery',
        address: '123 Art Street',
        city: 'Ho Chi Minh City',
        country: 'Vietnam'
      },
      startDate: new Date('2024-02-12'),
      endDate: new Date('2024-02-15'),
      capacity: 2000,
      categories: ['Art', 'Culture'],
      ticketTypes: [
        { name: 'General', price: 50000, quantity: 1500, sold: 1200 },
        { name: 'VIP', price: 100000, quantity: 500, sold: 300 }
      ],
      status: 'approved',
      organizer: 'Wonderwood'
    },
    {
      _id: '2',
      title: 'Tech Conference 2024',
      description: 'Latest technology trends and innovations',
      posterUrl: 'https://example.com/poster2.jpg',
      venue: {
        name: 'Convention Center',
        address: '456 Tech Avenue',
        city: 'Hanoi',
        country: 'Vietnam'
      },
      startDate: new Date('2024-03-15'),
      endDate: new Date('2024-03-17'),
      capacity: 1500,
      categories: ['Technology', 'Business'],
      ticketTypes: [
        { name: 'Early Bird', price: 200000, quantity: 500, sold: 450 },
        { name: 'Regular', price: 300000, quantity: 1000, sold: 600 }
      ],
      status: 'approved',
      organizer: 'TechCorp'
    },
    {
      _id: '3',
      title: 'Music Festival 2024',
      description: 'Annual music festival with top artists',
      posterUrl: 'https://example.com/poster3.jpg',
      venue: {
        name: 'Music Park',
        address: '789 Music Road',
        city: 'Da Nang',
        country: 'Vietnam'
      },
      startDate: new Date('2024-04-20'),
      endDate: new Date('2024-04-22'),
      capacity: 5000,
      categories: ['Music', 'Entertainment'],
      ticketTypes: [
        { name: 'Single Day', price: 150000, quantity: 3000, sold: 2500 },
        { name: 'Full Pass', price: 400000, quantity: 2000, sold: 1800 }
      ],
      status: 'approved',
      organizer: 'SoundWave'
    },
    {
      _id: '4',
      title: 'Community Health Fair',
      description: 'Free health checkups and wellness activities',
      posterUrl: 'https://example.com/poster4.jpg',
      venue: {
        name: 'Community Center',
        address: '321 Health Ave',
        city: 'Ho Chi Minh City',
        country: 'Vietnam'
      },
      startDate: new Date('2024-05-10'),
      endDate: new Date('2024-05-10'),
      capacity: 500,
      categories: ['Community', 'Health'],
      ticketTypes: [
        { name: 'Free Entry', price: 0, quantity: 500, sold: 300 }
      ],
      status: 'approved',
      organizer: 'HealthFirst'
    },
    {
      _id: '5',
      title: 'Football Championship',
      description: 'Annual football tournament',
      posterUrl: 'https://example.com/poster5.jpg',
      venue: {
        name: 'Sports Stadium',
        address: '654 Sports Blvd',
        city: 'Hanoi',
        country: 'Vietnam'
      },
      startDate: new Date('2024-06-15'),
      endDate: new Date('2024-06-20'),
      capacity: 10000,
      categories: ['Sports', 'Entertainment'],
      ticketTypes: [
        { name: 'General', price: 100000, quantity: 8000, sold: 6000 },
        { name: 'VIP', price: 300000, quantity: 2000, sold: 1500 }
      ],
      status: 'approved',
      organizer: 'SportsVietnam'
    }
  ];

  const categories = [
    { name: 'All Categories', icon: '🎯' },
    { name: 'Business', icon: '💼' },
    { name: 'Community', icon: '❤️' },
    { name: 'Music', icon: '🎵' },
    { name: 'Art', icon: '🎨' },
    { name: 'Sports', icon: '⚽' },
    { name: 'Education', icon: '📚' },
    { name: 'Technology', icon: '💻' },
    { name: 'Culture', icon: '🏛️' }
  ];

  const handleSearch = () => {
    // Search is handled by filteredEvents automatically when searchText changes
    console.log('Searching for:', searchText);
  };

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
  };

  const getTotalParticipants = (event: any) => {
    return event.ticketTypes.reduce((total: number, ticketType: any) => total + ticketType.sold, 0);
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric', 
      year: 'numeric' 
    });
  };

  const filteredEvents = events.filter(event => {
    // Filter by category
    const matchesCategory = selectedCategory === 'All Categories' || event.categories.includes(selectedCategory);
    
    // Filter by search text
    const matchesSearch = searchText === '' || 
      event.title.toLowerCase().includes(searchText.toLowerCase()) ||
      event.description.toLowerCase().includes(searchText.toLowerCase()) ||
      event.organizer.toLowerCase().includes(searchText.toLowerCase()) ||
      event.venue.name.toLowerCase().includes(searchText.toLowerCase()) ||
      event.venue.city.toLowerCase().includes(searchText.toLowerCase());
    
    return matchesCategory && matchesSearch;
  });

  return (
    <View style={[styles.container, isDark && styles.containerDark]}>
      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <View style={[styles.searchBar, isDark && styles.searchBarDark]}>
          <Text style={styles.searchIcon}>🔍</Text>
          <TextInput
            style={[styles.searchInput, isDark && styles.textDark]}
            placeholder="Music event, Webinars..."
            value={searchText}
            onChangeText={setSearchText}
            placeholderTextColor={isDark ? "#9CA3AF" : "#999999"}
            onSubmitEditing={handleSearch}
            returnKeyType="search"
            autoCorrect={false}
            autoCapitalize="none"
          />
          {searchText.length > 0 && (
            <TouchableOpacity 
              style={styles.clearButton}
              onPress={() => setSearchText('')}
            >
              <Text style={styles.clearIcon}>✕</Text>
            </TouchableOpacity>
          )}
        </View>
        <TouchableOpacity 
          style={styles.filterButton}
          onPress={() => router.push('/profile')}
        >
          <Text style={styles.filterIcon}>👤</Text>
        </TouchableOpacity>
      </View>

      {/* Category Filters - Compact Design */}
      <View style={styles.categoriesWrapper}>
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false}
          style={styles.categoriesScroll}
          contentContainerStyle={styles.categoriesContent}
        >
          {categories.map((category) => (
            <TouchableOpacity
              key={category.name}
              style={[
                styles.compactCategoryButton,
                selectedCategory === category.name && styles.compactActiveButton
              ]}
              onPress={() => handleCategorySelect(category.name)}
            >
              <Text style={styles.compactIcon}>{category.icon}</Text>
              <Text style={[
                styles.compactText,
                selectedCategory === category.name && styles.compactActiveText,
                isDark && !(selectedCategory === category.name) && styles.textDark
              ]}>
                {category.name}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Events List */}
      <ScrollView style={styles.eventsContainer} showsVerticalScrollIndicator={false}>
        {filteredEvents.map((event) => (
          <View key={event._id} style={[styles.eventCard, isDark && styles.eventCardDark]}>
            {/* Event Image */}
            <View style={styles.eventImageContainer}>
              <View style={styles.eventImagePlaceholder}>
                <Text style={styles.eventImageIcon}>🎨</Text>
              </View>
              
              {/* Participant Badge */}
              <View style={styles.participantBadge}>
                <Text style={styles.badgeText}>{getTotalParticipants(event)}k participant</Text>
              </View>
              
              {/* Heart Icon */}
              <TouchableOpacity style={styles.heartButton}>
                <Text style={styles.heartIcon}>🤍</Text>
              </TouchableOpacity>
            </View>

            {/* Event Info */}
            <View style={styles.eventInfo}>
              <Text style={[styles.eventTitle, isDark && styles.textDark]}>{event.title}</Text>
              
              <View style={styles.eventDetails}>
                <View style={styles.organizerInfo}>
                  <Text style={styles.organizerIcon}>👤</Text>
                  <Text style={[styles.organizerName, isDark && styles.textSecondaryDark]}>{event.organizer}</Text>
                </View>
                <Text style={[styles.eventDate, isDark && styles.textSecondaryDark]}>{formatDate(event.startDate)}</Text>
              </View>

              {/* Venue Info */}
              <View style={styles.venueInfo}>
                <Text style={styles.venueIcon}>📍</Text>
                <Text style={[styles.venueText, isDark && styles.textSecondaryDark]}>{event.venue.name}, {event.venue.city}</Text>
              </View>

              {/* Ticket Types */}
              <View style={styles.ticketTypesContainer}>
                {event.ticketTypes.slice(0, 2).map((ticketType: any, index: number) => (
                  <View key={index} style={styles.ticketTypeBadge}>
                    <Text style={styles.ticketTypeText}>
                      {ticketType.name}: {ticketType.price.toLocaleString()}đ
                    </Text>
                  </View>
                ))}
              </View>
            </View>
          </View>
        ))}
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNavigation}>
        <TouchableOpacity style={styles.navItem} onPress={() => router.push('/home')}>
          <View style={styles.navIconContainer}>
            <Image source={require('@/assets/images/home.png')} style={styles.navIconImage} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <View style={[styles.navIconContainer, styles.activeNavIconContainer]}>
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
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 60,
    paddingBottom: 20,
    backgroundColor: '#FFFFFF',
  },
  searchBar: {
    flex: 1,
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
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#333333',
  },
  clearButton: {
    padding: 8,
    marginLeft: 8,
  },
  clearIcon: {
    fontSize: 16,
    color: '#999999',
  },
  filterButton: {
    marginLeft: 12,
    padding: 8,
  },
  filterIcon: {
    fontSize: 20,
    color: '#666666',
  },
  // Compact Category Styles
  categoriesWrapper: {
    paddingHorizontal: 15,
    paddingVertical: 8,
    backgroundColor: '#F8F9FA',
  },
  categoriesScroll: {
    flexGrow: 0,
  },
  categoriesContent: {
    paddingRight: 15,
  },
  compactCategoryButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 8,
    backgroundColor: '#FFFFFF',
    borderWidth: 0.5,
    borderColor: '#E5E5E5',
    marginRight: 3,
    height: 20,
  },
  compactActiveButton: {
    backgroundColor: '#4A90E2',
    borderColor: '#4A90E2',
  },
  compactIcon: {
    fontSize: 6,
    marginRight: 1,
  },
  compactText: {
    fontSize: 9,
    color: '#666666',
    fontWeight: '400',
  },
  compactActiveText: {
    color: '#FFFFFF',
  },
  eventsContainer: {
    flex: 1,
    paddingHorizontal: 20,
  },
  eventCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  eventImageContainer: {
    height: 200,
    backgroundColor: '#E0E0E0',
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  eventImagePlaceholder: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#C0C0C0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  eventImageIcon: {
    fontSize: 40,
  },
  participantBadge: {
    position: 'absolute',
    top: 12,
    left: 12,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    zIndex: 1,
  },
  badgeText: {
    fontSize: 12,
    color: '#FFFFFF',
    fontWeight: '600',
  },
  heartButton: {
    position: 'absolute',
    top: 12,
    right: 12,
    padding: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 20,
    zIndex: 1,
  },
  heartIcon: {
    fontSize: 16,
  },
  eventInfo: {
    padding: 16,
  },
  eventTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 8,
  },
  eventDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  organizerInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  organizerIcon: {
    fontSize: 14,
    marginRight: 6,
  },
  organizerName: {
    fontSize: 14,
    color: '#666666',
  },
  eventDate: {
    fontSize: 14,
    color: '#666666',
  },
  venueInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  venueIcon: {
    fontSize: 14,
    marginRight: 6,
    color: '#666666',
  },
  venueText: {
    fontSize: 14,
    color: '#666666',
  },
  ticketTypesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  ticketTypeBadge: {
    backgroundColor: '#F0F0F0',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
    marginRight: 8,
    marginBottom: 4,
  },
  ticketTypeText: {
    fontSize: 12,
    color: '#333333',
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
  searchBarDark: {
    backgroundColor: '#312E81', // Dark background for search bar
  },
  textDark: {
    color: '#E5E7EB', // Light grey for primary text
  },
  textSecondaryDark: {
    color: '#9CA3AF', // Lighter grey for secondary text
  },
  eventCardDark: {
    backgroundColor: '#312E81', // Dark background for event cards
  },
});
