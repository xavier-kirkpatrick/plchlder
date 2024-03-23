/**
 * Scrapes the profile information for a user.
 * @param username - The username of the profile to scrape.
 * @returns An array of strings representing the scraped profile data.
 */
export function scrapeProfile(username: string): string[] {
    console.log("Scraping: ", username);

    // Return the scraped data
    // TODO: replace mock data
    return [
        "some #streetart spotted around Flinders St",
        "Final few days in Thailand",
        "Wat Phra That Doi Suthep",
        "Big Buddha (66 floors to the bindi spot/lookout) and Tham Luang Cave where the thai kids got rescued",
        "the white temple (some guy's art project) in Chiang Rai",
        "A red panda, a monkey and a bunch of rust bucket utes, not that you care, chur",
        "Sorry not sorry, more #streetart discoveries in #chiangmai"
    ];
};


/**
 * Parses the given profile data and returns an array of keywords.
 *
 * @param {string[]} profileData - The profile data to be parsed.
 * @return {string[]} An array of keywords extracted from the profile data.
 */
export function parseToKeywords(profileData: string[]) {
    console.log("Parsing: ", profileData)

    // Return the keywords array
    // TODO: replace mock data
    return [
        'streetart',
        'Flinders Street',
        'Thailand',
        'final days',
        'Wat Phra That Doi Suthep',
        'temple',
        'Big Buddha',
        'lookout',
        'Tham Luang Cave',
        'rescue',
        'white temple',
        'art project',
        'Chiang Rai',
        'red panda',
        'monkey',
        'utes',
        'Chiang Mai'
    ]

};



/**
 * Retrieves person description data based on the provided keywords.
 *
 * @param {string[]} keywords - An array of keywords to search for.
 * @return {Object} - An object containing ??
 */
export function parseToDescription(keywords: string[]) {
    console.log("Parsing: ", keywords)

    // TODO: replace mock data
    // Not sure what format we need it in to pass to the image generation API
    // TODO: Define an interface/type for the return data
    return {
        interests: ['Travel', 'Art', 'Culture', 'Adventure', 'Wildlife'],
        traits: ['Art Enthusiast', 'Explorer', 'Culturally Curious', 'Adventurous'],
        focusAreas: ['Street Art', 'Historical Landmarks', 'Wildlife Observation'],
        regionsVisited: ['Southeast Asia', 'Thailand'],
        noteworthyExperiences: [
            'Exploring urban street art',
            'Visiting significant temples and cultural sites',
            'Adventurous excursions to caves and lookout points',
            'Observing exotic wildlife'
        ]
    };

}