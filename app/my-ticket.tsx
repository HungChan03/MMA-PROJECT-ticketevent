import { useTheme } from '@/contexts/ThemeContext';
import { router } from 'expo-router';
import React, { useState } from 'react';
import { Dimensions, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const { width, height } = Dimensions.get('window');

export default function MyTicketScreen() {
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [selectedTicket, setSelectedTicket] = useState<any>(null);
  const { isDark } = useTheme();

  // Sample ticket data
  const tickets = [
   
    {
      id: '2',
      eventName: 'Art and Revolution',
      venue: 'Orlando stages',
      location: 'Orlando, USA',
      day: 'THU',
      date: '20',
      row: '5',
      seat: '12',
      status: 'General',
      ticketHolder: 'John Doe',
      barcodeData: '987654321098',
      image: '🎭',
      categories: ['Art', 'Culture']
    },
    {
      id: '3',
      eventName: 'Tech Conference 2024',
      venue: 'Convention Center',
      location: 'Hanoi, Vietnam',
      day: 'FRI',
      date: '25',
      row: '8',
      seat: '15',
      status: 'VIP',
      ticketHolder: 'Jane Smith',
      barcodeData: '456789123456',
      image: '💻',
      categories: ['Technology', 'Business']
    },
    {
      id: '4',
      eventName: 'Music Festival 2024',
      venue: 'Music Park',
      location: 'Da Nang, Vietnam',
      day: 'SAT',
      date: '30',
      row: '3',
      seat: '7',
      status: 'General',
      ticketHolder: 'Mike Johnson',
      barcodeData: '789123456789',
      image: '🎵',
      categories: ['Music', 'Entertainment']
    }
  ];

  const categories = [
    { name: 'All Categories', icon: '🎯' },
    { name: 'Art', icon: '🎨' },
    { name: 'Technology', icon: '💻' },
    { name: 'Music', icon: '🎵' },
    { name: 'Business', icon: '💼' },
    { name: 'Culture', icon: '🏛️' }
  ];

  const filteredTickets = selectedCategory === 'All Categories' 
    ? tickets 
    : tickets.filter(ticket => ticket.categories.includes(selectedCategory));

  const handleBackPress = () => {
    if (selectedTicket) {
      setSelectedTicket(null);
    } else {
      router.back();
    }
  };

  const handleTicketPress = (ticket: any) => {
    setSelectedTicket(ticket);
  };

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
  };

  // Single Ticket View
  if (selectedTicket) {
    return (
      <View style={[styles.container, isDark && styles.containerDark]}>
        {/* Header */}
        <View style={[styles.header, isDark && styles.headerDark]}>
          <TouchableOpacity style={styles.backButton} onPress={handleBackPress}>
            <Text style={[styles.backIcon, isDark && styles.textDark]}>←</Text>
          </TouchableOpacity>
          <Text style={[styles.headerTitle, isDark && styles.textDark]}>My Ticket</Text>
        </View>

        {/* Ticket Card */}
        <ScrollView style={styles.ticketContainer} showsVerticalScrollIndicator={false}>
          <View style={styles.ticketCard}>
            <Text style={[styles.eventTitle, isDark && styles.textDark]}>{selectedTicket.eventName}</Text>
            <Text style={[styles.venue, isDark && styles.textSecondaryDark]}>{selectedTicket.venue}</Text>
            <Text style={[styles.location, isDark && styles.textSecondaryDark]}>{selectedTicket.location}</Text>
            <Text style={[styles.eventPlaceLabel, isDark && styles.textDark]}>Event Place</Text>

            {/* Ticket Details */}
            <View style={styles.ticketDetails}>
              <View style={styles.detailItem}>
                <Text style={styles.detailValue}>{selectedTicket.row}</Text>
                <Text style={styles.detailLabel}>Row</Text>
              </View>
              <View style={styles.detailItem}>
                <Text style={styles.detailValue}>{selectedTicket.seat}</Text>
                <Text style={styles.detailLabel}>Seat</Text>
              </View>
              <View style={styles.detailItem}>
                <Text style={styles.detailValue}>{selectedTicket.status}</Text>
                <Text style={styles.detailLabel}>Status</Text>
              </View>
            </View>

            {/* Event Image */}
            <View style={styles.eventImageContainer}>
              <Text style={styles.eventImageIcon}>{selectedTicket.image}</Text>
            </View>

            {/* Barcode */}
            <View style={styles.barcodeContainer}>
              <View style={styles.barcode}>
                <Text style={styles.barcodeText}>||||| ||||| ||||| |||||</Text>
                <Text style={styles.barcodeText}>||||| ||||| ||||| |||||</Text>
                <Text style={styles.barcodeText}>||||| ||||| ||||| |||||</Text>
              </View>
              <Text style={styles.scanMeText}>Scan me</Text>
            </View>
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
          <TouchableOpacity style={styles.navItem}>
            <View style={[styles.navIconContainer, styles.activeNavIconContainer]}>
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

  // Ticket List View
  return (
    <View style={[styles.container, isDark && styles.containerDark]}>
      {/* Header */}
      <View style={[styles.header, isDark && styles.headerDark]}>
        <Text style={[styles.headerTitle, isDark && styles.textDark]}>My Ticket</Text>
      </View>

      {/* Category Filters */}
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
                styles.categoryButton,
                selectedCategory === category.name && styles.activeCategoryButton
              ]}
              onPress={() => handleCategorySelect(category.name)}
            >
              <Text style={styles.categoryIcon}>{category.icon}</Text>
              <Text style={[
                styles.categoryText,
                selectedCategory === category.name && styles.activeCategoryText,
                isDark && !(selectedCategory === category.name) && styles.textDark
              ]}>
                {category.name}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Tickets List */}
      <ScrollView style={styles.ticketsContainer} showsVerticalScrollIndicator={false}>
        {filteredTickets.map((ticket) => (
          <TouchableOpacity 
            key={ticket.id} 
            style={[styles.ticketItem, isDark && styles.ticketItemDark]}
            onPress={() => handleTicketPress(ticket)}
          >
            <View style={styles.ticketLeft}>
              <Text style={[styles.ticketDay, isDark && styles.textDark]}>{ticket.day}</Text>
              <Text style={[styles.ticketDate, isDark && styles.textSecondaryDark]}>{ticket.date}</Text>
            </View>
            
            <View style={styles.ticketMiddle}>
              <Text style={[styles.ticketEventName, isDark && styles.textDark]}>{ticket.eventName}</Text>
              <Text style={[styles.ticketVenue, isDark && styles.textSecondaryDark]}>{ticket.venue}</Text>
            </View>

            <View style={styles.ticketRight}>
              <Text style={styles.arrowIcon}>→</Text>
            </View>

            {/* Mini Ticket Card for some tickets */}
            {ticket.id === '1' && (
              <View style={styles.miniTicketCardContainer}>
                <View style={styles.miniTicketCard}>
                  <View style={styles.miniTicketImage}>
                    <Text style={styles.miniTicketIcon}>{ticket.image}</Text>
                  </View>
                  <View style={styles.miniTicketInfo}>
                    <Text style={styles.miniTicketHolder}>{ticket.ticketHolder}</Text>
                    <View style={styles.miniTicketStatus}>
                      <Text style={styles.miniTicketStatusText}>{ticket.status}</Text>
                    </View>
                  </View>
                  <View style={styles.miniBarcode}>
                    <Text style={styles.miniBarcodeText}>||||| |||||</Text>
                  </View>
                </View>
              </View>
            )}
          </TouchableOpacity>
        ))}
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
        <TouchableOpacity style={styles.navItem}>
          <View style={[styles.navIconContainer, styles.activeNavIconContainer]}>
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
  categoryButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E0E0E0',
    marginRight: 8,
  },
  activeCategoryButton: {
    backgroundColor: '#4A90E2',
    borderColor: '#4A90E2',
  },
  categoryIcon: {
    fontSize: 12,
    marginRight: 6,
  },
  categoryText: {
    fontSize: 14,
    color: '#666666',
    fontWeight: '500',
  },
  activeCategoryText: {
    color: '#FFFFFF',
  },
  ticketsContainer: {
    flex: 1,
    paddingHorizontal: 20,
  },
  ticketItem: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
    position: 'relative',
    minHeight: 80,
  },
  ticketLeft: {
    alignItems: 'center',
    marginRight: 16,
  },
  ticketDay: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#4A90E2',
  },
  ticketDate: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#4A90E2',
  },
  ticketMiddle: {
    flex: 1,
  },
  ticketEventName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 4,
  },
  ticketVenue: {
    fontSize: 14,
    color: '#666666',
  },
  ticketRight: {
    marginLeft: 16,
  },
  arrowIcon: {
    fontSize: 18,
    color: '#666666',
  },
  miniTicketCardContainer: {
    position: 'absolute',
    right: 8,
    top: 8,
    zIndex: 10,
  },
  miniTicketCard: {
    backgroundColor: '#F8F9FA',
    borderRadius: 8,
    padding: 6,
    flexDirection: 'row',
    alignItems: 'center',
    width: 100,
    maxWidth: 100,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  miniTicketImage: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#E0E0E0',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 6,
  },
  miniTicketIcon: {
    fontSize: 12,
  },
  miniTicketInfo: {
    flex: 1,
  },
  miniTicketHolder: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 2,
  },
  miniTicketStatus: {
    backgroundColor: '#4A90E2',
    borderRadius: 3,
    paddingHorizontal: 3,
    paddingVertical: 1,
    alignSelf: 'flex-start',
  },
  miniTicketStatusText: {
    fontSize: 8,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  miniBarcode: {
    marginLeft: 2,
  },
  miniBarcodeText: {
    fontSize: 6,
    color: '#333333',
    fontFamily: 'monospace',
  },
  // Single Ticket View Styles
  ticketContainer: {
    flex: 1,
    paddingHorizontal: 20,
  },
  ticketCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 20,
    marginVertical: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  eventTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1E3A8A',
    marginBottom: 8,
  },
  venue: {
    fontSize: 16,
    color: '#666666',
    marginBottom: 4,
  },
  location: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1E3A8A',
    marginBottom: 4,
  },
  eventPlaceLabel: {
    fontSize: 14,
    color: '#666666',
    marginBottom: 20,
  },
  ticketDetails: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  detailItem: {
    alignItems: 'center',
  },
  detailValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1E3A8A',
    marginBottom: 4,
  },
  detailLabel: {
    fontSize: 14,
    color: '#666666',
  },
  eventImageContainer: {
    height: 200,
    backgroundColor: '#E0E0E0',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  eventImageIcon: {
    fontSize: 80,
  },
  barcodeContainer: {
    alignItems: 'center',
  },
  barcode: {
    backgroundColor: '#FFFFFF',
    padding: 10,
    borderRadius: 8,
    marginBottom: 8,
  },
  barcodeText: {
    fontSize: 12,
    fontFamily: 'monospace',
    color: '#333333',
    textAlign: 'center',
  },
  scanMeText: {
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
  // Dark Mode Styles
  containerDark: {
    backgroundColor: '#1E1B4B', // Dark indigo background
  },
  headerDark: {
    backgroundColor: '#312E81', // Dark header background
  },
  textDark: {
    color: '#E5E7EB', // Light grey for primary text
  },
  textSecondaryDark: {
    color: '#9CA3AF', // Lighter grey for secondary text
  },
  ticketItemDark: {
    backgroundColor: '#312E81', // Dark background for ticket items
  },
});
