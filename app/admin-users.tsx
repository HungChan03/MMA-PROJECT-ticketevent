import { router } from 'expo-router';
import React, { useState } from 'react';
import { Dimensions, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const { width, height } = Dimensions.get('window');

export default function AdminUsersScreen() {
  const [searchText, setSearchText] = useState('');
  const [selectedUser, setSelectedUser] = useState<any>(null);

  // Sample users data
  const users = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john@example.com',
      phone: '+1 234-567-8900',
      joinDate: '2024-01-15',
      status: 'Active',
      ticketsPurchased: 5,
      totalSpent: 250
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane@example.com',
      phone: '+1 234-567-8901',
      joinDate: '2024-01-14',
      status: 'Active',
      ticketsPurchased: 3,
      totalSpent: 150
    },
    {
      id: 3,
      name: 'Mike Johnson',
      email: 'mike@example.com',
      phone: '+1 234-567-8902',
      joinDate: '2024-01-13',
      status: 'Inactive',
      ticketsPurchased: 1,
      totalSpent: 50
    },
    {
      id: 4,
      name: 'Sarah Wilson',
      email: 'sarah@example.com',
      phone: '+1 234-567-8903',
      joinDate: '2024-01-12',
      status: 'Active',
      ticketsPurchased: 8,
      totalSpent: 400
    },
    {
      id: 5,
      name: 'David Brown',
      email: 'david@example.com',
      phone: '+1 234-567-8904',
      joinDate: '2024-01-11',
      status: 'Banned',
      ticketsPurchased: 0,
      totalSpent: 0
    }
  ];

  const filteredUsers = users.filter(user => 
    user.name.toLowerCase().includes(searchText.toLowerCase()) ||
    user.email.toLowerCase().includes(searchText.toLowerCase())
  );

  const handleBackPress = () => {
    router.back();
  };

  const handleUserPress = (user: any) => {
    setSelectedUser(user);
  };

  const handleToggleStatus = (userId: number) => {
    console.log('Toggle status for user:', userId);
    // Handle status toggle logic here
  };

  const handleDeleteUser = (userId: number) => {
    console.log('Delete user:', userId);
    // Handle delete user logic here
  };

  // User Detail View
  if (selectedUser) {
    return (
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity style={styles.backButton} onPress={() => setSelectedUser(null)}>
            <Text style={styles.backIcon}>←</Text>
          </TouchableOpacity>
          <Text style={styles.headerTitle}>User Details</Text>
        </View>

        <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
          <View style={styles.userDetailCard}>
            <View style={styles.userAvatar}>
              <Text style={styles.userAvatarText}>{selectedUser.name.charAt(0)}</Text>
            </View>
            <Text style={styles.userDetailName}>{selectedUser.name}</Text>
            <Text style={styles.userDetailEmail}>{selectedUser.email}</Text>
            
            <View style={styles.userStats}>
              <View style={styles.statItem}>
                <Text style={styles.statValue}>{selectedUser.ticketsPurchased}</Text>
                <Text style={styles.statLabel}>Tickets</Text>
              </View>
              <View style={styles.statItem}>
                <Text style={styles.statValue}>${selectedUser.totalSpent}</Text>
                <Text style={styles.statLabel}>Spent</Text>
              </View>
              <View style={styles.statItem}>
                <Text style={styles.statValue}>{selectedUser.joinDate}</Text>
                <Text style={styles.statLabel}>Joined</Text>
              </View>
            </View>

            <View style={styles.userInfo}>
              <View style={styles.infoRow}>
                <Text style={styles.infoLabel}>Phone:</Text>
                <Text style={styles.infoValue}>{selectedUser.phone}</Text>
              </View>
              <View style={styles.infoRow}>
                <Text style={styles.infoLabel}>Status:</Text>
                <View style={[styles.statusBadge, 
                  selectedUser.status === 'Active' ? styles.activeBadge : 
                  selectedUser.status === 'Inactive' ? styles.inactiveBadge : 
                  styles.bannedBadge]}>
                  <Text style={styles.statusText}>{selectedUser.status}</Text>
                </View>
              </View>
            </View>

            <View style={styles.actionButtons}>
              <TouchableOpacity 
                style={styles.actionButton}
                onPress={() => handleToggleStatus(selectedUser.id)}
              >
                <Text style={styles.actionButtonText}>
                  {selectedUser.status === 'Active' ? 'Deactivate' : 'Activate'}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity 
                style={[styles.actionButton, styles.deleteButton]}
                onPress={() => handleDeleteUser(selectedUser.id)}
              >
                <Text style={[styles.actionButtonText, styles.deleteButtonText]}>Delete User</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }

  // User List View
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={handleBackPress}>
          <Text style={styles.backIcon}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>User Management</Text>
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <View style={styles.searchBar}>
          <Text style={styles.searchIcon}>🔍</Text>
          <TextInput
            style={styles.searchInput}
            placeholder="Search users..."
            value={searchText}
            onChangeText={setSearchText}
            placeholderTextColor="#999999"
          />
        </View>
      </View>

      {/* Users List */}
      <ScrollView style={styles.usersContainer} showsVerticalScrollIndicator={false}>
        {filteredUsers.map((user) => (
          <TouchableOpacity 
            key={user.id} 
            style={styles.userItem}
            onPress={() => handleUserPress(user)}
          >
            <View style={styles.userItemLeft}>
              <View style={styles.userAvatarSmall}>
                <Text style={styles.userAvatarSmallText}>{user.name.charAt(0)}</Text>
              </View>
              <View style={styles.userInfo}>
                <Text style={styles.userName}>{user.name}</Text>
                <Text style={styles.userEmail}>{user.email}</Text>
                <Text style={styles.userJoinDate}>Joined: {user.joinDate}</Text>
              </View>
            </View>
            <View style={styles.userItemRight}>
              <View style={[styles.statusBadge, 
                user.status === 'Active' ? styles.activeBadge : 
                user.status === 'Inactive' ? styles.inactiveBadge : 
                styles.bannedBadge]}>
                <Text style={styles.statusText}>{user.status}</Text>
              </View>
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
  usersContainer: {
    flex: 1,
    paddingHorizontal: 20,
  },
  userItem: {
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
  userItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  userAvatarSmall: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#4A90E2',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  userAvatarSmallText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
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
  userJoinDate: {
    fontSize: 12,
    color: '#999999',
  },
  userItemRight: {
    alignItems: 'flex-end',
  },
  statusBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    marginBottom: 4,
  },
  activeBadge: {
    backgroundColor: '#4CAF50',
  },
  inactiveBadge: {
    backgroundColor: '#FF9800',
  },
  bannedBadge: {
    backgroundColor: '#F44336',
  },
  statusText: {
    fontSize: 12,
    color: '#FFFFFF',
    fontWeight: '600',
  },
  arrowIcon: {
    fontSize: 18,
    color: '#666666',
  },
  // User Detail Styles
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  userDetailCard: {
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
  userAvatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#4A90E2',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  userAvatarText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  userDetailName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 4,
  },
  userDetailEmail: {
    fontSize: 16,
    color: '#666666',
    marginBottom: 24,
  },
  userStats: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 24,
  },
  statItem: {
    alignItems: 'center',
  },
  statValue: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#4A90E2',
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 12,
    color: '#666666',
  },
  userInfo: {
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
    backgroundColor: '#4A90E2',
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
    marginBottom: 12,
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
