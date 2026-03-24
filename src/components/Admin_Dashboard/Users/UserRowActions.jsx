import { useNavigate } from "react-router-dom";
import { HiDotsVertical } from "react-icons/hi";

const UserRowActions = ({ user }) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    switch (user.role) {
      case "زائر":
        navigate(`/admin/users/visitor/${user.id}`);
        break;

      case "متطوع":
        navigate(`/admin/users/volunteer/${user.id}`);
        break;

      case "محتضن":
        navigate(`/admin/users/incubated/${user.id}`);
        break;

      case "متخرج":
        navigate(`/admin/users/graduated/${user.id}`);
        break;
      case "صاحب فكرة":
        navigate(`/admin/users/idea-owner/${user.id}`);
        break;  

      default:
        navigate(`/admin/users/${user.id}`);
        break;
    }
  };

  return (
    <button
      onClick={handleNavigate}
      className="p-2 cursor-pointer rounded-full hover:bg-gray-100 transition"
    >
      <HiDotsVertical size={20} className="text-gray-600" />
    </button>
  );
};

export default UserRowActions;
