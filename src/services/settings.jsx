// Toggle Bluetooth
export function toggleBluetooth(enabled, functions) {
    functions.sendJsonMessage({
        type: "bluetooth",
        data: {
            enabled: enabled
        }
    });
}

// Toggle Dash Cams
export function toggleDashCams(enabled, functions) {
    functions.sendJsonMessage({
        type: "dash_cams",
        data: {
            enabled: enabled
        }
    });
}

// Toggle Developer Mode
export function toggleDeveloperMode(enabled, functions) {
    functions.sendJsonMessage({
        type: "developer_mode",
        data: {
            enabled: enabled
        }
    });
}

// Toggle Location Tracking
export function toggleLocationTracking(enabled, functions) {
    functions.sendJsonMessage({
        type: "location_tracking",
        data: {
            enabled: enabled
        }
    });
}

// Toggle Media
export function toggleMedia(enabled, functions) {
    functions.sendJsonMessage({
        type: "media",
        data: {
            enabled: enabled
        }
    });
}

// Toggle Service Mode
export function toggleServiceMode(enabled, functions) {
    functions.sendJsonMessage({
        type: "service_mode",
        data: {
            enabled: enabled
        }
    });
}

// Toggle Speed Logging
export function toggleSpeedLogging(enabled, functions) {
    functions.sendJsonMessage({
        type: "speed_logging",
        data: {
            enabled: enabled
        }
    });
}