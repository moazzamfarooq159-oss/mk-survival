import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useGameStore } from '../store/gameStore';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  statsContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    borderColor: '#FFD700',
    borderWidth: 2,
  },
  statRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 8,
    alignItems: 'center',
  },
  label: {
    color: '#FFD700',
    fontSize: 16,
    fontWeight: 'bold',
  },
  value: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  bar: {
    height: 20,
    backgroundColor: '#333',
    borderRadius: 10,
    overflow: 'hidden',
    marginVertical: 5,
  },
  healthBar: {
    height: '100%',
    backgroundColor: '#00FF00',
  },
  hungerBar: {
    height: '100%',
    backgroundColor: '#FF8C00',
  },
  expBar: {
    height: '100%',
    backgroundColor: '#00CED1',
  },
  levelBadge: {
    backgroundColor: '#FF6B6B',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
    alignSelf: 'flex-start',
    marginVertical: 10,
  },
  levelText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  section: {
    marginVertical: 10,
  },
  sectionTitle: {
    color: '#FFD700',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  weaponContainer: {
    backgroundColor: 'rgba(50, 50, 50, 0.8)',
    borderRadius: 8,
    padding: 10,
    marginVertical: 5,
  },
  weaponText: {
    color: '#FFFFFF',
    fontSize: 14,
  },
  resourceGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  resourceBox: {
    width: '48%',
    backgroundColor: 'rgba(50, 50, 50, 0.8)',
    borderRadius: 8,
    padding: 10,
    marginVertical: 5,
    alignItems: 'center',
  },
  resourceName: {
    color: '#FFD700',
    fontSize: 12,
    fontWeight: 'bold',
  },
  resourceCount: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 5,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  button: {
    backgroundColor: '#FF6B6B',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 8,
    flex: 1,
    marginHorizontal: 5,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  petContainer: {
    backgroundColor: 'rgba(50, 50, 50, 0.8)',
    borderRadius: 8,
    padding: 10,
    marginVertical: 5,
  },
  petText: {
    color: '#FFA500',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export const GameUI: React.FC = () => {
  const {
    health,
    maxHealth,
    hunger,
    maxHunger,
    experience,
    level,
    resources,
    weapons,
    currentWeapon,
    pets,
    takeDamage,
    heal,
    eat,
    addExperience,
    addResource,
    addPet,
    selectWeapon,
  } = useGameStore();

  const healthPercent = (health / maxHealth) * 100;
  const hungerPercent = (hunger / maxHunger) * 100;
  const expPercent = (experience / 2500) * 100;

  return (
    <ScrollView style={styles.container}>
      {/* Level Badge */}
      <View style={styles.levelBadge}>
        <Text style={styles.levelText}>⭐ Level: {level.toUpperCase()}</Text>
      </View>

      {/* Stats Section */}
      <View style={styles.statsContainer}>
        <View style={styles.statRow}>
          <Text style={styles.label}>❤️ Health:</Text>
          <Text style={styles.value}>{Math.floor(health)}/{maxHealth}</Text>
        </View>
        <View style={styles.bar}>
          <View style={[styles.healthBar, { width: `${healthPercent}%` }]} />
        </View>

        <View style={styles.statRow}>
          <Text style={styles.label}>🍖 Hunger:</Text>
          <Text style={styles.value}>{Math.floor(hunger)}/{maxHunger}</Text>
        </View>
        <View style={styles.bar}>
          <View style={[styles.hungerBar, { width: `${hungerPercent}%` }]} />
        </View>

        <View style={styles.statRow}>
          <Text style={styles.label}>⚡ Experience:</Text>
          <Text style={styles.value}>{experience}/2500</Text>
        </View>
        <View style={styles.bar}>
          <View style={[styles.expBar, { width: `${expPercent}%` }]} />
        </View>
      </View>

      {/* Resources Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>📦 Resources</Text>
        <View style={styles.resourceGrid}>
          <View style={styles.resourceBox}>
            <Text style={styles.resourceName}>🌳 Wood</Text>
            <Text style={styles.resourceCount}>{resources.wood}</Text>
          </View>
          <View style={styles.resourceBox}>
            <Text style={styles.resourceName}>🪨 Stone</Text>
            <Text style={styles.resourceCount}>{resources.stone}</Text>
          </View>
          <View style={styles.resourceBox}>
            <Text style={styles.resourceName}>🍎 Food</Text>
            <Text style={styles.resourceCount}>{resources.food}</Text>
          </View>
          <View style={styles.resourceBox}>
            <Text style={styles.resourceName}>💎 Gold</Text>
            <Text style={styles.resourceCount}>{resources.gold}</Text>
          </View>
        </View>
      </View>

      {/* Weapons Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>⚔️ Weapons</Text>
        {weapons.map((weapon, idx) => (
          <TouchableOpacity key={idx} style={styles.weaponContainer} onPress={() => selectWeapon(weapon)}>
            <Text style={styles.weaponText}>
              {weapon.type.toUpperCase()} - Damage: {weapon.damage} | Durability: {weapon.durability}/{weapon.maxDurability}
              {currentWeapon?.type === weapon.type ? ' ✓' : ''}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Pets Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>🐾 Pets ({pets.length})</Text>
        {pets.length === 0 ? (
          <Text style={styles.weaponText}>No pets yet. Find pets in the wild!</Text>
        ) : (
          pets.map((pet, idx) => (
            <View key={idx} style={styles.petContainer}>
              <Text style={styles.petText}>🐶 {pet}</Text>
            </View>
          ))
        )}
      </View>

      {/* Action Buttons */}
      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.button} onPress={() => heal(20)}>
          <Text style={styles.buttonText}>🏥 Heal</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => eat(10)}>
          <Text style={styles.buttonText}>🍖 Eat</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => addExperience(50)}>
          <Text style={styles.buttonText}>⚡ Gain XP</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.button} onPress={() => addResource('wood', 10)}>
          <Text style={styles.buttonText}>🌳 +Wood</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => addResource('stone', 10)}>
          <Text style={styles.buttonText}>🪨 +Stone</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => addPet(`Pet${pets.length + 1}`)}>
          <Text style={styles.buttonText}>🐾 Pet</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};
