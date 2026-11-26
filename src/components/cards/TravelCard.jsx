
import { MapPin, CalendarDays, ArrowUpRight } from "lucide-react";

function TravelCard() {
    return (
        <section className="inter flex items-center justify-center">
            <div className="w-80 overflow-hidden rounded-xl bg-white shadow-lg">

                {/* Destination Image */}
                <div className="relative">
                    <img
                        src="/ImageDataCard/travel.jpg"
                        alt="Beautiful mountain destination"
                        className="h-full w-full object-cover"
                    />

                    <span className="absolute left-3 top-3 rounded-full bg-white px-3 py-1 text-xs font-medium text-black">
                        Featured Trip
                    </span>
                </div>

                {/* Destination Details */}
                <div className="p-4">

                    <div className="flex items-center gap-1 text-sm text-gray-500">
                        <MapPin size={15} />
                        Switzerland
                    </div>

                    <div className="mt-2 flex items-start justify-between">
                        <div>
                            <h1 className="text-xl font-bold">
                                Swiss Alps
                            </h1>

                            <p className="mt-1 text-sm text-gray-500">
                                Explore the beauty of the mountains.
                            </p>
                        </div>

                        <button className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 transition hover:bg-gray-100">
                            <ArrowUpRight size={18} />
                        </button>
                    </div>

                    {/* Trip Dates */}
                    <div className="mt-4 flex items-center gap-2 border-t border-gray-100 pt-4">
                        <CalendarDays size={17} className="text-gray-500" />

                        <span className="text-sm text-gray-600">
                            7 days · June 2027
                        </span>
                    </div>

                    {/* Price */}
                    <div className="mt-4 flex items-center justify-between">
                        <div>
                            <h2 className="text-2xl font-bold">
                                $1,299
                            </h2>

                            <p className="text-xs text-gray-400">
                                per person
                            </p>
                        </div>

                        <button className="rounded-full bg-black px-5 py-2.5 text-sm font-medium text-white transition hover:bg-gray-800">
                            Explore
                        </button>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default TravelCard;
