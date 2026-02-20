/* 
  nejoweb-stats.js
  ----------------
  * https://maxpixels.moe/resources/nekoweb-stats/
*/

(async () => {
  try {
    const request = await fetch(`https://nekoweb.org/api/site/info/timmy.nekoweb.org`);
    const json = await request.json();

    if (document.getElementById("visitors")) document.getElementById("visitors").innerHTML = `Visits: ${json.views}`;
    if (document.getElementById("followers")) document.getElementById("followers").innerHTML = `Followers: ${json.followers}`;

  } catch (error) {
    console.error(error);
  }
})();
