import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { GameScene } from './src/components/GameScene';
import { GameUI } from './src/components/GameUI';
import { useGameStore } from './src/store/gameStore';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  gameContainer: {
    flex: 0.65,
  },
  uiContainer: {
    flex: 0.35,
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
  },
});

export default function App() {
  const { hunger, health } = useGameStore();

  useEffect(() => {
    // Simulate hunger decrease over time
    const hungerInterval = setInterval(() => {
      useGameStore.setState((state) => ({
        hunger: Math.max(0, state.hunger - 0.5),
      }));
    }, 5000);

    // Health regeneration if fed
    const healthInterval = setInterval(() => {
      const state = useGameStore.getState();
      if (state.hunger > 50 && state.health < state.maxHealth) {
        useGameStore.setState((s) => ({
          health: Math.min(s.maxHealth, s.health + 1),
        }));
      }
    }, 3000);

    // Death check
    const deathInterval = setInterval(() => {
      const state = useGameStore.getState();
      if (state.health <= 0 || state.hunger <= 0) {
        state.resetGame();
      }
    }, 1000);

    return () => {
      clearInterval(hungerInterval);
      clearInterval(healthInterval);
      clearInterval(deathInterval);
    };
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.gameContainer}>
        <GameScene showUI={false} />
      </View>
      <View style={styles.uiContainer}>
        <GameUI />
      </View>
    </View>
  );
}
