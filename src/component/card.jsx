import { Link } from "react-router-dom";

const UserCard = (user, key) => {
  console.log(user);
  function handleClick() {
    // console.log(user?.data?.id);
    localStorage.setItem("user-id", user?.data?.id);
    navigation("/user-detail");
  }

  return (
    <Link
      to="/user-detail"
      onClick={handleClick}
      className="w-full max-w-md rounded-2xl border border-gray-200 bg-white p-6 shadow-lg"
    >
      {/* Header */}
      <div className="mb-6 flex items-center gap-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-xl font-bold text-white">
          {user?.data?.name?.charAt(0)}
        </div>

        <div>
          <h2 className="text-xl font-bold text-gray-900">
            {user?.data?.name}
          </h2>

          <p className="text-sm text-gray-500">@{user?.data?.username}</p>
        </div>
      </div>

      {/* Contact */}
      <div className="space-y-3 border-b border-gray-200 pb-5">
        <div>
          <p className="text-xs font-medium uppercase text-gray-400">Email</p>

          <a
            href={`mailto:${user?.data?.email}`}
            className="text-sm text-blue-600 hover:underline"
          >
            {user?.data?.email}
          </a>
        </div>

        <div>
          <p className="text-xs font-medium uppercase text-gray-400">Phone</p>

          <p className="text-sm text-gray-700">{user?.data?.phone}</p>
        </div>

        <div>
          <p className="text-xs font-medium uppercase text-gray-400">Website</p>

          <a
            href={`https://${user?.data?.website}`}
            target="_blank"
            rel="noreferrer"
            className="text-sm text-blue-600 hover:underline"
          >
            {user?.data?.website}
          </a>
        </div>
      </div>

      {/* Address */}
      <div className="py-5">
        <h3 className="mb-3 text-sm font-semibold text-gray-900">Address</h3>

        <p className="text-sm leading-6 text-gray-600">
          {user?.data?.address?.street}, {user?.data?.address?.suite}
          <br />
          {user?.data?.address?.city}, {user?.data?.address?.zipcode}
        </p>

        <p className="mt-2 text-xs text-gray-400">
          Coordinates: {user?.data?.address?.geo?.lat},{" "}
          {user?.data?.address?.geo?.lng}
        </p>
      </div>

      {/* Company */}
      <div className="rounded-xl bg-gray-50 p-4">
        <p className="text-xs font-medium uppercase text-gray-400">Company</p>

        <h3 className="mt-1 font-semibold text-gray-900">
          {user?.data?.company?.name}
        </h3>

        <p className="mt-2 text-sm italic text-gray-500">
          "{user?.data?.company?.catchPhrase}"
        </p>

        <p className="mt-2 text-xs text-gray-400">{user?.data?.company?.bs}</p>
      </div>
    </Link>
  );
};

export default UserCard;
