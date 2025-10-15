import { router } from 'expo-router';
import React, { useState } from 'react';
import { Dimensions, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const { width, height } = Dimensions.get('window');

export default function EditProfileScreen() {
  const [name, setName] = useState('Rommy Amanda');
  const [dateOfBirth, setDateOfBirth] = useState('January 21, 1994');
  const [email, setEmail] = useState('Ronyamanda@gmail.com');
  const [homeAddress, setHomeAddress] = useState('507 East Rockville Lane Union City, NJ 07087');
  const [gender, setGender] = useState('Male');

  const handleBackPress = () => {
    router.back();
  };

  const handleSaveChanges = () => {
    // Handle save logic here
    console.log('Saving profile changes:', { name, dateOfBirth, email, homeAddress, gender });
    router.back();
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={handleBackPress}>
          <Text style={styles.backIcon}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Edit Profile</Text>
      </View>

      {/* Profile Picture Section */}
      <View style={styles.profilePictureSection}>
        <View style={styles.profilePictureContainer}>
          <View style={styles.profilePicture}>
            <Text style={styles.profilePictureText}>👤</Text>
          </View>
          <TouchableOpacity style={styles.cameraIcon}>
            <Text style={styles.cameraIconText}>📷</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Form Fields */}
      <View style={styles.formContainer}>
        {/* Name Field */}
        <View style={styles.fieldContainer}>
          <Text style={styles.fieldLabel}>Name</Text>
          <TextInput
            style={styles.textInput}
            value={name}
            onChangeText={setName}
            placeholder="Enter your name"
          />
        </View>

        {/* Date of Birth Field */}
        <View style={styles.fieldContainer}>
          <Text style={styles.fieldLabel}>Date of Birth</Text>
          <TextInput
            style={styles.textInput}
            value={dateOfBirth}
            onChangeText={setDateOfBirth}
            placeholder="Enter your date of birth"
          />
        </View>

        {/* Email Field */}
        <View style={styles.fieldContainer}>
          <View style={styles.fieldLabelContainer}>
            <Text style={styles.fieldLabel}>Email</Text>
            <View style={styles.requiredIndicator} />
          </View>
          <TextInput
            style={styles.textInput}
            value={email}
            onChangeText={setEmail}
            placeholder="Enter your email"
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>

        {/* Home Address Field */}
        <View style={styles.fieldContainer}>
          <Text style={styles.fieldLabel}>Home Address</Text>
          <TextInput
            style={styles.textInput}
            value={homeAddress}
            onChangeText={setHomeAddress}
            placeholder="Enter your home address"
            multiline
          />
        </View>

        {/* Gender Field */}
        <View style={styles.fieldContainer}>
          <Text style={styles.fieldLabel}>Gender</Text>
          <View style={styles.dropdownContainer}>
            <TextInput
              style={styles.dropdownInput}
              value={gender}
              onChangeText={setGender}
              placeholder="Select gender"
              editable={false}
            />
            <Text style={styles.dropdownIcon}>▼</Text>
          </View>
        </View>
      </View>

      {/* Save Button */}
      <View style={styles.saveButtonContainer}>
        <TouchableOpacity style={styles.saveButton} onPress={handleSaveChanges}>
          <Text style={styles.saveButtonText}>Save Change</Text>
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
  profilePictureSection: {
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    paddingVertical: 30,
  },
  profilePictureContainer: {
    position: 'relative',
  },
  profilePicture: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#E0E0E0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profilePictureText: {
    fontSize: 40,
    color: '#666666',
  },
  cameraIcon: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#4A90E2',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cameraIconText: {
    fontSize: 16,
    color: '#FFFFFF',
  },
  formContainer: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
    paddingVertical: 20,
    marginTop: 20,
  },
  fieldContainer: {
    marginBottom: 20,
  },
  fieldLabelContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  fieldLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333333',
    marginBottom: 8,
  },
  requiredIndicator: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#FF6B6B',
    marginLeft: 8,
  },
  textInput: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 16,
    color: '#333333',
  },
  dropdownContainer: {
    position: 'relative',
  },
  dropdownInput: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 16,
    color: '#333333',
    paddingRight: 40,
  },
  dropdownIcon: {
    position: 'absolute',
    right: 16,
    top: 12,
    fontSize: 12,
    color: '#666666',
  },
  saveButtonContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  saveButton: {
    backgroundColor: '#4A90E2',
    borderRadius: 8,
    paddingVertical: 16,
    alignItems: 'center',
  },
  saveButtonText: {
    fontSize: 16,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});
