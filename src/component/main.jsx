const Main = ({ setCount, count, plusTab, limitCount, setlimitCount }) => {
  function earnCoin() {
    if (limitCount > 0) {
      setCount((count += plusTab));
      setlimitCount((e) => e - 1);
    }
  }
  return (
    <section id="main" className="mt-6 z-10">
      <div
        onClick={earnCoin}
        className={
          limitCount > 0
            ? "mx-auto flex w-[300px] items-center justify-center rounded-full bg-[radial-gradient(circle,_#4e78ff_0%,_#375ae2_35%,_#19274d_100%)] active:scale-[1.05] group p-4 shadow-[0_0_35px_rgba(69,121,255,0.45)]"
            : "mx-auto flex w-[300px] items-center justify-center rounded-full bg-[radial-gradient(circle,_#4e78ff_0%,_#375ae2_35%,_#19274d_100%)] group p-4 shadow-[0_0_35px_rgba(69,121,255,0.45)]"
        }
      >
        <img
          className={limitCount > 0 ? "group-active:scale-[1.075]" : ""}
          src="./public/hero.png"
          alt=""
        />
      </div>

      <div className="mt-5 flex items-center justify-between gap-3">
        <div className="inline-flex items-center gap-2 rounded-full bg-[#1d2026] px-3 py-2 text-sm font-semibold text-white/90 ring-1 ring-white/10">
          <span className="text-base text-[#f6d849]">⚡</span>
          6500 / {limitCount}
        </div>
        <button className="rounded-full bg-[#f5c54d] px-4 py-2 text-xs font-extrabold uppercase tracking-wide text-[#1a1a1a] shadow-[0_4px_12px_rgba(245,197,77,0.45)]">
          Boost
        </button>
      </div>
    </section>
  );
};

export default Main;
