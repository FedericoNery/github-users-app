import { Link, Stack, useLocalSearchParams } from "expo-router";
import { ActivityIndicator, Image, StyleSheet } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { AntDesign, Entypo, Feather, MaterialIcons } from "expo-vector-icons";
import { useFetchUserDetails } from "@/hooks/users/details/useFetchUserDetails";
import { useFavouriteUsers } from "@/hooks/users/details/useFavouriteUsers";
import FavouriteButton from "@/components/buttons/FavouriteButton";

export default function DetailScreen() {
  const params = useLocalSearchParams();
  const { name: usernameParam } = params as { name: string };

  const { isLoading, isError, data } = useFetchUserDetails(usernameParam); 
  const { isFavouriteUser, toggleFavouriteUser } = useFavouriteUsers(); 
  const {
    login,
    id,
    avatar_url,
    followers,
    following,
    name,
    twitter_username,
    location,
    email,
  } = data || {};

  const isFavourite = data ? isFavouriteUser(login) : false;

  return (
    <>
      {isLoading && <ActivityIndicator />}
      {!isLoading && !isError && data !== null && (
        <>
          <Stack.Screen options={{ title: "Detail" }} />
          <ThemedView style={styles.container}>
            <Image
              style={styles.avatar}
              source={
                avatar_url
                  ? { uri: avatar_url }
                  : require("@/assets/images/partial-react-logo.png")
              }
            />
            <ThemedText type="title">{name}</ThemedText>
            <ThemedText type="defaultSemiBold" darkColor="#3b4345">{login}</ThemedText>
            <ThemedView style={styles.twitter}>
              <AntDesign name="twitter" size={24} color="#3b4345" />
              <ThemedText type="defaultSemiBold" lightColor="#3b4345" darkColor="#3b4345">{twitter_username}</ThemedText>
            </ThemedView>

            {location && (
              <ThemedView style={styles.location}>
                <Entypo name="location-pin" size={24} color="#3b4345" />
                <ThemedText type="defaultSemiBold" darkColor="#3b4345">{location}</ThemedText>
              </ThemedView>
            )}
            <ThemedView style={styles.follow}>
              <Feather name="user" size={24} color="#3b4345" />
              <ThemedText type="defaultSemiBold">{following}</ThemedText>
              <ThemedText type="defaultSemiBold" darkColor="#3b4345">following</ThemedText>
              <ThemedText type="defaultSemiBold">• {followers}</ThemedText>
              <ThemedText type="defaultSemiBold" darkColor="#3b4345">followers</ThemedText>

            </ThemedView>

            {email && (
              <ThemedView style={styles.email}>
                <MaterialIcons name="email" size={24} color="white" />
                <ThemedText type="title">{email}</ThemedText>
              </ThemedView>
            )}

            {
              <ThemedView style={styles.favourite}>
                <FavouriteButton isFavourite={isFavourite} setIsFavourite={() => toggleFavouriteUser(login)} />
              </ThemedView>
            }

            <Link href="/" style={styles.link}>
              <ThemedText type="link">Back home</ThemedText>
            </Link>
          </ThemedView>
        </>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    gap: 4,
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  avatar: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },
  location: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 4,
  },
  twitter: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 4,
  },
  follow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 4
  },
  email: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  favourite:{
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 4,
  }
});
