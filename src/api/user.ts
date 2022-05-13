export function login() {
  return new Promise((res) => {
    res({
      code: 0,
      data: {
        token: 'test-token-asdasfdasfdgs',
      },
    });
  });
}
