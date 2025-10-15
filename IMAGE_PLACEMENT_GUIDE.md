# 🖼️ CÁC VỊ TRÍ CÓ THỂ NHÉT HÌNH ẢNH VÀO TRONG ỨNG DỤNG TICKME

## 📱 SPLASH SCREEN (app/index.tsx)

### 1. **Logo Ticket Icon** 
```typescript
// Dòng 25-31 trong app/index.tsx
<View style={styles.ticketIcon}>
  <View style={styles.ticketShape}>
    <View style={styles.ticketNotch} />
    <View style={styles.ticketNotch} />
    <View style={styles.ticketNotch} />
  </View>
</View>
```
**➡️ Có thể thay thế bằng:** `<Image source={require('@/assets/images/ticket-logo.png')} style={styles.ticketIcon} />`

---

## 🎯 ONBOARDING SCREEN (app/onboarding.tsx)

### 2. **Header Logo** 
```typescript
// Dòng 116-125 trong app/onboarding.tsx
<View style={styles.ticketIcon}>
  <View style={styles.ticketShape}>
    <View style={styles.ticketNotch} />
    <View style={styles.ticketNotch} />
    <View style={styles.ticketNotch} />
  </View>
</View>
```
**➡️ Có thể thay thế bằng:** `<Image source={require('@/assets/images/header-logo.png')} style={styles.headerLogo} />`

### 3. **Central Image Placeholder** (Welcome Screen)
```typescript
// Dòng 26-28 trong app/onboarding.tsx
<View style={styles.centralImage}>
  <View style={styles.imagePlaceholder} />
</View>
```
**➡️ Có thể thay thế bằng:** `<Image source={require('@/assets/images/central-event.png')} style={styles.centralImage} />`

### 4. **Profile Circles** (Welcome Screen)
```typescript
// Dòng 31-42 trong app/onboarding.tsx
<View style={[styles.profileCircle, styles.profileTopLeft]}>
  <View style={styles.profilePlaceholder} />
</View>
// ... các profile circles khác
```
**➡️ Có thể thay thế bằng:** 
```typescript
<Image source={require('@/assets/images/profile1.png')} style={styles.profileImage} />
<Image source={require('@/assets/images/profile2.png')} style={styles.profileImage} />
<Image source={require('@/assets/images/profile3.png')} style={styles.profileImage} />
<Image source={require('@/assets/images/profile4.png')} style={styles.profileImage} />
```

### 5. **Notification Card Icons** (Stay Update Screen)
```typescript
// Dòng 72, 82, 92 trong app/onboarding.tsx
<Text style={styles.iconText}>⏰</Text>  // Clock icon
<Text style={styles.iconText}>⚠️</Text>  // Warning icon  
<Text style={styles.iconText}>✅</Text>  // Check icon
```
**➡️ Có thể thay thế bằng:**
```typescript
<Image source={require('@/assets/images/clock-icon.png')} style={styles.notificationIcon} />
<Image source={require('@/assets/images/warning-icon.png')} style={styles.notificationIcon} />
<Image source={require('@/assets/images/check-icon.png')} style={styles.notificationIcon} />
```

### 6. **Background Image** (Có thể thêm)
```typescript
// Có thể thêm vào container của mỗi screen
<ImageBackground 
  source={require('@/assets/images/background-pattern.png')} 
  style={styles.backgroundImage}
  resizeMode="cover"
>
  {/* Existing content */}
</ImageBackground>
```

---

## 🎨 GỢI Ý THIẾT KẾ HÌNH ẢNH

### **Kích thước đề xuất:**
- **Logo:** 80x50px (splash), 30x20px (header)
- **Central Image:** 60x60px
- **Profile Images:** 40x40px
- **Notification Icons:** 24x24px
- **Background:** 375x812px (iPhone X size)

### **Định dạng file:**
- **PNG** cho icons và logos (có transparency)
- **JPG** cho photos và backgrounds
- **SVG** cho scalable icons (cần convert sang PNG)

### **Tên file đề xuất:**
```
assets/images/
├── ticket-logo.png
├── header-logo.png
├── central-event.png
├── profile1.png
├── profile2.png
├── profile3.png
├── profile4.png
├── clock-icon.png
├── warning-icon.png
├── check-icon.png
└── background-pattern.png
```

---

## 🔧 CÁCH THÊM HÌNH ẢNH

### **Bước 1:** Đặt hình ảnh vào thư mục `assets/images/`

### **Bước 2:** Import Image component
```typescript
import { Image } from 'react-native';
```

### **Bước 3:** Thay thế placeholder bằng Image component
```typescript
// Thay vì:
<View style={styles.imagePlaceholder} />

// Sử dụng:
<Image 
  source={require('@/assets/images/your-image.png')} 
  style={styles.yourImageStyle}
  resizeMode="contain"
/>
```

### **Bước 4:** Thêm styles cho hình ảnh
```typescript
yourImageStyle: {
  width: 60,
  height: 60,
  borderRadius: 30, // Nếu muốn bo tròn
},
```

---

## 📝 LƯU Ý QUAN TRỌNG

1. **Tối ưu hóa:** Nén hình ảnh để giảm kích thước file
2. **Responsive:** Sử dụng `resizeMode` phù hợp
3. **Performance:** Cache hình ảnh với `expo-image` nếu cần
4. **Accessibility:** Thêm `accessibilityLabel` cho screen readers
5. **Testing:** Test trên các kích thước màn hình khác nhau

---

## 🚀 BƯỚC TIẾP THEO

Sau khi thêm hình ảnh, bạn có thể:
1. Tạo thêm các screens khác (login, main app, etc.)
2. Thêm animations cho transitions
3. Implement navigation giữa các screens
4. Thêm dark mode support
5. Tối ưu hóa performance
