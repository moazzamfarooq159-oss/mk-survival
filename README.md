# 🎮 MK-Survival

A **3D Survival Game** built with **React Native**, **Expo**, and **Three.js** featuring immersive 3D graphics, combat systems, resource management, pet companions, and dynamic leveling system.

## 📱 Quick Access - Scan QR Code

```
████████████████████████████████████████████████████
██          ▄▄▄▄▄  █▀█▀▄▀▀ ▀▀ █▀▀▄ ▀▀▀██ ▄▄▄▄▄  ██
██          █   █  ██▄▄▀ ▀▄▀▀▀▀█▀██ ▀▄ ▀█ █   █  ██
██          █▄▄▄█  █▄██▄▀█ █▀ ▄▄▄▀ ▀▀▄█▀ █▄▄▄█  ██
██          ▄▄▄▄▄  ▀ ▀ ▀ ▀ ▀ ▀ ▀ ▀ ▀ ▀▀▀ ▄▄▄▄▄  ██
██          █   █  █▄▀ █▀▄██▀▀▄▀▀▀▀▀▀▄▀ █ █   █  ██
██          █▄▄▄█  █ ▀▀▀▀▀█▀▄▀ ▀▀▀ ▀▄▀▀█ █▄▄▄█  ██
██          ▄▄▄▄▄  ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀ ▄▄▄▄▄  ██
██                                                  ██
██ 🔗 https://github.com/moazzamfarooq159-oss/mk-survival
██
████████████████████████████████████████████████████
```

**Scan the QR code above or visit:**
```
https://github.com/moazzamfarooq159-oss/mk-survival
```

---

## ✨ Features

### 🎯 Core Gameplay
- **3D Graphics**: Beautiful 3D environment with trees, rocks, and dynamic lighting
- **Health System**: Monitor and manage your character's health
- **Hunger Mechanic**: Eat to survive and maintain energy
- **Resource Gathering**: Collect wood, stone, food, and gold
- **Experience & Leveling**: 7 unique levels to progress through

### ⚔️ Weapons System
- **Scythe** (Weakest): 10 damage, 50 durability
- **Axe** (Strongest): 25 damage, 75 durability
- Weapon durability system
- Switch between weapons anytime

### 📊 7-Level Progression System
1. **Noob** (0 XP) - Fresh to survival
2. **Pro** (100 XP) - Learning the ropes
3. **Explorer** (300 XP) - Venturing far
4. **Guide** (600 XP) - Mastering basics
5. **Conqueror** (1000 XP) - Dominating
6. **Guardian** (1500 XP) - Protecting territory
7. **King** (2500 XP) - Ultimate survival master

### 🐾 Pet System
- Capture and collect pets
- Display pets around your character
- Each pet is unique and customizable

### 📦 Resource Management
- **Wood**: Build and craft
- **Stone**: Create tools and shelters
- **Food**: Sustain hunger
- **Gold**: Trade and upgrade

## 🚀 Getting Started

### Prerequisites
- Node.js >= 14
- npm or yarn
- Expo CLI: `npm install -g expo-cli`

### Installation

```bash
# Clone the repository
git clone https://github.com/moazzamfarooq159-oss/mk-survival.git
cd mk-survival

# Install dependencies
npm install

# Start the development server
npm start
```

### Running on Different Platforms

**Android:**
```bash
npm run android
```

**iOS:**
```bash
npm run ios
```

**Web:**
```bash
npm run web
```

**Build Native Apps:**
```bash
# Android APK/AAB
npm run build-android

# iOS IPA
npm run build-ios

# Web deployment
npm run build-web
```

## 📁 Project Structure

```
mk-survival/
├── src/
│   ├── components/
│   │   ├── GameScene.tsx          # 3D game environment
│   │   ├── GameUI.tsx              # UI overlay
��   │   └── QRCodeGenerator.tsx     # QR code component
│   └── store/
│       └── gameStore.ts            # Game state management
├── App.tsx                          # Main app component
├── app.json                         # Expo configuration
├── package.json                     # Dependencies
├── tsconfig.json                   # TypeScript config
└── README.md                       # This file
```

## 🎮 Controls

- **Tap Resources Button**: Gather wood, stone, food, gold
- **Gain XP Button**: Progress through levels
- **Heal Button**: Restore health
- **Eat Button**: Reduce hunger
- **Pet Button**: Capture new pets
- **Weapon Selection**: Tap weapon to switch

## 🔄 Game Loop

- **Health**: Regenerates when hunger > 50%
- **Hunger**: Decreases over time (eat to maintain)
- **Death Condition**: Triggered when health or hunger reaches 0
- **Auto-Reset**: Game resets on death, ready for new run

## 🛠️ Technologies

- **React Native**: Cross-platform mobile development
- **Expo**: Fast development and deployment
- **Three.js**: 3D graphics rendering
- **React Three Fiber**: React integration for Three.js
- **Zustand**: Lightweight state management
- **QR Code**: Repository sharing via QR codes
- **TypeScript**: Type-safe development

## 📱 Supported Platforms

- ✅ Android (APK/AAB)
- ✅ iOS (IPA)
- ✅ Web Browser
- ✅ Windows/macOS/Linux (via Electron wrapper)

## 🎨 Game Features

### Combat
- Switch between Scythe and Axe weapons
- Track weapon durability
- Damage scaling with weapon type

### Survival Loop
1. Gather resources
2. Manage hunger and health
3. Gain experience
4. Level up
5. Unlock new areas/abilities
6. Collect pets

### Progression
- 7 distinct levels with unique titles
- Experience threshold system
- Level-based unlocks (future)

## 🔮 Future Features

- [ ] Multiplayer support
- [ ] Crafting system
- [ ] Enemy AI and combat encounters
- [ ] Skill trees
- [ ] Procedurally generated maps
- [ ] Quest system
- [ ] Achievements and statistics
- [ ] Customizable character skins
- [ ] Seasonal events

## 📝 License

MIT License - See LICENSE file for details

## 👨‍💻 Author

**Moazzam Farooq**
- GitHub: [@moazzamfarooq159-oss](https://github.com/moazzamfarooq159-oss)
- Repository: [mk-survival](https://github.com/moazzamfarooq159-oss/mk-survival)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

For issues, questions, or suggestions, please open an [issue on GitHub](https://github.com/moazzamfarooq159-oss/mk-survival/issues).

---

**Play. Survive. Thrive.** 🎮🌍

Generated with ❤️ for survival game enthusiasts
