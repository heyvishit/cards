
import { Play, Pause, SkipBack, SkipForward, Heart } from "lucide-react";
import { useState } from "react";

function MusicCard() {
  const [playing, setPlaying] = useState(false);
  const [liked, setLiked] = useState(false);

  return (
    <section className="inter flex items-center justify-center">
      <div className="w-80 rounded-2xl bg-white p-3 shadow-lg">

        {/* Album Cover */}
        <div className="relative">
          <img
            src="./ImageDataCard/music.jpg"
            alt="Album cover"
            className="h-full w-full rounded-xl object-cover"
          />

          <button
            onClick={() => setLiked(!liked)}
            className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/90"
          >
            <Heart
              size={18}
              fill={liked ? "red" : "none"}
              className="text-black"
            />
          </button>
        </div>

        {/* Song Details */}
        <div className="mt-4 flex items-center justify-between">
          <div>
            <h1 className="text-lg font-bold">
              Midnight City
            </h1>

            <p className="mt-1 text-sm text-gray-500">
              M83 · Hurry Up, We're Dreaming
            </p>
          </div>

          <span className="text-xs text-gray-400">
            4:03
          </span>
        </div>

        {/* Progress Bar */}
        <div className="mt-5">
          <div className="h-1.5 w-full rounded-full bg-gray-200">
            <div className="h-1.5 w-1/3 rounded-full bg-black" />
          </div>

          <div className="mt-2 flex justify-between text-xs text-gray-400">
            <span>1:24</span>
            <span>4:03</span>
          </div>
        </div>

        {/* Controls */}
        <div className="mt-5 flex items-center justify-center gap-6">
          <button className="text-gray-400 transition hover:text-black">
            <SkipBack size={22} />
          </button>

          <button
            onClick={() => setPlaying(!playing)}
            className="flex h-12 w-12 items-center justify-center rounded-full bg-black text-white transition hover:bg-gray-800"
          >
            {playing ? <Pause size={20} /> : <Play size={20} fill="white" />}
          </button>

          <button className="text-gray-400 transition hover:text-black">
            <SkipForward size={22} />
          </button>
        </div>

        {/* Footer */}
        <p className="mt-5 text-center text-xs text-gray-400">
          NOW PLAYING
        </p>

      </div>
    </section>
  );
}

export default MusicCard;
