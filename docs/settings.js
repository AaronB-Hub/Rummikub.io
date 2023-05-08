// Turn Length options
const TURNLENGTH_60 = 60;  // in seconds
const TURNLENGTH_120 = 120;  // in seconds
const turnLength_Options = [TURNLENGTH_60, TURNLENGTH_120];

// Scoring Scheme options
const SCORINGSCHEME_CLASSIC = "Classic";
const SCORINGSCHEME_GOLF = "Golf";
// Scheme that takes into account total points on the board?
const scoringScheme_Options = [SCORINGSCHEME_CLASSIC, SCORINGSCHEME_GOLF];

// All Settings options
export const settings_Options = {
    "Turn Length (in seconds)" : turnLength_Options,
    "Scoring Scheme" : scoringScheme_Options,
};


// Settings class for controlling aspects of the game
class Settings {

    /* Attributes: */
    name;
    turnLength;
    scoringScheme;
    
    constructor(name, turnLengthOption, scoringSchemeOption) {
        this.name = name;
        this.turnLength = turnLengthOption;
        this.scoringScheme = scoringSchemeOption;
    };

};

// Settings Presets
const defaultSettings = new Settings("Default", TURNLENGTH_120, SCORINGSCHEME_CLASSIC);
const golfSettings = new Settings("Golf", TURNLENGTH_120, SCORINGSCHEME_GOLF);
export const settingsPresets = [defaultSettings, golfSettings];

export default Settings;