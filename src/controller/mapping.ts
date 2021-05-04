import { Command } from '../common/types';
import * as commands from './commands';

export default new Map<string, Command>([
    ['stats', {
        method: commands.postStats,
        usage: '!wz stats [platformId] "[playerId]"',
        help: 'Platform ve Player ID leri belirtilen oyuncunun Battle Royale istatistiklerini gosterir.',
        regex: [
            /^!wz stats (?<platformId>psn|xbl|atvi) (?<playerId>[0-9A-Za-z#_\-]+)$/,
        ]
    }],
    // ['players', {
    //     method: commands.postPlayers,
    //     usage: '!wz players',
    //     help: 'Show all registered players',
    //     regex: [/^!wz players$/]
    // }],
    // ['register', {
    //     method: commands.registerPlayer,
    //     usage: '!wz register <platformId> "<playerId>"' ,
    //     help: 'Register a new player',
    //     regex: [
    //         /^!wz register (?<platformId>psn|xbl|atvi) (?<playerId>[0-9A-Za-z#_\-]+)$/,
    //         /^!wz register (?<platformId>psn|xbl|atvi) "(?<playerId>[0-9A-Za-z#_\- ]+)"$/,
    //     ]
    // }],
    // ['unregister', {
    //     method: commands.unregisterPlayer, 
    //     usage: '!wz unregister <platformId> "<playerId>"', 
    //     help: 'Unregister a player',
    //     regex: [
    //         /^!wz unregister (?<platformId>psn|xbl|atvi) (?<playerId>[0-9A-Za-z#_\-]+)$/,
    //         /^!wz unregister (?<platformId>psn|xbl|atvi) "(?<playerId>[0-9A-Za-z#_\- ]+)"$/,
    //     ] 
    // }],
    // ['schedule', {
    //     method: commands.scheduleStats,
    //     usage: '!wz schedule "<cronjob>" <modeId> [time]',
    //     help: 'Schedule automated stats posting',
    //     regex: [
    //         /^!wz schedule "(?<cron>[*\//0-9- ]+)" (?<modeId>br|rmbl|plndr)$/,
    //         /^!wz schedule "(?<cron>[*\//0-9- ]+)" (?<modeId>br|rmbl|plndr) (?<duration>[0-9]+[h|d|w|m])$/
    //     ]
    // }],
    // ['unschedule', {
    //     method: commands.unscheduleStats,
    //     usage: '!wz unschedule',
    //     help: 'Unschedule automated stats posting',
    //     regex: [/^!wz unschedule$/]
    // }],
    // ['teams', {
    //     method: commands.postTeamSplit,
    //     usage: '!wz teams <teamSize>' ,
    //     help: 'Randomly split registered players into teams',
    //     regex: [/^!wz teams (?<teamSize>[0-9]+)$/]
    // }]
]);



