export default function HowtoBuy() {
  return (
    <div id="buy" className="bg-white border-2 rounded-lg">
      <div className="flex flex-col items-center justify-center p-8">
        <h1 className="text-[42px] sm:text-4xl font-medium p-2">
          Buy $UPTOBER Now!
        </h1>
        <iframe
          title="swap-widget"
          src="https://ociswap.com/widgets/swap?from=resource_rdx1tknxxxxxxxxxradxrdxxxxxxxxx009923554798xxxxxxxxxradxrd&to=resource_rdx1tku8vlsav6cs0wj3h7nzp3kfvf0qmw5u529xyfvutr5lcx9l8g3hfg&theme=light&with_container"
          width="100%"
          height="640px"
          style={{
            border: 0,
            margin: "0 auto",
            display: "block",
            maxWidth: 960,
            minWidth: 200,
            colorScheme: "normal",
          }}
          scrolling="no"
        />
      </div>
    </div>
  );
}
