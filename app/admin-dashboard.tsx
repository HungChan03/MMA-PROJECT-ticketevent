import { router } from 'expo-router';
import React, { useState } from 'react';
import { Dimensions, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const { width, height } = Dimensions.get('window');

export default function AdminDashboardScreen() {
  const [activeTab, setActiveTab] = useState('dashboard');

  const handleLogout = () => {
    router.push('/login');
  };

  const handleUserManagement = () => {
    router.push('/admin-users');
  };

  const handleEventManagement = () => {
    router.push('/admin-events');
  };

  // Sample admin statistics
  const stats = {
    totalUsers: 1250,
    totalEvents: 45,
    totalTickets: 5670,
    revenue: 125000
  };

  const recentUsers = [
    { id: 1, name: 'John Doe', email: 'john@example.com', joinDate: '2024-01-15', status: 'Active' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', joinDate: '2024-01-14', status: 'Active' },
    { id: 3, name: 'Mike Johnson', email: 'mike@example.com', joinDate: '2024-01-13', status: 'Inactive' },
  ];

  const recentEvents = [
    { id: 1, name: 'Tech Conference 2024', organizer: 'TechCorp', date: '2024-03-15', tickets: 1500, sold: 1200 },
    { id: 2, name: 'Music Festival', organizer: 'SoundWave', date: '2024-04-20', tickets: 5000, sold: 4300 },
    { id: 3, name: 'Art Exhibition', organizer: 'ArtGallery', date: '2024-02-12', tickets: 2000, sold: 1500 },
  ];

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Text style={styles.headerTitle}>Admin Dashboard</Text>
          <Text style={styles.headerSubtitle}>Welcome back, Admin</Text>
        </View>
        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Statistics Cards */}
        <View style={styles.statsContainer}>
          <View style={styles.statCard}>
            <Text style={styles.statNumber}>{stats.totalUsers.toLocaleString()}</Text>
            <Text style={styles.statLabel}>Total Users</Text>
            <Text style={styles.statIcon}>👥</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statNumber}>{stats.totalEvents}</Text>
            <Text style={styles.statLabel}>Total Events</Text>
            <Text style={styles.statIcon}>🎫</Text>
          </View>
        </View>

        <View style={styles.statsContainer}>
          <View style={styles.statCard}>
            <Text style={styles.statNumber}>{stats.totalTickets.toLocaleString()}</Text>
            <Text style={styles.statLabel}>Tickets Sold</Text>
            <Text style={styles.statIcon}>🎟️</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statNumber}>${stats.revenue.toLocaleString()}</Text>
            <Text style={styles.statLabel}>Revenue</Text>
            <Text style={styles.statIcon}>💰</Text>
          </View>
        </View>

        {/* Management Actions */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Management</Text>
          <TouchableOpacity style={styles.actionButton} onPress={handleUserManagement}>
            <View style={styles.actionButtonLeft}>
              <Text style={styles.actionIcon}>👥</Text>
              <View style={styles.actionTextContainer}>
                <Text style={styles.actionTitle}>User Management</Text>
                <Text style={styles.actionSubtitle}>Manage users, accounts, and permissions</Text>
              </View>
            </View>
            <Text style={styles.actionArrow}>→</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.actionButton} onPress={handleEventManagement}>
            <View style={styles.actionButtonLeft}>
              <Text style={styles.actionIcon}>🎫</Text>
              <View style={styles.actionTextContainer}>
                <Text style={styles.actionTitle}>Event Management</Text>
                <Text style={styles.actionSubtitle}>Manage events, tickets, and organizers</Text>
              </View>
            </View>
            <Text style={styles.actionArrow}>→</Text>
          </TouchableOpacity>
        </View>

        {/* Recent Users */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Recent Users</Text>
          {recentUsers.map((user) => (
            <View key={user.id} style={styles.userItem}>
              <View style={styles.userInfo}>
                <Text style={styles.userName}>{user.name}</Text>
                <Text style={styles.userEmail}>{user.email}</Text>
                <Text style={styles.userDate}>Joined: {user.joinDate}</Text>
              </View>
              <View style={[styles.statusBadge, user.status === 'Active' ? styles.activeBadge : styles.inactiveBadge]}>
                <Text style={styles.statusText}>{user.status}</Text>
              </View>
            </View>
          ))}
        </View>

        {/* Recent Events */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Recent Events</Text>
          {recentEvents.map((event) => (
            <View key={event.id} style={styles.eventItem}>
              <View style={styles.eventInfo}>
                <Text style={styles.eventName}>{event.name}</Text>
                <Text style={styles.eventOrganizer}>by {event.organizer}</Text>
                <Text style={styles.eventDate}>{event.date}</Text>
              </View>
              <View style={styles.eventStats}>
                <Text style={styles.eventTickets}>{event.sold}/{event.tickets}</Text>
                <Text style={styles.eventTicketsLabel}>tickets sold</Text>
              </View>
            </View>
          ))}
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
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 60,
    paddingBottom: 20,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  headerLeft: {
    flex: 1,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333333',
  },
  headerSubtitle: {
    fontSize: 14,
    color: '#666666',
    marginTop: 4,
  },
  logoutButton: {
    backgroundColor: '#FF6B6B',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
  },
  logoutText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  statCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 20,
    flex: 1,
    marginHorizontal: 5,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  statNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4A90E2',
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 12,
    color: '#666666',
    marginBottom: 8,
  },
  statIcon: {
    fontSize: 20,
  },
  section: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 20,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 16,
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  actionButtonLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  actionIcon: {
    fontSize: 24,
    marginRight: 16,
  },
  actionTextContainer: {
    flex: 1,
  },
  actionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333333',
    marginBottom: 4,
  },
  actionSubtitle: {
    fontSize: 14,
    color: '#666666',
  },
  actionArrow: {
    fontSize: 18,
    color: '#666666',
  },
  userItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  userInfo: {
    flex: 1,
  },
  userName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333333',
    marginBottom: 2,
  },
  userEmail: {
    fontSize: 14,
    color: '#666666',
    marginBottom: 2,
  },
  userDate: {
    fontSize: 12,
    color: '#999999',
  },
  statusBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  activeBadge: {
    backgroundColor: '#4CAF50',
  },
  inactiveBadge: {
    backgroundColor: '#FF9800',
  },
  statusText: {
    fontSize: 12,
    color: '#FFFFFF',
    fontWeight: '600',
  },
  eventItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  eventInfo: {
    flex: 1,
  },
  eventName: {
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
  eventDate: {
    fontSize: 12,
    color: '#999999',
  },
  eventStats: {
    alignItems: 'flex-end',
  },
  eventTickets: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#4A90E2',
  },
  eventTicketsLabel: {
    fontSize: 12,
    color: '#666666',
  },
});
