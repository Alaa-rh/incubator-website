import { useFavorites } from "../../hooks/useFavorites"
import ProjectCard from "../../components/ProjectCard"
import SearchBar from "../../components/SearchBar";

const FavoritesPage = () => {
  // const { data: favoritesFromApi : list =[], isLoading } = useGetFavoritesQuery();

  const { favorites } = useFavorites();

  // const list = favoritesFromApi || favorites;
  const list = favorites;

  return (
    <div className="container mt-10">
      <SearchBar />

      {list.length === 0 ? (
        <p>لا يوجد مشاريع مفضلة بعد.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {list.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              showImage={false}
              showFavorites={true}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default FavoritesPage