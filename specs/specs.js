describe('titleCase', function() {
    it('will take the first letter and capitalize it', function() {
        expect(titleCase('a')).to.equal('A');
    });

    it('will take the first letter of a word and capitalize it', function () {
        expect(titleCase('moby')).to.equal('Moby');
    });

    it('will take the first letter of two words and capitalize it', function() {
        expect(titleCase('moby dick')).to.equal('Moby Dick');
    });

    it('will take the first letter of multiple words and capitalize them', function(){
        expect(titleCase('operation red wings')).to.equal('Operation Red Wings');
    });

    it('will ignore words that are too short to be capitalized due to title case rules', function() {
        expect(titleCase('kyle needs an attitude adjustment')).to.equal('Kyle Needs an Attitude Adjustment');
    });

    it('will capitalize words in the ignore list if they are at the beginning or end of the string', function() {
        expect(titleCase('to be or not to be')).to.equal('To Be or Not to Be');
    });


});
