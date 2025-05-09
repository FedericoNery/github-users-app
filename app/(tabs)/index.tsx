import {
  ActivityIndicator,
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  useColorScheme
} from "react-native";

import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useFetchUsersList } from "@/hooks/users/home/useFetchUsersList";
import { useRouter } from "expo-router";


type ItemProps = { username: string; avatarUrl: string };

const Item = ({ username, avatarUrl }: ItemProps) => {
  const router = useRouter();
  const colorScheme = useColorScheme() ?? 'light';

  return <Pressable
    onPress={() => {
      router.push({ pathname: '/detail', params: { name: username } });
    }}
    style={({ pressed }) => [
      {
        backgroundColor: pressed ? "rgb(45, 46, 48)" : "dark",
      },
      styles.wrapperCustom,
    ]}
  >
    <ThemedView style={{...styles.item, backgroundColor: colorScheme}}>
      <Image
        style={styles.avatar}
        source={
          avatarUrl
            ? { uri: avatarUrl }
            : require("@/assets/images/partial-react-logo.png")
        }
      />
      <ThemedText type="default">{username}</ThemedText>
    </ThemedView>
  </Pressable>
}
  

export default function HomeScreen() {
  const { isLoading, isError, data } = useFetchUsersList()
  const colorScheme = useColorScheme() ?? 'light';

  return (
    <ParallaxScrollView>
      {isLoading && <ActivityIndicator />}
      {!isLoading && !isError && data.length !== 0 && (
        <FlatList
          style={{ display: "flex", flexDirection: "column", backgroundColor: colorScheme }}
          data={data}
          renderItem={({ item }) => (
            <Item username={item.login} avatarUrl={item.avatar_url} />
          )}
          keyExtractor={(item) => item.id}
        />
      )}

      {/* <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Welcome!</ThemedText>
        <HelloWave />
      </ThemedView> */}
      {/* <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 1: Try it</ThemedText>
        <ThemedText>
          Edit <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText> to see changes.
          Press{' '}
          <ThemedText type="defaultSemiBold">
            {Platform.select({
              ios: 'cmd + d',
              android: 'cmd + m',
              web: 'F12'
            })}
          </ThemedText>{' '}
          to open developer tools.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 2: Explore</ThemedText>
        <ThemedText>
          Tap the Explore tab to learn more about what's included in this starter app.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 3: Get a fresh start</ThemedText>
        <ThemedText>
          When you're ready, run{' '}
          <ThemedText type="defaultSemiBold">npm run reset-project</ThemedText> to get a fresh{' '}
          <ThemedText type="defaultSemiBold">app</ThemedText> directory. This will move the current{' '}
          <ThemedText type="defaultSemiBold">app</ThemedText> to{' '}
          <ThemedText type="defaultSemiBold">app-example</ThemedText>.
        </ThemedText>
      </ThemedView> */}
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
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
    position: "absolute",
  },
  item: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 100,
  },
  wrapperCustom: {
    borderRadius: 8,
    padding: 6,
  },
});
