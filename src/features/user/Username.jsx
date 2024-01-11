import { useSelector } from 'react-redux';

function Username() {
  const username = useSelector((state) => state.user.username);
  const avatar = (
    <img className="rounded-xl" src="https://i.pravatar.cc/40" alt="avatar" />
  );

  if (!username) return null;
  return (
    <div className="hidden text-sm font-semibold md:block">
      {avatar} {username}
    </div>
  );
}

export default Username;
