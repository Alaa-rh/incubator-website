const ProfileHeader = ({ profile }) => {
  return (
    <div className="relative bg-main-color text-white py-6 px-25 flex flex-col md:flex-row items-center gap-6">

      {/* صورة المستشار */}
      <img 
        src={profile.image}
        alt={profile.name}
        className="w-32 h-32 rounded-full object-cover"
      />

      {/* المعلومات */}
      <div className="flex-1 flex flex-col gap-2">

        <h2 className="text-2xl font-bold">{profile.name}</h2>
        <p className="text-gray-300">من {profile.city}</p>
        <p className="font-semibold text-lg">{profile.specialty}</p>

        {/* الوصف */}
        <p className="text-gray-300 leading-relaxed">
          {profile.bio}
        </p>

        {/* الروابط */}
        <div className="flex flex-col mt-2 font-medium">
          {profile.github && (
            <a href={profile.github} className="hover:underline">{profile.github}</a>
          )}
          {profile.linkedin && (
            <a href={profile.linkedin} className="hover:underline">{profile.linkedin}</a>
          )}
          {profile.behance && (
            <a href={profile.behance} className="hover:underline">{profile.behance}</a>
          )}
        </div>

      </div>

    </div>
  )
}

export default ProfileHeader
