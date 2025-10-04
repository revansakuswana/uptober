import CandleRain from "@/components/candle-rain";
import Header from "@/components/header";
import Home from "@/components/home";
import Divider from "@/components/divider";
import UptoberisHere from "@/components/uptober-is-here";
// import VideoPlayer from "@/components/video-player";
import UptoberSocial from "@/components/uptober-social";
import Webcomic from "@/components/webcomic";
import Community from "@/components/community";
import Disclaimer from "@/components/disclaimer";
import HowtoBuy from "@/components/how-to-buy";

function App() {
  return (
    <div className="relative">
      <CandleRain count={50} />
      <div
        id="site-main"
        className="flex flex-col items-center justify-center max-w-full relative text-center z-10 transition-opacity duration-700 ease-in-out">
        <Header />
        <div
          id="inner"
          className="relative z-10 min-h-screen mx-auto w-[67rem] max-w-full px-12 py-12">
          <main>
            <Home />
            <Divider />
            {/* <VideoPlayer /> */}
            {/* <Divider /> */}
            <UptoberisHere />
            <Divider />
            <UptoberSocial />
            <Divider />
            <Webcomic />
            <Divider />
            <Community />
            <Divider />
            <HowtoBuy />
            <Divider />
            <Disclaimer />
          </main>
        </div>
      </div>
    </div>
  );
}
export default App;
