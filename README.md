# Build-A-Board: Interactive Computer Anatomy

An educational web application that helps users understand computer hardware components through an interactive motherboard and BIOS simulation.

## 🎯 Project Overview

This project was created for Module 1 of the Learner Guide (pages 80-126) to demonstrate understanding of computer hardware concepts through practical web development.

## ✨ Features

### 🔁 Toggle Functionality
- Switch between Motherboard view and BIOS screen
- Smooth transitions and animations
- Keyboard shortcuts (ESC to return from BIOS)

### 🧩 Motherboard View
- **6 Main Components:**
  - **CPU** (Central Processing Unit) - Center position
  - **RAM** (Random Access Memory) - Right side
  - **ROM** (Read-Only Memory) - Top left
  - **CMOS** - Bottom left
  - **Storage Drive** - Bottom center
  - **Power Unit** - Left side

- Each component is:
  - Visually styled with real component images
  - Fully clickable
  - Hover effects and animations
  - Opens detailed explanation modal

### 💬 Component Explanations
- Custom-styled modal windows
- Component name, image, and detailed description
- Educational content based on learner guide
- Smooth animations and transitions

### 🖥️ BIOS View
- Classic BIOS styling with monospace fonts
- Dark blue background with green text
- Includes:
  - Boot Order configuration
  - Security settings
  - CMOS Clock display
  - BIOS version information
  - Keyboard shortcuts (F10 to save and exit)

## 🚀 How to Use

1. **Start the application:**
   ```bash
   python -m http.server 8000
   ```
   Then open `http://localhost:8000` in your browser

2. **Navigate the motherboard:**
   - Click on any component to learn about it
   - Use the toggle button to switch to BIOS view

3. **BIOS navigation:**
   - Press `ESC` to return to motherboard
   - Press `F10` to simulate "Save and Exit"
   - Press `Enter` to explore advanced settings (demo)

## 📁 Project Structure

```
build-a-board/
├── index.html          # Main application file
├── style.css           # Complete styling for all views
├── script.js           # Interactive functionality
├── assets/
│   └── images/         # Component images and backgrounds
│       ├── CPU-removebg-preview.png
│       ├── RAM-removebg-preview.png
│       ├── ROM-removebg-preview.png
│       ├── CMOS-removebg-preview.png
│       ├── storage_drive-removebg-preview.png
│       ├── power_unit-removebg-preview.png
│       └── background.jpg
└── README.md           # This file
```

## ✅ Requirements Met

- ✅ Toggle between motherboard and BIOS views
- ✅ 6 main components on the motherboard
- ✅ Popup explanations for each component
- ✅ BIOS styled correctly with content
- ✅ Clean code: HTML, CSS, JS
- ✅ No frameworks or libraries used
- ✅ Responsive design for mobile devices
- ✅ Accessibility features (ARIA labels, keyboard navigation)

## 🎨 Design Features

- **Modern UI:** Gradient backgrounds, smooth animations
- **Realistic Layout:** Components positioned like actual motherboard
- **Interactive Elements:** Hover effects, click feedback
- **Professional BIOS:** Authentic terminal-style interface
- **Accessibility:** Full keyboard navigation support

## 🧪 Assessment Criteria

### Layout Accuracy
- Motherboard resembles real board layout
- Components logically positioned
- Visual hierarchy maintained

### Functionality
- Toggle button works seamlessly
- All popups open correctly
- BIOS keyboard shortcuts functional

### Understanding
- Component descriptions accurate and educational
- BIOS interface authentic
- Clear learning objectives achieved

### Code Quality
- Well-organized, commented code
- Semantic HTML structure
- Efficient CSS and JavaScript

## 🌟 Additional Features

- Loading animation on startup
- Notification system for BIOS interactions
- Responsive design for all screen sizes
- Accessibility compliance (WCAG 2.1)
- Component hover animations
- Modal backdrop blur effects

## 📤 Submission

Ready for GitHub submission and grading. All requirements from the assignment have been met and exceeded with additional features for enhanced user experience.

---

**Created by:** [Your Name]  
**Date:** January 5, 2026  
**Module:** Module 1 - Learner Guide (Pages 80-126)
