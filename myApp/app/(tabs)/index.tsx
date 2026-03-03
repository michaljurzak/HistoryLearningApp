import { Image } from 'expo-image';
import { Platform, StyleSheet,  } from 'react-native';
import {useNavigation} from '@react-navigation/native';

import { HelloWave } from '@/components/hello-wave';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Link } from 'expo-router';
import { Button } from '@react-navigation/elements';



export default function HomeScreen() {
  
  return (

    
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#b49c12', dark: '#c08d1e' }}
      headerImage={
        <Image
          source={require('@/assets/images/index_roman_eagle_bg.png')}
          style={styles.reactLogo}
        />
      }>
 
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Wybierz kategorię</ThemedText>
        <HelloWave />
      </ThemedView>

      <ThemedView style={{flexDirection: 'column',alignItems: 'center', gap: 20}}> {/* glowny kontener */}
      
      <Link href="/explore" >
        <ThemedView style={styles.categoryButton}>
          <ThemedText style={styles.buttonTitle}>Starożytny Rzym</ThemedText>
          <Image
          source={require('@/assets/images/categorybackground_rome.png')}
          style={{ width: '50%', height: '100%', opacity:0.5}}
          contentFit="cover"
          />
        </ThemedView>
      </Link>
      <Link href="/explore" >
        <ThemedView style={[styles.categoryButton,{ backgroundColor: '#4d0a0aff' }]}>
          <ThemedText style={styles.buttonTitle}>Polska Piastów</ThemedText>
          <Image
          source={require('@/assets/images/categorybackground_rome.png')}
          style={{ width: '50%', height: '100%', opacity:0.5}}
          contentFit="cover"
          />
        </ThemedView>
      </Link>
      <Link href="/explore" >
        <ThemedView style={[styles.categoryButton,{ backgroundColor: 'rgb(32, 99, 12)' }]}>
          <ThemedText style={styles.buttonTitle}>II Wojna Światowa</ThemedText>
          <Image
          source={require('@/assets/images/categorybackground_rome.png')}
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
     
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 1: Try it</ThemedText>
        <ThemedText>
          Edit <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText> to see changes.
          Press{' '}
          <ThemedText type="defaultSemiBold">
            {Platform.select({
              ios: 'cmd + d',
              android: 'cmd + m',
              web: 'F12',
            })}
          </ThemedText>{' '}
          to open developer tools.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <Link href="/modal">
          <Link.Trigger>
            <ThemedText type="subtitle">Step 2: Explore</ThemedText>
          </Link.Trigger>
          <Link.Preview />
          <Link.Menu>
            <Link.MenuAction title="Action" icon="cube" onPress={() => alert('Action pressed')} />
            <Link.MenuAction
              title="Share"
              icon="square.and.arrow.up"
              onPress={() => alert('Share pressed')}
            />
            <Link.Menu title="More" icon="ellipsis">
              <Link.MenuAction
                title="Delete"
                icon="trash"
                destructive
                onPress={() => alert('Delete pressed')}
              />
            </Link.Menu>
          </Link.Menu>
        </Link>

        <ThemedText>
          {`Tap the Explore tab to learn more about what's included in this starter app.`}
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 3: Get a fresh start</ThemedText>
        <ThemedText>
          {`When you're ready, run `}
          <ThemedText type="defaultSemiBold">npm run reset-project</ThemedText> to get a fresh{' '}
          <ThemedText type="defaultSemiBold">app</ThemedText> directory. This will move the current{' '}
          <ThemedText type="defaultSemiBold">app</ThemedText> to{' '}
          <ThemedText type="defaultSemiBold">app-example</ThemedText>.
        </ThemedText>
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
    height: 178,
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
  
});
