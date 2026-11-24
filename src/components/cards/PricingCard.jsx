
import { Check, Zap } from "lucide-react";
import { useState } from "react";

function PricingCard() {
    const [selected, setSelected] = useState(false);

    const features = [
        "Unlimited projects",
        "Advanced analytics",
        "Priority support",
        "All premium updates",
    ];

    return (
        <section className="inter flex items-center justify-center">
            <div className="w-80 rounded-xl border border-gray-200 bg-white p-5 shadow-sm">

                {/* Plan Header */}
                <div className="flex items-center justify-between">
                    <div>
                        <p className="text-xs font-medium uppercase tracking-widest text-gray-400">
                            Membership
                        </p>

                        <h1 className="mt-2 text-2xl font-bold text-black">
                            Pro Plan
                        </h1>
                    </div>

                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gray-100">
                        <Zap size={22} className="text-black" />
                    </div>
                </div>

                {/* Price */}
                <div className="mt-2 border-y border-gray-200 py-5">
                    <p className="text-sm text-gray-400">
                        Starting at
                    </p>

                    <div className="mt-1 flex items-baseline gap-1">
                        <h2 className="text-4xl font-bold tracking-tight text-black">
                            $19
                        </h2>

                        <span className="text-sm text-gray-400">
                            / month
                        </span>
                    </div>

                    <p className="mt-2 text-xs text-gray-500">
                        Save 20% with yearly billing
                    </p>
                </div>

                {/* Features */}
                <div className="mt-6">
                    <p className="mb-4 text-sm font-semibold text-black">
                        What's included
                    </p>

                    <div className="space-y-2">
                        {features.map((feature) => (
                            <div
                                key={feature}
                                className="flex items-center gap-3"
                            >
                                <Check size={17} className="text-black" />

                                <span className="text-sm text-gray-600">
                                    {feature}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Button */}
                <button
                    onClick={() => setSelected(!selected)}
                    className="mt-7 w-full rounded-full bg-black py-3 text-sm font-semibold text-white transition hover:bg-gray-800"
                >
                    {selected ? "Plan Selected ✓" : "Choose Pro"}
                </button>

                {/* Footer */}
                <p className="mt-4 text-center text-xs text-gray-400">
                    Cancel anytime · No hidden fees
                </p>

            </div>
        </section>
    );
}

export default PricingCard;
