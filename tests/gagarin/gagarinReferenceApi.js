// describe('ClientServer test suites', function () {
//   var server = meteor();
//   var client = browser(server);
//
//   it('should work for both client and server', function () {
//     return server.execute(function () {
//       Env.allow({DEBUG: true});
//     }).then(function (value) {
//       return client.execute(function () {
//         expect(Env.variable('DEBUG')).to.be.ok;
//         expect(Env.variable('DEBUG')).to.equal(true);
//       });
//     });
//   });
// });
//
//
//
//
// describe('Client test suites', function () {
//   var server = meteor();
//   var client = browser(server);
//   var a = 1;
//
//   it('should just work', function () {
//     return server.execute(function () { console.log('I am alive!'); });
//   });
//   it("should be able to access local variable", function () {
//     return client.execute(function (a) {
//       return a + 1;
//     }, [ a ]);
//   });
// });
//
//
//
// describe('Server test suites', function () {
//   var server = meteor();
//   it('execute should work', function () {
//     return server.execute(function () {
//       expect(Env).not.to.be.empty;
//     });
//   });
// });
