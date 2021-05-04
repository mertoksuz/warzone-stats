import moment = require("moment");
import { Duration, GameMode, Player, Platform } from "../common/types";
import { DAL } from "../dal/mongo-dal";
import { request } from "../utilities/util";

const modeIds = {
    "br": "br",
    "plndr": "dmz"
};

export async function getPlayerProfile(platformId: Platform, playerId: string): Promise<Player> {
    let url = `https://api.tracker.gg/api/v2/warzone/standard/profile/${platformId}/${encodeURIComponent(playerId)}`;
    let res = await request(url);
    return res.errors ? null : {
        playerId: res.data.platformInfo.platformUserIdentifier,
        platformId: res.data.platformInfo.platformSlug,
        avatarUrl: res.data.platformInfo.avatarUrl
    }
}

export async function getRecentMatches(player: Player, duration: Duration, mode: GameMode) {
    // check if modeIds loaded, else load from db
    //if (!modeIds[mode]) modeIds[mode] = await DAL.getModeIds(mode);

    // fetch all matches during specified duration

    // get matches from tracker.gg api
    //let url = `https://api.tracker.gg/api/v2/warzone/standard/matches/${player.platformId}/${encodeURIComponent(player.playerId)}?type=wz&next=${next}`;
    let url = `https://api.tracker.gg/api/v2/warzone/standard/profile/${player.platformId}/${encodeURIComponent(player.playerId)}`
    let res = await request(url);

    if (res.errors) {
        throw res.errors[0];
    }

    let segments = res.data.segments;

    // filter out matches of other types
    segments = segments.filter(x => modeIds[mode] == x.attributes.mode);
    
    return segments[0];
}