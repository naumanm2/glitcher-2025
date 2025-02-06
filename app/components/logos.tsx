import LogoRow from "./logo-row";

export default function Logos() {
  return (
    <div>
      <div className="inline-flex flex-row w-full gap-4 overflow-hidden">
          <LogoRow />
          <LogoRow />
      </div>
    </div>
  );
}
