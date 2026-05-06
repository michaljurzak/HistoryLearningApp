import { Image } from 'expo-image';
import { Platform, StyleSheet,  } from 'react-native';
import {useNavigation} from '@react-navigation/native';

import { HelloWave } from '@/components/hello-wave';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Link } from 'expo-router';
import { Button } from '@react-navigation/elements';

import { useUser } from '../context/UserContext';

export default function HomeScreen() {
  
  const { exp } = useUser(); // Get the real live EXP
  
  // Logic for leveling (e.g., 1000 XP per level)
  const currentLevel = Math.floor(exp / 1000) + 1;
  const expInCurrentLevel = exp % 1000;
  const progress = (expInCurrentLevel / 1000) * 100;
  return (

    
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#3d12b4', dark: '#1a008b' }}
      headerImage={
        <Image
          source={require('@/assets/images/eagle_icon.png')}
          style={styles.reactLogo}
        />
      }>
        <ThemedView style={styles.expContainer}>
        <ThemedView style={styles.expHeader}>
          <ThemedText type="defaultSemiBold">Poziom {currentLevel}</ThemedText>
          <ThemedText style={styles.expTextSmall}>{expInCurrentLevel} / 1000 XP</ThemedText>
        </ThemedView>
        <ThemedView style={styles.expTrack}>
          <ThemedView style={[styles.expFill, { width: `${progress}%` }]} />
        </ThemedView>
      </ThemedView>
 
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Wybierz kategorię</ThemedText>
        <HelloWave />
      </ThemedView>

      <ThemedView style={{flexDirection: 'column',alignItems: 'center', gap: 20}}> {/* glowny kontener */}
      
      <Link href="/quiz/rome" >
        <ThemedView style={styles.categoryButton}>
          <ThemedText style={styles.buttonTitle}>Starożytny Rzym</ThemedText>
          <Image
          source={require('@/assets/images/categorybackground_rome.png')}
          style={{ width: '100%', height: '100%', opacity:0.5}}
          contentFit='cover'
          />
        </ThemedView>
      </Link>
      <Link href="/explore" >
        <ThemedView style={[styles.categoryButton,{ backgroundColor: '#4d0a0aff' }]}>
          <ThemedText style={styles.buttonTitle}>Polska Piastów</ThemedText>
          <Image
          source={require('@/assets/images/categorybackground_piast.png')}
          style={{ width: '50%', height: '100%', opacity:0.5}}
          contentFit="cover"
          />
        </ThemedView>
      </Link>
      <Link href="/explore" >
        <ThemedView style={[styles.categoryButton,{ backgroundColor: 'rgb(32, 99, 12)' }]}>
          <ThemedText style={styles.buttonTitle}>II Wojna Światowa</ThemedText>
          <Image
          source={require('@/assets/images/categorybackground_ww2.png')}
          style={{ width: '50%', height: '100%', opacity:0.5}}
          contentFit="cover"
          />
        </ThemedView>
      </Link>
      <ThemedView>
        <ThemedText type="subtitle">
          Więcej kategorii wkrótce...
        </ThemedText>
      </ThemedView>

    </ThemedView>
     
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: '100%',
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  buttonTitle: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
     width: '50%',
  },
  categoryButton:{
    backgroundColor: '#940c0cff',
    borderRadius: 8,
    paddingLeft: 20,
    marginTop: 10,
    height: 120,
    width: '100%',
    overflow: 'hidden',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  //exp bar
  expContainer: {
    padding: 15,
    borderRadius: 12,
    backgroundColor: 'rgba(0,0,0,0.05)', // Subtle background
    marginVertical: 10,
  },
  expHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginBottom: 6,
  },
  expTextSmall: {
    fontSize: 12,
    opacity: 0.7,
  },
  expTrack: {
    height: 10,
    backgroundColor: '#e0e0e0',
    borderRadius: 5,
    overflow: 'hidden',
  },
  expFill: {
    height: '100%',
    backgroundColor: '#4CAF50', // Nice "level up" green
    borderRadius: 5,
  },
  
});
