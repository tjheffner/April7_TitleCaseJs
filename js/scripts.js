var titleCase = function(input) {
    var splits = input.toLowerCase().split(' ');
    var words = [];
    var length = splits.length - 1;

    var ignore = ['a', 'an', 'the', 'at', 'by', 'for', 'in', 'of', 'on', 'to', 'up', 'and', 'as', 'but', 'it', 'or', 'nor'];


    splits.forEach(function(split, index) {
        if ((ignore.indexOf(split) !== -1) && (index !== 0) && (index !== length)) {
            words.push(split);
        } else {
        var caps = split.charAt(0).toUpperCase()
        var word = split.slice(1);
        var title = caps.concat(word);

        words.push(title);
        }
    });

    return words.join(" ");

}

$(document).ready(function() {
    $('form#input').submit(function(event) {
        var input = $("input#input").val();
        var result = titleCase(input);

        $("#result").text(result);

        $("#result").show();
        event.preventDefault();
    });
});
