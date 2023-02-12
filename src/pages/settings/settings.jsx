import {useState} from "react";
import {
    toggleBluetooth, toggleDashCams, toggleDeveloperMode, toggleLocationTracking,
    toggleMedia,
    toggleServiceMode, toggleSpeedLogging
} from "../../services/settings";

function Settings({functions}) {
    const toggleClasses = "w-11 h-6 bg-gray-300 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-orange-300 dark:peer-focus:ring-orange-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-orange-500";

    let [bluetooth, setBluetooth] = useState(true);
    let [dashCams, setDashCams] = useState(true);
    let [developerMode, setDeveloperMode] = useState(true);
    let [locationTracking, setLocationTracking] = useState(true);
    let [media, setMedia] = useState(true);
    let [serviceMode, setServiceMode] = useState(false);
    let [speedLogging, setSpeedLogging] = useState(false);

    function bluetoothToggle() {
        setBluetooth(bluetooth = !bluetooth);
        toggleBluetooth(bluetooth, functions);
    }

    function dashCamerasToggle() {
        setDashCams(dashCams = !dashCams);
        toggleDashCams(dashCams, functions);
    }

    function developerModeToggle() {
        setDeveloperMode(developerMode = !developerMode);
        toggleDeveloperMode(developerMode, functions);
    }

    function locationTrackingToggle() {
        setLocationTracking(locationTracking = !locationTracking);
        toggleLocationTracking(locationTracking, functions);
    }

    function mediaToggle() {
        setMedia(media = !media);
        toggleMedia(media, functions);
    }

    function serviceModeToggle() {
        setServiceMode(serviceMode = !serviceMode);
        toggleServiceMode(serviceMode, functions);
    }

    function speedLoggingToggle() {
        setSpeedLogging(speedLogging = !speedLogging);
        toggleSpeedLogging(speedLogging, functions);
    }

    return (
        <div className="w-full py-4 px-12">
            {functions.readyState === WebSocket.OPEN ? (
                <div className="mt-4">

                    <div className="text-sm text-gray-400 border-b border-gray-300 w-full opacity-75">
                        Peripherals
                    </div>
                    <div className="w-full space-y-4">
                        {/* Bluetooth */}
                        <div className="flex mt-4">
                            <div className="w-1/2 my-auto text-xl my-auto">
                                Bluetooth
                            </div>
                            <div className="w-1/2 my-auto text-right">
                                <label className="relative inline-flex items-center cursor-pointer">
                                    <input
                                        type="checkbox"
                                        className="sr-only peer"
                                        checked={bluetooth}
                                        onChange={() => console.log('bluetooth changed: ', bluetooth)}
                                        onClick={bluetoothToggle}
                                    />
                                    <div className={toggleClasses}/>
                                </label>
                            </div>
                        </div>

                        {/* Dash Cams */}
                        <div className="flex mt-4">
                            <div className="w-1/2 my-auto text-xl my-auto">
                                Dash Cams
                            </div>
                            <div className="w-1/2 my-auto text-right">
                                <label className="relative inline-flex items-center cursor-pointer">
                                    <input
                                        type="checkbox"
                                        className="sr-only peer"
                                        checked={dashCams}
                                        onChange={() => console.log('dash cameras changed: ', dashCams)}
                                        onClick={dashCamerasToggle}
                                    />
                                    <div className={toggleClasses}/>
                                </label>
                            </div>
                        </div>

                        {/* Media */}
                        <div className="flex">
                            <div className="w-1/2 text-xl">
                                Media
                            </div>
                            <div className="w-1/2 my-auto text-right">
                                <label className="relative inline-flex items-center cursor-pointer">
                                    <input
                                        type="checkbox"
                                        className="sr-only peer"
                                        checked={media}
                                        onChange={() => console.log('media changed: ', media)}
                                        onClick={mediaToggle}
                                    />
                                    <div className={toggleClasses}/>
                                </label>
                            </div>
                        </div>
                    </div>

                    <div className="text-sm text-gray-400 border-b border-gray-300 w-full opacity-75 mt-6">
                        Privacy
                    </div>
                    <div className="w-full space-y-4">
                        {/* Location */}
                        <div className="flex mt-4">
                            <div className="w-1/2 my-auto text-xl my-auto">
                                Location Tracking
                            </div>
                            <div className="w-1/2 my-auto text-right">
                                <label className="relative inline-flex items-center cursor-pointer">
                                    <input
                                        type="checkbox"
                                        className="sr-only peer"
                                        checked={locationTracking}
                                        onChange={() => console.log('Location Tracking changed: ', locationTracking)}
                                        onClick={locationTrackingToggle}
                                    />
                                    <div className={toggleClasses}/>
                                </label>
                            </div>
                        </div>

                        {/* Speed Logging */}
                        <div className="flex mt-4">
                            <div className="w-1/2 my-auto text-xl my-auto">
                                Speed Logging
                            </div>
                            <div className="w-1/2 my-auto text-right">
                                <label className="relative inline-flex items-center cursor-pointer">
                                    <input
                                        type="checkbox"
                                        className="sr-only peer"
                                        checked={speedLogging}
                                        onChange={() => console.log('speed logging changed: ', speedLogging)}
                                        onClick={speedLoggingToggle}
                                    />
                                    <div className={toggleClasses}/>
                                </label>
                            </div>
                        </div>
                    </div>

                    <div className="text-sm text-gray-400 mb-4 border-b border-gray-300 w-full mt-6">
                        Service
                    </div>
                    <div className="w-full space-y-4">
                        {/* Service Mode */}
                        <div className="flex">
                            <div className="w-1/2 text-xl my-auto">
                                Service Mode
                            </div>
                            <div className="w-1/2 my-auto text-right">
                                <label className="relative inline-flex items-center cursor-pointer">
                                    <input type="checkbox" value="" className="sr-only peer"/>
                                    <div className={toggleClasses} onClick={serviceModeToggle}/>
                                </label>
                            </div>
                        </div>
                    </div>

                    {developerMode && (
                        <div>
                            {/* Developer Mode */}
                            <div className="text-sm text-gray-400 mb-4 border-b border-gray-300 w-full mt-6">
                                Developer
                            </div>
                            <div className="w-full space-y-4">
                                <div className="flex">
                                    <div className="w-1/2 text-xl my-auto">
                                        Developer Mode
                                    </div>
                                    <div className="w-1/2 my-auto text-right">
                                        <label className="relative inline-flex items-center cursor-pointer">
                                            <input
                                                checked={developerMode}
                                                onChange={developerModeToggle}
                                                className="sr-only peer"
                                                type="checkbox"
                                                value=""
                                            />
                                            <div className={toggleClasses} onClick={developerModeToggle}/>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            ) : (
                <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded shadow-sm mt-4"
                     role="alert">
                    <p>Connection Unavailable</p>
                </div>
            )}
        </div>
    );
}

export default Settings;
