import MainLeft from "./MainLeft";
import MainCenter from "./MainCenter";
import MainRight from "./MainRight";

export default function Home() {
  return (
    <main className="grid grid-cols-3 h-screen bg-black">
      <MainLeft />
      <MainCenter />
      <MainRight />
    </main>
  );
}
