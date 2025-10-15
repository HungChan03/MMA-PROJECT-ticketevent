# 🖼️ HƯỚNG DẪN SỬ DỤNG HÌNH ẢNH CHO BOTTOM NAVIGATION

## 📁 **Cấu trúc thư mục Assets**

Đặt các hình ảnh icon vào thư mục `assets/images/`:

```
assets/images/
├── home-icon.png          # Icon nhà (Home)
├── eye-icon.png           # Icon mắt (View/Search)  
├── puzzle-icon.png        # Icon puzzle piece
└── settings-icon.png      # Icon gear/settings
```

## 🎨 **Yêu cầu hình ảnh**

### **Kích thước đề xuất:**
- **Width**: 24px
- **Height**: 24px
- **Format**: PNG (có transparency)
- **Style**: Outline icons (không fill)

### **Màu sắc:**
- **Default**: #999999 (xám)
- **Active**: Sẽ được tự động thay đổi bằng `tintColor`

## 🔧 **Cách thay đổi tên hình ảnh**

### **Trong Home Screen** (`app/home.tsx`):
```typescript
// Thay đổi tên file hình ảnh ở đây:
<Image source={require('@/assets/images/YOUR_HOME_ICON.png')} style={styles.navIconImage} />
<Image source={require('@/assets/images/YOUR_EYE_ICON.png')} style={styles.navIconImage} />
<Image source={require('@/assets/images/YOUR_PUZZLE_ICON.png')} style={styles.navIconImage} />
<Image source={require('@/assets/images/YOUR_SETTINGS_ICON.png')} style={styles.navIconImage} />
```

### **Trong Search Screen** (`app/search.tsx`):
```typescript
// Thay đổi tên file hình ảnh ở đây:
<Image source={require('@/assets/images/YOUR_HOME_ICON.png')} style={styles.navIconImage} />
<Image source={require('@/assets/images/YOUR_EYE_ICON.png')} style={styles.navIconImage} />
<Image source={require('@/assets/images/YOUR_PUZZLE_ICON.png')} style={styles.navIconImage} />
<Image source={require('@/assets/images/YOUR_SETTINGS_ICON.png')} style={styles.navIconImage} />
```

## 📝 **Ví dụ thay đổi**

### **Nếu bạn có hình ảnh với tên khác:**
```typescript
// Thay vì:
<Image source={require('@/assets/images/home-icon.png')} style={styles.navIconImage} />

// Sử dụng:
<Image source={require('@/assets/images/my-home.png')} style={styles.navIconImage} />
<Image source={require('@/assets/images/search-icon.svg')} style={styles.navIconImage} />
<Image source={require('@/assets/images/puzzle-piece.png')} style={styles.navIconImage} />
<Image source={require('@/assets/images/gear-icon.png')} style={styles.navIconImage} />
```

## 🎯 **Tùy chỉnh màu sắc**

### **Thay đổi màu mặc định:**
```typescript
navIconImage: {
  width: 24,
  height: 24,
  tintColor: '#YOUR_COLOR', // Thay đổi màu ở đây
},
```

### **Màu cho active state:**
```typescript
activeNavIconContainer: {
  backgroundColor: '#YOUR_ACTIVE_COLOR', // Thay đổi màu active ở đây
},
```

## 🔄 **Cách thêm icon mới**

### **1. Thêm hình ảnh vào assets:**
```
assets/images/new-icon.png
```

### **2. Cập nhật code:**
```typescript
<Image source={require('@/assets/images/new-icon.png')} style={styles.navIconImage} />
```

### **3. Thêm navigation logic:**
```typescript
const handleNewIconPress = () => {
  router.push('/new-screen');
};

<TouchableOpacity style={styles.navItem} onPress={handleNewIconPress}>
  <View style={styles.navIconContainer}>
    <Image source={require('@/assets/images/new-icon.png')} style={styles.navIconImage} />
  </View>
</TouchableOpacity>
```

## ⚠️ **Lưu ý quan trọng**

1. **Tên file**: Phải chính xác, phân biệt hoa thường
2. **Đường dẫn**: Phải đúng `@/assets/images/`
3. **Format**: PNG hoặc SVG (khuyến nghị PNG)
4. **Kích thước**: 24x24px để hiển thị đẹp
5. **Transparency**: Nên có nền trong suốt

## 🚀 **Bước tiếp theo**

1. **Tạo/chuẩn bị hình ảnh** theo yêu cầu
2. **Đặt vào thư mục** `assets/images/`
3. **Cập nhật tên file** trong code
4. **Test trên thiết bị** để đảm bảo hiển thị đúng
5. **Tùy chỉnh màu sắc** nếu cần

## 📱 **Test**

Sau khi thay đổi, chạy:
```bash
npm start
```

Để xem kết quả trên thiết bị!
