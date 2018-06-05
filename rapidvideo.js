var str = prompt("Copy Paste List");
var splitStr = str.split('", "');
var VideoList = []

splitStr.map(function(element) {
  jQuery.ajax({
    url: "https://www.rapidvideo.com/e/" + element,
    tryCount: 0,
    retryLimit: 3,
    success: function(result3) {
      const urlMin3 =
        result3.search('" style="width:100%; height:100%;') + 64;
      const urlMax3 = result3.search('"720p"') - 25;
      const videoid = result3.substring(urlMin3, urlMax3);
      VideoList.push(videoid);
      console.log(videoid);
    }
  });
});
