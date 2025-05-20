
export const Nav = () => {
    return (
      <nav className="w-full flex justify-center h-16 rd-bg-dark opacity-80">
        <div className="w-full max-w-5xl flex justify-between items-center p-3 px-5 text-sm">
          <div className="flex gap-5 items-center font-semibold">
            <a href={"/"}>Comunidade Fuji Brasil</a>
            <div className="flex items-center gap-2"></div>
          </div>
        </div>
      </nav>
    );
};