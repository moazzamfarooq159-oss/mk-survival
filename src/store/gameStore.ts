import { create } from 'zustand';

export type Level = 'noob' | 'pro' | 'explorer' | 'guide' | 'conqueror' | 'guardian' | 'king';
export type Weapon = 'scythe' | 'axe';

interface Weapon {
  type: Weapon;
  damage: number;
  durability: number;
  maxDurability: number;
}

interface GameState {
  health: number;
  maxHealth: number;
  hunger: number;
  maxHunger: number;
  experience: number;
  level: Level;
  resources: {
    wood: number;
    stone: number;
    food: number;
    gold: number;
  };
  weapons: Weapon[];
  currentWeapon: Weapon | null;
  pets: string[];
  levelThresholds: Record<Level, number>;

  // Actions
  takeDamage: (amount: number) => void;
  heal: (amount: number) => void;
  eat: (amount: number) => void;
  addExperience: (amount: number) => void;
  addResource: (resource: keyof GameState['resources'], amount: number) => void;
  removeResource: (resource: keyof GameState['resources'], amount: number) => void;
  addWeapon: (weapon: Weapon) => void;
  selectWeapon: (weapon: Weapon) => void;
  damageDurability: () => void;
  addPet: (petName: string) => void;
  resetGame: () => void;
}

const LEVEL_THRESHOLDS: Record<Level, number> = {
  noob: 0,
  pro: 100,
  explorer: 300,
  guide: 600,
  conqueror: 1000,
  guardian: 1500,
  king: 2500,
};

export const useGameStore = create<GameState>((set) => ({
  health: 100,
  maxHealth: 100,
  hunger: 100,
  maxHunger: 100,
  experience: 0,
  level: 'noob',
  resources: {
    wood: 0,
    stone: 0,
    food: 10,
    gold: 0,
  },
  weapons: [
    { type: 'scythe', damage: 10, durability: 50, maxDurability: 50 },
    { type: 'axe', damage: 25, durability: 75, maxDurability: 75 },
  ],
  currentWeapon: null,
  pets: [],
  levelThresholds: LEVEL_THRESHOLDS,

  takeDamage: (amount: number) =>
    set((state) => ({
      health: Math.max(0, state.health - amount),
    })),

  heal: (amount: number) =>
    set((state) => ({
      health: Math.min(state.maxHealth, state.health + amount),
    })),

  eat: (amount: number) =>
    set((state) => {
      const foodUsed = Math.min(state.resources.food, amount);
      return {
        hunger: Math.min(state.maxHunger, state.hunger + foodUsed),
        resources: {
          ...state.resources,
          food: state.resources.food - foodUsed,
        },
      };
    }),

  addExperience: (amount: number) =>
    set((state) => {
      let newExp = state.experience + amount;
      let newLevel = state.level;

      const levels = Object.keys(LEVEL_THRESHOLDS) as Level[];
      for (const level of levels.reverse()) {
        if (newExp >= LEVEL_THRESHOLDS[level]) {
          newLevel = level;
          break;
        }
      }

      return {
        experience: newExp,
        level: newLevel,
      };
    }),

  addResource: (resource: keyof GameState['resources'], amount: number) =>
    set((state) => ({
      resources: {
        ...state.resources,
        [resource]: state.resources[resource] + amount,
      },
    })),

  removeResource: (resource: keyof GameState['resources'], amount: number) =>
    set((state) => ({
      resources: {
        ...state.resources,
        [resource]: Math.max(0, state.resources[resource] - amount),
      },
    })),

  addWeapon: (weapon: Weapon) =>
    set((state) => ({
      weapons: [...state.weapons, weapon],
    })),

  selectWeapon: (weapon: Weapon) =>
    set(() => ({
      currentWeapon: weapon,
    })),

  damageDurability: () =>
    set((state) => {
      if (!state.currentWeapon) return state;
      return {
        weapons: state.weapons.map((w) =>
          w.type === state.currentWeapon?.type
            ? { ...w, durability: Math.max(0, w.durability - 1) }
            : w
        ),
      };
    }),

  addPet: (petName: string) =>
    set((state) => ({
      pets: [...state.pets, petName],
    })),

  resetGame: () =>
    set(() => ({
      health: 100,
      hunger: 100,
      experience: 0,
      level: 'noob',
      resources: { wood: 0, stone: 0, food: 10, gold: 0 },
      currentWeapon: null,
      pets: [],
    })),
}));
