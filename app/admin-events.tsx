import { router } from 'expo-router';
import React, { useState } from 'react';
import { Dimensions, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const { width, height } = Dimensions.get('window');

export default function AdminEventsScreen() {
  const [searchText, setSearchText] = useState('');
  const [selectedEvent, setSelectedEvent] = useState<any>(null);

  // Sample events data
  const events = [
    {
      id: 1,
      title: 'Tech Conference 2024',
      organizer: 'TechCorp',
      venue: 'Convention Center',
      city: 'Hanoi',
      startDate: '2024-03-15',
      endDate: '2024-03-17',
      status: 'Approved',
      capacity: 1500,
      sold: 1200,
      revenue: 60000,
      categories: ['Technology', 'Business']
    },
    {
      id: 2,
      title: 'Music Festival 2024',
      organizer: 'SoundWave',
      venue: 'Music Park',
      city: 'Da Nang',
      startDate: '2024-04-20',
      endDate: '2024-04-22',
      status: 'Approved',
      capacity: 5000,
      sold: 4300,
      revenue: 215000,
      categories: ['Music', 'Entertainment']
    },
    {
      id: 3,
      title: 'Art Exhibition',
      organizer: 'ArtGallery',
      venue: 'Art Museum',
      city: 'Ho Chi Minh City',
      startDate: '2024-02-12',
      endDate: '2024-02-15',
      status: 'Pending',
      capacity: 2000,
      sold: 1500,
      revenue: 75000,
      categories: ['Art', 'Culture']
    },
    {
      id: 4,
      title: 'Community Health Fair',
      organizer: 'HealthFirst',
      venue: 'Community Center',
      city: 'Ho Chi Minh City',
      startDate: '2024-05-10',
      endDate: '2024-05-10',
      status: 'Approved',
      capacity: 500,
      sold: 300,
      revenue: 0,
      categories: ['Community', 'Health']
    },
    {
      id: 5,
      title: 'Football Championship',
      organizer: 'SportsVietnam',
      venue: 'Sports Stadium',
      city: 'Hanoi',
      startDate: '2024-06-15',
      endDate: '2024-06-20',
      status: 'Rejected',
      capacity: 10000,
      sold: 0,
      revenue: 0,
      categories: ['Sports', 'Entertainment']
    }
  ];

  const filteredEvents = events.filter(event => 
    event.title.toLowerCase().includes(searchText.toLowerCase()) ||
    event.organizer.toLowerCase().includes(searchText.toLowerCase()) ||
    event.venue.toLowerCase().includes(searchText.toLowerCase())
  );

  const handleBackPress = () => {
    router.back();
  };

  const handleEventPress = (event: any) => {
    setSelectedEvent(event);
  };

  const handleApproveEvent = (eventId: number) => {
    console.log('Approve event:', eventId);
    // Handle approve event logic here
  };

  const handleRejectEvent = (eventId: number) => {
    console.log('Reject event:', eventId);
    // Handle reject event logic here
  };

  const handleDeleteEvent = (eventId: number) => {
    console.log('Delete event:', eventId);
    // Handle delete event logic here
  };

  // Event Detail View
  if (selectedEvent) {
    return (
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity style={styles.backButton} onPress={() => setSelectedEvent(null)}>
            <Text style={styles.backIcon}>←</Text>
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Event Details</Text>
        </View>

        <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
          <View style={styles.eventDetailCard}>
            <View style={styles.eventImage}>
              <Text style={styles.eventImageIcon}>🎫</Text>
            </View>
            <Text style={styles.eventDetailTitle}>{selectedEvent.title}</Text>
            <Text style={styles.eventDetailOrganizer}>by {selectedEvent.organizer}</Text>
            
            <View style={styles.eventStats}>
              <View style={styles.statItem}>
                <Text style={styles.statValue}>{selectedEvent.sold}/{selectedEvent.capacity}</Text>
                <Text style={styles.statLabel}>Tickets</Text>
              </View>
              <View style={styles.statItem}>
                <Text style={styles.statValue}>${selectedEvent.revenue.toLocaleString()}</Text>
                <Text style={styles.statLabel}>Revenue</Text>
              </View>
              <View style={styles.statItem}>
                <Text style={styles.statValue}>{selectedEvent.startDate}</Text>
                <Text style={styles.statLabel}>Start Date</Text>
              </View>
            </View>

            <View style={styles.eventInfo}>
              <View style={styles.infoRow}>
                <Text style={styles.infoLabel}>Venue:</Text>
                <Text style={styles.infoValue}>{selectedEvent.venue}</Text>
              </View>
              <View style={styles.infoRow}>
                <Text style={styles.infoLabel}>City:</Text>
                <Text style={styles.infoValue}>{selectedEvent.city}</Text>
              </View>
              <View style={styles.infoRow}>
                <Text style={styles.infoLabel}>End Date:</Text>
                <Text style={styles.infoValue}>{selectedEvent.endDate}</Text>
              </View>
              <View style={styles.infoRow}>
                <Text style={styles.infoLabel}>Status:</Text>
                <View style={[styles.statusBadge, 
                  selectedEvent.status === 'Approved' ? styles.approvedBadge : 
                  selectedEvent.status === 'Pending' ? styles.pendingBadge : 
                  styles.rejectedBadge]}>
                  <Text style={styles.statusText}>{selectedEvent.status}</Text>
                </View>
              </View>
              <View style={styles.infoRow}>
                <Text style={styles.infoLabel}>Categories:</Text>
                <Text style={styles.infoValue}>{selectedEvent.categories.join(', ')}</Text>
              </View>
            </View>

            <View style={styles.actionButtons}>
              {selectedEvent.status === 'Pending' && (
                <>
                  <TouchableOpacity 
                    style={[styles.actionButton, styles.approveButton]}
                    onPress={() => handleApproveEvent(selectedEvent.id)}
                  >
                    <Text style={styles.actionButtonText}>Approve Event</Text>
                  </TouchableOpacity>
                  <TouchableOpacity 
                    style={[styles.actionButton, styles.rejectButton]}
                    onPress={() => handleRejectEvent(selectedEvent.id)}
                  >
                    <Text style={styles.actionButtonText}>Reject Event</Text>
                  </TouchableOpacity>
                </>
              )}
              <TouchableOpacity 
                style={[styles.actionButton, styles.deleteButton]}
                onPress={() => handleDeleteEvent(selectedEvent.id)}
              >
                <Text style={[styles.actionButtonText, styles.deleteButtonText]}>Delete Event</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }

  // Event List View
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={handleBackPress}>
          <Text style={styles.backIcon}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Event Management</Text>
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <View style={styles.searchBar}>
          <Text style={styles.searchIcon}>🔍</Text>
          <TextInput
            style={styles.searchInput}
            placeholder="Search events..."
            value={searchText}
            onChangeText={setSearchText}
            placeholderTextColor="#999999"
          />
        </View>
      </View>

      {/* Events List */}
      <ScrollView style={styles.eventsContainer} showsVerticalScrollIndicator={false}>
        {filteredEvents.map((event) => (
          <TouchableOpacity 
            key={event.id} 
            style={styles.eventItem}
            onPress={() => handleEventPress(event)}
          >
            <View style={styles.eventItemLeft}>
              <View style={styles.eventImageSmall}>
                <Text style={styles.eventImageSmallIcon}>🎫</Text>
              </View>
              <View style={styles.eventInfo}>
                <Text style={styles.eventTitle}>{event.title}</Text>
                <Text style={styles.eventOrganizer}>by {event.organizer}</Text>
                <Text style={styles.eventVenue}>{event.venue}, {event.city}</Text>
                <Text style={styles.eventDate}>{event.startDate}</Text>
              </View>
            </View>
            <View style={styles.eventItemRight}>
              <View style={[styles.statusBadge, 
                event.status === 'Approved' ? styles.approvedBadge : 
                event.status === 'Pending' ? styles.pendingBadge : 
                styles.rejectedBadge]}>
                <Text style={styles.statusText}>{event.status}</Text>
              </View>
              <Text style={styles.eventTickets}>{event.sold}/{event.capacity}</Text>
              <Text style={styles.eventTicketsLabel}>tickets</Text>
              <Text style={styles.arrowIcon}>→</Text>
            </View>
          </TouchableOpacity>
        ))}
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
  searchContainer: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
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
  eventsContainer: {
    flex: 1,
    paddingHorizontal: 20,
  },
  eventItem: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginVertical: 6,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  eventItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  eventImageSmall: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#E0E0E0',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  eventImageSmallIcon: {
    fontSize: 24,
  },
  eventInfo: {
    flex: 1,
  },
  eventTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333333',
    marginBottom: 2,
  },
  eventOrganizer: {
    fontSize: 14,
    color: '#666666',
    marginBottom: 2,
  },
  eventVenue: {
    fontSize: 14,
    color: '#666666',
    marginBottom: 2,
  },
  eventDate: {
    fontSize: 12,
    color: '#999999',
  },
  eventItemRight: {
    alignItems: 'flex-end',
  },
  statusBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    marginBottom: 4,
  },
  approvedBadge: {
    backgroundColor: '#4CAF50',
  },
  pendingBadge: {
    backgroundColor: '#FF9800',
  },
  rejectedBadge: {
    backgroundColor: '#F44336',
  },
  statusText: {
    fontSize: 12,
    color: '#FFFFFF',
    fontWeight: '600',
  },
  eventTickets: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#4A90E2',
    marginBottom: 2,
  },
  eventTicketsLabel: {
    fontSize: 10,
    color: '#666666',
    marginBottom: 4,
  },
  arrowIcon: {
    fontSize: 18,
    color: '#666666',
  },
  // Event Detail Styles
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  eventDetailCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 24,
    marginVertical: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  eventImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#E0E0E0',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  eventImageIcon: {
    fontSize: 40,
  },
  eventDetailTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 4,
    textAlign: 'center',
  },
  eventDetailOrganizer: {
    fontSize: 16,
    color: '#666666',
    marginBottom: 24,
  },
  eventStats: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 24,
  },
  statItem: {
    alignItems: 'center',
  },
  statValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4A90E2',
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 12,
    color: '#666666',
  },
  eventInfo: {
    width: '100%',
    marginBottom: 24,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  infoLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333333',
  },
  infoValue: {
    fontSize: 16,
    color: '#666666',
  },
  actionButtons: {
    width: '100%',
  },
  actionButton: {
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
    marginBottom: 12,
  },
  approveButton: {
    backgroundColor: '#4CAF50',
  },
  rejectButton: {
    backgroundColor: '#FF9800',
  },
  deleteButton: {
    backgroundColor: '#F44336',
  },
  actionButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  deleteButtonText: {
    color: '#FFFFFF',
  },
});
