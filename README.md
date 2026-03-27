# 🧪 Lab Escape - Chemistry Infinite Runner

A neon-styled infinite runner game with a chemistry laboratory theme. Run through the lab, avoid obstacles, and collect chemical elements!

![Game Preview](https://img.shields.io/badge/status-in%20development-yellow)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)

## 🎮 Game Overview

**Lab Escape** is an infinite runner game where you play as a scientist escaping from a chemistry laboratory. Navigate through the lab, jump over dangerous obstacles, and see how far you can go!

### 🎯 How to Play

- **⬅️ ➡️ Arrow Keys**: Move left and right
- **⬆️ Up Arrow**: Jump over obstacles
- **⬇️ Down Arrow**: Slide under flying equipment (⚠️ *Not implemented*)
- **🧪 Collect Elements**: Gather chemical elements to increase your score (⚠️ *Not implemented*)
- **⚡ Power-ups**: Use Shield & Magnet power-ups (⚠️ *Not implemented*)
- **🚫 Avoid**: Stay away from acids, burners, and glassware

## ✨ Features

### ✅ Working Features

- **Smooth Gameplay**: 60 FPS game loop with delta time for consistent speed
- **Player Movement**: Left/right movement and jumping mechanics
- **Obstacle System**: Random obstacle spawning with collision detection
- **Score Tracking**: Real-time score display during gameplay
- **Responsive Design**: Canvas resizes to fit the window
- **Beautiful UI**: Neon lab aesthetic with glowing effects
- **Game Screens**: 
  - Start screen with instructions
  - Game over screen with final stats
  - Pause screen UI (visual only)
- **Animations**: 
  - Animated flask with bubbling liquid
  - Grid scroll background animation
  - Element pulse animations
  - Flask glow effects
- **High Score**: Saved to localStorage (loaded but not updated during gameplay)

### ⚠️ Features Not Working / Not Implemented

The following features are mentioned in the game UI or instructions but are **not currently functional** in the code:

1. **Slide Mechanic** ❌
   - The instructions mention sliding under flying equipment
   - No slide key binding or animation implemented
   - The `slide` key exists in the keys object but is never used

2. **Collectible Elements** ❌
   - UI shows "ELEMENTS" display in the HUD
   - Instructions mention collecting chemical elements
   - No collectible spawning, collection logic, or element icons displayed
   - `collectibles` array exists but is never populated

3. **Power-ups (Shield & Magnet)** ❌
   - HUD has power-up indicators for Shield 🛡️ and Magnet 🧲
   - Instructions mention using power-ups
   - No power-up spawning, collection, or effect implementation
   - `powerups` array exists but is never populated
   - Power-up timers and indicators are never activated

4. **Pause Functionality** ❌
   - Pause screen exists in HTML
   - No pause button or keyboard shortcut implemented
   - No pause/resume logic in the game code

5. **High Score Update** ❌
   - High score is loaded from localStorage
   - Displayed in the HUD
   - Never updated when player beats their high score
   - `highScore` property is never modified during gameplay

6. **Distance Tracking** ❌
   - Game over screen shows "Distance" stat
   - `distance` property exists but is never incremented
   - Always displays "0m" on game over

7. **Collected Elements Display** ❌
   - Game over screen has "Collected Elements" section
   - `collectedElements` array exists but is never populated
   - Section remains empty on game over

8. **Different Obstacle Types** ❌
   - Instructions mention acids, burners, and glassware
   - Only generic red square obstacles are spawned
   - No visual variety or different obstacle behaviors

9. **Flying Obstacles** ❌
   - Instructions mention "flying equipment" to slide under
   - All obstacles spawn at ground level
   - No airborne obstacle implementation

10. **Quit Button** ❌
    - Pause screen has a "QUIT" button
    - No onclick handler or functionality attached

## 📁 Project Structure

```
Lab Escape/
├── index.html      # Game HTML structure and UI screens
├── script.js       # Game logic and mechanics
├── style.css       # Styling and animations
└── README.md       # This file
```

## 🚀 Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Edge, Safari)
- No additional dependencies required!

### Installation

1. Clone or download this repository
2. Open `index.html` in your web browser
3. Click "PLAY" to start the game!

```bash
# If using git
git clone <repository-url>
cd "Lab Escape"
open index.html
```

### Running Locally

Simply open the `index.html` file in any modern web browser. No server setup required!

## 🎨 Design Features

- **Neon Aesthetic**: Cyan, magenta, and purple color scheme
- **Glass Morphism**: Frosted glass effect on UI elements
- **Custom Fonts**: Orbitron and Rajdhani from Google Fonts
- **Smooth Animations**: CSS keyframe animations for visual effects
- **Responsive Layout**: Adapts to different screen sizes

## 🔧 Technical Details

- **Pure JavaScript**: No frameworks or libraries
- **Canvas Rendering**: HTML5 Canvas for game graphics
- **RequestAnimationFrame**: Smooth 60 FPS game loop
- **LocalStorage**: High score persistence
- **CSS Variables**: Easy theming and color management
- **Backdrop Filter**: Modern glass blur effects

## 🐛 Known Issues

1. Player can move off-screen (no boundary checking)
2. Obstacles only spawn at one height (ground level)
3. No sound effects or music
4. No mobile touch controls
5. Game speed doesn't increase over time (stays at initial speed)

## 🔮 Future Improvements

- [ ] Implement slide mechanic
- [ ] Add collectible chemical elements
- [ ] Implement power-up system (Shield, Magnet)
- [ ] Add pause functionality
- [ ] Update high score on new record
- [ ] Track and display distance traveled
- [ ] Add different obstacle types with unique visuals
- [ ] Add flying obstacles
- [ ] Implement quit button functionality
- [ ] Add sound effects and background music
- [ ] Add mobile touch controls
- [ ] Increase game speed progressively
- [ ] Add player boundary checking
- [ ] Add more power-up types

## 📝 License

This project is open source and available for personal and educational use.

## 👨‍💻 Developer

Created with ❤️ as a chemistry-themed infinite runner game.

---

**Note**: This game is currently in development. Several features shown in the UI are not yet functional. See the "Features Not Working" section above for details.
