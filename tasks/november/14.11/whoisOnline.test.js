const whosOnline = require('./whoIsOnline');
const friends = [{
    username: 'David',
    status: 'online',
    lastActivity: 10
  }, {
    username: 'Lucy',
    status: 'offline',
    lastActivity: 22
  }, {
    username: 'Bob',
    status: 'online',
    lastActivity: 104
  }]
const answer = {
    online: ['David'],
    offline: ['Lucy'],
    away: ['Bob']
}



describe('basic test-cases', () => {
    test('positive test-cases', () => {
        expect(whosOnline(friends)).toEqual(answer);
    })
    test('negative test-cases', () => {
        expect(whosOnline(undefined)).toBeFalsy();
    })
})