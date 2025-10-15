import { router } from 'expo-router';
import React, { useState } from 'react';
import { Dimensions, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const { width, height } = Dimensions.get('window');

export default function LoginScreen() {
  const [email, setEmail] = useState('hunggomu15@gmail.com');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    // Handle login logic here
    console.log('Login with:', { email, password });
    
    // Check for admin login
    if (email === 'admin@gmail.com' && password === '123456') {
      router.push('/admin-dashboard');
      return;
    }
    
    // Regular user login
    router.push('/home');
  };

  const handleSignup = () => {
    router.push('/signup');
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Login for Tickme</Text>
        <Text style={styles.subtitle}>Welcome back you've been missed!</Text>
      </View>

      {/* Input Fields */}
      <View style={styles.inputContainer}>
        {/* Email Field */}
        <View style={styles.inputWrapper}>
          <View style={styles.inputIcon}>
            <Text style={styles.iconText}>✉️</Text>
          </View>
          <TextInput
            style={styles.textInput}
            value={email}
            onChangeText={setEmail}
            placeholder="Email"
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <View style={styles.validationIcon}>
            <Text style={styles.checkIcon}>✓</Text>
          </View>
        </View>

        {/* Password Field */}
        <View style={styles.inputWrapper}>
          <View style={styles.inputIcon}>
            <Text style={styles.iconText}>🔒</Text>
          </View>
          <TextInput
            style={styles.textInput}
            value={password}
            onChangeText={setPassword}
            placeholder="Password"
            secureTextEntry={!showPassword}
            autoCapitalize="none"
          />
          <TouchableOpacity 
            style={styles.eyeIcon}
            onPress={() => setShowPassword(!showPassword)}
          >
            <Text style={styles.iconText}>{showPassword ? '👁️' : '👁️‍🗨️'}</Text>
          </TouchableOpacity>
        </View>

        {/* Recovery Password Link */}
        <TouchableOpacity style={styles.recoveryLink}>
          <Text style={styles.recoveryText}>Recovery Password?</Text>
        </TouchableOpacity>
      </View>

      {/* Login Button */}
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>

      {/* Signup Link */}
      <TouchableOpacity style={styles.signupLink} onPress={handleSignup}>
        <Text style={styles.signupText}>
          Join with us. <Text style={styles.signupLinkText}>Create Account</Text>
        </Text>
      </TouchableOpacity>

      {/* Terms and Privacy */}
      <View style={styles.termsContainer}>
        <Text style={styles.termsText}>
          By continuing, you agree to Tickme's{' '}
          <Text style={styles.linkText}>Term of Use</Text> and confirm that you have read Tickme's{' '}
          <Text style={styles.linkText}>Privacy Policy</Text>
        </Text>
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
  header: {
    alignItems: 'center',
    marginTop: 60,
    marginBottom: 40,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#666666',
    textAlign: 'center',
  },
  inputContainer: {
    marginBottom: 30,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  inputIcon: {
    marginRight: 12,
  },
  textInput: {
    flex: 1,
    fontSize: 16,
    color: '#333333',
  },
  validationIcon: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#4A90E2',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 12,
  },
  checkIcon: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold',
  },
  eyeIcon: {
    marginLeft: 12,
  },
  iconText: {
    fontSize: 18,
  },
  recoveryLink: {
    alignSelf: 'flex-end',
    marginTop: 8,
  },
  recoveryText: {
    fontSize: 14,
    color: '#666666',
  },
  loginButton: {
    backgroundColor: '#4A90E2',
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
    marginBottom: 20,
  },
  loginButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  signupLink: {
    alignItems: 'center',
    marginBottom: 40,
  },
  signupText: {
    fontSize: 16,
    color: '#666666',
  },
  signupLinkText: {
    color: '#4A90E2',
    fontWeight: '600',
  },
  termsContainer: {
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  termsText: {
    fontSize: 12,
    color: '#999999',
    textAlign: 'center',
    lineHeight: 18,
  },
  linkText: {
    fontWeight: '600',
    color: '#666666',
  },
});
