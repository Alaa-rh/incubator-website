import { useFavorites } from "../hooks/useFavorites"
import ProjectCard from "../components/ProjectCard"
import SearchBar from "../components/SearchBar";

const FavoritesPage = () => {
  const { favorites } = useFavorites()

  return (
    <div className="container mt-10">
      <SearchBar />
      {favorites.length === 0 ? (
        <p>لا يوجد مشاريع مفضلة بعد.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {favorites.map((project) => (
            <ProjectCard key={project.id} project={project} showImage={false} showFavorites={true} />
          ))}
        </div>
      )}
    </div>
  )
}
export default FavoritesPage