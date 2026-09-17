import ModalEarnper from "./modal-earnper";
import ModalEarnperHours from "./modal-earnperHours";

const stats = [
  { label: "Earn per tap", value: "+12", tint: "bg-[#f3c766]" },
  { label: "Coins to level up", value: "10 M", tint: "bg-[#d5d7db]" },
  { label: "Profit per hour", value: "+636", tint: "bg-[#a8db7d]" },
];

const Score = ({
  count,
  setCount,
  setEarnperModal,
  earnperModal,
  setplusTab,
  plusTab,
  modalEarnperHours,
  setModalEarnperHours,
}) => {
  return (
    <section>
      <div className="grid grid-cols-3 gap-2">
        <div
          onClick={() => {
            (setEarnperModal(!earnperModal), setModalEarnperHours(false));
          }}
          className="flex items-center justify-center gap-2 rounded-2xl bg-[#1d2026] px-2 py-3 text-center text-[10px] text-white/80"
        >
          <div>
            <div className="text-[10px] text-white/70">Earn per tap</div>
            <div className="mt-0.5 text-[11px] font-bold text-white">
              +{plusTab}
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center gap-2 rounded-2xl bg-[#1d2026] px-2 py-3 text-center text-[10px] text-white/80">
          <div>
            <div className="text-[10px] text-white/70">Coins to level up</div>
            <div className="mt-0.5 text-[11px] font-bold text-white">+12</div>
          </div>
        </div>
        <div
          onClick={() => {
            (setModalEarnperHours(!modalEarnperHours), setEarnperModal(false));
          }}
          className="flex items-center justify-center gap-2 rounded-2xl bg-[#1d2026] px-2 py-3 text-center text-[10px] text-white/80"
        >
          <div>
            <div className="text-[10px] text-white/70">Profit per hour</div>
            <div className="mt-0.5 text-[11px] font-bold text-white">+12</div>
          </div>
        </div>
      </div>
      <div className="absolute">
        {earnperModal && (
          <ModalEarnper
            setplusTab={setplusTab}
            setEarnperModal={setEarnperModal}
            count={count}
            setCount={setCount}
            setModalEarnperHours={setModalEarnperHours}
          />
        )}
      </div>
      <div className="ModalEarnperHours">
        {modalEarnperHours && (
          <ModalEarnperHours
            count={count}
            setCount={setCount}
            modalEarnperHours={modalEarnperHours}
            setModalEarnperHours={setModalEarnperHours}
            setEarnperModal={setEarnperModal}
          />
        )}
      </div>

      <div className="flex items-center justify-center gap-3 rounded-2xl  px-4 py-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[radial-gradient(circle_at_30%_30%,#fff7d6,#e8c255_42%,#d39d1b_75%)] text-xl shadow-[0_0_18px_rgba(255,214,76,0.7)] ring-2 ring-yellow-300/60">
          💰
        </div>
        <span className="text-[2.2rem] font-black leading-none tracking-tight text-white">
          {count}
        </span>
      </div>
    </section>
  );
};

export default Score;
