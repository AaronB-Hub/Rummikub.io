/* Constants */
    // Turn Length options
    const TURNLENGTH_OPTIONS = {  // in seconds
        '60s': 60,
        '120s': 120,
    };

    // Scoring Scheme options
    const SCORINGSCHEME_OPTIONS = {
        CLASSIC: "Classic",
        GOLF: "Golf",
        // Scheme that takes into account total points on the board?
    };

    // Game rules
    const STARTINGNUMTILES_OPTIONS = {
        '14': 14,
    };

    // Exportll Settings options
    export const SETTINGS = {

        // Settings Options
        TURNLENGTH: TURNLENGTH_OPTIONS,
        SCORINGSCHEME: SCORINGSCHEME_OPTIONS,
        STARTINGNUMTILES: STARTINGNUMTILES_OPTIONS,

        // Settings Presets
        PRESETS: {
            CLASSIC: new Settings("Classic", TURNLENGTH_OPTIONS["120s"], SCORINGSCHEME_OPTIONS.CLASSIC, STARTINGNUMTILES_OPTIONS[14]),
            GOLF: new Settings("Golf", TURNLENGTH_OPTIONS["120s"], SCORINGSCHEME_OPTIONS.GOLF, STARTINGNUMTILES_OPTIONS[14]),
        },
    };

// Settings class for controlling aspects of the game
export default class Settings {

    /* Attributes: */
    name;
    turnLength;
    scoringScheme;
    startingNumTiles;
    
    /* Constructor: */
    constructor(name, turnLengthOption, scoringSchemeOption, startingNumTilesOption) {
        this.name = name;
        this.turnLength = turnLengthOption;
        this.scoringScheme = scoringSchemeOption;
        this.startingNumTiles = startingNumTilesOption;
    };

};


// export const settingsPresets = [defaultSettings, golfSettings];