import MovieCast from "@/presentation/components/movie/MovieCast";
import MovieDescription from "@/presentation/components/movie/MovieDescription";
import MovieHeader from "@/presentation/components/movie/MovieHeader";
import { useMovie } from "@/presentation/hooks/useMovie";
import { useLocalSearchParams } from "expo-router";
import { View, Text, ActivityIndicator, ScrollView } from "react-native";

const MovieScreen = () => {
  const { id } = useLocalSearchParams();

  const { movieQuery, castQuery } = useMovie(+id);

  if (movieQuery.isLoading || !movieQuery.data) {
    return (
      <View className="flex flex-1 justify-center items-center">
        <Text className="mb-4">Espere por favor</Text>
        <ActivityIndicator color="red" size={40} />
      </View>
    );
  }
  return (
    <ScrollView>
      <View className="pb-10">
        <MovieHeader
          originalTitle={movieQuery.data.originalTitle}
          poster={movieQuery.data.poster}
          title={movieQuery.data.title}
        />

        <MovieDescription movie={movieQuery.data} />
        <MovieCast cast={castQuery.data ?? []} />
      </View>
    </ScrollView>
  );
};

export default MovieScreen;
