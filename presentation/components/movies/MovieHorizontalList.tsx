import {
  FlatList,
  NativeScrollEvent,
  NativeSyntheticEvent,
  Text,
  View,
} from "react-native";
import { Movie } from "@/infrastructure/interfaces/movie.interface";
import MoviePoster from "./MoviePoster";
import { useEffect, useRef } from "react";

interface Props {
  title?: string;
  movies: Movie[];
  classname?: string;

  loadNextPage?: () => void;
}

const MovieHorizontalList = ({
  title,
  movies,
  classname,
  loadNextPage,
}: Props) => {
  const isLoading = useRef(false);

  useEffect(() => {
    setTimeout(() => {
      isLoading.current = false;
    }, 200);
  }, [movies]);

  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    if (isLoading.current) return;

    const { contentOffset, layoutMeasurement, contentSize } = event.nativeEvent;

    const isEndReached =
      contentOffset.x + layoutMeasurement.width + 600 >= contentSize.width;

    if (!isEndReached) return;

    isLoading.current = true;

    console.log("Cargar siguientes películas");
    loadNextPage && loadNextPage();
  };

  return (
    <View className={`${classname}`}>
      {title && <Text className="text-3xl font-bold px-4">{title}</Text>}

      <FlatList
        horizontal
        className="py-4"
        data={movies}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, i) => `${item.id}-${i}`}
        renderItem={({ item }) => (
          <MoviePoster id={item.id} poster={item.poster} smallPoster />
        )}
        onScroll={onScroll}
      />
    </View>
  );
};
export default MovieHorizontalList;
