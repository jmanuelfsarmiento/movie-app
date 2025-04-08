import { View, Text, ActivityIndicator, ScrollView } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { useMovies } from "@/presentation/hooks/useMovies";
import MainSlideShow from "@/presentation/components/movies/MainSlideShow";
import MovieHorizontalList from "@/presentation/components/movies/MovieHorizontalList";

const HomeScreen = () => {
  const safeArea = useSafeAreaInsets();
  const { nowPlayingQuery, popularQuery, topRatedQuery, upcomingQuery } =
    useMovies();

  if (nowPlayingQuery.isLoading) {
    return (
      <View className="justify-center items-center flex-1">
        <ActivityIndicator color="red" size={40} />
      </View>
    );
  }

  return (
    <ScrollView>
      <View className="mt-2 pb-10" style={{ paddingTop: safeArea.top }}>
        <Text className="text-3xl font-bold px-4 mb-2">Movies App</Text>

        {/* Carrusel de imágenes */}
        <MainSlideShow movies={nowPlayingQuery.data ?? []} />

        {/* Popular */}
        <MovieHorizontalList
          title="Populares"
          movies={popularQuery.data?.pages.flat() ?? []}
          classname="mb-5"
          loadNextPage={popularQuery.fetchNextPage}
        />

        {/* Top Rated */}
        <MovieHorizontalList
          title="Mejor Valoradas "
          movies={topRatedQuery.data?.pages.flat() ?? []}
          classname="mb-5"
          loadNextPage={topRatedQuery.fetchNextPage}
        />

        {/* Upcoming */}
        <MovieHorizontalList
          title="Próximas"
          movies={upcomingQuery.data?.pages.flat() ?? []}
          classname="mb-5"
          loadNextPage={upcomingQuery.fetchNextPage}
        />
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
