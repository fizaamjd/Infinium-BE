const { test, afterEach } = require('node:test');
const assert = require('node:assert/strict');
const jwt = require('jsonwebtoken');
const { generateToken, verifyToken } = require('../src/utils/jwt');
const { hashPassword, comparePassword } = require('../src/utils/password');
process.env.JWT_SECRET = 'synthetic-offline-test-secret-with-no-production-use';
const user = { id: 'fixture-user', email: 'fixture@example.invalid', username: 'fixture', auth_provider: 'local' };
afterEach(() => { delete process.env.JWT_EXPIRES_IN; });
test('signed session preserves allowed user fields without password material', () => {
  const token = generateToken({ ...user, password: 'must-not-be-encoded' });
  const result = verifyToken(token);
  assert.equal(result.id, user.id);
  assert.equal(result.authProvider, 'local');
  assert.equal(result.password, undefined);
});
test('session signed by another key is rejected', () => {
  assert.throws(() => verifyToken(jwt.sign(user, 'wrong-key')), /Invalid token/);
});
test('expired sessions are rejected with the defined error', () => {
  process.env.JWT_EXPIRES_IN = '-1s';
  assert.throws(() => verifyToken(generateToken(user)), /expired/);
});
test('malformed sessions are rejected', () => assert.throws(() => verifyToken('not-a-jwt'), /Invalid token/));
test('password hashes verify only the matching password and use unique salts', async () => {
  const a = await hashPassword('synthetic-password');
  const b = await hashPassword('synthetic-password');
  assert.notEqual(a, b);
  assert.notEqual(a, 'synthetic-password');
  assert.equal(await comparePassword('synthetic-password', a), true);
  assert.equal(await comparePassword('wrong-password', a), false);
});
