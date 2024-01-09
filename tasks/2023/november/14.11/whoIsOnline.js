const whosOnline = (friends) => {
    if(friends === undefined) {
        return false;
    }
    const result = {};
    const online = friends.filter(friend => friend.lastActivity <= 10 && friend.status === 'online')
    .map(friend => friend.username);
    
    const offline = friends.filter(friend => friend.status === 'offline')
    .map(friend => friend.username);
    
    const away = friends.filter(friend => friend.lastActivity > 10 && friend.status === 'online')
    .map(friend => friend.username);
    
    if(online.length !== 0) {
      result.online = online;
    }
    if(offline.length !== 0) {
      result.offline = offline;
    }
    if(away.length !== 0) {
      result.away = away;
    }
    return result;
  }

  module.exports = whosOnline;