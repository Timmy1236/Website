(async () => {
  try {
    const request = await fetch(`https://nekoweb.org/api/site/info/timmy.nekoweb.org`);
    const json = await request.json();
    const created = new Date(json.created_at).toLocaleDateString();

    if (document.getElementById("visitors")) document.getElementById("visitors").innerHTML = `Visits: ${json.views}`;
    if (document.getElementById("followers")) document.getElementById("followers").innerHTML = `Followers: ${json.followers}`;
    if (document.getElementById("created")) document.getElementById("created").innerHTML = `Created: ${created}`;

  } catch (error) {
    console.error(error);
  }
})();