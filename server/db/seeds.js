use russiawc;
db.dropDatabase();

db.games.insertMany([
  {
    round: 'Group Stages',
    location: 'Volgograd',
    home_team: 'Tunisia',
    away_team: 'England',
    home_goals: 1,
    away_goals: 2,
    home_tactics: '4-3-3',
    away_tactics: '3-5-2',
    home_yellow: 0,
    home_red: 0,
    away_yellow: 1,
    away_red: 0,
    home_possession: 41,
    away_possession: 59,
    home_attempts: 6,
    away_attempts: 18,
    home_fouls: 14,
    away_fouls: 8,
    extra_time: false,
    penalties: false,
    hints: ['Penalty conceded by an ex Sheffield Utd player', 'Home team governing body CAF', 'Away team governing body UEFA', 'Extra time goal', 'Home team goal scorer plays his club football in Saudi Arabia']
  },
  {
    round: 'Group Stages',
    location: 'Sochi',
    home_team: 'Portugal',
    away_team: 'Spain',
    home_goals: 3,
    away_goals: 3,
    home_tactics: '4-2-3-1',
    away_tactics: '4-2-3-1',
    home_yellow: 1,
    home_red: 0,
    away_yellow: 1,
    away_red: 0,
    home_possession: 39,
    away_possession: 61,
    home_attempts: 8,
    away_attempts: 12,
    home_fouls: 12,
    away_fouls: 10,
    extra_time: false,
    penalties: false,
    hints: ['There was a hat-trick in the match', 'A player born in Lagarto, Brazil scored twice', 'An ex Manchester United player was given MOTM', 'Both teams qualified from the group', 'A defender scored with a volley']
  }
])
