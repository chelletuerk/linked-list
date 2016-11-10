var $userTitleInput = $('.titleInput');
var $userURLInput = $('.urlInput');

$('.enter').on('click', function() {
  var title = $userTitleInput.val();
  var url = $userURLInput.val();
  var isValid = validateURL(url);
  if(!isValid) {
    alert("Your URL isn't valid. Try something like \n http://www.farmersonly.com/");
    return;
  }
  $userTitleInput.val("");
  $userURLInput.val("");

  checkEnter();

  $(".bookmarks").append(" \
    <div class='card'> \
    <h2 class='bookmarkTitle'>"+title+"</h2></br> \
    <a href="+url+" class='bookmarkURL'>"+url+"</a></br> \
    <button class='bookmarkRead'>Read</button> \
    <button class='bookmarkRemove'>Delete</button> \
    </div>");

  updateCardCounter();
});

$('.bookmarks').on('click', '.bookmarkRead', function() {
  $(this).closest('div').toggleClass('read');
  updateCardCounter();
});

$('.bookmarks').on('click', '.bookmarkRemove', function() {
  $(this).closest('div').remove();
  updateCardCounter();
});

$('.clearRead').on('click', function() {
  $('.read').remove();
  updateCardCounter();
});

$('input').on('keyup', function() {
  checkEnter();
});

function checkEnter() {
  if ($userTitleInput.val() === "" || $userURLInput.val() === "" ) {
    $('.enter').prop('disabled', true);
  } else {
    $('.enter').prop('disabled', false);
  }
};

function updateCardCounter() {

  var cardNum = $('.card').length;
  var readNum = $('.read').length;
  var unreadCards = cardNum - readNum;
  $('.cardCounter').text(cardNum);
  $('.readCounter').text(readNum);
  $('.unreadCounter').text(unreadCards);
}


function validateURL(url) {
  var urlRegex = /^(http|https)?:\/\/[a-zA-Z0-9-\.]+\.[a-z]{2,4}/
  return urlRegex.test(url);
}

checkEnter();
updateCardCounter();
