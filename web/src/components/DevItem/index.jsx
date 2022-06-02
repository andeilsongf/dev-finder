function DevItem({ dev }) {
  return (
    <li className="bg-white p-5 ">
      <header className="flex flex-row items-center">
        <img
          src={dev.avatar_url}
          alt={dev.name}
          className="w-14 h-14 rounded-full"
        />
        <div className="ml-3 flex-col flex">
          <strong className="text-base text-[#333]">{dev.name}</strong>
          <span className="text-sm text-[#999] mt-[2px]">
            {dev.techs.join(", ")}
          </span>
        </div>
      </header>

      <p className="text-[#666] text-sm leading-5 my-3">{dev.bio}</p>
      <a
        href={`https://github.com/${dev.github_username}`}
        className="text-[#8e4dff] text-sm no-underline"
      >
        Acessar perfil no Github
      </a>
    </li>
  );
}

export default DevItem;