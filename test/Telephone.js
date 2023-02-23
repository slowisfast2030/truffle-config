const Telephone = artifacts.require("Telephone");

const getRnd = function() {
  const [min, max] = [13, 1013];
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

contract("Telephone", function(/* accounts */) {
  let subject;
  describe("Works with new deployment", function() {
    let newSecret;
    before(async function() {
      newSecret = getRnd();
      subject = await Telephone.new(newSecret);
    });

    it("Should have a deployed contract", async function() {
      return assert.isTrue(subject !== undefined);
    });

    it("has the secret", async function() {
      const secret = await subject.secret();
      assert.equal(secret, newSecret);
    });

    it("has the derived Secret", async function() {
      const derivedSecret = await subject.derivedSecret();
      const expected = 100 * newSecret + 1;
      assert.equal(derivedSecret, expected);
    });
  });
});
