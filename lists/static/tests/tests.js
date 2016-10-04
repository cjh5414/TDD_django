
function beforeTests() {
    $('input').keypress(function() {
        $('.has-error').hide();
    });
}

QUnit.module('tests', {
    before: beforeTests
});

/*
QUnit.test("스모크 테스트", function(assert){
    assert.equal($('.has-error').is(':visible'), true);

    $('.has-error').hide();
    assert.equal($('.has-error').is(':visible'), false);
});
*/

QUnit.test("키 입력 시에 에러가 숨겨져야 한다", function(assert){
    $('input').trigger('keypress');
    assert.equal($('.has-error').is(':visible'), false);
});


QUnit.test("키 입력이 없으면 에러가 숨겨지지 않는다.", function(assert){
    assert.equal($('.has-error').is(':visible'), true);
});
