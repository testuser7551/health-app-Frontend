import React from "react";

export default function MetricModal({ metric, open, onClose, onSave }) {
    if (!open) return null;

    return (
        <>
            {/* Background overlay */}
            <div
                className="fixed inset-0 bg-[#000000da] bg-opacity-50 z-40"
                onClick={onClose} // Clicking outside closes modal
            />

            {/* Modal */}
            <div className="fixed left-1/2 top-1/2 z-50 w-full max-w-2xl translate-x-[-50%] translate-y-[-50%] rounded-2xl bg-white shadow-xl p-6 overflow-y-auto">
                {/* Header */}
                <div className="flex flex-col space-y-1.5 text-center sm:text-left">
                    <h2 className="font-gilmer font-extrabold text-2xl text-Black tracking-tight">
                        {metric}
                    </h2>
                </div>

                {/* Modal body */}
                <div className="space-y-6 py-4">
                    {metric === "Blood Pressure" && (
                        <>
                            <div>
                                <label className="font-gilmer font-semibold text-base text-primary-accent">
                                    Quick entry
                                </label>
                                <div className="flex items-center gap-2 mt-2">
                                    <input
                                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base font-gilmer text-gray-700 placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary-accent focus:ring-offset-2"
                                        placeholder="e.g. 118/76"
                                    />
                                    <span className="text-muted-foreground font-gilmer">mmHg</span>
                                </div>
                                <p className="text-sm text-muted-foreground mt-1 font-gilmer">
                                    Type both numbers with a slash and we will fill the fields below
                                </p>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="font-gilmer font-semibold text-base text-primary-accent">
                                        Systolic
                                    </label>
                                    <input
                                        type="number"
                                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base font-gilmer text-gray-700 placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary-accent focus:ring-offset-2"
                                        placeholder="Systolic"
                                    />
                                </div>
                                <div>
                                    <label className="font-gilmer font-semibold text-base text-primary-accent">
                                        Diastolic
                                    </label>
                                    <input
                                        type="number"
                                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base font-gilmer text-gray-700 placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary-accent focus:ring-offset-2"
                                        placeholder="Diastolic"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="font-gilmer font-semibold text-base text-primary-accent">
                                    Pulse (optional)
                                </label>
                                <input
                                    type="number"
                                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base font-gilmer text-gray-700 placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary-accent focus:ring-offset-2"
                                    placeholder="Pulse"
                                />
                            </div>
                        </>
                    )}

                    {metric === "Heart Rate" && (
                        <div>
                            <label className="font-gilmer font-semibold text-base text-primary-accent">
                                Heart Rate
                            </label>
                            <input
                                type="number"
                                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base font-gilmer text-gray-700 placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary-accent focus:ring-offset-2"
                                placeholder="e.g. 72 bpm"
                            />
                        </div>
                    )}

                    {metric === "Glucose" && (
                        <div>
                            <label className="font-gilmer font-semibold text-base text-primary-accent">
                                Glucose Level
                            </label>
                            <input
                                type="number"
                                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base font-gilmer text-gray-700 placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary-accent focus:ring-offset-2"
                                placeholder="mg/dL"
                            />
                        </div>
                    )}

                    {metric === "Healthy Weight" && (
                        <div>
                            <label className="font-gilmer font-semibold text-base text-primary-accent">
                                Weight
                            </label>
                            <input
                                type="number"
                                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base font-gilmer text-gray-700 placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary-accent focus:ring-offset-2"
                                placeholder="e.g. 70 kg"
                            />
                            <p className="text-sm text-muted-foreground mt-1 font-gilmer">
                                Enter your current weight in kilograms
                            </p>

                            <label className="font-gilmer font-semibold text-base text-primary-accent mt-4">
                                Height
                            </label>
                            <input
                                type="number"
                                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base font-gilmer text-gray-700 placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary-accent focus:ring-offset-2"
                                placeholder="e.g. 175 cm"
                            />
                            <p className="text-sm text-muted-foreground mt-1 font-gilmer">
                                Enter your height in centimeters
                            </p>
                        </div>
                    )}

                    {metric === "Sugar Level" && (
                        <div>
                            <label className="font-gilmer font-semibold text-base text-primary-accent">
                                Fasting Sugar Level
                            </label>
                            <input
                                type="number"
                                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base font-gilmer text-gray-700 placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary-accent focus:ring-offset-2"
                                placeholder="e.g. 90 mg/dL"
                            />

                            <label className="font-gilmer font-semibold text-base text-primary-accent mt-4">
                                Post-Meal Sugar Level
                            </label>
                            <input
                                type="number"
                                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base font-gilmer text-gray-700 placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary-accent focus:ring-offset-2"
                                placeholder="e.g. 120 mg/dL"
                            />
                        </div>
                    )}

                    {metric === "Tobacco Free" && (
                        <div>
                            <label className="font-gilmer font-semibold text-base text-primary-accent">
                                Days Tobacco-Free
                            </label>
                            <input
                                type="number"
                                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base font-gilmer text-gray-700 placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary-accent focus:ring-offset-2"
                                placeholder="e.g. 30"
                            />
                            <p className="text-sm text-muted-foreground mt-1 font-gilmer">
                                Enter the number of days you have stayed tobacco-free
                            </p>

                            <label className="font-gilmer font-semibold text-base text-primary-accent mt-4">
                                Tobacco Type (optional)
                            </label>
                            <input
                                type="text"
                                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base font-gilmer text-gray-700 placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary-accent focus:ring-offset-2"
                                placeholder="e.g. Cigarettes"
                            />
                        </div>
                    )}

                </div>

                {/* Footer */}
                <div className="flex justify-end gap-3 pt-4">
                    <button
                        className="inline-flex items-center justify-center gap-2 rounded-md border border-input bg-background text-gray-700 px-4 py-2 font-gilmer hover:bg-accent hover:text-accent-foreground"
                        onClick={onClose}
                    >
                        Cancel
                    </button>
                    <button
                        onClick={() => {
                            onSave && onSave(); // Trigger slight progress change
                            }}
                        className="cursor-pointer inline-flex items-center justify-center gap-2 rounded-md bg-primary-accent text-white px-4 py-2 font-gilmer hover:bg-primary-accent/90">
                            Save reading
                    </button>
                </div>

                {/* Close X */}
                <button
                    type="button"
                    className="absolute right-4 top-4 text-gray-500 hover:text-red-500 font-gilmer cursor-pointer"
                    onClick={onClose}
                >
                    ✕
                </button>
            </div>
        </>
    );
}
