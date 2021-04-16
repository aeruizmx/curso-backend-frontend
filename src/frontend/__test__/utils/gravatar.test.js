import gravatar from '../../utils/gravatar';

test('Gravatar Function test', () => {
  const email = 'andres87aldos@gmail.com';
  const gravatarUrl = 'https://gravatar.com/avatar/005f1e46768152dace1d96ab6afa7084';
  expect(gravatarUrl).toEqual(gravatar(email));
});