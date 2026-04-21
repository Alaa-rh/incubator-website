import { useFavorites } from "../../hooks/useFavorites"
import ProjectCard from "../../components/ProjectCard"
import SearchBar from "../../components/SearchBar";
// import { useGetFavoritesQuery } from "../../api/endpoints/favoritesApi";

const FavoritesPage = () => {
  
  // const { data: list = [], isLoading, error } = useGetFavoritesQuery();

  const { favorites } = useFavorites();
  const list = favorites;

  // if (isLoading) return <div>جاري التحميل...</div>
  // if (error) return <div>حدث خطأ</div>

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