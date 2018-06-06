var animeUrl = prompt("Anime Url");
var animeName = prompt("Anime Name");
var firstEp = prompt("First Episode");
var lastEp = Number(prompt("Last Episode"));
var epDif = Number(prompt("First Episode (Actual)")) - 1;
var subOrDub = prompt("Sub or Dub (Answer with true or false)");
var subtract = 63;
var add = 15;
var arr = [];
var vidArr = [];

if (subOrDub == "true") {
  subtract = 69;
}

for (i = firstEp; i < lastEp + 1; i++) {
  if (String(i).length === 1) {
    arr.push(String("00" + i));
  }
  if (String(i).length === 2) {
    arr.push(String("0" + i));
  }
  if (String(i).length === 3) {
    arr.push(String(i));
  }
}

function RealEp(ep) {
  ep = String(Number(ep) + epDif);
  if (ep.length === 1) {
    return "00" + ep;
  }
  if (ep.length === 2) {
    return "0" + ep;
  }
  if (ep.length === 3) {
    return ep;
  }
}

arr.map(function(element) {
  jQuery.ajax({
    url: "//kissanime.ru/Anime/" + animeUrl,
    tryCount: 0,
    retryLimit: 3,
    success: function(result) {
      if (result.search("Episode-" + element) == -1) {
        element = element.substring(1, 3);
        add = 14;
      } else {
        add = 15;
      }
      const urlMin = result.search("Episode-" + element) + add;
      const urlMax =
        result.search("Episode " + RealEp(element)) -
        subtract -
        animeName.length;
      const id = result.substring(urlMin, urlMax);
      jQuery.ajax({
        url:
          "http://kissanime.ru/Anime/" +
          animeUrl +
          "/Episode?id=" +
          id +
          "&s=rapidvideo",
        tryCount: 0,
        retryLimit: 3,
        success: function(result2) {
          const urlMin2 =
            result2.search('0px;" src="https://www.rapidvideo.com/e/') + 40;
          const urlMax2 = urlMin2 + 10;
          const rapidvideoid = result2.substring(urlMin2, urlMax2);
          vidArr.push(rapidvideoid);
          console.log(vidArr);
        }
      });
    }
  });
});
